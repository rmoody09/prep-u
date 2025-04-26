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

    import { cb_domains, cb_skills, getCbDomainLookup, getCbSkillLookup, getCbSkillsByDomain } from '~/assets/composables/SATProblemTypes';

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

    const problem_ids = ref([]);
    if (props.problemSet && props.problemSet.problem_ids) {
        problem_ids.value = props.problemSet.problem_ids;
    }

    const justAddedProblemSetId = ref(null);

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
            problem_ids: problem_ids.value
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
            console.log(resp);
        } else {
            const resp = await fetch("/api/add/problem-set", {
                method: "POST",
                body: JSON.stringify(data), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(resp);
            const resp_json = await resp.json();
            if (resp_json.data) {
                justAddedProblemSetId.value = resp_json.data[0].id;
            }
            console.log(resp_json);
        }
        
        submitting.value = false;
        submitted.value = true;
    }

    const deleteProblemSetClicked = async () => {
        console.log('deleteProblemSetClicked');
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
        problem_ids.value = [];
    }

    const section_header_classes = "font-semibold pb-2 text-base"
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
                    <div :class='section_header_classes'>Problem IDs</div>
                    <TagsInput v-model="problem_ids" placeholder="Enter problem IDs and press Enter" />
                </div>
                
                <div class="flex flex-row gap-4">
                    <UButton @click="saveProblemSetClicked">Save Problem Set</UButton>
                    <UButton v-if="props.problemSet" color="pink" @click="deleteProblemSetClicked">Delete Problem Set</UButton>
                </div>
            </div>
        </div>
    </div>
</template>
