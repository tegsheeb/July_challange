/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [];
    const mapping = {2:"abc", 3:"def", 4:"ghi", 5:"jkl", 6:"mno", 7:"prqs", 8:"tuv", 9:"wxyz"}
        
    let recursive = (currentStr, remainingDigit) => {
        if(remainingDigit.length === 0) {
            result.push(currentStr);
            return;
        } 
        let currentDigit = remainingDigit[0];
        let letters = mapping[currentDigit];
        for(let i = 0; i < letters.length; i++) {
            let letter = letters[i];
            currentStr = currentStr + letter;
            // console.log(currentStr);
            recursive(currentStr, remainingDigit.slice(1));
            currentStr = currentStr.slice(0, currentStr.length -1);
        }
    }
    
    if(digits.length !== 0) {
        recursive("", digits);
    }
    return result;
};