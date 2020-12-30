/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {    
    const normalizedStr = paragraph.replace(/[^a-zA-Z0-9 ]/g, " ").toLowerCase(); 
    const words = normalizedStr.split(' ').filter(ele => ele !== '' && !banned.includes(ele));
    
    let counter = {};

    for (let i = 0; i < words.length; i++) {
        if (!counter[words[i]]) {
            counter[words[i]] = 1;
        } else {
            counter[words[i]] = counter[words[i]] + 1;
        }
    }
        
    return Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b);

    
};