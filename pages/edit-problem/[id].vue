<script setup>
const route = useRoute()
const problem_id = route.params.id;
console.log('problem id');
console.log(problem_id);
const resp = await useFetch('/api/get/sat-problem/' + problem_id)
console.log('resp');
console.log(resp.data.value.data);
const problem = resp.data.value.data;
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Edit Problem</h1>
        </div>
        <div>
            <ProblemEditor :problem="problem" />
        </div>
    </div>
</template>