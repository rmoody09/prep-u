<script setup>
    import Tiptap from '~/components/Tiptap.vue'
    import TagsInput from '~/components/TagsInput.vue'

    const problem_sources = [
        {id: 'bluebook', 'label': 'Bluebook'},
        {id: 'own', 'label': 'Own'}
    ];
    const selected_problem_source = ref(null);
    const getSelectedSourceLabel = () => {
        return problem_sources.find(source => source.id === selected_problem_source.value)?.label;
    }

    const cb_subsources = [
        {id: 'practice_test', 'label': 'Practice Test'},
        {id: 'question_bank', 'label': 'Question Bank'}
    ];
    const selected_cb_subsource = ref(null);
    const getSelectedSubSourceLabel = () => {
        return cb_subsources.find(source => source.id === selected_cb_subsource.value)?.label;
    }

    const test_sections = [
        {id: 'reading_writing', 'label': 'Reading and Writing'},
        {id: 'math', 'label': 'Math'}
    ];
    const selected_section = ref(null);
    const getSelectedSectionLabel = () => {
        return test_sections.find(source => source.id === selected_section.value)?.label;
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
    const getSelectedPracticeTestLabel = () => {
        return practice_tests.find(source => source.id === selected_practice_test.value)?.label;
    }

    const math_sections = [
        {id: 'algebra', 'label': 'Algebra'},
        {id: 'advanced_math', 'label': 'Advanced Math'}, 
        {id: 'problem_solving_data', 'label': 'Problem Solving and Data Analysis'}, 
        {id: 'geometry_trig', 'label': 'Geometry and Trigonometry'}
    ];
    const selected_math_section = ref(null);
    const getSelectedMathSectionLabel = () => {
        return math_sections.find(source => source.id === selected_math_section.value)?.label;
    }

    const reading_writing_sections = [
        {id: 'info_and_ideas', 'label': 'Information and Ideas'},
        {id: 'craft_and_structure', 'label': 'Craft and Structure'}, 
        {id: 'standard_english', 'label': 'Standard English'}, 
        {id: 'expression_of_ideas', 'label': 'Expression of Ideas'}
    ];
    const selected_reading_writing_section = ref(null);
    const getSelectedReadingWritingSectionLabel = () => {
        return reading_writing_sections.find(source => source.id === selected_reading_writing_section.value)?.label;
    }

    const answer_types = [
        {id: 'multiple_choice', 'label': 'Multiple Choice'},
        {id: 'numeric_input', 'label': 'Numeric Input'}
    ];
    const selected_answer_type = ref(null);
    const getSelectedAnswerTypeLabel = () => {
        return answer_types.find(type => type.id === selected_answer_type.value)?.label;
    }

    const answer_choices = ref([
        {content: "Answer 1"}, 
        {content: "Answer 2"}, 
        {content: "Answer 3"}, 
        {content: "Answer 4"}
    ]);

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

    const questionEditorRef = useTemplateRef('questionEditor')

    const saveProblemClicked = async () => {
        console.log('saveProblemClicked');
        console.log(questionEditorRef.value.editor.getJSON())
        console.log(questionEditorRef.value.editor.getHTML())
        let answer_choices = [];
        for (let answer_choice of mult_choice_answer_refs.value) {
            console.log('answer choice')
            console.log(answer_choice.editor.getHTML())
            console.log(answer_choice.editor.getJSON())
            answer_choices.push({
                html: answer_choice.editor.getHTML(),
                json: answer_choice.editor.getJSON()
            })
        }

        let data = {
            problem_source: selected_problem_source.value,
            cb_subsource: selected_cb_subsource.value,
            collegeboard_question_id: collegeBoardQuestionId.value,
            practice_test: selected_practice_test.value,
            section: selected_section.value,
            math_section: selected_math_section.value,
            reading_writing_section: selected_reading_writing_section.value,
            math_skill: selected_math_skill.value,
            reading_writing_skill: selected_reading_writing_skill.value,
            answer_type: selected_answer_type.value,
            numeric_answer: numericAnswer.value,
            custom_skills: selected_custom_skills.value,
            question: {
                html: questionEditorRef.value.editor.getHTML(),
                json: questionEditorRef.value.editor.getJSON()
            },
            answer_choices: answer_choices, 
            mult_choice_correct_answer_index: mult_choice_correct_answer_index.value,
            module: selected_module.value
        }
        console.log('data');
        console.log(data);
        const resp = await $fetch("/api/add-problem", {
            method: "POST",
            body: data
        });
        console.log(resp);
    }

    const collegeBoardQuestionId = ref('');

    const math_skills = [
        { id: 'systems_linear_equations', label: 'Systems of two linear equations in two variables' },
        { id: 'linear_functions', label: 'Linear functions' },
        { id: 'linear_equations_two_variables', label: 'Linear equations in two variables' },
        { id: 'linear_equations_one_variable', label: 'Linear equations in one variable' },
        { id: 'linear_inequalities', label: 'Linear inequalities in one or two variables' },
        { id: 'nonlinear_equations', label: 'Nonlinear equations in one variable and systems of equations in two variables' },
        { id: 'nonlinear_functions', label: 'Nonlinear functions' },
        { id: 'equivalent_expressions', label: 'Equivalent expressions' },
        { id: 'ratios_rates_proportions', label: 'Ratios, rates, proportional relationships, and units' },
        { id: 'percentages', label: 'Percentages' },
        { id: 'two_variable_data', label: 'Two-variable data: Models and scatterplots' },
        { id: 'probability', label: 'Probability and conditional probability' },
        { id: 'one_variable_data', label: 'One-variable data: Distributions and measures of center and spread' },
        { id: 'inference_sample_statistics', label: 'Inference from sample statistics and margin of error' },
        { id: 'lines_angles_triangles', label: 'Lines, angles, and triangles' },
        { id: 'circles', label: 'Circles' },
        { id: 'area_volume', label: 'Area and volume' },
        { id: 'right_triangles_trigonometry', label: 'Right triangles and trigonometry' }
    ];

    const reading_writing_skills = [
        { id: 'command_of_evidence', label: 'Command of Evidence' },
        { id: 'inferences', label: 'Inferences' },
        { id: 'central_ideas_details', label: 'Central Ideas and Details' },
        { id: 'words_in_context', label: 'Words in Context' },
        { id: 'text_structure_purpose', label: 'Text Structure and Purpose' },
        { id: 'cross_text_connections', label: 'Cross-Text Connections' },
        { id: 'rhetorical_synthesis', label: 'Rhetorical Synthesis' },
        { id: 'transitions', label: 'Transitions' },
        { id: 'boundaries', label: 'Boundaries' },
        { id: 'form_structure_sense', label: 'Form, Structure, and Sense' }
    ];

    const selected_math_skill = ref(null);
    const selected_reading_writing_skill = ref(null);

    const getSelectedMathSkillLabel = () => {
        return math_skills.find(skill => skill.id === selected_math_skill.value)?.label;
    }

    const getSelectedReadingWritingSkillLabel = () => {
        return reading_writing_skills.find(skill => skill.id === selected_reading_writing_skill.value)?.label;
    }

    const selected_custom_skills = ref([]);

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
    const getSelectedModuleLabel = () => {
        return modules.find(module => module.id === selected_module.value)?.label;
    }

    const mult_choice_correct_answer_index = ref(null);

    const selectCorrectAnswerChoice = (index) => {
        mult_choice_correct_answer_index.value = index;
    }

</script>

<template>
    <div class="p-6">
        <h1 class="text-xl font-extrabold pb-6">Add Problem</h1>
        <div class="max-w-md w-full">
            <div class="flex flex-col gap-6">
                <div>
                    <div :class='section_header_classes'>Source</div>
                    <USelectMenu v-model="selected_problem_source" :options="problem_sources" placeholder="Problem Source" value-attribute="id" option-attribute="label" />
                </div>
                <div v-if="selected_problem_source == 'bluebook'">
                    <div :class='section_header_classes'>Subsource</div>
                    <span>
                        <USelectMenu v-model="selected_cb_subsource" :options="cb_subsources" placeholder="Subsource" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div v-if="selected_problem_source == 'bluebook'">
                    <div :class='section_header_classes'>CollegeBoard Question ID</div>
                    <UInput v-model="collegeBoardQuestionId" placeholder="Enter CollegeBoard Question ID" />
                </div>
                <div v-if="selected_cb_subsource == 'practice_test'">
                    <div :class='section_header_classes'>Practice Test #</div>
                    <USelectMenu v-model="selected_practice_test" :options="practice_tests" placeholder="Practice Test" value-attribute="id" option-attribute="label" />
                </div>
                <div v-if="selected_cb_subsource == 'practice_test'">
                    <div :class='section_header_classes'>Module</div>
                    <USelectMenu v-model="selected_module" :options="modules" placeholder="Module" value-attribute="id" option-attribute="label" />
                </div>
                <div v-if="selected_problem_source">
                    <div :class='section_header_classes'>Test Section</div>
                    <span v-if="selected_problem_source">
                        <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div v-if="selected_section">
                    <div :class='section_header_classes'>Subsection</div>
                    <span v-if="selected_section == 'math'">
                        <USelectMenu v-model="selected_math_section" :options="math_sections" placeholder="Math Section" value-attribute="id" option-attribute="label" />
                    </span>
                    <span v-else-if="selected_section == 'reading_writing'">
                        <USelectMenu v-model="selected_reading_writing_section" :options="reading_writing_sections" placeholder="Reading Writing Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div>  
                <div v-if="selected_section">
                    <div :class='section_header_classes'>CollegeBoard Skill</div>
                    <span v-if="selected_section == 'math'">
                        <USelectMenu v-model="selected_math_skill" :options="math_skills" placeholder="Math Skill" value-attribute="id" option-attribute="label" />
                    </span>
                    <span v-else-if="selected_section == 'reading_writing'">
                        <USelectMenu v-model="selected_reading_writing_skill" :options="reading_writing_skills" placeholder="Reading Writing Skill" value-attribute="id" option-attribute="label" />
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
                        <UInput v-model="numericAnswer" type="number" placeholder="Enter numeric answer" />
                    </div>
                </div>
                <div>
                    <div :class='section_header_classes'>Custom Skills</div>
                    <TagsInput :options="custom_skills_options" />
                </div>
                <div>
                    <UButton @click="saveProblemClicked">Add Problem</UButton>
                </div>
            </div>
        </div>
    </div>
</template>