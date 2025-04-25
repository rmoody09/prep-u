<script setup>
    const props = defineProps(['concept']);
    import Tiptap from '~/components/Tiptap.vue'
    const submitting = ref(false);
    const submitted = ref(false);

    const concept_types = [
        {id: 'concept', 'label': 'Concept'},
        {id: 'skill', 'label': 'Skill'},
        {id: 'category', 'label': 'Category'}, 
        {id: 'formula', 'label': 'Formula'}, 
        {id: 'rule', 'label': 'Rule'}, 
        {id: 'process', 'label': 'Process'}, 
        {id: 'strategy', 'label': 'Strategy'}, 

    ];
    const concept_type = ref('concept_type');

    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];

    if (props.concept) {
        console.log('initial concept');
        console.log(JSON.stringify(props.concept));
    }

    const selected_section = ref(null);
    if (props.concept && props.concept.section) {
        selected_section.value = props.concept.section;
    }


    const descriptionEditorRef = useTemplateRef('descriptionEditor');
    let init_description_content = '';
    if (props.concept && props.concept.description_html) {
        init_description_content = props.concept.description_html;
    }

    const detailedDescriptionEditorRef = useTemplateRef('detailedDescriptionEditor');
    let init_detailed_description_content = '';
    if (props.concept && props.concept.detailed_description_html) {
        init_detailed_description_content = props.concept.detailed_description_html;
    }

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const concept_tag = ref('');
    if (props.concept && props.concept.tag) {   
        concept_tag.value = props.concept.tag;
    }
    const concept_name = ref('');
    
    if (props.concept && props.concept.name) {
        concept_name.value = props.concept.name;
    }
    const concept_description = ref('');
    if (props.concept && props.concept.description) {
        concept_description.value = props.concept.description;
    }
    
    const cb_domain = ref('');
    if (props.concept && props.concept.cb_domain) {
        cb_domain.value = props.concept.cb_domain;
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
    if (props.concept && props.concept.cb_skill) {
        cb_skill.value = props.concept.cb_skill;
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

    const clearForm = () => {
        selected_section.value = '';
        descriptionEditorRef.value.editor.commands.setContent('');
        detailedDescriptionEditorRef.value.editor.commands.setContent('');
        
        concept_tag.value = '';
        concept_name.value = '';
        concept_description.value = '';
        cb_domain.value = '';
        cb_skill.value = '';
        updateSelectCbDomainOptions();
        updateSelectCbSkillOptions();
        selected_parent_tags.value = [];

    }

    const addAnotherConceptClicked = () => {
        clearForm();
        submitted.value = false;
    }

    watch(selected_section, () => {
        console.log('concept section changed');
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

    const selected_parent_tags = ref([]);
    let init_parent_tags = [];
    if (props.concept?.parent_concepts) {
        init_parent_tags = props.concept.parent_concepts;
    }

    const selected_sub_concepts = ref([]);
    let init_sub_concepts = [];
    if (props.concept?.sub_concepts) {
        init_sub_concepts = props.concept.sub_concepts;
    }


    const select_option_header_classes = "font-semibold pb-2 text-base";

    const saveConceptClicked = async () => {
        submitting.value = true;
        const parent_tags = selected_parent_tags.value.map(tag => tag.id);
        const sub_concepts = selected_sub_concepts.value.map(tag => tag.id);
        let data = {
            tag: concept_tag.value,
            name: concept_name.value,
            description_html: descriptionEditorRef.value.editor.getHTML(),
            description_json: descriptionEditorRef.value.editor.getJSON(),
            detailed_description_html: detailedDescriptionEditorRef.value.editor.getHTML(),
            detailed_description_json: detailedDescriptionEditorRef.value.editor.getJSON(), 
            concept_type: concept_type.value,
            test_section: selected_section.value, 
            cb_domain: cb_domain.value,
            cb_skill: cb_skill.value, 
            parent_concepts: parent_tags, 
            sub_concepts: sub_concepts,
        }

        console.log('data');
        console.log(JSON.stringify(data));
        
        if (props.concept && props.concept.id) {
            data.id = props.concept.id;
            const resp = await $fetch("/api/edit/concept/" + props.concept.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
        } else {
            const resp = await fetch("/api/add/concept", {
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
    <div class="concept-tag-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div class="pb-3">Concept saved successfully</div>
                <div class="flex flex-row gap-3">
                    <UButton @click="addAnotherConceptClicked">Add another concept</UButton>
                    <UButton variant="outline" to="/sat-concepts/sat-test" >All concepts</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class="select_option_header_classes">Concept Name</div>
                    <UInput v-model="concept_name" type="text" placeholder="Concept Name" />
                </div>
                <div>
                    <div :class="select_option_header_classes">Concept Tag</div>
                    <UInput v-model="concept_tag" type="text" placeholder="Concept Tag" />
                </div>

                <div>
                    <div :class='select_option_header_classes'>Description</div>
                    <Tiptap 
                        ref="descriptionEditor"
                        :init_content="init_description_content"
                    />
                </div>

                <div>
                    <div :class='select_option_header_classes'>Detailed Description</div>
                    <Tiptap 
                        ref="detailedDescriptionEditor"
                        :init_content="init_detailed_description_content"
                    />
                </div>

                <div>
                    <div :class="select_option_header_classes">Concept Type</div>
                    <USelectMenu v-model="concept_type" :options="concept_types" value-attribute="id" option-attribute="label" />
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
                    <div :class='select_option_header_classes'>Parent Concepts</div>
                    <ConceptTagsSelector v-model="selected_parent_tags" :init_concepts="init_parent_tags" />
                </div>

                <div>
                    <div :class='select_option_header_classes'>Sub Concepts</div>
                    <ConceptTagsSelector v-model="selected_sub_concepts" :init_concepts="init_sub_concepts" />
                </div>

                <div class="pt-4">
                    <UButton @click="saveConceptClicked">Save Concept</UButton>
                </div>
            </div>
        </div>
    </div>
</template>