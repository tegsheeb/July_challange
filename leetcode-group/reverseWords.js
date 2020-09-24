/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse = (string) => {
        const arrChar = string.split('');
        let start = 0;
        let end = arrChar.length - 1;
        while(start < end) {
            const tmp = arrChar[start];
            arrChar[start] = arrChar[end];
            arrChar[end] = tmp;
            start++;
            end--;
        }
        return arrChar.join('');
    }
    
    const arrWords = s.split(' ');
    for(let i = 0; i < arrWords.length; i++) {
        arrWords[i] = reverse(arrWords[i]);
    }
    return arrWords.join(' ');
};