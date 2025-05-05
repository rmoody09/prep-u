<script setup>
    const props = defineProps(['problemSet']);
    import TagsInput from '~/components/TagsInput.vue'

    const submitting = ref(false);
    const submitted = ref(false);

    const problem_set_id = ref(null);
    if (props.problemSet) {
        problem_set_id.value = props.problemSet.id;
    }

    const test_sections = [
        {id: 'reading_writing', 'label': 'Reading and Writing'},
        {id: 'math', 'label': 'Math'}
    ];

    const problem_set_types = [
        {id: 'practice', 'label': 'Practice Problems'},
        {id: 'drill', 'label': 'Drills'}
    ];

    const selected_section = ref(null);
    if (props.problemSet) {
        selected_section.value = props.problemSet.test_section;
    }

    const selected_type = ref(null);
    if (props.problemSet && props.problemSet.type) {
        selected_type.value = props.problemSet.type;
    }

    const problem_set_name = ref('');
    if (props.problemSet && props.problemSet.name) {
        problem_set_name.value = props.problemSet.name;
    }

    const problem_set_tag = ref('');
    if (props.problemSet && props.problemSet.tag) {
        problem_set_tag.value = props.problemSet.tag;
    }

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain, section_names } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const cb_domain = ref('');
    if (props.problemSet && props.problemSet.cb_domain) {
        cb_domain.value = props.problemSet.cb_domain;
    }

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
    if (props.problemSet && props.problemSet.cb_skill) {
        cb_skill.value = props.problemSet.cb_skill;
    }

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

    const selected_concepts = ref([]);
    let init_concepts = [];
    if (props.problemSet && props.problemSet.concepts) {
        init_concepts = props.problemSet.concepts;
    }

    

    const problems = ref([]);
    const justAddedProblemSetId = ref(null);
    const problemToMove = ref(null);
    const showPlacementIndicator = ref(false);
    const placementIndex = ref(-1);

    const saveProblemSetClicked = async () => {
        submitting.value = true;
        
        const concepts = selected_concepts.value.map(concept => concept.id);
        
        let data = {
            name: problem_set_name.value,
            tag: problem_set_tag.value,
            test_section: selected_section.value,
            cb_domain: cb_domain.value,
            cb_skill: cb_skill.value,
            concepts: concepts,
            type: selected_type.value,
            problems: problems.value
        }
        
        if (props.problemSet) {
            data.id = props.problemSet.id;
            const resp = await $fetch("/api/edit/problem-set/" + props.problemSet.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            justAddedProblemSetId.value = props.problemSet.id;
        } else {
            const resp = await fetch("/api/add/problem-set", {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resp_json = await resp.json();
            if (resp_json.data) {
                justAddedProblemSetId.value = resp_json.data[0].id;
            }
        }
        
        submitting.value = false;
        submitted.value = true;
    }

    const deleteProblemSetClicked = async () => {
        let data = {
            id: props.problemSet.id
        }
        const resp = await $fetch("/api/delete/problem-set/" + props.problemSet.id, {
            method: "DELETE",
            body: data
        });
    }

    const addAnotherProblemSetClicked = () => {
        submitted.value = false;
        clearForm();
    }

    const clearForm = () => {
        problem_set_id.value = null;
        problem_set_name.value = '';
        problem_set_tag.value = '';
        selected_section.value = null;
        selected_type.value = null;
        cb_domain.value = null;
        cb_skill.value = null;
        selected_concepts.value = [];
        problems.value = [];
    }

    const section_header_classes = "font-semibold pb-2 text-base"

    const problemSelectorOpen = ref(false);
    const problemSearchRef = ref(null);
    const problemModalOpen = ref(false);
    const selectedProblem = ref(null);

    const openProblemSelector = () => {
        problemSelectorOpen.value = true;
    }

    const viewProblem = (problem) => {
        selectedProblem.value = problem;
        problemModalOpen.value = true;
    }

    const closeProblemSelector = () => {
        if (problemSearchRef.value?.selected_problems) {
            problemSearchRef.value.selected_problems.forEach(problem => {
                if (!problems.value.some(p => p.id === problem.id)) {
                    problems.value.push(problem);
                }
            });
        }
        problemSelectorOpen.value = false;
    }

    const addProblemToSet = (problem) => {
        if (!problems.value.some(p => p.id === problem.id)) {
            problems.value.push(problem);
        }
    }

    const logProblemIDs = () => {
        console.log('logProblemIDs');
        console.log(problems.value.map(p => p.id));
    }

    const selectProblemToMove = (problem) => {
        problemToMove.value = problem;
    };

    const placeProblem = (index) => {
        if (problemToMove.value) {
            const currentIndex = problems.value.findIndex(p => p.id === problemToMove.value.id);
            if (currentIndex !== -1) {
                const problem = problems.value.splice(currentIndex, 1)[0];
                problems.value.splice(index, 0, problem);
            }
            problemToMove.value = null;
            showPlacementIndicator.value = false;
            placementIndex.value = -1;
        }
    };

    const handleProblemHover = (index) => {
        if (problemToMove.value) {
            showPlacementIndicator.value = true;
            placementIndex.value = index;
        }
    };

    const handleProblemLeave = () => {
        if (problemToMove.value) {
            showPlacementIndicator.value = false;
            placementIndex.value = -1;
        }
    };

    const cancelMove = () => {
        problemToMove.value = null;
        showPlacementIndicator.value = false;
        placementIndex.value = -1;
    };
</script>

<template>
    <div class="problem-set-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div>Problem Set saved successfully</div>
                <div v-if="justAddedProblemSetId">
                    <div>
                        Problem Set ID: {{ justAddedProblemSetId }}
                    </div>
                    <div>
                        <UButton :to="`/problem-set/${justAddedProblemSetId}`">View Problem Set</UButton>
                    </div>
                </div>
                <div class="flex flex-row gap-4 pt-4">
                    <UButton @click="addAnotherProblemSetClicked">Add another problem set</UButton>
                    <UButton to="/admin/problem-sets" variant="outline">All problem sets</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class='section_header_classes'>Problem Set Name</div>
                    <UInput v-model="problem_set_name" type="text" placeholder="Problem Set Name" />
                </div>
                <div>
                    <div :class='section_header_classes'>Problem Set Tag</div>
                    <UInput v-model="problem_set_tag" type="text" placeholder="Problem Set Tag" />
                </div>
                <div>
                    <div :class='section_header_classes'>Test Section</div>
                    <span>
                        <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div>
                <div>
                    <div :class='section_header_classes'>Problem Set Type</div>
                    <span>
                        <USelectMenu v-model="selected_type" :options="problem_set_types" placeholder="Problem Set Type" value-attribute="id" option-attribute="label" />
                    </span>
                </div>
                <div>
                    <div :class='section_header_classes'>College Board Domain</div>
                    <span>
                        <USelectMenu v-model="cb_domain" :options="select_cb_domain_options" placeholder="College Board Domain" value-attribute="id" option-attribute="label" />
                    </span>
                </div>  
                <div>
                    <div :class='section_header_classes'>CollegeBoard Skill</div>
                    <span>
                        <USelectMenu v-model="cb_skill" :options="select_cb_skill_options" placeholder="College Board Skill" value-attribute="id" option-attribute="label" />
                    </span>
                </div>
                <div>
                    <div :class='section_header_classes'>Concepts</div>
                    <ConceptTagsSelector v-model="selected_concepts" :init_concepts="init_concepts" />
                </div>
                <div>
                    <div :class='section_header_classes'>Problems</div>
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-2 items-start">
                            <UButton
                                variant="outline"
                                icon="i-heroicons-plus"
                                @click="openProblemSelector"
                            >
                                Select Problems
                            </UButton>
                        </div>
                        <div v-if="problems.length > 0" class="mt-2">
                            <div class="mb-2 text-sm text-gray-600">
                                <span class="font-medium">Total Problems:</span> {{ problems.length }}
                            </div>
                            <div v-if="problemToMove" class="mb-2 p-2 bg-blue-50 rounded-md">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-blue-600">Moving: {{ problemToMove.question_text.substring(0, 50) }}...</span>
                                    <UButton
                                        variant="ghost"
                                        icon="i-heroicons-x-mark"
                                        @click="cancelMove"
                                        size="xs"
                                        color="blue"
                                    />
                                </div>
                            </div>
                            <div v-for="(problem, index) in problems" :key="problem.id" 
                                class="relative"
                                @mouseenter="handleProblemHover(index)"
                                @mouseleave="handleProblemLeave"
                                @click="problemToMove ? placeProblem(index) : null"
                            >
                                <div v-if="showPlacementIndicator && placementIndex === index" 
                                    class="absolute inset-0 border-2 border-dashed border-blue-400 bg-blue-50/50 rounded-md pointer-events-none"
                                ></div>
                                <div class="flex flex-row items-center gap-2 p-2 bg-gray-50 rounded-md mb-1"
                                    :class="{ 'ring-2 ring-blue-400': problemToMove?.id === problem.id }"
                                >
                                    <UButton
                                        v-if="!problemToMove"
                                        variant="ghost"
                                        icon="i-heroicons-arrows-up-down"
                                        @click.stop="selectProblemToMove(problem)"
                                        size="xs"
                                        :color="problemToMove?.id === problem.id ? 'blue' : 'gray'"
                                    />
                                    <div class="flex-grow">
                                        <div class="font-medium">{{ problem.question_text.substring(0, 100) }}...</div>
                                        <div class="text-sm text-gray-500">
                                            {{ section_names[problem.test_section] }} - {{ cb_domain_lookup[problem.cb_domain].label }}
                                        </div>
                                    </div>
                                    <UButton
                                        v-if="!problemToMove"
                                        variant="ghost"
                                        icon="i-heroicons-eye"
                                        @click="viewProblem(problem)"
                                        size="xs"
                                    />
                                    <UButton
                                        v-if="!problemToMove"
                                        variant="ghost"
                                        icon="i-heroicons-trash"
                                        @click="problems = problems.filter(p => p.id !== problem.id)"
                                        size="xs"
                                        color="red"
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-sm text-gray-500 italic">
                            No problems selected
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-row gap-4">
                    <UButton @click="saveProblemSetClicked">Save Problem Set</UButton>
                    <UButton v-if="props.problemSet" color="pink" @click="deleteProblemSetClicked">Delete Problem Set</UButton>
                </div>
            </div>
        </div>

        
    </div>
    <UModal v-model="problemSelectorOpen" fullscreen>
        <UCard>
            <template #header>
                <div class="flex justify-between items-center w-full">
                    <h3 class="text-lg font-semibold">Select Problems</h3>
                    <UButton
                        color="gray"
                        variant="ghost"
                        icon="i-heroicons-x-mark"
                        @click="closeProblemSelector"
                    />
                </div>
            </template>
            <div class="p-4">
                <SATProblemSearch
                    ref="problemSearchRef"
                    :showAddButton="false"
                    :showDeleteButton="false"
                    :showEditButton="false"
                    :showViewButton="false"
                    :showFilterButton="true"
                    :showSearchInput="true"
                    :showPagination="true"
                    :showApprovalStatus="true"
                    :showProblemSource="true"
                    :showProblemType="true"
                    :showProblemQuestion="true"
                    :showProblemOptions="true"
                    :showTitle="false"
                    :allowProblemSelection="true"
                />
            </div>
        </UCard>
    </UModal>

    <UModal v-model="problemModalOpen" :ui="{ width: 'md:max-w-[90vw]'}">
        <UCard>
            <template #header>
                <div class="flex justify-between items-center w-full">
                    <h3 class="text-lg font-semibold">Problem Details</h3>
                    <UButton
                        color="gray"
                        variant="ghost"
                        icon="i-heroicons-x-mark"
                        @click="problemModalOpen = false"
                    />
                </div>
            </template>
            <div class="p-4" v-if="selectedProblem">
                <ClientOnly>
                    <SATProblem :problem_id="selectedProblem.id" />
                </ClientOnly>
            </div>
        </UCard>
    </UModal>
</template>
