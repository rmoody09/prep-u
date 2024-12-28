<script setup>
    definePageMeta({
    middleware: 'admin'
})
</script>
<template>
    <div class="p-6">
        <h1 class="text-xl font-extrabold pb-6">Add SAT Drill</h1>
        <SATDrillEditor />
    </div>
</template>