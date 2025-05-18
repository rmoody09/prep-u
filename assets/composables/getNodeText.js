export const getNodeText = (doc_node) => {
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
