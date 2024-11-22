<script setup>
    const props = defineProps('numeric_answers');
    const numeric_answers = defineModel({default: {answers: [{label: '', value: '', is_label: false}], require_all: true, is_label: false, label: ''}});
    
    if (props.numeric_answers) {
        numeric_answers.value = props.numeric_answers;
    }

    function addNumericInputLabel(index) {
        numeric_answers.value[index].is_label = true;
    }

    function removeNumericInputLabel(index) {
        numeric_answers.value[index].is_label = false;
    }

    function addNumericAnswer() {
        numeric_answers.value.push({value: '', is_label: false, label: ''});
    }

    function reformatString(input) {
        // Remove all non-digit, non-slash, non-decimal characters
        let cleaned = input.replace(/[^\d/.]/g, '');
        
        // Keep only the first slash
        let parts = cleaned.split('/');
        cleaned = parts.slice(0, 2).join('/');
        
        // Handle decimals in each part
        parts = cleaned.split('/');
        cleaned = parts.map(part => {
            let decimals = part.split('.');
            return decimals.slice(0, 2).join('.');
        }).join('/');
        
        return cleaned;
    }

    function inputChanged(index) {
        nextTick(() => {
            let value = numeric_answers.value[index].value;
            let stripped = reformatString(value);
            if (stripped != value) {
                numeric_answers.value[index].value = stripped;
            }
        });
    }

    function addSectionLabel() {
        numeric_answers.value.is_label = true;
    }

    function removeNumericSectionLabel() {
        numeric_answers.value.is_label = false;
    }
</script>

<template>
    <div class="flex flex-col gap-2">
        <div v-for="(numeric_answer, index) in numeric_answers" class="flex items-stretch gap-2"> 
            <span class="grow-0 flex items-stretch gap-2" v-if="numeric_answers[index].is_label">
                <UButton icon="i-lucide-x" square size="sm" variant="outline" @click="removeNumericInputLabel(index)" />
                <UInput v-model="numeric_answers[index].label" placeholder="Label" :value="numeric_answer.label" />
            </span>
            <UInput v-model="numeric_answers[index].value" placeholder="Enter answer" :value="numeric_answer.value" @input="inputChanged(index)" />
            <UButton v-if="!numeric_answers[index].is_label" icon="i-lucide-tag" square size="sm" variant="outline" @click="addNumericInputLabel(index)" />
        </div>
    </div>
    <div class="mt-3">
        <UButton @click="addNumericAnswer" size="sm" variant="outline">Add another answer</UButton>
    </div>
    <div class="mt-3">
        <UCheckbox v-model="numeric_answers.require_all" label="Require all answers" />
    </div>
    <div v-if="numeric_answers.is_label" class="mt-3 flex items-center gap-2">
        <UInput v-model="numeric_answers.label" placeholder="Label" />
        <UButton icon="i-lucide-x" square variant="ghost" size="xs" @click="removeNumericSectionLabel" />
    </div>
    <div v-else class="mt-3">
        <UButton @click="addSectionLabel" size="xs" variant="ghost">Add label</UButton>
    </div>
</template>
