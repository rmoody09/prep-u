<script setup>
    import Tiptap from '~/components/Tiptap.vue'
    const props = defineProps({
        answer_index: {type: Number, default: -1}, 
        answer_indices: {type: Array, default: []}, 
        answer_choices: {type: Array, default: [{content: '', is_correct: false}, {content: '', is_correct: false}, {content: '', is_correct: false}, {content: '', is_correct: false}]},
        can_select_multiple: {type: Boolean, default: false}
    });
    const can_select_multiple = ref(false);
    if (props.can_select_multiple) {
        can_select_multiple.value = props.can_select_multiple;
    }

    //const answer_choices = defineModel({default: []});
    const answer_choices = ref([]);
    if (props.answer_choices) {
        answer_choices.value = props.answer_choices;
    }
    const answer_index = ref(-1);
    if (props.answer_index) {
        if (props.answer_index > -1 && props.answer_index < answer_choices.value.length) {
            answer_index.value = props.answer_index;
            answer_choices.value.map((choice, index) => {
                choice.is_correct = index == answer_index.value;
            });
        }
    }
    if (props.answer_indices && can_select_multiple.value) {
        answer_choices.value.map((choice, index) => {
            choice.is_correct = props.answer_indices.includes(index);
        });
    }
    
    const choice_input_refs = ref([]);

    const is_section_label = ref(false);
    const section_label = ref('');

    const getOptions = () => {
        let options = answer_choices.value.map((answer_choice, index) => {
            let input_ref = choice_input_refs.value[index];
            if (input_ref && input_ref.editor) {
                return {html: input_ref.editor.getHTML(), json: input_ref.editor.getJSON()};
            }
        });
        let answer_indices = [];
        let answer_index = -1;
        answer_choices.value.map((choice, index) => {
            if (choice.is_correct) {
                answer_indices.push(index);
                answer_index = index;
            }
        });
        let response = {
            options: options,
            label: is_section_label.value ? section_label.value : null, 
            answer_index: answer_index.value,
            answer_indices: answer_indices
        };
        return response;
    }

    function getChar(num) {
        // Check if the number is within the range of lowercase alphabet (1-26)
        if (num >= 1 && num <= 26) {
            // Use the ASCII code of 'a' (97) to calculate the character code
            return String.fromCharCode(64 + num); 
        } else {
            // Return null or handle the case where the number is out of range
            return null;
        }
    }

    const toggleCorrectAnswerChoice = (index) => {
        if (can_select_multiple.value) {
            answer_choices.value[index].is_correct = !answer_choices.value[index].is_correct;
        } else {
            answer_choices.value.map((choice, index) => {
                choice.is_correct = false;
            });
            answer_choices.value[index].is_correct = true;
        }
        /*
        nextTick(() => {
            main_key.value += 1;
        });
        */
    }

    const removeAnswerChoice = (remove_index) => {
        let new_choices = [];
        for (let [index, answer_choice] of answer_choices.value.entries()) {
            if (index != remove_index) {
                new_choices.push({content: choice_input_refs.value[index].editor.getHTML()});
            }
        }
        if (answer_index.value == remove_index) {
            answer_index.value = -1;
        } else if (answer_index.value > remove_index) {
            answer_index.value -= 1;
        }
        choice_input_refs.value = [];
        //choice_input_refs.value.splice(remove_index, 1);
        answer_choices.value = [...new_choices];
        nextTick(() => {
            for (let [index, answer_choice] of answer_choices.value.entries()) {
                choice_input_refs.value[index].editor?.commands.setContent(answer_choice.content);
            }
        });
    }

    const addAnswerChoice = () => {
        answer_choices.value.push({content: ''});
    }

    const setInputRefs = (el, index) => {
        console.log('setInputRefs');
        console.log(answer_choices.value.length);
        console.log(index);
        choice_input_refs.value.push(el);

        
    }

    const addSectionLabel = () => {
        is_section_label.value = true;
    }

    const removeSectionLabel = () => {
        is_section_label.value = false;
    }

    const checkCorrectAnswerChoice = (index) => {
        return answer_choices.value[index].is_correct;
    }
    const main_key = ref(0); //change this to force re-render

    defineExpose({
        getOptions
    });
</script>

<template>
    <div class="flex flex-col gap-4" :key="main_key">
        <div v-for="(answer_choice, index) in answer_choices" :key="index" class='answer_choice flex items-start gap-3'>
            <span class="grow-0 font-extrabold text-md flex flex-col justify-start">
                <button :index="index" 
                    class="answer-choice_option w-6 h-6 flex items-center justify-center border border-solid p-1 rounded-full"
                    :class="{
                        'text-slate-500 border-slate-500':  !checkCorrectAnswerChoice(index), 
                        'bg-primary text-white border-primary':  checkCorrectAnswerChoice(index)
                    }"
                    @click="toggleCorrectAnswerChoice(index)">
                    {{ getChar(index+1) }}
                </button>
            </span>
            <span class="grow flex flex-row content-center gap-1">
                <Tiptap 
                    :ref="(el) => setInputRefs(el, index)"
                    :init_content="answer_choice.content"
                    class="grow"
                />
            </span>
            <UButton icon="i-lucide-x" square variant="ghost" size="xs" @click="removeAnswerChoice(index)" />
        </div>
    </div>
    <div class="mt-4">
        <UButton icon="i-lucide-plus" @click="addAnswerChoice" variant="outline" size="xs">Add Answer Choice</UButton>
    </div>
    <div v-if="!is_section_label" class="mt-4">
        <UButton icon="i-lucide-plus" @click="addSectionLabel" variant="ghost" size="xs">Add label</UButton>
    </div>
    <div v-else class="mt-4 flex flex-row gap-2">
        <UInput v-model="section_label" placeholder="Label" class="grow" />
        <UButton icon="i-lucide-x" square variant="ghost" size="xs" @click="removeSectionLabel" />
    </div>
</template>
