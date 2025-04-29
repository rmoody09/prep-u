<script setup>
const route = useRoute()
const drill_id = route.params.id;
const resp = await useFetch('/api/get/sat-drill/' + drill_id)
const drill = resp.data.value.data;
</script>

<template>
    <div class="p-4">
        <div class="pb-4">
            <h1 class="text-2xl font-bold">Edit Drill</h1>
        </div>
        <div>
            <ClientOnly>
                <SATDrillEditor :drill="drill" :drill_id="drill_id" />
            </ClientOnly>
        </div>
    </div>
</template>