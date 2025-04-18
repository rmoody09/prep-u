<template>
    <UModal :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)">
        <div class="p-4">
            <h1 class="text-xl font-bold mb-4">Edit Math</h1>
            <div>
                <UTextarea
                    v-model="mathInput"
                    label="LaTeX Math"
                    placeholder="Enter LaTeX math expression"
                    :rows="4"
                />
            </div>
            <div class="mt-4 flex justify-end gap-2">
                <UButton @click="close">Cancel</UButton>
                <UButton @click="save" color="primary">Save</UButton>
            </div>
        </div>
    </UModal>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    initialValue: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue', 'save']);

const mathInput = ref(props.initialValue);

watch(() => props.initialValue, (newVal) => {
    mathInput.value = newVal;
});

const close = () => {
    emit('update:modelValue', false);
};

const save = () => {
    if (mathInput.value) {
        emit('save', mathInput.value);
    }
    close();
};
</script> 