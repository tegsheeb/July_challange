/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }

    const regexToIgnore = /[.,:;*+\-?^${}()|[\]\\!"#%&'\/<=>@_`~]/g;
    const sNoSpace = s.replace(regexToIgnore, '').split(' ').join('').toLowerCase();

    for(let i = 0; i < sNoSpace.length/2; i++) {
        if(sNoSpace.charAt(i) !== sNoSpace.charAt(sNoSpace.length - 1 -i)) {
            return false;
        }
    }

    return true;
};