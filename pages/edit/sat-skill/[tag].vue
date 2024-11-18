<script setup>
const route = useRoute()
const skill_tag = route.params.tag;
console.log('skill tag');
console.log(skill_tag);
const resp = await useFetch('/api/get/sat-skill/' + skill_tag)
const skill = resp.data.value.data;
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Edit Skill</h1>
        </div>
        <div>
            <ClientOnly>
                <SATSkillEditor :skill="skill" />
            </ClientOnly>
        </div>
    </div>
</template>