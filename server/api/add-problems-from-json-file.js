import { serverSupabaseServiceRole } from '#supabase/server'
import { set_5 as problems } from '~/assets/problem-json-files/math/advanced-math/nonlinear-functions-test';

function prepareProblemForDB(problem) {
    let difficulties = {easy: 1, medium: 2, hard: 3};
    let db_problem = {
        source: 'collegeboard', 
        in_cb_question_bank: true,
        is_practice_test: false,
        subsource: 'question_bank', 
        test_section: problem.test_section,
        source_question_id: problem.question_id,
        cb_domain: problem.domain,
        cb_skill: problem.skill,
        question_text: problem.question_text,
        question_tiptap_html: problem.question_html,
        question_tiptap_json: problem.question_json, 
        answer_type: problem.answer_type,
        answer_choices: problem.answer_choices,
        input_answer: problem.input_answer,
        mult_choice_answer: problem.mult_choice_answer,
        difficulty: difficulties[problem.difficulty], 
        source_solution: problem.solution, 
        contains_graphic: problem.contains_graphic,
    }
    return db_problem;
}

export default eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('add problems from json file api 5')
    console.log(problems.length);
    const client = serverSupabaseServiceRole(event)
    /*let problems = [];
    for (let problem_set of problem_sets) {
        problems = problems.concat(problem_set);
    }*/
    let db_problems = [];
    for (let problem of problems) {
        let db_problem = prepareProblemForDB(problem);
        const sb_resp = await client.from('sat_problems').insert(db_problem);
        console.log('done')
        db_problems.push(db_problem);
    }
    console.log('point 3')
    
    return { status: 'OK' };
})