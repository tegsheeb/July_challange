/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let letters = {};
    
    for(let i = 0; i < s.length; i++) {
        if(letters[s[i]]) letters[s[i]]++;
        else letters[s[i]] = 1;
    }
    
    let foundOdd = false;
    for(letter in letters) {
        if(letters[letter] % 2 !== 0) {
            if(foundOdd === true){
                return false;
            }
            foundOdd = true;
        }
    }
    return true;
};