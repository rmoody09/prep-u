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

    function removeSkill(skill_id) {
        selected_skills.value = selected_skills.value.filter(skill => skill.id != skill_id);
    }
</script>

<template>
    <div>
        <USelectMenu v-model="selected_skills" :options="custom_skills_options" multiple searchable placeholder="Select Skills">
            <template v-if="selected_skills.length > 0" #label>{{ selected_skills.length }} selected</template>
        </USelectMenu>
    </div>
    <div class="filter-section-selected-values">
        <span v-for="skill in selected_skills" :key="skill.id" class="filter-section-selected-value">
            <span class="text-xs">{{ skill.label }}</span>
            <UButton variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="removeSkill(skill.id)" />
        </span>
    </div>
</template>