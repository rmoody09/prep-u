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

export const prepareConceptTagForDB = (concept) => {
    const { tag, name, description_html, description_json, detailed_description_html, detailed_description_json, test_section, cb_domain, cb_skill, parent_concepts, sub_concepts } = concept;
    console.log('prepareConceptTagForDB4');
    console.log(JSON.stringify(concept));
    
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
        section: test_section, 
        domain: cb_domain,
        skill: cb_skill, 
        parent_concepts: parent_concepts,
        sub_concepts: sub_concepts,
    }
    return sb_data;
}

export const updateConceptParentsAndChildren = async (client, concept) => {
    console.log('updateConceptParentsAndChildren');
    console.log(JSON.stringify(concept));
    const { data: parents_data, error: parents_error } = await client.from('concept_tags').select('id,sub_concepts,tag').in('id', concept.parent_concepts);
    if (parents_data) {
        for (const parent of parents_data) {
            console.log('parent');
            console.log(JSON.stringify(parent));
            const sub_concepts = parent.sub_concepts || [];
            if (!sub_concepts.includes(concept.id)) {
                console.log('adding concept to parent');
                sub_concepts.push(concept.id);
                console.log('sub_concepts');
                console.log(JSON.stringify(sub_concepts));
                const { data, error } = await client.from('concept_tags').update({ sub_concepts: sub_concepts }).eq('id', parent.id);
                if (error) {
                    console.log('error updating parent concept', error);
                }
            }   
        }
    }

    const { data: children_data, error: children_error } = await client.from('concept_tags').select('id,parent_concepts,tag').in('id', concept.sub_concepts);
    if (children_data) {
        for (const child of children_data) {
            console.log('child');
            console.log(JSON.stringify(child));
            const parent_concepts = child.parent_concepts || [];
            if (!parent_concepts.includes(concept.id)) {
                console.log('adding concept to child');
                parent_concepts.push(concept.id);
                console.log('parent_concepts');
                console.log(JSON.stringify(parent_concepts));
                const { data, error } = await client.from('concept_tags').update({ parent_concepts: parent_concepts }).eq('id', child.id);
                if (error) {
                    console.log('error updating child concept', error);
                }
            }
        }
    }
}
