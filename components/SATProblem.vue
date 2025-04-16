<script setup>
import TiptapReader from './TiptapReader.vue';
import Desmos from 'desmos';
const props = defineProps(['problem', 'problem_id', 'options']);
const currentProblem = ref(props.problem);

// Only fetch if we don't have the problem and have an ID
const { data: fetchedProblem } = await useFetch(
  () => !currentProblem.value && props.problem_id ? `/api/get/sat-problem/${props.problem_id}` : null,
  {
    immediate: true,
    watch: [props.problem_id],
  }
);


watchEffect(() => {
  if (!currentProblem.value && fetchedProblem.value?.data) {
    currentProblem.value = fetchedProblem.value.data;
  }
});

let options = props.options;
if (!options) {
    options = {allow_show_solution: true};
}

const multipleChoiceSelector = ref(null);

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
    multipleChoiceSelector.value.toggleStrikability({value: striking_on.value});
}

const showing_solution = ref(false);

const numericInput = ref(null);

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
        <div class='p-2 py-4'>
            <div class='problem-question pb-6'>
                <TiptapReader :init_content="currentProblem.question_html" />
            </div>
            <div v-if="currentProblem.answer_type == 'multiple_choice'">
                <MultipleChoiceSelector 
                    ref="multipleChoiceSelector" 
                    :answer_choices="currentProblem.answer_choices" 
                    :correct_answers="[currentProblem.mult_choice_answer]" 
                    :correct_answer="currentProblem.mult_choice_answer" 
                />
            </div>
            <div v-if="currentProblem.answer_type == 'numeric_input'">
                <NumericAnswersInput ref="numericInput" :answer_values="currentProblem.input_answers" :require_all="false" />
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
                        <TiptapReader :init_content="currentProblem.source_solution.html" />
                    </div>
                    <div v-if="currentProblem.difficulty" class="text-sm text-gray-600 mt-1">
                        Difficulty: <span class="font-medium">{{ ['Easy', 'Medium', 'Hard'][currentProblem.difficulty] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>