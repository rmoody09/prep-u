<script setup>
    definePageMeta({
    middleware: 'super-admin'
})
</script>
<template>
    <div class="p-6">
        <h1 class="text-xl font-extrabold pb-6">Add Problem</h1>
        <ProblemEditor />
    </div>
</template>