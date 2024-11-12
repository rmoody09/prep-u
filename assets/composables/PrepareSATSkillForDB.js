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

export const prepareSATSkillForDB = (skill) => {
    const { tag, name, description_html, description_json, detailed_description_html, detailed_description_json, test_section, cb_domain, cb_skill } = skill;
    console.log('prepareSATSkillForDB');
    console.log(skill);
    
    //todo: add more validation with zod
    
    
    const descrip_text = getNodeText(description_json);
    const detailed_descrip_text = getNodeText(detailed_description_json);
    
    const sb_data = {
        tag: tag,
        name: name,
        description_html: description_html,
        description_json: description_json,
        description_text: descrip_text,
        detailed_description_html: detailed_description_html,
        detailed_description_json: detailed_description_json, 
        detailed_description_text: detailed_descrip_text,
        test_section: test_section, 
        cb_domain: cb_domain,
        cb_skill: cb_skill,
    }
    return sb_data;
}