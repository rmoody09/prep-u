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
    console.log('prepareSATDrillForDB');
    console.log(JSON.stringify(drill));
    
    const { test_section, cb_domain, cb_skill, question_html, question_json, answer_type, numeric_answer, answer_is_exact, explanation_html, explanation_json, answer_choices, mult_choice_correct_answer_index, custom_skills } = drill;
    console.log('prepareSATDrillForDB');
    console.log(JSON.stringify(drill));
    
    
    let numeric_answers = [];
    let text_answer_text = null;
    let text_answer_html = null;
    let text_answer_json = null;
    let db_mult_choice_answer = null;
    if (answer_type == 'numeric_input') {
        numeric_answers.push(numeric_answer);
    } else if (answer_type == 'text_input') {
        text_answer_html = drill.text_answer_html;
        text_answer_json = drill.text_answer_json;
        text_answer_text = getNodeText(text_answer_json);
    } else if (answer_type == 'multiple_choice') {
        db_mult_choice_answer = mult_choice_correct_answer_index;
    }
    
    const question_text = getNodeText(question_json);
    const explanation_text = getNodeText(explanation_json);
    const sb_data = {
        sat_section: test_section, cb_domain, cb_skill, question_html, question_json, question_text, answer_type, numeric_answers, text_answer_html, text_answer_json, text_answer_text, answer_is_exact, explanation_html, explanation_json, explanation_text, answer_choices, mult_choice_answer: db_mult_choice_answer, custom_skills
    }
    console.log('sb_data', sb_data);
    return sb_data;
        
}