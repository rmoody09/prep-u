export function removeTipTapHTMLTags(html) {
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