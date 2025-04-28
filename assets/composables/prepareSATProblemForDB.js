function getTableRowText(doc_node) {
    let text = '';
    for (const [index, subnode] of doc_node.content.entries()) {
        if (index > 0) {
            text += "|";
        }
        text += getNodeText(subnode, {no_new_line: true});
    }
    return text;
}

function getNodeText(doc_node, options = {}) {
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
    } else if (doc_node.type == 'tableRow') {
        text += getTableRowText(doc_node) + "\n";
        return text;
    }
    if (doc_node.content) {
        for (const subnode of doc_node.content) {
            text += getNodeText(subnode, options);
        }
    }
    if (doc_node.type == 'paragraph') {
        if (!options.no_new_line) {
            text += "\n";
        }
    }
    
    return text;
}

export function removeTags(html) {
    if (!html) return '';
    
    // First handle math-component tags
    html = html.replace(/<math-component[^>]*latex="([^"]*)"[^>]*>[^<]*<\/math-component>/g, 
        (match, latex) => `$latex_start${latex}$latex_end`
    );
    
    // Replace img tags with [img]
    html = html.replace(/<img[^>]*>/g, '[img]');
    
    // Replace block-level elements with their content plus newline
    const blockElements = ['div', 'p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'tr'];
    blockElements.forEach(tag => {
        const openTag = new RegExp(`<${tag}[^>]*>`, 'gi');
        const closeTag = new RegExp(`</${tag}>`, 'gi');
        html = html
            .replace(openTag, '')
            .replace(closeTag, '\n');
    });
    
    // Remove any remaining HTML tags
    html = html.replace(/<[^>]+>/g, '');
    
    // Clean up extra whitespace and newlines
    html = html
        .replace(/\n\s*\n/g, '\n') // Replace multiple newlines with single newline
        .replace(/^\s+|\s+$/g, '') // Trim start and end
        .replace(/[ \t]+/g, ' '); // Replace multiple spaces with single space
    
    return html;
}

export const prepareSATProblemForDB = (problem) => {
    const { problem_source, subsource, is_practice_test, in_cb_question_bank, collegeboard_question_id, practice_test, test_section, module, cb_domain, cb_skill, answer_type, input_answers, mult_choice_correct_answer_index, difficulty, custom_skills, concepts, question, answer_choices } = problem;
    console.log('prepareSATProblemForDB4');
    
    
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
    let question_text = '';
    if (question_json) {
        question_text = getNodeText(question_json);
    } else {
        question_text = removeTags(question_html);
    }
    const contains_graphic = question_text.includes('[img]');
    let db_input_answers = answer_type == 'numeric_input' ? input_answers : null;
    let db_mult_choice_answer = answer_type == 'multiple_choice' ? mult_choice_correct_answer_index : null;
    let db_difficulty = difficulty ? difficulty : null;
    const sb_data = {
        source: problem_source, subsource: subsource, test_section, source_question_id: source_question_id, is_practice_test: is_practice_test, in_cb_question_bank: in_cb_question_bank, practice_test_id: practice_test_id, test_module: test_module, problem_number: problem_number, cb_domain: cb_domain, cb_skill: cb_skill, difficulty: db_difficulty, answer_type: answer_type, input_answers: db_input_answers, skills: custom_skills, concepts, question_text: question_text, question_html: question_html, question_json: question_json, answer_choices, mult_choice_answer: db_mult_choice_answer, source_solution: source_solution, manually_edited: true, contains_graphic: contains_graphic, discipline: 'SAT', problem_type: 'practice_problem', allow_multiple_selection: false
    }
    return sb_data;
}