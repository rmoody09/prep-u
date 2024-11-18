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
    const { tag, name, description_html, description_json, detailed_description_html, detailed_description_json, test_section, cb_domain, cb_skill, parent_skills, subskills } = skill;
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
        parent_skills: parent_skills,
        subskills: subskills
    }
    return sb_data;
}

export const updateSkillParentsAndChildren = async (client, skill_tag, parent_skills, subskills) => {
    const { data: parents_data, error: parents_error } = await client.from('sat_skills').select('tag', 'subskills').in('tag', parent_skills);
    if (parents_data) {
        for (const parent of parents_data) {
            const subskills = parent.subskills || [];
            if (!subskills.includes(skill_tag)) {
                subskills.push(skill_tag);
                const { data, error } = await client.from('sat_skills').update({ subskills: subskills }).eq('tag', parent.tag);
                if (error) {
                    console.log('error updating parent skill', error);
                }
            }
        }
    }

    const { data: children_data, error: children_error } = await client.from('sat_skills').select('tag', 'parent_skills').in('tag', subskills);
    if (children_data) {
        for (const child of children_data) {
            const parent_skills = child.parent_skills || [];
            if (!parent_skills.includes(skill_tag)) {
                parent_skills.push(skill_tag);
                const { data, error } = await client.from('sat_skills').update({ parent_skills: parent_skills }).eq('tag', child.tag);
                if (error) {
                    console.log('error updating child skill', error);
                }
            }
        }
    }
}