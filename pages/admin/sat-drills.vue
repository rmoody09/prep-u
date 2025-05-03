<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";

const resp = await useFetch('/api/get/sat-drills')
const drills = ref(resp.data.value.data);

const deleteDrill = async (id) => {
    const resp = await $fetch(`/api/delete/sat-drill/${id}`, {
        method: 'DELETE'
    });
    drills.value = drills.value.filter(drills => drills.id != id);
}

const drillsEl = ref(null);

const sat_sections = {math: 'Math', 'reading_writing': 'Reading & Writing'};
import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

const cb_domain_lookup = getCbDomainLookup();
const cb_skill_lookup = getCbSkillLookup();

const getTruncatedQuestionText = (question_text) => {
    return question_text.length > 200 ? question_text.substring(0, 200) + '...' : question_text;
}

onMounted(async () => {
    renderMathInElement(drillsEl.value, 
        {
            delimiters: [
                {left: "//latex_start", right: "//latex_end", display: true},
                {left: "$latex_start", right: "$latex_end", display: false},
            ],
        }
    );
})

</script>

<template>
    <div class="p-4">
        <div class="flex flex-row justify-between">
            <h1 class="text-3xl font-black pb-6">SAT Problems</h1>
            <span>
                <UButton @click="navigateTo('/add/sat-drill')">
                    Add Drill
                </UButton>
            </span>
        </div>
        <div class="drills-container flex flex-col gap-1 bg-slate-100 p-1" ref="drillsEl">
            <div class="drills-headers drill-row flex flex-row">
                <div class="drill-type drills-header">SAT Skill</div>
                <div class="drill-question drills-header">Question</div>
                <div class="drill-options drills-header">Options</div>
            </div>
            <div v-for="drill in drills" :key="drill.id"  class="drill-row flex flex-row">
                <div class="drill-type drill-cell">
                    <!--
                    <div v-if="drill.sat_section">
                        {{ sat_sections[drill.sat_section] }}
                    </div>
                    <div v-if="drill.cb_domain">
                        {{ cb_domain_lookup[drill.cb_domain].label }}
                    </div>
                    -->
                    <div v-if="drill.cb_skill">
                        {{ cb_skill_lookup[drill.cb_skill].label }}
                    </div>
                </div>
                <div class="drill-question drill-cell">
                    <div>{{ getTruncatedQuestionText(drill.question_text) }}</div>
                </div>
                <div class="drill-options drill-cell">
                    <button class="option-button" @click="navigateTo(`/sat-drill/${drill.id}`)">
                        <UIcon name="i-heroicons-eye" />
                    </button>
                    <button class="option-button" @click="navigateTo(`/admin/edit/sat-drill/${drill.id}`)">
                        <UIcon name="i-heroicons-pencil-square" />
                    </button>
                    <button class="option-button" @click="deleteDrill(drill.id)">
                        <UIcon name="i-heroicons-trash" />
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.drills-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.drill-row {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    flex-wrap: nowrap;
}
.drills-headers .drills-header {
    @apply font-bold p-2 text-lg bg-white;
}
.drill-row .drill-cell {
    padding: .25rem;
    background-color: #fff;
}


.drill-row .drill-type {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.drill-row .drill-question {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 5rem;
    flex-grow: 1;
}
.drill-row .drill-options {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
}
.option-button {
    @apply bg-white p-1 rounded-md text-primary border border-primary rounded-md h-6 w-6 flex items-center justify-center hover:bg-primary-50;
}

</style>