/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A.length === B.length) {
        return (A + A).includes(B)
    } else {
        return false;
    }
};