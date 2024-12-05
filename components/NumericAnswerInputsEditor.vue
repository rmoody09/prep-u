<script setup>
    const props = defineProps({numeric_answers: {type: Object, default: {answers: [{label: '', value: '', is_label: false}], require_all: true, is_label: false, label: ''}}, options: {type: Object, default: {enable_section_label: true, enable_require_all: true}}});
    const numeric_answers = defineModel({default: {answers: [{label: '', value: '', is_label: false}], require_all: true, is_label: false, label: ''}});
    console.log('numeric inputs editor');
    console.log(JSON.stringify(numeric_answers.value));
    const enable_section_label = ref(true);
    if (props.options.enable_section_label == false) {
        enable_section_label.value = false;
        numeric_answers.value.is_label = false;
        numeric_answers.value.label = '';
    }
    const enable_require_all = ref(true);
    if (props.options.enable_require_all == false) {
        enable_require_all.value = false;
        numeric_answers.value.require_all = false;
    }

    /*
    if (props.numeric_answers) {
        console.log('is props numeric answers');
        numeric_answers.value = JSON.parse(JSON.stringify(props.numeric_answers));
    }
    */
    console.log(JSON.stringify(numeric_answers.value));

    function addNumericInputLabel(index) {
        numeric_answers.value.answers[index].is_label = true;
    }

    function removeNumericInputLabel(index) {
        numeric_answers.value.answers[index].is_label = false;
    }

    function addNumericAnswer() {
        numeric_answers.value.answers.push({value: '', is_label: false, label: ''});
    }

    function reformatString(input) {
        // Allow minus sign at the beginning for negative numbers
        let isNegative = input.startsWith('-');

        // Remove all non-digit, non-slash, non-decimal, non-minus characters
        let cleaned = input.replace(/[^\d/.-]/g, '');
        
        // Keep only the first slash
        let parts = cleaned.split('/');
        cleaned = parts.slice(0, 2).join('/');
        
        // Handle decimals in each part
        parts = cleaned.split('/');
        cleaned = parts.map(part => {
            let decimals = part.split('.');
            return decimals.slice(0, 2).join('.');
        }).join('/');

        // Remove any existing minus signs in the cleaned string
        cleaned = cleaned.replace(/-/g, '');

        // Remove leading zeros after minus sign but preserve single zero
        cleaned = cleaned.replace(/^(-?)0+(?=\d)/, '$1');
        
        // Limit the length (excluding the minus sign)
        cleaned = cleaned.slice(0, 5);
        
        // Add minus sign back if the original input was negative
        return isNegative ? '-' + cleaned : cleaned;
    }

    function inputChanged(index) {
        nextTick(() => {
            let value = numeric_answers.value.answers[index].value;
            let stripped = reformatString(value);
            if (stripped != value) {
                numeric_answers.value.answers[index].value = stripped;
            }
        });
    }

    function addSectionLabel() {
        numeric_answers.value.is_label = true;
    }

    function removeNumericSectionLabel() {
        numeric_answers.value.is_label = false;
    }

    function removeNumericAnswer(index) {
        numeric_answers.value.answers.splice(index, 1);
    }
</script>

<template>
    <div class="flex flex-col gap-2">
        <div v-for="(numeric_answer, index) in numeric_answers.answers" class="flex items-stretch gap-2"> 
            <span class="grow-0 flex items-stretch gap-2" v-if="numeric_answers.answers[index].is_label">
                <UButton icon="i-lucide-x" square size="sm" variant="outline" @click="removeNumericInputLabel(index)" />
                <UInput v-model="numeric_answers.answers[index].label" placeholder="Label" :value="numeric_answer.label" />
            </span>
            <UInput v-model="numeric_answers.answers[index].value" placeholder="Enter answer" :value="numeric_answer.value" @input="inputChanged(index)" />
            <UButton v-if="!numeric_answers.answers[index].is_label" icon="i-lucide-tag" square size="sm" variant="outline" @click="addNumericInputLabel(index)" />
            <UButton v-if="numeric_answers.answers.length > 1" icon="i-lucide-x" square size="xs" variant="ghost" @click="removeNumericAnswer(index)" />
        </div>
    </div>
    <div class="mt-3">
        <UButton @click="addNumericAnswer" size="sm" variant="outline">Add another answer</UButton>
    </div>
    <div v-if="enable_require_all" class="mt-3">
        <UCheckbox v-model="numeric_answers.require_all" label="Require all answers" />
    </div>
    <div v-if="enable_section_label">
        <div v-if="numeric_answers.is_label" class="mt-3 flex items-center gap-2">
            <UInput v-model="numeric_answers.label" placeholder="Label" />
            <UButton icon="i-lucide-x" square variant="ghost" size="xs" @click="removeNumericSectionLabel" />
        </div>
        <div v-else class="mt-3">
            <UButton @click="addSectionLabel" size="xs" variant="ghost">Add label</UButton>
        </div>
    </div>
</template>
