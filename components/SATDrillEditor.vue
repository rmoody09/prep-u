<script setup>

const props = defineProps(['drill']);
    import Tiptap from '~/components/Tiptap.vue'
    const submitting = ref(false);
    const submitted = ref(false);
    
    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];


    const selected_math_section = ref(null);
    if (props.problem && props.problem.test_section == 'math' && props.problem.cb_domain) {
        selected_math_section.value = props.problem.cb_domain;
    }

    const reading_writing_sections = [
        {id: 'info_and_ideas', 'label': 'Information and Ideas'},
        {id: 'craft_and_structure', 'label': 'Craft and Structure'}, 
        {id: 'standard_english', 'label': 'Standard English'}, 
        {id: 'expression_of_ideas', 'label': 'Expression of Ideas'}
    ];

    const questionEditorRef = useTemplateRef('questionEditor');
    let init_question_content = '';
    if (props.drill && props.drill.question_html) {
        init_question_content = props.drill.question_html;
    }

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const selected_reading_writing_section = ref(null);
    if (props.problem && props.problem.test_section == 'reading_writing' && props.problem.cb_domain) {
        selected_reading_writing_section.value = props.problem.cb_domain;
    }
    const getSelectedReadingWritingSectionLabel = () => {
        return reading_writing_sections.find(source => source.id === selected_reading_writing_section.value)?.label;
    }

   
    const selected_section = ref(null);
    if (props.drill && props.drill.test_section) {
        selected_section.value = props.drill.test_section;
    }
    const cb_domain = ref('');
    if (props.drill && props.drill.cb_domain) {
        cb_domain.value = props.drill.cb_domain;
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
    if (props.drill && props.drill.cb_skill) {
        cb_skill.value = props.drill.cb_skill;
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

    const addAnotherDrillClicked = () => {
        cb_skill.value = '';
    }

    watch(selected_section, () => {
        console.log('skill section changed');
        console.log(selected_section.value);
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

    const select_option_header_classes = "font-semibold pb-2 text-base";


    const answer_types = [
        {id: 'multiple_choice', 'label': 'Multiple Choice'},
        {id: 'numeric_input', 'label': 'Numeric Input'}, 
        {id: 'text_input', 'label': 'Text Input'}
    ];
    const selected_answer_type = ref(null);
    if (props.drill && props.drill.answer_type) {
        selected_answer_type.value = props.drill.answer_type;
    }

    const answer_is_exact = ref(false);
    if (props.drill && props.drill.answer_is_exact) {
        answer_is_exact.value = props.drill.answer_is_exact;
    }

    const answer_choices = ref([
        {content: "Answer 1"}, 
        {content: "Answer 2"}, 
        {content: "Answer 3"}, 
        {content: "Answer 4"}
    ]);
    if (props.drill && props.drill.answer_choices) {
        let choices = [];
        for (let choice of props.drill.answer_choices) {
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

    //todo - allow multiple numeric answers
    const numericAnswer = ref(null);
    if (props.drill && props.drill.input_answer) {
        numericAnswer.value = props.drill.input_answer;
    }

    function reformatString(input) {
        // Remove all non-digit, non-slash, non-decimal characters
        let cleaned = input.replace(/[^\d/.]/g, '');
        
        // Keep only the first slash
        let parts = cleaned.split('/');
        cleaned = parts.slice(0, 2).join('/');
        
        // Handle decimals in each part
        parts = cleaned.split('/');
        cleaned = parts.map(part => {
            let decimals = part.split('.');
            return decimals.slice(0, 2).join('.');
        }).join('/');
        
        return cleaned;
    }



    watch(numericAnswer, () => {
        console.log('numericAnswer changed');
        console.log(numericAnswer.value);
        //numericAnswer.value = numericAnswer.value.replace(/[^0-9.//]/g, '');
        //return;
        //let stripped = numericAnswer.value.replace(/[^0-9.//]/g, '');
        //const regex = /^(?!.*\/.*\/)(?!.*\..*\.)\d*\.?\d*\/?\.?\d*$/;
        let stripped = reformatString(numericAnswer.value);
        console.log('stripped');
        console.log(stripped);
        if (stripped != numericAnswer.value) {
            console.log('stripped is different');
            nextTick(() => {
                numericAnswer.value = stripped;
            });
        }
    });

    const textAnswerEditorRef = useTemplateRef('textAnswerEditor');
    let init_text_answer_content = '';
    if (props.drill && props.drill.input_answer_html) {
        init_text_answer_content = props.drill.input_answer_html;
    } else if (props.drill && props.drill.input_answer) {
        init_text_answer_content = props.drill.input_answer;
    }

    const explanationEditorRef = useTemplateRef('explanationEditor');
    let init_explanation_content = '';
    if (props.drill && props.drill.explanation_html) {
        init_explanation_content = props.drill.explanation_html;
    } else if (props.drill && props.drill.explanation_text) {
        init_explanation_content = props.drill.explanation_text;
    }



    const saveDrillClicked = async () => {
        submitting.value = true;

        let data = {
        }
        
        if (props.drill) {
            data.id = props.drill.id;
            const resp = await $fetch("/api/edit/sat-drill/" + props.drill.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
        } else {
            const resp = await fetch("/api/add/sat-drill", {
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
   
</script>

<template>
    <div class="drill-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div>Skill saved successfully</div>
                <div>
                    <UButton @click="addAnotherSkillClicked">Add another skill</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class='select_option_header_classes'>Question</div>
                    <Tiptap 
                        ref="questionEditorRef"
                        :init_content="init_question_content"
                    />
                </div>
                <div>
                    <div :class='select_option_header_classes'>Answer Type</div>
                    <span>
                        <USelectMenu v-model="selected_answer_type" :options="answer_types" placeholder="Answer Type" value-attribute="id" option-attribute="label" />
                    </span>
                </div>
                <div v-if="selected_answer_type == 'multiple_choice'">
                    <div :class='select_option_header_classes'>Answer Options</div>
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
                <div v-else-if="selected_answer_type == 'numeric_input'" class="flex flex-col gap-4">
                    <div :class='select_option_header_classes'>Answer</div>
                    <div class="border border-red-500 border-solid m-0">
                        <UInput v-model="numericAnswer" placeholder="Enter answer" />
                    </div>
                </div>
                <div v-else-if="selected_answer_type == 'text_input'" class="flex flex-col gap-4">
                    <div :class='select_option_header_classes'>Answer</div>
                    <div>
                        <Tiptap 
                            ref="textAnswerEditorRef"
                            :init_content="init_text_answer_content"
                        />
                    </div>
                    <div class="flex items-center gap-2">
                        <UCheckbox v-model="answer_is_exact" label="Answer must match exactly" />
                    </div>
                </div>
                <div>
                    <div :class='select_option_header_classes'>Explanation</div>
                    <div>
                        <Tiptap 
                            ref="explanationEditorRef"
                            :init_content="init_explanation_content"
                        />
                    </div>
                </div>

                <div>
                    <div :class="select_option_header_classes">Test Section</div>
                    <USelectMenu v-model="selected_section" :options="test_sections" value-attribute="id" option-attribute="label" />
                </div>
                <div>
                    <div :class="select_option_header_classes">College Board Domain</div>
                    <USelectMenu v-model="cb_domain" :options="select_cb_domain_options" value-attribute="id" option-attribute="label" />
                </div>
                <div>
                    <div :class="select_option_header_classes">College Board Skill</div>
                    <USelectMenu v-model="cb_skill" :options="select_cb_skill_options" value-attribute="id" option-attribute="label" />
                </div>
            </div>
        </div>
    </div>
</template>