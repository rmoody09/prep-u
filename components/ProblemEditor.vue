<script setup>
    const props = defineProps(['problem']);
    import Tiptap from '~/components/Tiptap.vue'
    import TagsInput from '~/components/TagsInput.vue'

    const submitting = ref(false);
    const submitted = ref(false);

    const problem_id = ref(null);
    if (props.problem) {
        problem_id.value = props.problem.id;
    }

    const test_sections = [
        {id: 'reading_writing', 'label': 'Reading and Writing'},
        {id: 'math', 'label': 'Math'}
    ];

    const problem_sources = [
        {id: 'collegeboard', 'label': 'CollegeBoard'},
        {id: 'own', 'label': 'Own'}
    ];
    const selected_problem_source = ref(null);
    if (props.problem && props.problem.source) {
        selected_problem_source.value = props.problem.source;
    }


    const cb_subsources = [
        {id: 'practice_test', 'label': 'Practice Test'},
        {id: 'question_bank', 'label': 'Question Bank'}
    ];

    const in_cb_question_bank = ref(false);
    if (props.problem && props.problem.in_cb_question_bank) {
        in_cb_question_bank.value = props.problem.in_cb_question_bank;
    }

    const is_practice_test = ref(false);
    if (props.problem && props.problem.is_practice_test) {
        is_practice_test.value = props.problem.is_practice_test;
    }

    const subsource = ref(null);
    if (props.problem && props.problem.subsource) {
        subsource.value = props.problem.subsource;
    }


    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();


    
    const selected_section = ref(null);
    if (props.problem) {
        selected_section.value = props.problem.test_section;
    }

    const practice_tests = [
        {id: '1', 'label': 'Practice Test #1'},
        {id: '2', 'label': 'Practice Test #2'},
        {id: '3', 'label': 'Practice Test #3'},
        {id: '4', 'label': 'Practice Test #4'},
        {id: '5', 'label': 'Practice Test #5'},
        {id: '6', 'label': 'Practice Test #6'}
    ];
    const selected_practice_test = ref(null);

    if (props.problem && props.problem.practice_test_id) {
        selected_practice_test.value = props.problem.practice_test_id;
    }

    const cb_domain = ref('');
    if (props.problem && props.problem.cb_domain) {
        cb_domain.value = props.problem.cb_domain;
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
    if (props.problem && props.problem.cb_skill) {
        cb_skill.value = props.problem.cb_skill;
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

    const answer_types = [
        {id: 'multiple_choice', 'label': 'Multiple Choice'},
        {id: 'numeric_input', 'label': 'Numeric Input'}
    ];
    
    const selected_answer_type = ref(null);
    if (props.problem && props.problem.answer_type) {
        selected_answer_type.value = props.problem.answer_type;
    }
    

    const has_numeric_input = ref(false);
    if (props.problem && props.problem.has_numeric_input) {
        has_numeric_input.value = props.problem.has_numeric_input;
    }

    const has_text_input = ref(false);
    if (props.problem && props.problem.has_text_input) {
        has_text_input.value = props.problem.has_text_input;
    }

    const has_multiple_choice = ref(false);
    if (props.problem && props.problem.has_multiple_choice) {
        has_multiple_choice.value = props.problem.has_multiple_choice;
    }


    const answer_choices = ref([
        {content: ""}, 
        {content: ""}, 
        {content: ""}, 
        {content: ""}
    ]);
    if (props.problem && props.problem.answer_choices) {
        let choices = [];
        for (let choice of props.problem.answer_choices) {
            choices.push({content: choice.json})
        }
        answer_choices.value = [...choices];
    }

    //const mult_choice_answer_refs = ref([]);

    const mult_choice_options_editor_ref = useTemplateRef('multChoiceOptionsEditor');
    const init_mult_choice_correct_answer_index = -1;
    if (props.problem && props.problem.mult_choice_correct_answer_index) {
        init_mult_choice_correct_answer_index = props.problem.mult_choice_correct_answer_index;
    }

    const numeric_answers = ref({answers: [{label: '', value: '', is_label: false}], require_all: true, is_label: false, label: ''});
    if (props.problem && props.problem.numeric_answers) {
        numeric_answers.value = props.problem.numeric_answers;
    }

    const questionEditorRef = useTemplateRef('questionEditor');
    let init_question_content = '';
    if (props.problem && props.problem.question_tiptap_html) {
        init_question_content = props.problem.question_tiptap_html;
    }

    const sourceSolutionEditorRef = useTemplateRef('sourceSolutionEditor')
    let init_source_solution_content = '';
    if (props.problem && props.problem.source_solution && props.problem.source_solution.json) {
        init_source_solution_content = props.problem.source_solution.json;
    }

    const collegeBoardQuestionId = ref('');
    if (props.problem && props.problem.source == 'collegeboard' && props.problem.source_question_id) {
        collegeBoardQuestionId.value = props.problem.source_question_id;
    }

    const saveProblemClicked = async () => {
        submitting.value = true;
        /*
        let answer_choices = [];
        for (let answer_choice of mult_choice_answer_refs.value) {
            if (!answer_choice) {continue;}
            if (!answer_choice.editor) {continue;}
            answer_choices.push({
                html: answer_choice.editor.getHTML(),
                json: answer_choice.editor.getJSON()
            })
        }
        */
        let source_solution = {};
        if (selected_problem_source.value != 'own') {
            source_solution = {
                html: sourceSolutionEditorRef.value.editor.getHTML(),
                json: sourceSolutionEditorRef.value.editor.getJSON()
            }
        }

        const custom_skills = selected_custom_skills.value.map(skill => skill.id);

        let db_answer_choices = [];
        let mult_choice_correct_answer_index = null;
        if (has_multiple_choice.value) {
            let mult_choice_data = mult_choice_options_editor_ref.value.getOptions();
            db_answer_choices = mult_choice_data.options;
            mult_choice_correct_answer_index = mult_choice_data.answer_index;
        }

        let db_numeric_answers = [];
        if (selected_answer_type.value == 'numeric_input') {
            db_numeric_answers = numeric_answers.value.answers.map(answer => answer.value);
        }

        let data = {
            problem_source: selected_problem_source.value,
            subsource: subsource.value, 
            is_practice_test: is_practice_test.value,
            in_cb_question_bank: in_cb_question_bank.value,
            collegeboard_question_id: collegeBoardQuestionId.value,
            practice_test: selected_practice_test.value,
            test_section: selected_section.value,
            cb_domain: cb_domain.value,
            cb_skill: cb_skill.value,
            answer_type: selected_answer_type.value,
            input_answers: db_numeric_answers,
            custom_skills: custom_skills,
            question: {
                html: questionEditorRef.value.editor.getHTML(),
                json: questionEditorRef.value.editor.getJSON()
            },
            answer_choices: db_answer_choices, 
            mult_choice_correct_answer_index: mult_choice_correct_answer_index.value,
            module: selected_module.value, 
            problem_number: problem_number.value,
            source_solution: source_solution,
            difficulty: selected_difficulty.value
        }
        
        if (props.problem) {
            data.id = props.problem.id;
            const resp = await $fetch("/api/edit/sat-problem/" + props.problem.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
        } else {
            const resp = await fetch("/api/add/sat-problem", {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
            const resp_json = await resp.json();
            console.log(resp_json);
        }
        
        submitting.value = false;
        submitted.value = true;
    }

    const deleteProblemClicked = async () => {
        console.log('deleteProblemClicked');
        let data = {
            id: props.problem.id
        }
        const resp = await $fetch("/api/delete/sat-problem/" + props.problem.id, {
            method: "DELETE",
            body: data
        });
    }

    

    


    const selected_custom_skills = ref([]);
    const init_custom_skills = [];
    if (props.problem && props.problem.skills) {
        init_custom_skills = props.problem.skills;
    }


    const modules = [
        {id: '1', 'label': 'Module 1'},
        {id: '2E', 'label': 'Module 2 (easy)'},
        {id: '2H', 'label': 'Module 2 (hard)'}
    ];
    const selected_module = ref(null);
    if (props.problem && props.problem.test_module) {
        selected_module.value = props.problem.test_module;
    }

    const difficulty_levels = [
        { id: 1, label: 'Easy' },
        { id: 2, label: 'Medium' },
        { id: 3, label: 'Hard' }
    ];
    const selected_difficulty = ref(null);
    if (props.problem && props.problem.difficulty) {
        selected_difficulty.value = props.problem.difficulty;
    }

    const problem_number = ref(null);
    if (props.problem && props.problem.problem_number) {
        problem_number.value = props.problem.problem_number;
    }

    const maxQuestionNumber = computed(() => {
        if (selected_section.value === 'math') {
            return 22;
        } else if (selected_section.value === 'reading_writing') {
            return 27;
        }
        return null;
    });

    const addAnotherProblemClicked = () => {
        submitted.value = false;
        clearForm();
    }

    const clearForm = () => {
        problem_id.value = null;
        selected_problem_source.value = null;
        subsource.value = null;
        is_practice_test.value = false;
        in_cb_question_bank.value = false;
        collegeBoardQuestionId.value = '';
        selected_practice_test.value = null;
        selected_section.value = null;
        selected_module.value = null;
        problem_number.value = null;
        cb_domain.value = null;
        cb_skill.value = null;
        selected_answer_type.value = null;
        mult_choice_correct_answer_index.value = null;
        selected_difficulty.value = null;
        selected_custom_skills.value = [];
        init_question_content.value = '';
        init_source_solution_content.value = '';
        answer_choices.value = [];
        mult_choice_answer_refs.value = [];
        questionEditorRef.value.editor.commands.setContent('');
        sourceSolutionEditorRef.value.editor.commands.setContent('');
    }

    onMounted(() => {
        console.log('problem editor onMounted');
    })

    const section_header_classes = "font-semibold pb-2 text-base"
</script>

<template>
    <div class="problem-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div>Problem saved successfully</div>
                <div>
                    <UButton @click="addAnotherProblemClicked">Add another problem</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class='section_header_classes'>Source</div>
                    <USelectMenu v-model="selected_problem_source" :options="problem_sources" placeholder="Problem Source" value-attribute="id" option-attribute="label" />
                </div>
                <div v-if="selected_problem_source == 'collegeboard'">
                    <div :class='section_header_classes'>Subsource</div>
                    <span>
                        <USelectMenu v-model="subsource" :options="cb_subsources" placeholder="Subsource" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div class="flex items-center gap-2">
                    <UCheckbox v-model="is_practice_test" label="From practice test" />
                </div>
                <div v-if="selected_problem_source == 'collegeboard'" class="flex items-center gap-2">
                    <UCheckbox v-model="in_cb_question_bank" label="In CollegeBoard Question Bank" />
                </div>
                <div v-if="in_cb_question_bank">
                    <div :class='section_header_classes'>CollegeBoard Question ID</div>
                    <UInput v-model="collegeBoardQuestionId" placeholder="Enter CollegeBoard Question ID" />
                </div>
                <div v-if="is_practice_test">
                    <div :class='section_header_classes'>Practice Test #</div>
                    <USelectMenu v-model="selected_practice_test" :options="practice_tests" placeholder="Practice Test" value-attribute="id" option-attribute="label" />
                </div>
                
                <div>
                    <div :class='section_header_classes'>Test Section</div>
                    <span>
                        <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div v-if="is_practice_test">
                    <div :class='section_header_classes'>Module</div>
                    <USelectMenu v-model="selected_module" :options="modules" placeholder="Module" value-attribute="id" option-attribute="label" />
                </div>
                <div v-if="is_practice_test && selected_section">
                    <div :class='section_header_classes'>Question Number</div>
                    <UInput
                        v-model="problem_number"
                        type="number"
                        :min="1"
                        :max="maxQuestionNumber"
                        :placeholder="`Enter question number (1-${maxQuestionNumber})`"
                    />
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
                    <div :class='section_header_classes'>Answer Type</div>
                    <span>
                        <USelectMenu v-model="selected_answer_type" :options="answer_types" placeholder="Answer Type" value-attribute="id" option-attribute="label" />
                    </span>
                </div>
                
                <div>
                    <div :class='section_header_classes'>Question</div>
                    <Tiptap 
                        ref="questionEditor"
                        :init_content="init_question_content"
                    />
                </div>

                <div v-if="selected_answer_type == 'multiple_choice'">
                    <div :class='section_header_classes'>Answer Options</div>
                    <MultipleChoiceOptionsEditor ref="multChoiceOptionsEditor" :answer_index="init_mult_choice_correct_answer_index" :answer_choices="answer_choices" />
                    <!-- <div class="flex flex-col gap-4">
                        <div v-for="(answer_choice, index) in answer_choices" class='answer_choice flex items-start gap-3'>
                            <span class="grow-0 font-extrabold text-md">
                                <button :index="index" 
                                    class="answer-choice_option w-6 h-6 flex items-center justify-center border border-solid p-1 rounded-full"
                                    :class="{
                                        'text-slate-500 border-slate-500':  mult_choice_correct_answer_index != index, 
                                        'bg-primary text-white border-primary':  mult_choice_correct_answer_index == index
                                    }"
                                    @click="selectCorrectAnswerChoice(index)">
                                    {{ getChar(index+1) }}
                                </button>
                            </span>
                            <span class="grow">
                                <Tiptap 
                                    :ref="(el) => {mult_choice_answer_refs[index] = el}"
                                    :init_content="answer_choice.content"
                                />
                            </span>
                        </div>
                    </div> -->
                </div>
                <div v-if="selected_answer_type == 'numeric_input'" class="flex flex-col gap-4">
                    <div :class='section_header_classes'>Answer</div>
                    <div>
                        <NumericAnswerInputsEditor v-model="numeric_answers" :options="{enable_section_label: false, enable_require_all: false}" />
                    </div>
                </div>
                <div v-if="selected_problem_source == 'collegeboard'">
                    <div :class='section_header_classes'>CollegeBoard Difficulty</div>
                    <USelectMenu 
                        v-model="selected_difficulty" 
                        :options="difficulty_levels" 
                        placeholder="Select Difficulty" 
                        value-attribute="id" 
                        option-attribute="label"
                    />
                </div>
                <div>
                    <div :class='section_header_classes'>Custom Skills</div>
                    <SATSkillsSelector v-model="selected_custom_skills" :init_skills="init_custom_skills" />
                </div>

                <div v-if="selected_problem_source != 'own'">
                    <div :class='section_header_classes'>Source Solution</div>
                    <Tiptap 
                        ref="sourceSolutionEditor"
                        :init_content="init_source_solution_content"
                    />
                </div>
                
                <div class="flex flex-row gap-4">
                    <UButton @click="saveProblemClicked">Save Problem</UButton>
                    <UButton v-if="props.problem" color="pink" @click="deleteProblemClicked">Delete Problem</UButton>
                </div>
                
            </div>
        </div>
    </div>
</template>
