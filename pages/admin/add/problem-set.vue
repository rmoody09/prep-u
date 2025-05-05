<script setup>
    definePageMeta({
    middleware: 'admin'
})
</script>
<template>
    <div class="p-6">
        <h1 class="text-xl font-extrabold pb-6">Add Problem Set</h1>
        <ClientOnly>
            <ProblemSetEditor />
        </ClientOnly>
    </div>
</template>