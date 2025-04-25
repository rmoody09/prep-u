<script setup>
    const props = defineProps(['init_concepts']);
    const client = useSupabaseClient()
    const { data, error } = await client.from('concept_tags').select('id, tag, name')
    //const { data, error } = await client.from('sat_skills').select('id, tag, name')
    console.log('concepts data2:')
    console.log(JSON.stringify(data));
    const custom_concepts_options = [...data];
    const selected_concepts = defineModel({default: []});
    if (props.init_concepts) {
        selected_concepts.value = custom_concepts_options.filter(concept => props.init_concepts.includes(concept.id));
    }
</script>

<template>
    <TagsInput v-model="selected_concepts" :options="custom_concepts_options" value-attribute="id" option-attribute="name" />
</template>