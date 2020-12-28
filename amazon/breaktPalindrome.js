/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) return ''
    const mid = Math.floor(palindrome.length/2);
    let pointer = 0;
    while(pointer< mid) {
        if(palindrome.charAt(pointer) !== 'a') {
            return palindrome.slice(0, pointer) + 'a' + palindrome.slice(pointer + 1);
        }
        pointer++;
    }
    
    return palindrome.slice(0, palindrome.length - 1) + 'b';
};