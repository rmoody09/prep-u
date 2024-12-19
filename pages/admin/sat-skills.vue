<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";

const resp = await useFetch('/api/get/sat-skills')
const skills = ref(resp.data.value.data);

const deleteSkill = async (id) => {
    const resp = await $fetch(`/api/delete/sat-skill/${id}`, {
        method: 'DELETE'
    });
    skills.value = skills.value.filter(skill => skill.id != id);
}

const skillsEl = ref(null);

onMounted(async () => {
    renderMathInElement(skillsEl.value, 
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
                <UButton @click="navigateTo('/add/sat-skill')">
                    Add Skill
                </UButton>
            </span>
        </div>
        <div class="skills-container flex flex-col gap-1 bg-slate-100 p-1" ref="skillsEl">
            <div class="skills-headers skill-row flex flex-row">
                <div class="skill-tag skills-header">Skill Tag</div>
                <div class="skill-name skills-header">Skill Name</div>
                <div class="skill-description skills-header">Description</div>
                <div class="skill-options skills-header">Options</div>
            </div>
            <div v-for="skill in skills" :key="skill.id"  class="skill-row flex flex-row">
                <div class="skill-tag skill-cell">
                    <div class='break-words'>{{ skill.tag }}</div>
                </div>
                <div class="skill-name skill-cell">
                    <div>{{ skill.name }}</div>
                </div>
                <div class="skill-description skill-cell whitespace-pre-wrap">
                    <div>{{ skill.description_text }}</div>
                </div>
                <div class="skill-options skill-cell">
                    <button class="option-button" @click="navigateTo(`/edit/sat-skill/${skill.tag}`)">
                        <UIcon name="i-heroicons-pencil-square" />
                    </button>
                    <button class="option-button" @click="deleteSkill(skill.id)">
                        <UIcon name="i-heroicons-trash" />
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-row {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    flex-wrap: nowrap;
}
.skills-headers .skills-header {
    @apply font-bold p-2 text-lg bg-white;
}
.skill-row .skill-cell {
    padding: .25rem;
    background-color: #fff;
}


.skill-row .skill-tag {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.skill-row .skill-name {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.skill-row .skill-description {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 5rem;
    flex-grow: 1;
}
.skill-row .skill-options {
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