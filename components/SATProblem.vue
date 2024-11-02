<script setup>
import TiptapReader from './TiptapReader.vue';
import Desmos from 'desmos';
const props = defineProps(['problem', 'problem_id', 'options']);
if (!props.problem) {
    console.log('no problem');
    props.problem = await useFetch(`/api/get/sat-problem/${props.problem_id}`);
}

let options = props.options;
if (!options) {
    options = {allow_show_solution: true};
}


const selected_answer_choice_index = ref(null);
const stricken_answer_choices = ref([]);
const allow_strike = ref(false);

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
    if (!allow_strike.value) {
        return false;
    }
    return stricken_answer_choices.value.includes(index);
}

const checkIfSelected = (index) => {
    return selected_answer_choice_index.value == index;
}
let desmosCalculator = null;
const openDesmos = () => {
    desmosOpen.value = true;
    if (!desmosCalculator) {
        desmosCalculator = Desmos.GraphingCalculator(desmosEl.value);
    }
   
}



const desmosEl = ref(null);
const desmosContainer = ref(null);
const desmosOpen = ref(false);

const closeDesmos = () => {
    desmosOpen.value = false;
}


const mathReferenceEl = ref(null);
const mathReferenceContainer = ref(null);
const mathReferenceOpen = ref(false);

const openMathReference = () => {
    mathReferenceOpen.value = true;
}

const closeMathReference = () => {
    mathReferenceOpen.value = false;
}

onMounted(() => {
    makeDraggable(desmosContainer.value);
    makeDraggable(mathReferenceContainer.value);
})


const toggleStrikability = () => {
    allow_strike.value = !allow_strike.value;
}

const solution_accordion_items = [
    {label: 'Show Solution', slot: 'source-solution'}
]


</script>

<template>
    <div class="relative w-full border border-solid border-slate-300 rounded-md">
        <div class="flex flex-row items-center gap-1 bg-slate-100 p-1">
            <UButton 
                icon="i-lucide-calculator"
                @click="openDesmos"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton 
                icon="i-lucide-superscript"
                @click="openMathReference"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton 
                @click="toggleStrikability"
                :variant="allow_strike ? 'solid' : 'outline'"
                size="2xs"
                class="relative flex flex-col items-center justify-center"
            >
                <span>
                    ABC
                </span>
                <span class="absolute my-auto w-[calc(100%-6px)] h-[2px] bg-primary rounded-full"
                    :class="{
                        'bg-white': allow_strike,
                    }"
                ></span>
            </UButton>
        </div>
        <span  ref="desmosContainer"
            class="absolute inline-block top-0 left-0 z-10 w-full bg-gray-100 max-w-[500px] overflow-hidden"
            :class="{
                'opacity-0': !desmosOpen,
                'opacity-100': desmosOpen,
                'h-[330px]': desmosOpen,
                'w-full': desmosOpen,
                'w-0': !desmosOpen,
                'h-0': !desmosOpen,
                'border border-solid border-stone-800': desmosOpen
            }"
        >
            <div class="w-full p-1 bg-stone-600 text-white flex flex-row items-center justify-between">
                <span>Calculator</span>
                <span class="dragger-grip cursor-grab"><UIcon name="i-lucide-grip" class="w-6 h-6" /> </span>
                <UButton @click="closeDesmos">Close</UButton>
            </div>
            <div ref="desmosEl" class="w-full h-full"></div>
        </span>
        <span  ref="mathReferenceContainer"
            class="absolute inline-block top-0 left-0 z-10 w-full bg-white max-w-[900px] overflow-hidden"
            :class="{
                'opacity-0': !mathReferenceOpen,
                'opacity-100': mathReferenceOpen,
                'w-full': mathReferenceOpen,
                'w-0': !mathReferenceOpen,
                'h-0': !mathReferenceOpen,
                'border border-solid border-stone-800': mathReferenceOpen
            }"
        >
            <div class="w-full p-1 bg-stone-600 text-white flex flex-row items-center justify-between">
                <span>Reference Sheet</span>
                <span class="dragger-grip cursor-grab"><UIcon name="i-lucide-grip" class="w-6 h-6" /> </span>
                <UButton @click="closeMathReference">Close</UButton>
            </div>
            <div>
                <img src="/images/sat/math-reference-sheet.png" class="w-full h-full object-contain" />
            </div>
            <div class="p-2">
                <div class="pb-2">
                    The number of degrees in a circle is 360.
                </div>
                <div class="pb-2">
                    The number of radians in a circle is 2π.
                </div>
                <div class="pb-2">
                    The sum of the measures in degrees of the angles of a triangle is 180.
                </div>
            </div>
        </span>
        <div class='p-2'>
            <div class='problem-question'><TiptapReader :init_content="problem.question_tiptap_html" /></div>
            <div class='problem-answer-choices flex flex-col gap-4 pt-4'>
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
            <div v-if="options.allow_show_solution" class="pt-6">
                <UAccordion :items="solution_accordion_items">
                    <template #source-solution>
                        <div class="pt-4">
                            <TiptapReader :init_content="problem.source_solution.json" />
                        </div>
                    </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>