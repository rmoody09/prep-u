<script setup>

    const props = defineProps(['drill']);
    import Tiptap from '~/components/Tiptap.vue'
    const submitting = ref(false);
    const submitted = ref(false);
    
    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];

    

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    
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
   
    

    const clearForm = () => {
        instructionsEditorRef.value.editor.commands.setContent('');
        questionEditorRef.value.editor.commands.setContent('');
        selected_section.value = '';
        cb_domain.value = '';
        cb_skill.value = '';
        textAnswerEditorRef.value.editor.commands.setContent('');
        answer_is_exact.value = false;
        mult_choice_correct_answer_index.value = null;
        answer_choices.value = [
            {content: ""}, 
            {content: ""}, 
            {content: ""}, 
            {content: ""}
        ]; 
        explanationEditorRef.value.editor.commands.setContent('');

    }

    const addAnotherDrillClicked = () => {
        clearForm();
        submitted.value = false;

    }

    

    const select_option_header_classes = "font-semibold pb-2 text-base";


    const has_numeric_input = ref(false);
    if (props.drill && props.drill.has_numeric_input) {
        has_numeric_input.value = props.drill.has_numeric_input;
    }

    const has_text_input = ref(false);
    if (props.drill && props.drill.has_text_input) {
        has_text_input.value = props.drill.has_text_input;
    }

    const has_multiple_choice = ref(false);
    if (props.drill && props.drill.has_multiple_choice) {
        has_multiple_choice.value = props.drill.has_multiple_choice;
    }

    const answer_is_exact = ref(false);
    if (props.drill && props.drill.answer_is_exact) {
        answer_is_exact.value = props.drill.answer_is_exact;
    }

    const answer_choices = ref([
        {content: ""}, 
        {content: ""}, 
        {content: ""}, 
        {content: ""}
    ]);
    if (props.drill && props.drill.answer_choices) {
        let choices = [];
        for (let choice of props.drill.answer_choices) {
            choices.push({content: choice.json})
        }
        answer_choices.value = [...choices];
    }

    const mult_choice_options_editor_ref = useTemplateRef('multChoiceOptionsEditor');
    let init_mult_choice_correct_answer_index = -1;
    if (props.drill && props.drill.mult_choice_answer) {
        init_mult_choice_correct_answer_index = props.drill.mult_choice_answer;
    }
    let init_mult_choice_correct_answer_indices = [];
    if (props.drill && props.drill.mult_choice_answers) {
        init_mult_choice_correct_answer_indices = props.drill.mult_choice_answers;
    }


    const numeric_answers = ref({answers: [{label: '', value: '', is_label: false}], require_all: true, is_label: false, label: ''});
    if (props.drill && props.drill.numeric_answers) {
        numeric_answers.value = props.drill.numeric_answers;
    }

    const instructionsEditorRef = useTemplateRef('instructionsEditor');
    let init_instructions_content = '';
    if (props.drill && props.drill.instructions_html) {
        init_instructions_content = props.drill.instructions_html;
    }
    
    const questionEditorRef = useTemplateRef('questionEditor');
    let init_question_content = '';
    if (props.drill && props.drill.question_html) {
        init_question_content = props.drill.question_html;
    }


    const textAnswerEditorRef = useTemplateRef('textAnswerEditor');
    let init_text_answer_content = '';
    if (props.drill && props.drill.text_answer_html) {
        init_text_answer_content = props.drill.text_answer_html;
    } else if (props.drill && props.drill.text_answer_json) {
        init_text_answer_content = props.drill.text_answer_json;
    }

    const explanationEditorRef = useTemplateRef('explanationEditor');
    let init_explanation_content = '';
    if (props.drill && props.drill.explanation_html) {
        init_explanation_content = props.drill.explanation_html;
    } else if (props.drill && props.drill.explanation_text) {
        init_explanation_content = props.drill.explanation_text;
    }

    const selected_custom_skills = ref([]);
    let init_custom_skills = [];
    if (props.drill && props.drill.custom_skills) {
        init_custom_skills = props.drill.custom_skills;
    }

    const selected_concepts = ref([]);
    let init_concepts = [];
    if (props.drill && props.drill.concepts) {
        init_concepts = props.drill.concepts;
    }

    const is_text_answer_label = ref(false);
    const text_answer_label = ref('');
    const addTextAnswerLabel = () => {
        is_text_answer_label.value = true;
    }
    const removeTextAnswerLabel = () => {
        is_text_answer_label.value = false;
    }

    // Initialize selected concepts from init_concepts
    onMounted(async () => {
        if (init_concepts.length > 0) {
            const client = useSupabaseClient()
            const { data, error } = await client.from('concept_tags')
                .select()
                .in('id', init_concepts)
            
            if (error) {
                console.error('Error loading initial concepts:', error)
                return
            }
            
            selected_concepts.value = data
        }
    })

    const showConceptsModal = ref(false)

    function removeConcept(concept) {
        const index = selected_concepts.value.findIndex(c => c.id === concept.id)
        if (index !== -1) {
            selected_concepts.value.splice(index, 1)
        }
    }

    const saveDrillClicked = async () => {
        submitting.value = true;
        const custom_skills = selected_custom_skills.value.map(skill => skill.id);
        const concepts = selected_concepts.value.map(concept => concept.id);
        let db_answer_choices = [];
        let mult_choice_section_label = null;
        let mult_choice_correct_answer_index = null;
        let mult_choice_correct_answer_indices = [];
        let allow_multiple_selection = false;
        if (has_multiple_choice.value) {
            let mult_choice_data = mult_choice_options_editor_ref.value.getOptions();
            db_answer_choices = mult_choice_data.options;
            if (mult_choice_data.label) {
                mult_choice_section_label = mult_choice_data.label;
            }
            mult_choice_correct_answer_index = mult_choice_data.answer_index;
            mult_choice_correct_answer_indices = mult_choice_data.answer_indices;
            allow_multiple_selection = mult_choice_data.select_multiple_enabled;
        }

        let numeric_answers_label = null;
        if (numeric_answers.value.is_label) {
            numeric_answers_label = numeric_answers.value.label;
        }
        let text_answer_instructions = null;
        if (is_text_answer_label.value) {
            text_answer_instructions = text_answer_label.value;
        }
        console.log('numeric_answers', JSON.stringify(numeric_answers.value));
        
        let data = {
            instructions_html: instructionsEditorRef.value?.editor?.getHTML(),
            instructions_json: instructionsEditorRef.value?.editor?.getJSON(),
            question_html: questionEditorRef.value?.editor?.getHTML(),
            question_json: questionEditorRef.value?.editor?.getJSON(),
            text_answer_html: textAnswerEditorRef.value?.editor?.getHTML(),
            text_answer_json: textAnswerEditorRef.value?.editor?.getJSON(),
            custom_skills: custom_skills, 
            concepts: concepts,
            test_section: selected_section.value, 
            cb_domain: cb_domain.value, 
            cb_skill: cb_skill.value,
            has_numeric_input: has_numeric_input.value,
            has_text_input: has_text_input.value,
            has_multiple_choice: has_multiple_choice.value,
            numeric_answers: numeric_answers.value.answers, 
            numeric_answers_label: numeric_answers_label, 
            require_all_numeric_answers: numeric_answers.value.require_all,
            text_answer_html: textAnswerEditorRef.value?.editor?.getHTML(), 
            text_answer_json: textAnswerEditorRef.value?.editor?.getJSON(), 
            text_answer_label: text_answer_instructions,
            answer_is_exact: answer_is_exact.value,
            answer_choices: db_answer_choices,
            mult_choice_label: mult_choice_section_label,
            mult_choice_correct_answer_index: mult_choice_correct_answer_index,
            mult_choice_correct_answer_indices: mult_choice_correct_answer_indices,
            allow_multiple_selection: allow_multiple_selection,
            explanation_html: explanationEditorRef.value?.editor?.getHTML(), 
            explanation_json: explanationEditorRef.value?.editor?.getJSON(),
        };
        
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
            const resp_json = await resp.json();
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
                    <UButton @click="addAnotherDrillClicked">Add another drill</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class='select_option_header_classes'>Instructions</div>
                    <Tiptap 
                        ref="instructionsEditor"
                        :init_content="init_instructions_content"
                    />
                </div>
                <div>
                    <div :class='select_option_header_classes'>Question</div>
                    <Tiptap 
                        ref="questionEditor"
                        :init_content="init_question_content"
                    />
                </div>
                <div>
                    <div :class='select_option_header_classes'>Answer Type(s)</div>
                    <div>
                        <UCheckbox v-model="has_numeric_input" label="Numeric Input" />
                        <UCheckbox v-model="has_text_input" label="Text Input" />
                        <UCheckbox v-model="has_multiple_choice" label="Multiple Choice" />
                    </div>
                </div> 
                <div v-if="has_multiple_choice">
                    <div :class='select_option_header_classes'>Answer Options</div>
                    <MultipleChoiceOptionsEditor ref="multChoiceOptionsEditor" :answer_index="init_mult_choice_correct_answer_index" :answer_indices="init_mult_choice_correct_answer_indices" :answer_choices="answer_choices" :can_select_multiple="true" />
                </div>
                <div v-if="has_numeric_input" class="flex flex-col gap-4">
                    <div :class='select_option_header_classes'>Numeric Answer(s)</div>
                    <div>
                        <NumericAnswerInputsEditor v-model="numeric_answers" />
                    </div>
                </div>
                <div v-if="has_text_input" class="flex flex-col gap-4">
                    <div :class='select_option_header_classes'>Text Answer</div>
                    <div>
                        <Tiptap 
                            ref="textAnswerEditor"
                            :init_content="init_text_answer_content"
                        />
                    </div>
                    <div class="flex items-center gap-2">
                        <UCheckbox v-model="answer_is_exact" label="Answer must match exactly" />
                    </div>
                    <div v-if="!is_text_answer_label">
                        <UButton @click="addTextAnswerLabel" size="sm" variant="ghost">Add label</UButton>
                    </div>
                    <div v-else class="flex items-center gap-2">
                        <UInput v-model="text_answer_label" placeholder="Label" class="grow" />
                        <UButton icon="i-lucide-x" square variant="ghost" size="xs" @click="removeTextAnswerLabel" />
                    </div>
                </div>
                <div>
                    <div :class='select_option_header_classes'>Explanation</div>
                    <div>
                        <Tiptap 
                            ref="explanationEditor"
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

                <div>
                    <div :class='select_option_header_classes'>Custom Skills</div>
                    <SATSkillsSelector v-model="selected_custom_skills" :init_skills="init_custom_skills" />
                </div>
                <div>
                    <div :class='select_option_header_classes'>Concepts</div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div
                            v-for="concept in selected_concepts"
                            :key="concept.id"
                            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                        >
                            <span>{{ concept.name }}</span>
                            <button
                                @click="removeConcept(concept)"
                                class="ml-2 text-blue-600 hover:text-blue-800"
                            >
                                ×
                            </button>
                        </div>
                        <button
                            @click="showConceptsModal = true"
                            class="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <span class="mr-1">+</span>
                            Add Concepts
                        </button>
                    </div>
                </div>

                <!-- Concepts Selection Modal -->
                <UModal v-model="showConceptsModal" :ui="{ width: 'md:max-w-[90vw]' }">
                    <UCard>
                        <template #header>
                            <div class="flex justify-between items-center w-full">
                                <h3 class="text-lg font-semibold">Select Concepts</h3>
                                <UButton
                                    color="gray"
                                    variant="ghost"
                                    icon="i-heroicons-x-mark"
                                    @click="showConceptsModal = false"
                                />
                            </div>
                        </template>
                        <div class="p-4">
                            <ConceptsSelector v-model="selected_concepts" />
                        </div>
                        <template #footer>
                            <div class="flex justify-end">
                                <UButton
                                    color="primary"
                                    @click="showConceptsModal = false"
                                >
                                    Done
                                </UButton>
                            </div>
                        </template>
                    </UCard>
                </UModal>

                <div>
                    <UButton @click="saveDrillClicked">Save</UButton>
                </div>
                <div class='h-20'></div>
            </div>
        </div>
    </div>
</template>