<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";
import 'katex/dist/katex.min.css';
import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

// Define props to make the component configurable
const props = defineProps({
  // Whether to show the "Add Problem" button
  showAddButton: {
    type: Boolean,
    default: true
  },
  // Whether to show the delete button for each problem
  showDeleteButton: {
    type: Boolean,
    default: true
  },
  // Whether to show the edit button for each problem
  showEditButton: {
    type: Boolean,
    default: true
  },
  // Whether to show the view button for each problem
  showViewButton: {
    type: Boolean,
    default: true
  },
  // Whether to show the filter button
  showFilterButton: {
    type: Boolean,
    default: true
  },
  // Whether to show the search input
  showSearchInput: {
    type: Boolean,
    default: true
  },
  // Whether to show the pagination
  showPagination: {
    type: Boolean,
    default: true
  },
  // Whether to show the approval status indicators
  showApprovalStatus: {
    type: Boolean,
    default: true
  },
  // Whether to show the problem source information
  showProblemSource: {
    type: Boolean,
    default: true
  },
  // Whether to show the problem type information
  showProblemType: {
    type: Boolean,
    default: true
  },
  // Whether to show the problem question
  showProblemQuestion: {
    type: Boolean,
    default: true
  },
  // Whether to show the problem options
  showProblemOptions: {
    type: Boolean,
    default: true
  },
  // Whether to show the problem set title
  showTitle: {
    type: Boolean,
    default: true
  },
  // The title to display
  title: {
    type: String,
    default: 'SAT Problems'
  },
  // The number of problems per page
  problemsPerPage: {
    type: Number,
    default: 20
  },
  // Initial filter options
  initialFilterOptions: {
    type: Object,
    default: () => ({})
  },
  // Initial search text
  initialSearchText: {
    type: String,
    default: ''
  },
  // Whether to allow them to select problems
  allowProblemSelection: {
    type: Boolean,
    default: true
  }
});

// Define emits for events that the parent component might want to handle
const emit = defineEmits([
  'problem-selected',
  'problem-deleted',
  'problem-edited',
  'problem-viewed',
  'filter-applied',
  'search-changed',
  'page-changed'
]);

const fetching_page = ref(true);
const problems_per_page = props.problemsPerPage;
const problems = ref([]);
const problems_count = ref(-1);
let search_filter_problem_counts = {}; // key is hash of search options, value will be total number of problems matching search options
let page_problems = {}; // key is hash of search options, will contain object with problems by page number
let current_search_hash = '';
const page_number = ref(1);
const search_text = ref(props.initialSearchText);
const search_options = ref({text: props.initialSearchText});
const filter_options = ref(props.initialFilterOptions);

const userState = useState('user');

// Add debounced search function
const debouncedSearch = debounceFunction(() => {
    search_options.value.text = search_text.value;
    fetchProblems({ page: 1 });
    emit('search-changed', search_text.value);
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
    
    emit('page-changed', page_number.value);
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

const deleteProblem = async (id) => {
    const resp = await $fetch(`/api/delete/sat-problem/${id}`, {
        method: 'DELETE'
    });
    problems.value = problems.value.filter(problem => problem.id != id);
    emit('problem-deleted', id);
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
    emit('filter-applied', filter);
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
    console.log('removing filter', filter_category, value);
    console.log('filter_options', JSON.stringify(filter_options.value));
    if (filter_category == 'test_section') {
        filter_options.value.test_section = null;
    } else {
        filter_options.value[filter_category] = filter_options.value[filter_category].filter(filter => filter.id != value);
    }
    
    fetchProblems();
}

const selected_problems = ref([]);

const selectProblem = (problem) => {
    selected_problems.value.push(problem);
    emit('problem-selected', problem);
}

const unselectProblem = (problem) => {
    selected_problems.value = selected_problems.value.filter(p => p.id !== problem.id);
    emit('problem-unselected', problem);
}

const isProblemSelected = (problem) => {
    return selected_problems.value.some(p => p.id === problem.id);
}

const toggleProblemSelection = (problem, checked) => {
    if (checked) {
        selectProblem(problem);
    } else {
        unselectProblem(problem);
    }
}

const editProblem = (id) => {
    emit('problem-edited', id);
}

const viewProblem = (id) => {
    emit('problem-viewed', id);
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
    <div class="sat-problem-search">
        <div v-if="props.showTitle" class="flex flex-row justify-between">
            <h1 class="text-3xl font-black pb-6">{{ title }}</h1>
            <span v-if="props.showAddButton">
                <UButton @click="navigateTo('/add/sat-problem')">
                    Add Problem
                </UButton>
            </span>
        </div>
        
        <div v-if="selected_problems.length > 0" class="flex flex-row items-center gap-2 pb-4">
            <span class="text-sm font-medium text-gray-700">
                {{ selected_problems.length }} problem{{ selected_problems.length === 1 ? '' : 's' }} selected
            </span>
            <UButton
                variant="ghost"
                size="xs"
                icon="i-heroicons-x-mark"
                @click="selected_problems = []"
            >
                Clear selection
            </UButton>
        </div>
        
        <div class="flex flex-row justify-between pb-4 items-start">
            <span v-if="props.showFilterButton" class="flex flex-row gap-1 items-start">
                <UButton @click="openProblemsFilter" variant="outline" icon="i-lucide-filter" size="xs" />
                <span v-if="checkIfAnyFilterApplied()" class="flex flex-row gap-1 items-start flex-wrap">
                    <span v-for="chip in getFilterChips()" :key="chip.id" class="applied-filter-chip flex flex-row gap-1 items-center bg-gray-100 rounded-md px-1 py-1">
                        <span class="text-xs">{{ chip.label }}</span>
                        <UButton variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="removeFilter(chip.filter_category, chip.value)" />
                    </span>
                </span>
            </span>
            
            <UInput v-if="props.showSearchInput" v-model="search_text" placeholder="Search" icon="i-heroicons-magnifying-glass-20-solid" />
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
                    <div v-if="props.showProblemSource" class="problem-source problems-header">Source</div>
                    <div v-if="props.showProblemType" class="problem-type problems-header">Problem Type</div>
                    <div v-if="props.showProblemQuestion" class="problem-question problems-header">Question</div>
                    <div v-if="props.showProblemOptions" class="problem-options problems-header">Options</div>
                </div>
                <div v-for="problem in problems" :key="problem.id" class="problem-row flex flex-row">
                    <div v-if="props.showProblemSource" class="problem-source problem-cell">
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
                    <div v-if="props.showProblemType" class="problem-type problem-cell">
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
                        v-if="props.showProblemQuestion"
                        class="problem-question problem-cell whitespace-pre-wrap"
                        
                    >
                        <span>{{ getTruncatedQuestionText(problem.question_text) }}</span>
                    </div>
                    <div v-if="props.showProblemOptions" class="problem-options problem-cell relative">
                        <div class="flex flex-col justify-between h-full w-full">
                            <div>
                                <div v-if="props.showApprovalStatus" class=" pt-2 flex flex-row gap-1 justify-end">
                                    <span class="rounded-full py-[1px] px-2 flex items-center justify-center" :class="problem.manually_approved ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-500'">
                                        <UIcon name="i-lucide-check" />
                                    </span>
                                    <span class="rounded-full py-[1px] px-2 flex items-center justify-center" :class="problem.expert_approved ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-500'">
                                        <UIcon name="i-lucide-check-check" />
                                    </span>
                                </div>
                            </div>
                            <div class="flex flex-row gap-1 justify-center">
                                <UButton v-if="props.showViewButton" variant="outline" :to="`/sat-problem/${problem.id}`" icon="i-heroicons-eye" square size="2xs" @click="viewProblem(problem.id)" />
                                <UButton v-if="props.showEditButton" variant="outline" :to="`/edit-problem/${problem.id}`" icon="i-heroicons-pencil-square" square size="2xs" @click="editProblem(problem.id)" />
                                <UButton v-if="props.showDeleteButton" variant="outline" @click="deleteProblem(problem.id)" icon="i-heroicons-trash" square size="2xs" />
                            </div>
                            <div class="flex flex-row gap-1 justify-center">
                                <div v-if="props.allowProblemSelection" class="flex items-center gap-2">
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <UCheckbox
                                          :model-value="isProblemSelected(problem)"
                                          @update:model-value="(checked) => toggleProblemSelection(problem, checked)"
                                          size="sm"
                                        />
                                        <span class="text-sm text-gray-600">
                                          {{ isProblemSelected(problem) ? 'Selected' : 'Select' }}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="props.showPagination" class='pagination-controls flex flex-row justify-center mt-4'>
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
    cursor: pointer;
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
