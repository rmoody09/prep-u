<script setup>
import TiptapReader from './TiptapReader.vue';
import Desmos from 'desmos';
const props = defineProps(['drill', 'drill_id', 'options']);

// Create a reactive reference for the drill data
const currentDrill = ref(props.drill);

// Only fetch if we don't have the drill and have an ID
const { data: fetchedDrill } = await useFetch(
  () => !currentDrill.value && props.drill_id ? `/api/get/sat-drill/${props.drill_id}` : null,
  {
    immediate: true,
    watch: [() => props.drill_id],
  }
);

// Update currentDrill when fetched data becomes available
watchEffect(() => {
  if (!currentDrill.value && fetchedDrill.value?.data) {
    currentDrill.value = fetchedDrill.value.data;
  }
});

let options = props.options;
if (!options) {
    options = {allow_show_solution: true};
}

const multipleChoiceSelector = ref(null);
const numericInput = ref(null);

let allow_multiple_selection = false;
if (currentDrill.value?.allow_multiple_selection) {
    allow_multiple_selection = true;
}
const allow_strike = ref(true);
const striking_on = ref(false);


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
    multipleChoiceSelector.value.toggleStrikability({value: striking_on.value});
}

const numeric_input = ref('');
const text_input = ref('');

const checkToShowToolbar = () => {
    let show = false;
    if (currentDrill.value?.test_section == 'math') {
        show = true;
    }
    if (currentDrill.value?.has_multiple_choice && allow_strike.value) {
        show = true;
    }
    return show;
}

const showing_solution = ref(false);

const showSolution = () => {
    showing_solution.value = true;
    if (multipleChoiceSelector.value) {
        multipleChoiceSelector.value.toggleSolution({value: true});
    }
    if (numericInput.value) {
        numericInput.value.showSolution();
    }
}

const hideSolution = () => {
    showing_solution.value = false;
    if (multipleChoiceSelector.value) { 
        multipleChoiceSelector.value.toggleSolution({value: false});
    }
    if (numericInput.value) {
        numericInput.value.hideSolution();
    }
}

</script>

<template>
    <div class="relative w-full border border-solid border-slate-300 rounded-md">
        <div v-if="checkToShowToolbar()" class="flex flex-row items-center gap-1 bg-slate-100 p-1">
            <UButton v-if="currentDrill?.test_section == 'math'"
                icon="i-lucide-calculator"
                @click="openDesmos"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton v-if="currentDrill?.test_section == 'math'"
                icon="i-lucide-superscript"
                @click="openMathReference"
                variant="outline"
                size="2xs"
            ></UButton>
            <UButton v-if="currentDrill?.has_multiple_choice"
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
            <div v-if="currentDrill?.instructions_html" class="drill-instructions pb-8 font-bold text-lg">
                <TiptapReader :init_content="currentDrill.instructions_html" />
            </div>
            <div class='drill-question pb-6'><TiptapReader :init_content="currentDrill?.question_html" /></div>
            <div class="flex flex-col gap-6">
                <div v-if="currentDrill?.has_multiple_choice" class='drill-answer-choices flex flex-col gap-4 pt-4'>
                    <div v-if="currentDrill?.mult_choice_label" class="section-instructions">
                        {{ currentDrill.mult_choice_label }}
                    </div>
                    <MultipleChoiceSelector ref="multipleChoiceSelector" :answer_choices="currentDrill?.answer_choices" :correct_answers="currentDrill?.mult_choice_answers" :allow_multiple_selection="allow_multiple_selection" />
                </div>
                <div v-if="currentDrill?.has_numeric_input">
                    <div v-if="currentDrill?.numeric_answers_label"  class="section-instructions">
                        {{ currentDrill.numeric_answers_label }} 
                    </div>
                    <NumericAnswersInput ref="numericInput" :answers="currentDrill?.numeric_answers" :require_all="currentDrill?.require_all_numeric_answers" />
                </div>
                <div v-if="currentDrill?.has_text_input">
                    <div v-if="currentDrill?.text_answer_label"  class="section-instructions">
                        {{ currentDrill.text_answer_label }} 
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
                        <UButton @click="hideSolution" variant="ghost">Hide Solution</UButton>
                    </div>
                    <div class="pt-4">
                        <TiptapReader :init_content="currentDrill?.explanation_html" />
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