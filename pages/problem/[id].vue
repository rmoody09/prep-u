<script setup>
const route = useRoute();
const problem_id = route.params.id;



</script>

<template>
    <div>
        <h1>Problem</h1>
    </div>
    <ClientOnly>
        <GeneralProblem :problem_id="problem_id" />
    </ClientOnly>
</template>