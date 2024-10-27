

export default function prepareSATProblemForDB(problem) {
    console.log('prepareSATProblemForDB');
    const { problem_source, cb_subsource, collegeboard_question_id, practice_test, section, module, math_section, reading_writing_section, math_skill, reading_writing_skill, answer_type, input_answer, mult_choice_correct_answer_index, cb_difficulty, custom_skills, question, answer_choices, source_solution } = problem;
    
    
    /*
    const db_resp = await client.from('sat_problems').select()
    console.log('got sb resp');
    console.log(db_resp);
    return db_resp;
    */
    //todo: add more validation with zod
    if (problem_source == 'own') {
        source_solution = null;
    }
    const is_practice_test = cb_subsource == 'practice_test' ? true : false;
    const in_cb_question_bank = cb_subsource == 'question_bank' ? true : false;
    let source_question_id = collegeboard_question_id ? collegeboard_question_id : null;
    const practice_test_id = practice_test ? practice_test.toString() : null;
    let test_module = module ? module : null;
    if (cb_subsource == 'question_bank') {
        test_module = null;
    }
    const {html: question_html, json: question_json} = question;
    //const question_text = removeTags(question_html);
    const question_text = getNodeText(question_json);
    const cb_domain = section == 'math' ? math_section : reading_writing_section;
    const cb_skill = section == 'math' ? math_skill : reading_writing_skill;
    let db_input_answer = answer_type == 'numeric_input' ? input_answer : null;
    let db_mult_choice_answer = answer_type == 'multiple_choice' ? mult_choice_correct_answer_index : null;
    let db_cb_difficulty = cb_difficulty ? cb_difficulty : null;
    const sb_data = {
        source: problem_source, subsource: cb_subsource, test_section: section, source_question_id: source_question_id, is_practice_test: is_practice_test, in_cb_question_bank: in_cb_question_bank, practice_test_id: practice_test_id, test_module: test_module, cb_domain: cb_domain, cb_skill: cb_skill, cb_difficulty: db_cb_difficulty, answer_type: answer_type, input_answer: db_input_answer, skills: custom_skills, question_text: question_text, question_tiptap_html: question_html, question_tiptap_json: question_json, answer_choices: answer_choices, mult_choice_answer: db_mult_choice_answer
    }
    console.log('prepared sb data');
    return sb_data;
}