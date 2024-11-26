<script setup>
const props = defineProps({
    allow_multiple_selection: {
        type: Boolean,
        default: false
    }, 
    answer_choices: {
        type: Array,
        default: []
    }, 
    correct_answers: {
        type: Array,
        default: []
    }, 
    correct_answer: {
        type: Number,
        default: -1
    }
});

const selected_answer_choices = ref([]);
const allow_multiple_selection = props.allow_multiple_selection;
const stricken_answer_choices = ref([]);
const allow_strike = ref(true);
const striking_on = ref(false);
const showing_solution = ref(false);

const getChar = (index) => {
    return String.fromCharCode(64 + index);
}

const selectAnswerChoice = (index) => {
    if (allow_multiple_selection) {
        if (selected_answer_choices.value.includes(index)) {
            selected_answer_choices.value = selected_answer_choices.value.filter(i => i != index);
        } else {
            selected_answer_choices.value.push(index);
        }
    } else {
        selected_answer_choices.value = [index];
    }
    stricken_answer_choices.value = stricken_answer_choices.value.filter(i => i != index);
}

const strikeAnswerChoice = (index) => {
    console.log('strike answer choice', index);
    if (stricken_answer_choices.value.includes(index)) {
        stricken_answer_choices.value = stricken_answer_choices.value.filter(i => i != index);
    } else {
        if (selected_answer_choices.value.includes(index)) {
            selected_answer_choices.value = selected_answer_choices.value.filter(i => i != index);
        }
        stricken_answer_choices.value.push(index);
    }
}

const checkIfStricken = (index) => {
    if (!striking_on.value) {
        return false;
    }
    return stricken_answer_choices.value.includes(index);
}

const checkIfSelected = (index) => {
    if (selected_answer_choices.value.includes(index)) {
        if (showing_solution.value) {
            if (props.correct_answers.includes(index)) {
                return true;
            }
            return false;
        } else {
            return true;
        }
    }
    return false;
}

const checkIfUnselected = (index) => {
    if (checkIfSelected(index) || checkIfWronglySelected(index)) {
        return false;
    }
    return true;
}

const checkToShowIfCorrect = (index) => {
    if (!showing_solution.value) {
        return false;
    }
    return props.correct_answers.includes(index);
}


const checkIfWronglySelected = (index) => {
    console.log('check if wrongly selected', index);
    if (!showing_solution.value) {
        return false;
    }
    console.log('wrongly selected');
    return selected_answer_choices.value.includes(index) && !props.correct_answers.includes(index);
}

const toggleStrikability = (options = {}) => {
    striking_on.value = options.value !== undefined ? options.value : !striking_on.value;
}

const toggleSolution = (options = {}) => {
    showing_solution.value = options.value !== undefined ? options.value : !showing_solution.value;
}

defineExpose({
    toggleStrikability,
    toggleSolution
});

</script>

<template> 
    <div class="flex flex-col gap-4 w-full max-w-[600px] text-left">
        <div v-for="(answer_choice, index) in answer_choices" :key="index" 
            class='answer-choice flex flex-row items-center justify-stretch gap-2'
        >
            <button 
                class="answer-choice-selector flex flex-col justify-center px-[2px] relative grow" 
                @click="selectAnswerChoice(index)"
            >
                <div class="answer-choice-selector-inner flex flex-row items-start gap-3 p-2 border border-solid rounded-md w-full"
                    :class="{
                        'opacity-50': checkIfStricken(index),
                        'border-primary': checkIfSelected(index), 
                        'border-slate-300': checkIfUnselected(index),
                        'border-2': checkIfSelected(index),
                        'border-red-500': checkIfWronglySelected(index),
                        'bg-green-100': checkToShowIfCorrect(index)
                    }"
                >
                    <span class="grow-0 font-extrabold text-md">
                        <span
                        class="answer-choice-label w-6 h-6 flex items-center justify-center border border-solid p-1 rounded-full"
                        :class="{
                            'text-slate-500 border-slate-500':  checkIfUnselected(index), 
                            'bg-primary text-white border-primary':  checkIfSelected(index),
                            'bg-red-400 text-white': checkIfWronglySelected(index)
                        }"
                    >
                        {{ getChar(index+1) }}
                        </span>
                    </span>
                    <div class="text-left">
                        <TiptapReader :init_content="answer_choice.html" />
                    </div>
                </div>
                <div v-if="checkIfStricken(index)" class="answer-choice-strike-indicator absolute w-full h-[2px] bg-stone-900 my-auto"></div>
            </button>
            <span v-if="allow_strike && striking_on">
                <button v-if="!checkIfStricken(index)" class="answer-choice-strike-button relative flex flex-col items-center justify-center px-[2px]" @click="strikeAnswerChoice(index)">
                    <span class="strike-button-label w-6 h-6 flex items-center justify-center border border-solid p-1 rounded-full border-slate-400 text-slate-400">{{ getChar(index+1) }}</span>
                    <div class="strike-button-strike w-full h-[2px] bg-slate-400 my-auto absolute"></div>
                </button>
                <button v-else class="answer-choice-strike-button relative flex flex-col items-center justify-center px-[2px]" @click="strikeAnswerChoice(index)">
                    <UIcon name="i-lucide-undo" class="w-4 h-4 top-0.5 relative text-slate-700" />
                </button>
            </span>
        </div>
    </div>
</template>