<script setup>
    console.log('problem editor');
    const props = defineProps(['problem']);
    console.log('problem editor props');
    console.log(props);
    import Tiptap from '~/components/Tiptap.vue'
    import TagsInput from '~/components/TagsInput.vue'

    

    const problem_id = ref(null);

    if (props.problem) {
        problem_id.value = props.problem.id;
    }

    const problem_sources = [
        {id: 'collegeboard', 'label': 'CollegeBoard'},
        {id: 'own', 'label': 'Own'}
    ];
    const selected_problem_source = ref(null);
    if (props.problem && props.problem.source) {
        selected_problem_source.value = props.problem.source;
    }
    
    const getSelectedSourceLabel = () => {
        return problem_sources.find(source => source.id === selected_problem_source.value)?.label;
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


    const test_sections = [
        {id: 'reading_writing', 'label': 'Reading and Writing'},
        {id: 'math', 'label': 'Math'}
    ];
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

    console.log('check for initial practice test');
    if (props.problem && props.problem.practice_test_id) {
        console.log('initial practice test found');
        console.log(props.problem.practice_test_id);
        selected_practice_test.value = props.problem.practice_test_id;
    }
    const getSelectedPracticeTestLabel = () => {
        return practice_tests.find(source => source.id === selected_practice_test.value)?.label;
    }

    const cb_domain = ref('');
    if (props.skill && props.skill.cb_domain) {
        cb_domain.value = props.skill.cb_domain;
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
    console.log('domain options');
    console.log(select_cb_domain_options.value);

    const cb_skill = ref('');
    if (props.skill && props.skill.cb_skill) {
        cb_skill.value = props.skill.cb_skill;
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

    let init_question_content = '';
    if (props.problem && props.problem.question_tiptap_html) {
        init_question_content = props.problem.question_tiptap_html;
        console.log('init_question_content');
        console.log(init_question_content);
    }

    let init_source_solution_content = '';
    if (props.problem && props.problem.source_solution && props.problem.source_solution.json) {
        init_source_solution_content = props.problem.source_solution.json;
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

    const mult_choice_answer_refs = ref([]);

    function getChar(num) {
        // Check if the number is within the range of lowercase alphabet (1-26)
        if (num >= 1 && num <= 26) {
            // Use the ASCII code of 'a' (97) to calculate the character code
            return String.fromCharCode(64 + num); 
        } else {
            // Return null or handle the case where the number is out of range
            return null;
        }
    }

    const section_header_classes = "font-semibold pb-2 text-base"

    const numericAnswer = ref(null);
    if (props.problem && props.problem.input_answer) {
        numericAnswer.value = props.problem.input_answer;
    }

    const questionEditorRef = useTemplateRef('questionEditor')

    const sourceSolutionEditorRef = useTemplateRef('sourceSolutionEditor')

    const submitting = ref(false);
    const submitted = ref(false);

    const saveProblemClicked = async () => {
        submitting.value = true;
        let answer_choices = [];
        for (let answer_choice of mult_choice_answer_refs.value) {
            if (!answer_choice) {continue;}
            if (!answer_choice.editor) {continue;}
            answer_choices.push({
                html: answer_choice.editor.getHTML(),
                json: answer_choice.editor.getJSON()
            })
        }
        let source_solution = {};
        if (selected_problem_source.value != 'own') {
            source_solution = {
                html: sourceSolutionEditorRef.value.editor.getHTML(),
                json: sourceSolutionEditorRef.value.editor.getJSON()
            }
        }

        let data = {
            problem_source: selected_problem_source.value,
            subsource: subsource.value, 
            is_practice_test: is_practice_test.value,
            in_cb_question_bank: in_cb_question_bank.value,
            collegeboard_question_id: collegeBoardQuestionId.value,
            practice_test: selected_practice_test.value,
            section: selected_section.value,
            cb_domain: cb_domain.value,
            cb_skill: cb_skill.value,
            answer_type: selected_answer_type.value,
            input_answer: numericAnswer.value,
            custom_skills: selected_custom_skills.value,
            question: {
                html: questionEditorRef.value.editor.getHTML(),
                json: questionEditorRef.value.editor.getJSON()
            },
            answer_choices: answer_choices, 
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

    const collegeBoardQuestionId = ref('');
    if (props.problem && props.problem.source == 'collegeboard' && props.problem.source_question_id) {
        collegeBoardQuestionId.value = props.problem.source_question_id;
    }

    const math_skills_array = [
        'systems_linear_equations', 'linear_functions', 'linear_equations_two_variables', 
        'linear_equations_one_variable', 'linear_inequalities', 'nonlinear_equations', 
        'nonlinear_functions', 'equivalent_expressions', 'ratios_rates_proportions', 
        'percentages', 'two_variable_data', 'probability', 'one_variable_data', 
        'inference_sample_statistics', 'lines_angles_triangles', 'circles', 
        'area_volume', 'right_triangles_trigonometry'
    ];

    const math_skills_lookup = {
        'systems_of_two_linear_equations_in_two_variables': 'Systems of two linear equations in two variables',
        'linear_functions': 'Linear functions',
        'linear_equations_in_two_variables': 'Linear equations in two variables',
        'linear_equations_in_one_variable': 'Linear equations in one variable',
        'linear_inequalities_in_one_or_two_variables': 'Linear inequalities in one or two variables',
        'nonlinear_equations_in_one_variable_and_systems_of_equations_in_two_variables': 'Nonlinear equations in one variable and systems of equations in two variables',
        'nonlinear_functions': 'Nonlinear functions',
        'equivalent_expressions': 'Equivalent expressions',
        'ratios_rates_proportional_relationships_and_units': 'Ratios, rates, proportional relationships, and units',
        'percentages': 'Percentages',
        'two_variable_data_models_and_scatterplots': 'Two-variable data: Models and scatterplots',
        'probability_and_conditional_probability': 'Probability and conditional probability',
        'one_variable_data_distributions_and_measures_of_center_and_spread': 'One-variable data: Distributions and measures of center and spread',
        'inference_from_sample_statistics_and_margin_of_error': 'Inference from sample statistics and margin of error',
        'lines_angles_and_triangles': 'Lines, angles, and triangles',
        'circles': 'Circles',
        'area_and_volume': 'Area and volume',
        'right_triangles_and_trigonometry': 'Right triangles and trigonometry'
    };
    

    const math_skills = [
        { id: 'systems_of_two_linear_equations_in_two_variables', label: 'Systems of two linear equations in two variables' },
        { id: 'linear_functions', label: 'Linear functions' },
        { id: 'linear_equations_in_two_variables', label: 'Linear equations in two variables' },
        { id: 'linear_equations_in_one_variable', label: 'Linear equations in one variable' },
        { id: 'linear_inequalities_in_one_or_two_variables', label: 'Linear inequalities in one or two variables' },
        { id: 'nonlinear_equations_in_one_variable_and_systems_of_equations_in_two_variables', label: 'Nonlinear equations in one variable and systems of equations in two variables' },
        { id: 'nonlinear_functions', label: 'Nonlinear functions' },
        { id: 'equivalent_expressions', label: 'Equivalent expressions' },
        { id: 'ratios_rates_proportional_relationships_and_units', label: 'Ratios, rates, proportional relationships, and units' },
        { id: 'percentages', label: 'Percentages' },
        { id: 'two_variable_data_models_and_scatterplots', label: 'Two-variable data: Models and scatterplots' },
        { id: 'probability_and_conditional_probability', label: 'Probability and conditional probability' },
        { id: 'one_variable_data_distributions_and_measures_of_center_and_spread', label: 'One-variable data: Distributions and measures of center and spread' },
        { id: 'inference_from_sample_statistics_and_margin_of_error', label: 'Inference from sample statistics and margin of error' },
        { id: 'lines_angles_and_triangles', label: 'Lines, angles, and triangles' },
        { id: 'circles', label: 'Circles' },
        { id: 'area_and_volume', label: 'Area and volume' },
        { id: 'right_triangles_and_trigonometry', label: 'Right triangles and trigonometry' }
    ];

    const reading_writing_skills_lookup = {
        'command_of_evidence': 'Command of Evidence',
        'inferences': 'Inferences',
        'central_ideas_and_details': 'Central Ideas and Details',
        'words_in_context': 'Words in Context',
        'text_structure_and_purpose': 'Text Structure and Purpose',
        'cross_text_connections': 'Cross-Text Connections',
        'rhetorical_synthesis': 'Rhetorical Synthesis',
        'transitions': 'Transitions',
        'boundaries': 'Boundaries',
        'form_structure_and_sense': 'Form, Structure, and Sense'
    }

    const reading_writing_skills = [
        { id: 'command_of_evidence', label: 'Command of Evidence' },
        { id: 'inferences', label: 'Inferences' },
        { id: 'central_ideas_and_details', label: 'Central Ideas and Details' },
        { id: 'words_in_context', label: 'Words in Context' },
        { id: 'text_structure_and_purpose', label: 'Text Structure and Purpose' },
        { id: 'cross_text_connections', label: 'Cross-Text Connections' },
        { id: 'rhetorical_synthesis', label: 'Rhetorical Synthesis' },
        { id: 'transitions', label: 'Transitions' },
        { id: 'boundaries', label: 'Boundaries' },
        { id: 'form_structure_and_sense', label: 'Form, Structure, and Sense' }
    ];

    const selected_math_skill = ref(null);
    const selected_reading_writing_skill = ref(null);
    if (props.problem && props.problem.cb_skill && props.problem.cb_skill in math_skills_lookup) {
        selected_math_skill.value = props.problem.cb_skill;
    }
    if (props.problem && props.problem.cb_skill && props.problem.cb_skill in reading_writing_skills_lookup) {
        selected_reading_writing_skill.value = props.problem.cb_skill;
    }

    const selected_custom_skills = ref([]);

    if (props.problem && props.problem.skills) {
        selected_custom_skills.value = props.problem.skills;
    }

    const custom_skills_options = [
        {id: 'vertex-form', label: 'Vertex Form'}, 
        {id: 'quadratic-equation', label: 'Quadratic Equation'}
    ]

    const getSelectedCustomSkills = () => {

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
    const getSelectedModuleLabel = () => {
        return modules.find(module => module.id === selected_module.value)?.label;
    }

    const mult_choice_correct_answer_index = ref(null);
    if (props.problem && props.problem.mult_choice_answer) {
        mult_choice_correct_answer_index.value = props.problem.mult_choice_answer;
    }

    const selectCorrectAnswerChoice = (index) => {
        mult_choice_correct_answer_index.value = index;
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
    const getSelectedDifficultyLabel = () => {
        return difficulty_levels.find(level => level.id === selected_difficulty.value)?.label;
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
        numericAnswer.value = null;
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
                <div v-if="selected_problem_source">
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
                    <div class="flex flex-col gap-4">
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
                    </div>
                </div>
                <div v-if="selected_answer_type == 'numeric_input'" class="flex flex-col gap-4">
                    <div :class='section_header_classes'>Answer</div>
                    <div class="border border-red-500 border-solid m-0">
                        <UInput v-model="numericAnswer" placeholder="Enter answer" />
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
                    <TagsInput :options="custom_skills_options" />
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
