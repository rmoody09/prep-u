<script setup>
import TiptapReader from './TiptapReader.vue';
import Desmos from 'desmos';
const props = defineProps(['drill', 'drill_id', 'options']);
if (!props.drill) {
    console.log('no drill');
    props.drill = await useFetch(`/api/get/sat-drill/${props.drill_id}`);
} else {
    props.drill_id = props.drill.id;
}

const drill = props.drill;
console.log('drill');
console.log(JSON.stringify(drill));

let options = props.options;
if (!options) {
    options = {allow_show_solution: true};
}


const selected_answer_choices = ref([]);
const allow_multiple_selection = ref(false);
if (props.drill.allow_multiple_selection) {
    allow_multiple_selection.value = true;
}
const stricken_answer_choices = ref([]);
const allow_strike = ref(true);
const striking_on = ref(false);

const getChar = (index) => {
    return String.fromCharCode(64 + index);
}

const selectAnswerChoice = (index) => {
    if (allow_multiple_selection.value) {
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
            if (drill.mult_choice_answers.includes(index)) {
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
    return drill.mult_choice_answers.includes(index);
}


const checkIfWronglySelected = (index) => {
    console.log('check if wrongly selected', index);
    if (!showing_solution.value) {
        return false;
    }
    console.log('wrongly selected');
    return selected_answer_choices.value.includes(index) && !drill.mult_choice_answers.includes(index);
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
    striking_on.value = !striking_on.value;
}

const solution_accordion_items = [
    {label: 'Show Solution', slot: 'source-solution'}
]

const numeric_input = ref('');
const text_input = ref('');

const checkToShowToolbar = () => {
    let show = false;
    if (drill.test_section == 'math') {
        show = true;
    }
    if (drill.has_multiple_choice && allow_strike.value) {
        show = true;
    }
    return show;
}

const showing_solution = ref(false);

const showSolution = () => {
    showing_solution.value = true;
}

</script>

<template>
    <div class="relative w-full border border-solid border-slate-300 rounded-md">
        <div v-if="checkToShowToolbar()" class="flex flex-row items-center gap-1 bg-slate-100 p-1">
            <UButton v-if="drill.test_section == 'math'"
                icon="i-lucide-calculator"
                @click="openDesmos"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton v-if="drill.test_section == 'math'"
                icon="i-lucide-superscript"
                @click="openMathReference"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton v-if="drill.has_multiple_choice"
                @click="toggleStrikability"
                :variant="striking_on ? 'solid' : 'outline'"
                size="2xs"
                class="relative flex flex-col items-center justify-center"
            >
                <span>
                    ABC
                </span>
                <span class="absolute my-auto w-[calc(100%-6px)] h-[2px] bg-primary rounded-full"
                    :class="{
                        'bg-white': striking_on,
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
        <div class='p-2 pt-6'>
            <div v-if="drill.instructions_html" class="drill-instructions pb-8 font-bold text-lg">
                <TiptapReader :init_content="drill.instructions_html" />
            </div>
            <div class='drill-question pb-6'><TiptapReader :init_content="drill.question_html" /></div>
            <div class="flex flex-col gap-6">
                <div v-if="drill.has_multiple_choice" class='drill-answer-choices flex flex-col gap-4 pt-4'>
                    <div v-if="drill.mult_choice_label" class="section-instructions">
                        {{ drill.mult_choice_label }}
                    </div>
                    <div v-for="(answer_choice, index) in drill.answer_choices" :key="index" 
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
                                <TiptapReader :init_content="answer_choice.html" />
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
                <div v-if="props.drill.has_numeric_input">
                    <div v-if="props.drill.numeric_answers_label"  class="section-instructions">
                        {{ props.drill.numeric_answers_label }} 
                    </div>
                    <UInput v-model="numeric_input" />
                </div>
                <div v-if="props.drill.has_text_input">
                    <div v-if="props.drill.text_answer_label"  class="section-instructions">
                        {{ props.drill.text_answer_label }} 
                    </div>
                    <UInput v-model="text_input" />
                </div>
            </div>
            <div v-if="options.allow_show_solution" class="pt-6">
                <div v-if="!showing_solution">
                    <UButton @click="showSolution" variant="outline">Show Solution</UButton>
                </div>
                <div v-else>
                    <div class="flex flex-row items-center justify-between">
                        <span class="font-bold text-lg">Solution</span>
                        <UButton @click="showing_solution = false" variant="ghost">Hide Solution</UButton>
                    </div>
                    <div class="pt-4">
                        <TiptapReader :init_content="drill.explanation_html" />
                    </div>
                </div>
                <!-- <UAccordion :items="solution_accordion_items">
                    <template #source-solution ref="solution_accordion_item">
                        <div class="pt-4">
                            <TiptapReader :init_content="drill.explanation_html" />
                        </div>
                    </template>
                </UAccordion> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.section-instructions {
    @apply font-semibold pb-2;
}
</style>