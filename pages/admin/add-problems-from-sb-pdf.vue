<script setup>
import { test_sections, cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

const adding_problems = ref(false);
const done_adding_problems = ref(false);
const selected_section = ref(null);

const cb_domain_lookup = getCbDomainLookup();
const cb_skill_lookup = getCbSkillLookup();
const cb_skills_by_domain = getCbSkillsByDomain();

const cb_domain = ref('');
const select_cb_domain_options = ref([]);
const updateSelectCbDomainOptions = () => {
    if (selected_section.value) {
        select_cb_domain_options.value = cb_domains.filter(domain => domain.section == selected_section.value);
    } else {
        select_cb_domain_options.value = cb_domains;
    }
}
updateSelectCbDomainOptions();

const cb_skill = ref('');
const select_cb_skill_options = ref([...cb_skills]);
const updateSelectCbSkillOptions = () => {
    if (cb_domain.value) {
        select_cb_skill_options.value = cb_skills_by_domain[cb_domain.value];
    } else if (selected_section.value) {
        select_cb_skill_options.value = cb_skills.filter(skill => skill.section == selected_section.value);
    } else {
        select_cb_skill_options.value = cb_skills;
    }
}
updateSelectCbSkillOptions();

watch(selected_section, () => {
    updateSelectCbSkillOptions();
    updateSelectCbDomainOptions();
    if (cb_domain.value) {
        if (selected_section.value != cb_domain_lookup[cb_domain.value].section) {
            cb_domain.value = null;
        }
    }
    if (cb_skill.value) {
        if (selected_section.value != cb_skill_lookup[cb_skill.value].section) {
            cb_skill.value = null;
        }
    }
});
watch(cb_domain, () => {
    updateSelectCbSkillOptions();
    if (cb_domain.value) {
        selected_section.value = cb_domain_lookup[cb_domain.value].section;
        if (cb_skill.value) {
            if (cb_skill_lookup[cb_skill.value].domain != cb_domain.value) {
                cb_skill.value = null;
            }
        }
    }
});
watch(cb_skill, () => {
    if (cb_skill.value) {
        cb_domain.value = cb_skill_lookup[cb_skill.value].domain;
        selected_section.value = cb_skill_lookup[cb_skill.value].section;
    }
});

const file_url = ref('');

const from_test = ref(false);

const problem_count = ref(0);

const complete_msg = ref('');

const addProblems = async () => {
    adding_problems.value = true;
    const resp = await $fetch('/api/add/sat-problems-from-sb-pdf', 
        {
        method: 'POST',
        body: {
            file_url: file_url.value,
            from_test: from_test.value,
            problem_count: problem_count.value, 
            test_section: selected_section.value ? selected_section.value : null,
            cb_domain: cb_domain.value ? cb_domain.value : null,
            cb_skill: cb_skill.value ? cb_skill.value : null
        }
    }
    )
    complete_msg.value = resp;
    adding_problems.value = false;
    done_adding_problems.value = true;
}





</script>

<template>
    <div class="p-8">
        <div v-if="adding_problems">
            <div class="pb-2">
                <UProgress animation="carousel"  />
            </div>
            <div class="pb-2">  
                Processing problems...this could take a few minutes.
            </div>
        </div>
        <div v-if="!adding_problems && !done_adding_problems">
            <div class="pb-2">
                <h1 class="text-lg font-bold">Add Problems from Supabase PDF</h1>
            </div>
            <div class="pb-2">
                <div class="field_label">Supabase file url:</div>
                <UInput v-model="file_url" label="Supabase file path" placeholder="File url" />
            </div>
            <div class="pb-2">
                <div class="field_label">Problem count:</div>
                <UInput v-model="problem_count" type="number" label="Expected problem count" />
            </div>
            <div class="pb-2">
                <UCheckbox v-model="from_test" label="From test" />
            </div>
            <div class="pb-2">
                <div class='field_label'>Test Section</div>
                <span>
                    <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                </span>
            </div> 
            <div class="pb-2">
                <div class='field_label'>College Board Domain</div>
                <span>
                    <USelectMenu v-model="cb_domain" :options="select_cb_domain_options" placeholder="College Board Domain" value-attribute="id" option-attribute="label" />
                </span>
            </div>  
            <div class="pb-4">
                <div class='field_label'>CollegeBoard Skill</div>
                <span>
                    <USelectMenu v-model="cb_skill" :options="select_cb_skill_options" placeholder="College Board Skill" value-attribute="id" option-attribute="label" />
                </span>
                
            </div>
            <div class="pb-2">
                <UButton @click="addProblems">Add Problems</UButton>
            </div>
        </div>
        <div v-if="done_adding_problems">
            <div class="pb-2">
                {{ complete_msg }}
            </div>
        </div>
    </div>
</template>