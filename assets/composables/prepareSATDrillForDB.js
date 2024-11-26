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

export const prepareSATDrillForDB = (drill) => {
    
    const { test_section, cb_domain, cb_skill, instructions_html, instructions_json, question_html, question_json, has_numeric_input, has_text_input, has_multiple_choice, numeric_answers, answer_is_exact, text_answer_html, text_answer_json, text_answer_label, explanation_html, explanation_json, answer_choices, mult_choice_correct_answer_index, mult_choice_correct_answer_indices, mult_choice_label, custom_skills } = drill;
    
    let text_answer_text = null;
    let db_numeric_answers = [];
    let numeric_answers_label = '';
    let require_all_numeric_answers = true;
    let answer_type = 'text';
    if (has_numeric_input) {
        db_numeric_answers = numeric_answers.answers;
        numeric_answers_label = numeric_answers.is_label ? numeric_answers.label : '';
        require_all_numeric_answers = numeric_answers.require_all;
        answer_type = 'numeric';
    }
    if (has_text_input) {
        text_answer_text = getNodeText(text_answer_json);
    }
    if (has_multiple_choice) {
        answer_type = 'multiple_choice';
    }
   
    
    const question_text = getNodeText(question_json);
    const explanation_text = getNodeText(explanation_json);
    const instructions_text = getNodeText(instructions_json);
    const sb_data = {
        test_section: test_section, cb_domain, cb_skill, instructions_html, instructions_json, instructions_text, question_html, question_json, question_text, answer_type, has_numeric_input, has_text_input, has_multiple_choice, numeric_answers: db_numeric_answers, numeric_answers_label, require_all_numeric_answers, text_answer_html, text_answer_json, text_answer_text, text_answer_label, answer_is_exact, explanation_html, explanation_json, explanation_text, answer_choices, mult_choice_answer: mult_choice_correct_answer_index, mult_choice_answers: mult_choice_correct_answer_indices, mult_choice_label, custom_skills
    }
    return sb_data;
        
}