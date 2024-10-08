<script setup>
    const props = defineProps(['id', 'label', 'onRemove', 'more_data']);

    function deleteClick() {
        console.log('deleteClick')
        props.onRemove({id: props.id})
    }
</script>
<template>
    <span class="bg-blue-200 px-2 py-0.5 rounded-2xl flex items-center gap-1">
        <span class="text-sm">{{ props.label }}</span>
        <button @click="deleteClick" class="p-0 m-0"><UIcon name="i-lucide-x" class="w-4 h-4 top-0.5 relative" /></button>
    </span>
</template>