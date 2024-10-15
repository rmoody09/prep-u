<script setup>

const resp = await useFetch('/api/get/sat-problems')
console.log('resp');
console.log(resp.data.value.data);
const problems = resp.data.value.data;
for (const problem of problems) {
    console.log(problem.source);
}
/*
const getProblems = async () => {
    const resp = await $fetch('/api/get/sat-problems')
    console.log('got resp')
    console.log(resp);
}

onMounted(async () => {
    await getProblems();
})
*/

const problem_sources = {collegeboard: "Collegeboard", barrons: "Barrons", own: "Own"};
const section_names = {math: "Math", reading_writing: "Reading & Writing"};
const problem_subsources = {practice_test: "Practice Test", question_bank: "Question Bank", cb_book: "Collegeboard Book"};
const module_names = {1: "Module 1", 2: "Module 2 (easy)", 3: "Module 2 (hard)"};
const domain_names = {
    "algebra": "Algebra",
    "advanced_math": "Advanced Math",
    "problem_solving_data": "Problem Solving and Data Analysis",
    "geometry_trig": "Geometry and Trigonometry",
    "info_and_ideas": "Information and Ideas",
    "craft_and_structure": "Craft and Structure",
    "standard_english": "Standard English",
    "expression_of_ideas": "Expression of Ideas",    
}
const cb_skills = {
    systems_linear_equations: "Systems of two linear equations in two variables",
    linear_functions: "Linear functions",
    linear_equations_two_variables: "Linear equations in two variables",
    linear_equations_one_variable: "Linear equations in one variable",
    linear_inequalities: "Linear inequalities in one or two variables",
    nonlinear_equations: "Nonlinear equations in one variable and systems of equations in two variables",
    nonlinear_functions: "Nonlinear functions",
    equivalent_expressions: "Equivalent expressions",
    ratios_rates_proportions: "Ratios, rates, proportional relationships, and units",
    percentages: "Percentages",
    two_variable_data: "Two-variable data: Models and scatterplots",
    probability: "Probability and conditional probability",
    one_variable_data: "One-variable data: Distributions and measures of center and spread",
    inference_sample_statistics: "Inference from sample statistics and margin of error",
    lines_angles_triangles: "Lines, angles, and triangles",
    circles: "Circles",
    area_volume: "Area and volume",
    right_triangles_trigonometry: "Right triangles and trigonometry", 
    command_of_evidence: "Command of Evidence",
    inferences: "Inferences",
    central_ideas_details: "Central Ideas and Details",
    words_in_context: "Words in Context",
    text_structure_purpose: "Text Structure and Purpose",
    cross_text_connections: "Cross-Text Connections",
    rhetorical_synthesis: "Rhetorical Synthesis",
    transitions: "Transitions",
    boundaries: "Boundaries",
    form_structure_sense: "Form, Structure, and Sense"
}
    
    
</script>

<template>
    <div class="p-4">
        <h1 class="text-3xl font-black pb-6">SAT Problems</h1>
        <div class="problems-container flex flex-col gap-1 bg-slate-100 p-1">
            <div class="problems-headers problem-row flex flex-row">
                <div class="problem-source problems-header">Source</div>
                <div class="problem-type problems-header">Problem Type</div>
                <div class="problem-question problems-header">Question</div>
                <div class="problem-options problems-header">Options</div>
            </div>
            <div v-for="problem in problems" :key="problem.id" class="problem-row flex flex-row">
                <div class="problem-source problem-cell">
                    <div>{{ problem_sources[problem.source] }}</div>
                    <div v-if="problem.subsource == 'practice_test' && problem.practice_test_id">
                        Practice Test {{ problem.practice_test_id }}
                        <div>
                            {{ section_names[problem.test_section] }}
                        </div>
                        <div v-if="problem.test_module">{{ module_names[problem.test_module] }}</div>
                        <div v-if="problem.problem_num">{{ problem.problem_num }}</div>
                    </div>
                    <div>{{ problem_subsources[problem.cb_subsource] }}</div>
                </div>
                <div class="problem-type problem-cell">
                    <div>
                        {{ section_names[problem.test_section] }}
                    </div>
                    <div>
                        {{ domain_names[problem.cb_domain] }}
                    </div>
                    <div>
                        {{ cb_skills[problem.cb_skill] }}
                    </div>
                </div>
                <div class="problem-question problem-cell">{{ problem.question_text }}</div>
                <div class="problem-options problem-cell">
                    <button class="option-button" @click="navigateTo(`/problem/${problem.id}`)">
                        <UIcon name="i-heroicons-eye" />
                    </button>
                    <button class="option-button" @click="navigateTo(`/edit-problem?problem_id=${problem.id}`)">
                        <UIcon name="i-heroicons-pencil-square" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.problems-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.problem-row {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    flex-wrap: nowrap;
}
.problems-headers .problems-header {
    @apply font-bold p-2 text-lg bg-white;
}
.problem-row .problem-cell {
    padding: .25rem;
    background-color: #fff;
}


.problem-row .problem-source {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.problem-row .problem-type {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
}

.problem-row .problem-question {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 5rem;
    flex-grow: 1;
}
.problem-row .problem-options {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    width: 10rem;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
}
.option-button {
    @apply bg-white p-1 rounded-md text-primary border border-primary rounded-md h-6 w-6 flex items-center justify-center hover:bg-primary-50;
}

</style>