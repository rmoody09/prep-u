<script setup>
    const props = defineProps(['init_skills']);
    const client = useSupabaseClient()
    console.log('satskillsselector')
    const { data, error } = await client.from('sat_skills').select('id, tag, name')
    console.log('skills data:')
    console.log(JSON.stringify(data));
    const custom_skills_options = [...data];
    const selected_skills = defineModel({default: []});
    if (props.init_skills) {
        console.log('are init skills');
        console.log(JSON.stringify(props.init_skills));
        selected_skills.value = custom_skills_options.filter(skill => props.init_skills.includes(skill.id));
        console.log('selected_skills');
        console.log(JSON.stringify(selected_skills));
    }
</script>

<template>
    <TagsInput v-model="selected_skills" :options="custom_skills_options" value-attribute="id" option-attribute="name" />
</template>