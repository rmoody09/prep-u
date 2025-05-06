<script setup>
const route = useRoute();
const problem_set_id = route.params.id;



</script>

<template>
    <div>
        <h1>Problem Set</h1>
    </div>
    <div>
        <ClientOnly>
            <ProblemSet :problemSetId="problem_set_id" />
        </ClientOnly>
    </div>
</template>