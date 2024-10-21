import { serverSupabaseServiceRole } from '#supabase/server'

function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

export default eventHandler(async (event) => {
    const problem_id = event.context.params.id;
    console.log('editing sat problem', problem_id);
    assertMethod(event, "POST");
    console.log('asserted method');
    const body = await readBody(event);
    console.log('body', body);
    const { problem_source, cb_subsource, collegeboard_question_id, practice_test, section, module, math_section, reading_writing_section, math_skill, reading_writing_skill, answer_type, input_answer, mult_choice_correct_answer_index, cb_difficulty, custom_skills, question, answer_choices } = body;
    console.log('problem source', problem_source);
    console.log(process.env.SUPABASE_SERVICE_KEY);
    const client = serverSupabaseServiceRole(event)
    console.log('established client');
    
    /*
    const db_resp = await client.from('sat_problems').select()
    console.log('got sb resp');
    console.log(db_resp);
    return db_resp;
    */
    //todo: add more validation with zod
    const is_practice_test = cb_subsource == 'practice_test' ? true : false;
    console.log('point1');
    const in_cb_question_bank = cb_subsource == 'question_bank' ? true : false;
    let source_question_id = collegeboard_question_id ? collegeboard_question_id : null;
    console.log('point2');
    const practice_test_id = practice_test ? practice_test.toString() : null;
    let test_module = module ? module : null;
    console.log('test module', test_module);
    if (cb_subsource == 'question_bank') {
        test_module = null;
    }
    console.log('point3');
    console.log(question);
    const {html: question_html, json: question_json} = question;
    console.log('question_html', question_html);
    console.log('question_json', question_json);
    const question_text = removeTags(question_html);
    console.log('question_text', question_text);
    console.log('point4');
    const cb_domain = section == 'math' ? math_section : reading_writing_section;
    const cb_skill = section == 'math' ? math_skill : reading_writing_skill;
    let db_input_answer = answer_type == 'numeric_input' ? input_answer : null;
    let db_mult_choice_answer = answer_type == 'multiple_choice' ? mult_choice_correct_answer_index : null;
    console.log('point5');
    if (!cb_difficulty) {
        cb_difficulty = null;
    }
    const sb_data = {
        source: problem_source, subsource: cb_subsource, test_section: section, source_question_id: source_question_id, is_practice_test: is_practice_test, in_cb_question_bank: in_cb_question_bank, practice_test_id: practice_test_id, test_module: test_module, cb_domain: cb_domain, cb_skill: cb_skill, cb_difficulty: cb_difficulty, answer_type: answer_type, input_answer: db_input_answer, skills: custom_skills, question_text: question_text, question_tiptap_html: question_html, question_tiptap_json: question_json, answer_choices: answer_choices, mult_choice_answer: db_mult_choice_answer
    }
    console.log('sb_data', sb_data);
    //const sb_data_abbr = {source: problem_source, test_section: section};
    //console.log('sb_data_abbr', sb_data_abbr);
    const sb_resp = await client.from('sat_problems').update(sb_data).eq('id', problem_id);
    console.log('sb_resp', sb_resp);
    return { data: sb_resp.data, error: sb_resp.error };



})