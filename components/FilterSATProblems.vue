<script setup>
    import { test_sections, cb_domains, cb_skills, getTestSectionLookup, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';
    const props = defineProps(['includeCloseButton', 'test_section', 'cb_domains', 'cb_skills']);
    
    const emit = defineEmits(['filterProblems', 'closeFilter']);

    const applyFilter = () => {
        let filter = {
            test_section: selected_test_section.value,
            cb_domains: selected_cb_domains.value,
            cb_skills: selected_cb_skills.value,
            manual_ai: selected_manual_ai_option.value
        }
        emit('filterProblems', filter);
    }

    const closeFilter = () => {
        emit('closeFilter');
    }       

    const selected_test_section = ref(null);
    const selected_cb_domains = ref([]);
    if (props.cb_domains) {
        selected_cb_domains.value = props.cb_domains;
    }
    const selected_cb_skills = ref([]);
    if (props.cb_skills) {
        selected_cb_skills.value = props.cb_skills;
    }
    const selected_skills = ref([]);
    const selected_skill_categories = ref([]);

    const cb_domain_include_all = ref(true);
    const cb_skill_include_all = ref(true);
    const skill_include_all = ref(true);
    const skill_category_include_all = ref(true);

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const select_cb_domain_options = ref([]);
    const updateSelectCbDomainOptions = () => {
        if (selected_test_section.value) {
            let test_section_id = selected_test_section.value.id;
            select_cb_domain_options.value = cb_domains.filter(domain => domain.section == test_section_id);
        } else {
            select_cb_domain_options.value = cb_domains;
        }
    }
    updateSelectCbDomainOptions();

    const select_cb_skill_options = ref([]);
    const updateSelectCbSkillOptions = () => {
        if (selected_cb_domains.value.length > 0) {
            let cb_skill_options = [];
            for (let domain of selected_cb_domains.value) {
                cb_skill_options = cb_skill_options.concat(cb_skills_by_domain[domain.id]);
            }
            select_cb_skill_options.value = cb_skill_options;
        } else if (selected_test_section.value) {
            let test_section_id = selected_test_section.value.id;
            select_cb_skill_options.value = cb_skills.filter(skill => skill.section == test_section_id);
        } else {
            select_cb_skill_options.value = cb_skills;
        }
    }
    updateSelectCbSkillOptions();

    watch(selected_test_section, () => {
        console.log('selected_test_section changed');
        updateSelectCbSkillOptions();
        updateSelectCbDomainOptions();
        if (!selected_test_section.value) {
            return;
        }
        if (selected_cb_domains.value.length > 0) {
            selected_cb_domains.value = selected_cb_domains.value.filter(domain => domain.section == selected_test_section.value.id);
        }
        if (selected_cb_skills.value.length > 0) {
            selected_cb_skills.value = selected_cb_skills.value.filter(skill => skill.section == selected_test_section.value.id);
        }
        //todo: weed out custom skills that are not in the selected_test_section
    });

    watch(selected_cb_domains, () => {
        updateSelectCbSkillOptions();
        if (selected_cb_domains.value.length == 0) {
            return;
        }
        if (selected_cb_skills.value.length > 0) {
            selected_cb_skills.value = selected_cb_skills.value.filter(skill => selected_cb_domains.value.map(domain => domain.id).includes(skill.domain));
        }
        //todo: weed out custom skills that are not in the selected_cb_domains
    });

    watch(selected_cb_skills, () => {
        if (selected_cb_skills.value.length == 0) {
            return;
        }
        //todo: weed out custom skills that are not in the selected_cb_skills
    });

    const removeDomain = (domain_id) => {
        selected_cb_domains.value = selected_cb_domains.value.filter(domain => domain.id !== domain_id);
    }

    const manual_ai_options = ref([
        {label: 'Only show manually created/approved problems', value: 'manual'},
        {label: 'Only show AI-generated problems', value: 'ai'}
    ]); 
    const selected_manual_ai_option = ref(null);
</script>

<template>
    <div class="flex flex-row items-center justify-between">
        <h1 class="text-2xl font-bold pb-4">Filter Problems</h1>
        <UButton v-if="props.includeCloseButton" variant="ghost" size="md" @click="closeFilter" icon="i-heroicons-x-mark" />
    </div>
    <div class="filter-sections flex flex-col gap-4">
        <div class="filter-section">
            <div class="filter-section-label">
                <span>Test Section</span> 
                <UButton v-if="selected_test_section" variant="ghost" size="xs" @click="selected_test_section = null">clear</UButton>
            </div>
            <div>
                <USelectMenu v-model="selected_test_section" :options="test_sections" placeholder="Math/Reading Writing" />
            </div>
        </div>
        <div class="filter-section">
            <div class="filter-section-label">
                College Board Domains
            </div>
            <div>
                <USelectMenu v-model="selected_cb_domains" :options="select_cb_domain_options" multiple searchable placeholder="Select Domains">
                    <template v-if="selected_cb_domains.length > 0" #label>{{ selected_cb_domains.length }} selected</template>
                </USelectMenu>
            </div>
            <div class="filter-section-selected-values">
                <span v-for="domain in selected_cb_domains" :key="domain.id" class="filter-section-selected-value">
                    <span class="text-xs">{{ domain.label }}</span>
                    <UButton variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="removeDomain(domain.id)" />
                </span>
            </div>
        </div>
        <div class="filter-section">
            <div class="filter-section-label">
                College Board Skills
            </div>
            <div>
                <SelectMultiWithChips v-model="selected_cb_skills" :options="select_cb_skill_options" optionAttribute="label" valueAttribute="id" placeholder="Select College Board Skills" />
            </div>
            
        </div>
        <div class="filter-section">
            <div class="filter-section-label">
                <span>Manual/AI Problems</span>
                <UButton v-if="selected_manual_ai_option" variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="selected_manual_ai_option = null" />
            </div>
            <div>
                <USelectMenu v-model="selected_manual_ai_option" :options="manual_ai_options" placeholder="Select Manual/AI Problems" />
            </div>
        </div>
        <div class="flex flex-row justify-center">
            <UButton @click="applyFilter">Apply Filter</UButton>
        </div>
    </div>
</template>

<style scoped>
    .filter-section {
        
    }
    .filter-section-label {
        @apply font-bold text-lg pb-2 flex flex-row items-center justify-start gap-2;
    }
    .filter-section-selected-values {
        @apply flex flex-row gap-2 pt-2;
    }
    .filter-section-selected-value {
        @apply bg-gray-100 rounded-md px-2 py-1 flex flex-row items-center justify-center;
    }
</style>