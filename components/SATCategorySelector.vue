<script setup>
    const props = defineProps({
        modelValue: {
            type: Object,
            default: () => null
        },
        init_category: {
            type: Object,
            default: () => null
        }
    });
    console.log('SAT Category Selector');

    const emit = defineEmits(['update:modelValue']);

    const selected_category = ref(null);
    if (props.init_category) {
        selected_category.value = props.init_category;
    }

    watch(selected_category, (newValue) => {
        emit('update:modelValue', newValue);
    });

    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const selected_section = ref(null);
    const cb_domain = ref('');
    const cb_skill = ref('');

    const select_cb_domain_options = ref([]);
    const updateSelectCbDomainOptions = () => {
        if (selected_section.value) {
            select_cb_domain_options.value = cb_domains.filter(domain => domain.section == selected_section.value);
        } else {
            select_cb_domain_options.value = cb_domains;
        }
    }
    updateSelectCbDomainOptions();

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
        fetchCategories();
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
        fetchCategories();
    });

    watch(cb_skill, () => {
        if (cb_skill.value) {
            cb_domain.value = cb_skill_lookup[cb_skill.value].domain;
            selected_section.value = cb_skill_lookup[cb_skill.value].section;
        }
        fetchCategories();
    });

    const searchQuery = ref('');
    const categories = ref([]);
    const loading = ref(false);
    const showFilters = ref(false);
    const showCategoryList = ref(true);

    const fetchCategories = async () => {
        console.log('fetchCategories');
        loading.value = true;
        const client = useSupabaseClient();
        
        let query = client
            .from('problem_categories')
            .select('*')
            .eq('discipline', 'sat');

        if (searchQuery.value) {
            query = query.or(`name.ilike.%${searchQuery.value}%,tag.ilike.%${searchQuery.value}%`);
        }

        if (selected_section.value) {
            query = query.eq('section', selected_section.value);
        }

        if (cb_domain.value) {
            query = query.eq('domain', cb_domain.value);
        }

        if (cb_skill.value) {
            query = query.eq('skill', cb_skill.value);
        }

        const { data, error } = await query;
        console.log('data', data);
        if (error) {
            console.error('Error fetching categories:', error);
            return;
        }

        categories.value = data;
        loading.value = false;
    };

    watch(searchQuery, () => {
        fetchCategories();
    });

    onMounted(() => {
        fetchCategories();
    });

    function selectCategory(category) {
        selected_category.value = category;
        showCategoryList.value = false;
    }

    function clearSelection() {
        selected_category.value = null;
        showCategoryList.value = true;
    }

    function editSelection() {
        showCategoryList.value = true;
    }

    function removeSectionFilter() {
        selected_section.value = null;
    }

    function removeDomainFilter() {
        cb_domain.value = null;
    }

    function removeSkillFilter() {
        cb_skill.value = null;
    }

    const section_header_classes = "font-semibold pb-2 text-base";
</script>

<template>
    <div class="sat-category-selector">
        <div class="flex flex-col gap-4">
            <!-- Selected Category -->
            <div v-if="selected_category" class="flex items-center gap-2">
                <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
                    <span>{{ selected_category.name }}</span>
                    <button
                        @click="clearSelection"
                        class="ml-2 text-blue-600 hover:text-blue-800"
                    >
                        ×
                    </button>
                </div>
                <UButton
                    variant="ghost"
                    size="xs"
                    @click="editSelection"
                    class="text-gray-600 hover:text-gray-800"
                >
                    Edit
                </UButton>
            </div>

            <!-- Search and Filters -->
            <div v-if="showCategoryList" class="flex flex-col gap-4">
                <div>
                    <div :class="section_header_classes">Search Categories</div>
                    <UInput
                        v-model="searchQuery"
                        placeholder="Search by name or tag..."
                        icon="i-heroicons-magnifying-glass"
                    />
                </div>

                <!-- Active Filters -->
                <div class="flex flex-wrap gap-2">
                    <div
                        v-if="selected_section"
                        class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
                    >
                        <span>Section: {{ test_sections.find(s => s.id === selected_section)?.label }}</span>
                        <button
                            @click="removeSectionFilter"
                            class="ml-2 text-gray-600 hover:text-gray-800"
                        >
                            ×
                        </button>
                    </div>
                    <div
                        v-if="cb_domain"
                        class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
                    >
                        <span>Domain: {{ cb_domain_lookup[cb_domain]?.label }}</span>
                        <button
                            @click="removeDomainFilter"
                            class="ml-2 text-gray-600 hover:text-gray-800"
                        >
                            ×
                        </button>
                    </div>
                    <div
                        v-if="cb_skill"
                        class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
                    >
                        <span>Skill: {{ cb_skill_lookup[cb_skill]?.label }}</span>
                        <button
                            @click="removeSkillFilter"
                            class="ml-2 text-gray-600 hover:text-gray-800"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <!-- Filter Toggle Button -->
                <div class="flex justify-end">
                    <UButton
                        variant="ghost"
                        @click="showFilters = !showFilters"
                        class="flex items-center gap-2"
                    >
                        <span>{{ showFilters ? 'Hide' : 'Show' }} Filters</span>
                        <UIcon
                            :name="showFilters ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                        />
                    </UButton>
                </div>

                <!-- Collapsible Filters -->
                <div v-if="showFilters" class="flex flex-col gap-4">
                    <div>
                        <div :class="section_header_classes">Test Section</div>
                        <USelectMenu
                            v-model="selected_section"
                            :options="test_sections"
                            placeholder="Select Section"
                            value-attribute="id"
                            option-attribute="label"
                        />
                    </div>

                    <div>
                        <div :class="section_header_classes">College Board Domain</div>
                        <USelectMenu
                            v-model="cb_domain"
                            :options="select_cb_domain_options"
                            placeholder="Select Domain"
                            value-attribute="id"
                            option-attribute="label"
                        />
                    </div>

                    <div>
                        <div :class="section_header_classes">College Board Skill</div>
                        <USelectMenu
                            v-model="cb_skill"
                            :options="select_cb_skill_options"
                            placeholder="Select Skill"
                            value-attribute="id"
                            option-attribute="label"
                        />
                    </div>
                </div>

                <!-- Category List -->
                <div class="mt-4">
                    <div v-if="loading" class="flex justify-center">
                        <UProgress animation="carousel" />
                    </div>
                    <div v-else class="space-y-2">
                        <div
                            v-for="category in categories"
                            :key="category.id"
                            class="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                            :class="{ 'bg-blue-50': selected_category?.id === category.id }"
                            @click="selectCategory(category)"
                        >
                            <div>
                                <div class="font-medium">{{ category.name }}</div>
                                <div class="text-sm text-gray-500">{{ category.tag }}</div>
                            </div>
                            <URadio
                                :model-value="selected_category?.id === category.id"
                                @update:model-value="selectCategory(category)"
                            />
                        </div>
                        <div v-if="categories.length === 0" class="text-center text-gray-500 py-4">
                            No categories found
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
