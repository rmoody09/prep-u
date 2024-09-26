
<script setup>
    import Tiptap from '~/components/Tiptap.vue'

    const problem_sources = [
        {id: 'bluebook', 'label': 'Bluebook'},
        {id: 'own', 'label': 'Own'}
    ];
    const selected_problem_source = ref(null);
    const getSelectedSourceLabel = () => {
        return problem_sources.find(source => source.id === selected_problem_source.value)?.label;
    }

    const cb_subsources = [
        {id: 'practice_test', 'label': 'Practice Test'},
        {id: 'question_bank', 'label': 'Question Bank'}
    ];
    const selected_cb_subsource = ref(null);
    const getSelectedSubSourceLabel = () => {
        return cb_subsources.find(source => source.id === selected_cb_subsource.value)?.label;
    }

    const test_sections = [
        {id: 'reading_writing', 'label': 'Reading and Writing'},
        {id: 'math', 'label': 'Math'}
    ];
    const selected_section = ref(null);
    const getSelectedSectionLabel = () => {
        return test_sections.find(source => source.id === selected_section.value)?.label;
    }

    const practice_tests = [
        {id: '1', 'label': 'Practice Test #1'},
        {id: '2', 'label': 'Practice Test #2'},
        {id: '3', 'label': 'Practice Test #3'},
        {id: '4', 'label': 'Practice Test #4'},
        {id: '5', 'label': 'Practice Test #5'},
        {id: '6', 'label': 'Practice Test #6'}
    ];
    const selected_practice_test = ref(null);
    const getSelectedPracticeTestLabel = () => {
        return practice_tests.find(source => source.id === selected_practice_test.value)?.label;
    }

    const math_sections = [
        {id: 'algebra', 'label': 'Algebra'},
        {id: 'advanced_math', 'label': 'Advanced Math'}, 
        {id: 'problem_solving_data', 'label': 'Problem Solving and Data Analysis'}, 
        {id: 'geometry_trig', 'label': 'Geometry and Trigonometry'}
    ];
    const selected_math_section = ref(null);
    const getSelectedMathSectionLabel = () => {
        return math_sections.find(source => source.id === selected_math_section.value)?.label;
    }

    const reading_writing_sections = [
        {id: 'info_and_ideas', 'label': 'Information and Ideas'},
        {id: 'craft_and_structure', 'label': 'Craft and Structure'}, 
        {id: 'standard_english', 'label': 'Standard English'}, 
        {id: 'expression_of_ideas', 'label': 'Expression of Ideas'}
    ];
    const selected_reading_writing_section = ref(null);
    const getSelectedReadingWritingSectionLabel = () => {
        return reading_writing_sections.find(source => source.id === selected_reading_writing_section.value)?.label;
    }

</script>

<template>
    <div>
        <h1>Add Problem</h1>
        <div class="max-w-md w-full">
            <div class="flex flex-col gap-2">
                <USelectMenu v-model="selected_problem_source" :options="problem_sources" placeholder="Problem Source" value-attribute="id" option-attribute="label" />
                <div>
                    <span v-if="selected_problem_source == 'bluebook'">
                        <USelectMenu v-model="selected_cb_subsource" :options="cb_subsources" placeholder="Subsource" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div v-if="selected_cb_subsource == 'practice_test'">
                    <USelectMenu v-model="selected_practice_test" :options="practice_tests" placeholder="Practice Test" value-attribute="id" option-attribute="label" />
                </div>
                <div>
                    <span v-if="selected_problem_source">
                        <USelectMenu v-model="selected_section" :options="test_sections" placeholder="Test Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div> 
                <div>
                    <span v-if="selected_section == 'math'">
                        <USelectMenu v-model="selected_math_section" :options="math_sections" placeholder="Math Section" value-attribute="id" option-attribute="label" />
                    </span>
                    <span v-else-if="selected_section == 'reading_writing'">
                        <USelectMenu v-model="selected_reading_writing_section" :options="reading_writing_sections" placeholder="Reading Writing Section" value-attribute="id" option-attribute="label" />
                    </span>
                </div>  
                <div>
                    <Tiptap 
                    />
                </div>
                <div>
                    <UButton>Add Problem</UButton>
                </div>
            </div>
        </div>
    </div>
</template>