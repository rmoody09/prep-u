<script setup>
import TiptapReader from './TiptapReader.vue';
const props = defineProps(['problem', 'problem_id', 'options']);
if (!props.problem) {
    console.log('no problem');
    props.problem = await useFetch(`/api/get/sat-problem/${props.problem_id}`);
}

const selected_answer_choice_index = ref(null);
const stricken_answer_choices = ref([]);
const allow_strike = ref(true);

const getChar = (index) => {
    return String.fromCharCode(64 + index);
}

const selectAnswerChoice = (index) => {
    selected_answer_choice_index.value = index;
    stricken_answer_choices.value = stricken_answer_choices.value.filter(i => i != index);
}

const strikeAnswerChoice = (index) => {
    console.log('strike answer choice', index);
    if (stricken_answer_choices.value.includes(index)) {
        stricken_answer_choices.value = stricken_answer_choices.value.filter(i => i != index);
    } else {
        if (selected_answer_choice_index.value == index) {
            selected_answer_choice_index.value = null;
        }
        stricken_answer_choices.value.push(index);
    }
}

const checkIfStricken = (index) => {
    return stricken_answer_choices.value.includes(index);
}

const checkIfSelected = (index) => {
    return selected_answer_choice_index.value == index;
}

</script>

<template>
    <div>
        <div class='problem-question'><TiptapReader :init_content="problem.question_tiptap_html" /></div>
        <div class='problem-answer-choices flex flex-col gap-4'>
            <div v-for="(answer_choice, index) in problem.answer_choices" :key="index" 
                class='answer-choice  flex flex-row items-center gap-2'
            >
                <button 
                    class="answer-choice-selector flex flex-col justify-center px-[2px] relative" 
                    @click="selectAnswerChoice(index)"
                >
                    <div class="answer-choice-selector-inner flex flex-row items-start gap-3 border border-solid p-2 rounded-md grow-1"
                        :class="{
                            'opacity-50': checkIfStricken(index),
                            'border-primary': checkIfSelected(index), 
                            'border-slate-300': !checkIfSelected(index),
                            'border-2': checkIfSelected(index)
                        }"
                    >
                        <span class="grow-0 font-extrabold text-md">
                            <span
                            class="answer-choice-label w-6 h-6 flex items-center justify-center border border-solid p-1 rounded-full"
                            :class="{
                                'text-slate-500 border-slate-500':  selected_answer_choice_index != index, 
                                'bg-primary text-white border-primary':  selected_answer_choice_index == index
                            }"
                        >
                            {{ getChar(index+1) }}
                            </span>
                        </span>
                        <TiptapReader :init_content="answer_choice.html" />
                    </div>
                    <div v-if="checkIfStricken(index)" class="answer-choice-strike-indicator absolute w-full h-[2px] bg-stone-900 my-auto"></div>
                </button>
                <span v-if="allow_strike">
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
    </div>
</template>