function getNodeText(doc_node) {
    let text = '';
    if (doc_node.text) {
        text += doc_node.text;
    }
    if (doc_node.type == 'mathComponent' && doc_node.attrs && doc_node.attrs.latex) {
        if (doc_node.attrs && doc_node.attrs.latex) {
            text += "$latex_start" + doc_node.attrs.latex + "$latex_end";
        }
    } else if (doc_node.type == 'image') {
        text += '[img]';
    } else if (doc_node.type == 'listItem') {
        text += "-";
    }
    if (doc_node.content) {
        for (const subnode of doc_node.content) {
            text += getNodeText(subnode);
        }
    }
    if (doc_node.type == 'paragraph') {
        text += "\n";
    }
    
    return text;
}

export const prepareSATProblemForDB = (problem) => {
    const { problem_source, subsource, is_practice_test, in_cb_question_bank, collegeboard_question_id, practice_test, test_section, module, cb_domain, cb_skill, answer_type, input_answers, mult_choice_correct_answer_index, difficulty, custom_skills, question, answer_choices } = problem;
    console.log('prepareSATProblemForDB');
    console.log(subsource);
    console.log(is_practice_test);
    console.log(in_cb_question_bank);
    
    
    /*
    const db_resp = await client.from('sat_problems').select()
    console.log('got sb resp');
    console.log(db_resp);
    return db_resp;
    */
    //todo: add more validation with zod
    
    let source_solution = null;
    if (problem_source != 'own' && problem.source_solution) {
        source_solution = problem.source_solution;
    }
    let source_question_id = collegeboard_question_id ? collegeboard_question_id : null;
    const practice_test_id = practice_test ? practice_test.toString() : null;
    let test_module = module ? module : null;
    if (!is_practice_test) {
        test_module = null;
    }
    let problem_number = null;
    if (is_practice_test) {
        problem_number = problem.problem_number;
    }
    const {html: question_html, json: question_json} = question;
    //const question_text = removeTags(question_html);
    const question_text = getNodeText(question_json);
    const contains_graphic = question_text.includes('[img]');
    let db_input_answers = answer_type == 'numeric_input' ? input_answers : null;
    let db_mult_choice_answer = answer_type == 'multiple_choice' ? mult_choice_correct_answer_index : null;
    let db_difficulty = difficulty ? difficulty : null;
    const sb_data = {
        source: problem_source, subsource: subsource, test_section, source_question_id: source_question_id, is_practice_test: is_practice_test, in_cb_question_bank: in_cb_question_bank, practice_test_id: practice_test_id, test_module: test_module, problem_number: problem_number, cb_domain: cb_domain, cb_skill: cb_skill, difficulty: db_difficulty, answer_type: answer_type, input_answers: db_input_answer, skills: custom_skills, question_text: question_text, question_tiptap_html: question_html, question_tiptap_json: question_json, answer_choices: answer_choices, mult_choice_answer: db_mult_choice_answer, source_solution: source_solution, manually_edited: true, contains_graphic: contains_graphic
    }
    return sb_data;
}