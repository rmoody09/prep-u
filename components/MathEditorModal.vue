<template>
    <UModal :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" prevent-close>
        <div class="p-4">
            <h1 class="text-xl font-bold mb-4">Edit Math</h1>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">LaTeX</label>
                    <UTextarea
                        v-model="mathInput"
                        placeholder="Enter LaTeX math expression"
                        :rows="4"
                    />
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">Math Editor</label>
                    <div @click.stop @mousedown.stop @touchstart.stop>
                        <math-field ref="mathfield" :value="mathInput" @input="updateMathInput"></math-field>
                    </div>
                </div>
            </div>
            <div class="mt-4 flex justify-end gap-2">
                <UButton @click="close">Cancel</UButton>
                <UButton @click="save" color="primary">Save</UButton>
            </div>
        </div>
    </UModal>
</template>

<script setup>
import { MathfieldElement } from 'mathlive';

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

const mathfield = ref(null);

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
        emit('save', mathInput.value.toString());
    }
    close();
};

const updateMathInput = (event) => {
    mathInput.value = event.target.value;
};
</script> 

<style scoped>
math-field {
    width: 100%;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    
}
</style>