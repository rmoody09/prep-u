<script setup>
const route = useRoute()
const drill_id = route.params.id;

const resp = await useFetch('/api/get/sat-drill/' + drill_id)
const drill = resp.data.value.data;
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">SAT Drill</h1>
        </div>
        <div>
            <ClientOnly>
                <SATDrill :drill="drill" :drill_id="drill_id" class="w-full max-w-[800px]"/>
            </ClientOnly>
        </div>
    </div>
</template>