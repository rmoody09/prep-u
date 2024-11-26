<script setup>

const resp = await useFetch('/api/get/sat-problems')
const problems = resp.data.value.data;

let examples = [];
for (let problem of problems) {
    let example = {
        test_section: problem.test_section,
        question_id: problem.source_question_id,
        domain: problem.cb_domain,
        skill: problem.cb_skill,
        question_text: problem.question_text,
        question_html: problem.question_html,
        question_json: problem.question_json, 
        answer_type: problem.answer_type,
        answer_choices: problem.answer_choices,
        mult_choice_answer: problem.mult_choice_answer,
        input_answer: problem.input_answer,
        difficulty: problem.difficulty, 
        contains_graphic: problem.contains_graphic,
        solution: problem.source_solution
    }
    examples.push(example);
}

const examples_json = JSON.stringify(examples);
</script>

<template>
    <div class="pre-wrap">
        {{ examples_json }}
    </div>
</template>