<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";
import 'katex/dist/katex.min.css';
import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

const fetching_page = ref(true);
const problems_per_page = 20;
const problems = ref([]);
const problems_count = ref(-1);
let search_filter_problem_counts = {}; // key is hash of search options, value will be total number of problems matching search options
let page_problems = {}; // key is hash of search options, will contain object with problems by page number
let current_search_hash = '';
const page_number = ref(1);
const search_text = ref('');
const search_options = ref({text: ''});
const filter_options = ref({});

const userState = useState('user');

// Add debounced search function
const debouncedSearch = debounceFunction(() => {
    search_options.value.text = search_text.value;
  fetchProblems({ page: 1 });
}, 300);

const fetchProblems = async (options = {}) => {
    fetching_page.value = true;
    
    let params = {};
    let search_filters = {};

    if (options.page) {
        params.start = (options.page - 1) * problems_per_page;
        params.end = params.start + problems_per_page - 1;
    } else {
        params.start = 0;
        params.end = problems_per_page - 1;
    }
    if (search_options.value.text) {
        console.log('searching for', search_options.value.text);
        params.search = search_options.value.text;
        search_filters.text = search_options.value.text;
    }
    if (filter_options.value.test_section) {
        params.match_filters = {test_section: filter_options.value.test_section.id};
        search_filters.test_section = filter_options.value.test_section;
    }
    let match_filters = {};
    let any_match_filters = false;
    let in_filters = [];
    if (filter_options.value.cb_domains && filter_options.value.cb_domains.length > 0) {
        in_filters.push({column: 'cb_domain', values: filter_options.value.cb_domains.map(domain => domain.id)});
        search_filters.cb_domains = filter_options.value.cb_domains;
    }
    if (filter_options.value.cb_skills && filter_options.value.cb_skills.length > 0) {
        in_filters.push({column: 'cb_skill', values: filter_options.value.cb_skills.map(skill => skill.id)});
        search_filters.cb_skills = filter_options.value.cb_skills;
    }
    if (filter_options.value.manual_ai) {
        any_match_filters = true;
        if (filter_options.value.manual_ai.value == 'manual') {
            match_filters.manually_edited = true;
        } else {
            match_filters.manually_edited = false;
        }
        search_filters.manual_ai = filter_options.value.manual_ai.value;
    }
    if (filter_options.value.approval_status) {
        any_match_filters = true;
        if (filter_options.value.approval_status.value == 'unapproved') {
            match_filters.manually_approved = false;
            match_filters.expert_approved = false;
        } else if (filter_options.value.approval_status.value == 'approved_not_expert') {
            match_filters.manually_approved = true;
            match_filters.expert_approved = false;
        } else if (filter_options.value.approval_status.value == 'expert_approved') {
            match_filters.manually_approved = true;
            match_filters.expert_approved = true;
        }
        search_filters.approval_status = filter_options.value.approval_status;
    }
    if (filter_options.value.show_only_added_by_me) {
        match_filters.added_by_user = userState.value.id;
        search_filters.show_only_added_by_me = true;
        any_match_filters = true;
    }
    if (in_filters.length > 0) {
        params.in_filters = in_filters;
    }
    if (any_match_filters) {
        params.match_filters = match_filters;
    }
    let search_hash = objectToHash(search_filters);
    if (search_hash != current_search_hash) {
        current_search_hash = search_hash;
        page_number.value = 1;
        problems_count.value = -1;
        params.start = 0;
        params.end = problems_per_page - 1;
    }
    if (problems_count.value == -1) {
        if (search_filter_problem_counts[search_hash]) {
            problems_count.value = search_filter_problem_counts[search_hash];
        } else {
            params.count = true;
        }
    }
    //console.log('page problems', JSON.stringify(page_problems));
    if (page_problems[search_hash]?.[page_number.value]) {
        problems.value = page_problems[search_hash][page_number.value];
    } else {
        const resp = await $fetch('/api/get/sat-problems', {method: 'POST', body: params});
        problems.value = resp.data;
        page_problems[search_hash] = page_problems[search_hash] || {};
        page_problems[search_hash][page_number.value] = resp.data;
        if (problems_count.value == -1) {
            problems_count.value = resp.count;
            search_filter_problem_counts[search_hash] = resp.count;
        }
    }
    fetching_page.value = false;
    
    // Wait for DOM to update
    await nextTick();
    renderKaTeX();
    
    
    return;
}

// Add watcher for search_text
watch(search_text, () => {
    debouncedSearch();
});


const pageClicked = () => {
    // Wrap in try-catch to see if we can catch any errors
    try {
        nextTick(() => {
            fetchProblems({page: page_number.value}).catch(error => {
                console.error('Error fetching problems:', error);
            });
        });
    } catch (error) {
        console.error('Error in page click handler:', error);
    }
}

const problem_sources = {collegeboard: "Collegeboard", barrons: "Barrons", own: "Own"};
const section_names = {math: "Math", reading_writing: "Reading & Writing"};
const problem_subsources = {practice_test: "Practice Test", question_bank: "Question Bank", cb_book: "Collegeboard Book"};
const module_names = {1: "Module 1", 2: "Module 2 (easy)", 3: "Module 2 (hard)"};
const domain_names = {
    "algebra": "Algebra",
    "advanced_math": "Advanced Math",
    "problem_solving_data": "Problem Solving and Data Analysis",
    "geometry_trig": "Geometry and Trigonometry",
    "info_and_ideas": "Information and Ideas",
    "craft_and_structure": "Craft and Structure",
    "standard_english": "Standard English",
    "expression_of_ideas": "Expression of Ideas",    
}

const cb_domain_lookup = getCbDomainLookup();
const cb_skill_lookup = getCbSkillLookup();

/*
const cb_skills = {
    systems_linear_equations: "Systems of two linear equations in two variables",
    linear_functions: "Linear functions",
    linear_equations_two_variables: "Linear equations in two variables",
    linear_equations_one_variable: "Linear equations in one variable",
    linear_inequalities: "Linear inequalities in one or two variables",
    nonlinear_equations: "Nonlinear equations in one variable and systems of equations in two variables",
    nonlinear_functions: "Nonlinear functions",
    equivalent_expressions: "Equivalent expressions",
    ratios_rates_proportions: "Ratios, rates, proportional relationships, and units",
    percentages: "Percentages",
    two_variable_data: "Two-variable data: Models and scatterplots",
    probability: "Probability and conditional probability",
    one_variable_data: "One-variable data: Distributions and measures of center and spread",
    inference_sample_statistics: "Inference from sample statistics and margin of error",
    lines_angles_triangles: "Lines, angles, and triangles",
    circles: "Circles",
    area_volume: "Area and volume",
    right_triangles_trigonometry: "Right triangles and trigonometry", 
    command_of_evidence: "Command of Evidence",
    inferences: "Inferences",
    central_ideas_details: "Central Ideas and Details",
    words_in_context: "Words in Context",
    text_structure_purpose: "Text Structure and Purpose",
    cross_text_connections: "Cross-Text Connections",
    rhetorical_synthesis: "Rhetorical Synthesis",
    transitions: "Transitions",
    boundaries: "Boundaries",
    form_structure_sense: "Form, Structure, and Sense"
}
*/

const deleteProblem = async (id) => {
    const resp = await $fetch(`/api/delete/sat-problem/${id}`, {
        method: 'DELETE'
    });
    problems.value = problems.value.filter(problem => problem.id != id);
}


const problemsEl = ref(null);

const getTruncatedQuestionText = (question_text) => {
    return question_text.length > 200 ? question_text.substring(0, 200) + '...' : question_text;
}

const filterProblemsOpen = ref(false);
const openProblemsFilter = () => {
    filterProblemsOpen.value = true;
}



const applyFilter = (filter) => {
    console.log('applying filter', filter);
    filter_options.value = filter;
    filterProblemsOpen.value = false;
    fetchProblems();
}

const closeFilter = () => {
    filterProblemsOpen.value = false;
}

const checkIfAnyFilterApplied = () => {
    if (filter_options.value.test_section) {
        return true;
    }
    if (filter_options.value.cb_domains && filter_options.value.cb_domains.length > 0) {
        return true;
    }
    if (filter_options.value.cb_skills && filter_options.value.cb_skills.length > 0) {
        return true;
    }
    return false;
}

const getFilterChips = () => {
    const chips = [];
    if (filter_options.value.test_section) {
        chips.push({label: section_names[filter_options.value.test_section.id], filter_category: 'test_section', value: filter_options.value.test_section.id});
    }
    if (filter_options.value.cb_domains && filter_options.value.cb_domains.length > 0) {
        for (const domain of filter_options.value.cb_domains) {
            chips.push({label: domain.label, filter_category: 'cb_domains', value: domain.id});
        }
    }
    if (filter_options.value.cb_skills && filter_options.value.cb_skills.length > 0) {
        for (const skill of filter_options.value.cb_skills) {
            chips.push({label: skill.label, filter_category: 'cb_skills', value: skill.id});
        }
    }
    return chips;
}

const removeFilter = (filter_category, value) => {
    filter_options.value[filter_category] = filter_options.value[filter_category].filter(filter => filter.id != value);
    fetchProblems();
}

onMounted(async () => {
    await fetchProblems();
})

onUnmounted(() => {
    problems.value = [];
    problems_count.value = -1;
    page_problems = {};
    search_filter_problem_counts = {};
    current_search_hash = '';
});
    
    
// Add after the fetchProblems function
const renderKaTeX = () => {
    if (!problemsEl.value) {
        console.warn('problemsEl not found');
        return;
    }

    try {
        // Only target elements that actually contain LaTeX content
        const mathElements = problemsEl.value.querySelectorAll(".problem-question");
        mathElements.forEach(el => {
            try {
                renderMathInElement(el, {
                    delimiters: [
                        {left: "//latex_start", right: "//latex_end", display: true},
                        {left: "$latex_start", right: "$latex_end", display: false},
                    ],
                    throwOnError: false,
                    errorCallback: (msg) => {
                        console.warn('KaTeX rendering error:', msg);
                    },
                    strict: false
                });
            } catch (elementError) {
                console.warn('Error rendering individual element:', elementError);
            }
        });
    } catch (error) {
        console.error('Error in KaTeX rendering:', error);
    }
};
</script>

<template>
    <div class="p-4">
        <div class="flex flex-row justify-between">
            <h1 class="text-3xl font-black pb-6">SAT Problems</h1>
            <span>
                <UButton @click="navigateTo('/add/sat-problem')">
                    Add Problem
                </UButton>
            </span>
        </div>
        
        <div class="flex flex-row justify-between pb-4 items-start">
            <span class="flex flex-row gap-1 items-start">
                <UButton @click="openProblemsFilter" variant="outline" icon="i-lucide-filter" size="xs" />
                <span v-if="checkIfAnyFilterApplied()" class="flex flex-row gap-1 items-start flex-wrap">
                    <span v-for="chip in getFilterChips()" :key="chip.id" class="applied-filter-chip flex flex-row gap-1 items-center bg-gray-100 rounded-md px-1 py-1">
                        <span class="text-xs">{{ chip.label }}</span>
                        <UButton variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="removeFilter(chip.filter_category, chip.value)" />
                    </span>
                    <!-- 
                    <div v-if="filter_options.test_section" class="applied-filter-section">
                        <span class="applied-filter-label">Section:</span>
                        <span class="applied-filter-value">{{ section_names[filter_options.test_section.id] }}</span>
                    </div>
                    <div v-if="filter_options.cb_domains && filter_options.cb_domains.length > 0" class="applied-filter-section">
                        <span class="applied-filter-label">Domains:</span>
                        <span class="applied-filter-value">{{ filter_options.cb_domains.map(domain => domain.label).join(', ') }}</span>
                    </div>
                    <div v-if="filter_options.cb_skills && filter_options.cb_skills.length > 0" class="applied-filter-section">
                        <span class="applied-filter-label">CB Skills:</span>
                        <span class="applied-filter-value">{{ filter_options.cb_skills.map(skill => skill.label).join(', ') }}</span>
                    </div>
                    -->
                </span>
            </span>
            
            <UInput v-model="search_text" placeholder="Search" icon="i-heroicons-magnifying-glass-20-solid" />
        </div>
        
        <div v-if="fetching_page" class="flex flex-row justify-center">
            <UProgress animation="carousel" />
        </div>
        <div v-else>
            <div 
                class="problems-container flex flex-col gap-1 bg-slate-100 p-1" 
                ref="problemsEl"
            >
                <div class="problems-headers problem-row flex flex-row">
                    <div class="problem-source problems-header">Source</div>
                    <div class="problem-type problems-header">Problem Type</div>
                    <div class="problem-question problems-header">Question</div>
                    <div class="problem-options problems-header">Options</div>
                </div>
                <div v-for="problem in problems" :key="problem.id" class="problem-row flex flex-row">
                    <div class="problem-source problem-cell">
                        <div>{{ problem_sources[problem.source] }}</div>
                        <div v-if="problem.source_question_id">
                            {{ problem.source_question_id }}
                        </div>
                        <div v-if="problem.subsource == 'practice_test' && problem.practice_test_id">
                            Practice Test {{ problem.practice_test_id }}
                            <div>
                                {{ section_names[problem.test_section] }}
                            </div>
                            <div v-if="problem.test_module">{{ module_names[problem.test_module] }}</div>
                            <div v-if="problem.problem_num">{{ problem.problem_num }}</div>
                        </div>
                        <div>{{ problem_subsources[problem.cb_subsource] }}</div>
                    </div>
                    <div class="problem-type problem-cell">
                        <div>
                            {{ section_names[problem.test_section] }}
                        </div>
                        <div>
                            {{ cb_domain_lookup[problem.cb_domain].label }}
                        </div>
                        <div>
                            {{ cb_skill_lookup[problem.cb_skill].label }}
                        </div>
                    </div>
                    <div 
                        class="problem-question problem-cell whitespace-pre-wrap"
                        
                    >
                        <span>{{ getTruncatedQuestionText(problem.question_text) }}</span>
                    </div>
                    <div class="problem-options problem-cell relative">
                        <span class="absolute top-1 right-1 flex flex-row gap-1">
                            <span class="rounded-full py-[1px] px-2 flex items-center justify-center" :class="problem.manually_approved ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-500'">
                                <UIcon name="i-lucide-check" />
                            </span>
                            <span class="rounded-full py-[1px] px-2 flex items-center justify-center" :class="problem.expert_approved ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-500'">
                                <UIcon name="i-lucide-check-check" />
                            </span>
                        </span> 
                        <UButton variant="outline" :to="`/sat-problem/${problem.id}`" icon="i-heroicons-eye" square size="2xs" />
                        <UButton variant="outline" :to="`/edit-problem/${problem.id}`" icon="i-heroicons-pencil-square" square size="2xs" />
                        <UButton variant="outline" @click="deleteProblem(problem.id)" icon="i-heroicons-trash" square size="2xs" />
                    </div>
                </div>
            </div>

            <div class='pagination-controls flex flex-row justify-center mt-4'>
                <UPagination 
                    v-if="problems_count > 0"
                    @click="pageClicked" 
                    v-model="page_number" 
                    :model-value="page_number" 
                    :total="problems_count" 
                    :page-count="problems_per_page" 
                />
            </div>
        </div>
        <UModal v-model="filterProblemsOpen">
            <div class="p-4">
                <FilterSATProblems @filterProblems="applyFilter" @closeFilter="closeFilter" :includeCloseButton="true" :test_section="filter_options.test_section" :cb_domains="filter_options.cb_domains ? filter_options.cb_domains : null" :cb_skills="filter_options.cb_skills ? filter_options.cb_skills : null" />
            </div>
        </UModal>
        <div class="h-10"></div>
    </div>
</template>

<style scoped>
.problems-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.problem-row {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    flex-wrap: nowrap;
}
.problems-headers .problems-header {
    @apply font-bold p-2 text-lg bg-white;
}
.problem-row .problem-cell {
    padding: .25rem;
    background-color: #fff;
}


.problem-row .problem-source {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.problem-row .problem-type {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.problem-row .problem-question {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 5rem;
    flex-grow: 1;
}
.problem-row .problem-options {
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
