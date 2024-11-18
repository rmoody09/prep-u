<script setup>
    const props = defineProps(['skill']);
    import Tiptap from '~/components/Tiptap.vue'
    const submitting = ref(false);
    const submitted = ref(false);
    
    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];

    const selected_section = ref(null);
    if (props.skill && props.skill.test_section) {
        selected_section.value = props.skill.test_section;
    }


    const descriptionEditorRef = useTemplateRef('descriptionEditor');
    let init_description_content = '';
    if (props.skill && props.skill.description_html) {
        init_description_content = props.skill.description_html;
    }

    const detailedDescriptionEditorRef = useTemplateRef('detailedDescriptionEditor');
    let init_detailed_description_content = '';
    if (props.skill && props.skill.detailed_description_html) {
        init_detailed_description_content = props.skill.detailed_description_html;
    }

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const skill_tag = ref('');
    if (props.skill && props.skill.tag) {   
        skill_tag.value = props.skill.tag;
    }
    const skill_name = ref('');
    if (props.skill && props.skill.name) {
        skill_name.value = props.skill.name;
    }
    const skill_description = ref('');
    if (props.skill && props.skill.description) {
        skill_description.value = props.skill.description;
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

    
    const clearForm = () => {
        selected_section.value = '';
        descriptionEditorRef.value.editor.commands.setContent('');
        detailedDescriptionEditorRef.value.editor.commands.setContent('');
        
        skill_tag.value = '';
        skill_name.value = '';
        skill_description.value = '';
        cb_domain.value = '';
        cb_skill.value = '';
        updateSelectCbDomainOptions();
        updateSelectCbSkillOptions();
        selected_parent_skills.value = [];
        selected_subskills.value = [];

    }

    const addAnotherSkillClicked = () => {
        clearForm();
        submitted.value = false;
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

    const selected_parent_skills = ref([]);
    const selected_subskills = ref([]);
    let init_parent_skills = [];
    if (props.skill?.parent_skills) {
        init_parent_skills = props.skill.parent_skills;
    }
    let init_subskills = [];
    if (props.skill?.subskills) {
        init_subskills = props.skill.subskills;
    }

    const select_option_header_classes = "font-semibold pb-2 text-base";

    const saveSkillClicked = async () => {
        submitting.value = true;
        const parent_skills = selected_parent_skills.value.map(skill => skill.tag);
        const subskills = selected_subskills.value.map(skill => skill.tag);
        let data = {
            tag: skill_tag.value,
            name: skill_name.value,
            description_html: descriptionEditorRef.value.editor.getHTML(),
            description_json: descriptionEditorRef.value.editor.getJSON(),
            detailed_description_html: detailedDescriptionEditorRef.value.editor.getHTML(),
            detailed_description_json: detailedDescriptionEditorRef.value.editor.getJSON(), 
            test_section: selected_section.value, 
            cb_domain: cb_domain.value,
            cb_skill: cb_skill.value, 
            parent_skills: parent_skills,
            subskills: subskills
        }
        
        if (props.skill) {
            data.id = props.skill.id;
            const resp = await $fetch("/api/edit/sat-skill/" + props.skill.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
        } else {
            const resp = await fetch("/api/add/sat-skill", {
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
    <div class="problem-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div class="pb-3">Skill saved successfully</div>
                <div class="flex flex-row gap-3">
                    <UButton @click="addAnotherSkillClicked">Add another skill</UButton>
                    <UButton variant="outline" to="/sat-skills" >All skills</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class="select_option_header_classes">Skill Name</div>
                    <UInput v-model="skill_name" type="text" placeholder="Skill Name" />
                </div>
                <div>
                    <div :class="select_option_header_classes">Skill Tag</div>
                    <UInput v-model="skill_tag" type="text" placeholder="Skill ID" />
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
                    <div :class='select_option_header_classes'>Parent Skills</div>
                    <SATSkillsSelector v-model="selected_parent_skills" :init_skills="init_parent_skills" />
                </div>
                <div>
                    <div :class='select_option_header_classes'>Subskills</div>
                    <SATSkillsSelector v-model="selected_subskills"  :init_skills="init_subskills" />
                </div>
                <div class="pt-4">
                    <UButton @click="saveSkillClicked">Save Skill</UButton>
                </div>
            </div>
        </div>
    </div>
</template>