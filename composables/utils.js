export const debounceFunction = (fn, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
};

export const objectToHash = (obj) => {
    // Convert object to a consistent string representation
    const str = JSON.stringify(obj);
    
    // Initialize hash variable
    let hash = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get ASCII value of character
        const char = str.charCodeAt(i);
        
        // Update hash using a variation of the djb2 algorithm:
        // 1. Left shift hash by 5 (multiply by 32)
        // 2. Subtract the original hash value
        // 3. Add the ASCII value of the current character
        hash = ((hash << 5) - hash) + char;
        
        // Convert to 32-bit integer using bitwise AND
        // This keeps the number within the integer limits
        hash = hash & hash;
    }
    
    // Convert to positive base-36 string:
    // - Math.abs() ensures positive number
    // - toString(36) converts to base-36 (0-9 and a-z)
    return Math.abs(hash).toString(36);
};
