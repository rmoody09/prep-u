<script setup>
    const props = defineProps(['category']);
    import Tiptap from '~/components/Tiptap.vue'
    const submitting = ref(false);
    const submitted = ref(false);

    const test_sections = [
        {id: 'math', 'label': 'Math'},  
        {id: 'reading_writing', 'label': 'Reading and Writing'}
    ];

    if (props.category) {
        console.log('initial category');
        console.log(JSON.stringify(props.category));
    }

    const discipline = ref('sat');
    if (props.category && props.category.discipline) {
        discipline.value = props.category.discipline;
    }

    const selected_section = ref(null);
    if (props.category && props.category.section) {
        selected_section.value = props.category.section;
    }

    const descriptionEditorRef = useTemplateRef('descriptionEditor');
    let init_description_content = '';
    if (props.category && props.category.description_html) {
        init_description_content = props.category.description_html;
    }

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

    const cb_domain_lookup = getCbDomainLookup();
    const cb_skill_lookup = getCbSkillLookup();
    const cb_skills_by_domain = getCbSkillsByDomain();

    const category_tag = ref('');
    if (props.category && props.category.tag) {   
        category_tag.value = props.category.tag;
    }
    const category_name = ref('');
    
    if (props.category && props.category.name) {
        category_name.value = props.category.name;
    }
    
    const cb_domain = ref('');
    if (props.category && props.category.domain) {
        cb_domain.value = props.category.domain;
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
    if (props.category && props.category.skill) {
        cb_skill.value = props.category.skill;
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
        category_tag.value = '';
        category_name.value = '';
        cb_domain.value = '';
        cb_skill.value = '';
        updateSelectCbDomainOptions();
        updateSelectCbSkillOptions();
    }

    const addAnotherCategoryClicked = () => {
        clearForm();
        submitted.value = false;
    }

    watch(selected_section, () => {
        console.log('category section changed');
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

    const saveCategoryClicked = async () => {
        submitting.value = true;
        let data = {
            discipline: discipline.value,
            tag: category_tag.value,
            name: category_name.value,
            description_html: descriptionEditorRef.value.editor.getHTML(),
            description_json: descriptionEditorRef.value.editor.getJSON(),
            section: selected_section.value, 
            domain: cb_domain.value,
            skill: cb_skill.value
        }

        console.log('data');
        console.log(JSON.stringify(data));
        
        if (props.category && props.category.id) {
            data.id = props.category.id;
            const resp = await $fetch("/api/edit/category/" + props.category.id, {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
        } else {
            const resp = await fetch("/api/admin/add/category", {
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
    <div class="category-editor">
        <div class="max-w-md w-full">
            <div v-if="submitting">
                <UProgress animation="carousel" />
            </div>
            <div v-if="submitted">
                <div class="pb-3">Category saved successfully</div>
                <div class="flex flex-row gap-3">
                    <UButton @click="addAnotherCategoryClicked">Add another category</UButton>
                    <UButton variant="outline" to="/admin/categories" >All categories</UButton>
                </div>
            </div>
            <div class="flex flex-col gap-6" v-if="!submitting && !submitted">
                <div>
                    <div :class="select_option_header_classes">Category Name</div>
                    <UInput v-model="category_name" type="text" placeholder="Category Name" />
                </div>
                <div>
                    <div :class="select_option_header_classes">Category Tag</div>
                    <UInput v-model="category_tag" type="text" placeholder="Category Tag" />
                </div>

                <div>
                    <div :class='select_option_header_classes'>Description</div>
                    <Tiptap 
                        ref="descriptionEditor"
                        :init_content="init_description_content"
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

                <div class="pt-4">
                    <UButton @click="saveCategoryClicked">Save Category</UButton>
                </div>
            </div>
        </div>
    </div>
</template>
