
<script setup>
    const props = defineProps(['options', 'selected', 'optionAttribute', 'valueAttribute', 'placeholder']);
    const selected = defineModel({default: []});

    function removeSelected(option_id) {
        selected.value = selected.value.filter(option => option.id != option_id);
    }
</script>
<template>
    <div class="select-multi-with-chips-selector">
        <USelectMenu v-model="selected" :options="props.options" :option-attribute="props.optionAttribute" :placeholder="props.placeholder || 'Select an option'" searchable multiple>
            <template v-if="selected.length > 0" #label>{{ selected.length }} selected</template>
        </USelectMenu>
    </div>
    <div class="select-multi-selected-values">
        <span v-for="selected_option in selected" :key="selected_option[props.valueAttribute]" class="select-multi-selected-value">
            <span class="text-xs">{{ selected_option[props.optionAttribute] }}</span>
            <UButton variant="ghost" icon="i-heroicons-x-mark" size="xs" @click="removeSelected(selected_option[props.valueAttribute])" />
        </span>
    </div>
</template>

<style scoped>
    .select-multi-with-chips-selector {
        @apply w-full;
    }
    .select-multi-selected-values {
        @apply flex flex-row gap-2 pt-2;
    }
    .select-multi-selected-value {
        @apply bg-gray-100 rounded-md px-2 py-1 flex flex-row items-center justify-center;
    }
</style>