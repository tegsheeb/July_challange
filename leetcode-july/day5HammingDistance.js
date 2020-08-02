/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    let lengthDifference;
    let counter = 0;

    if (xBits.length > yBits.length) {
        lengthDifference = xBits.length - yBits.length;
        const filler = new Array(lengthDifference).fill(0);
        yBits = filler.join('') + yBits;
    }
    if (xBits.length < yBits.length) {
        lengthDifference = yBits.length - xBits.length;
        const filler = new Array(lengthDifference).fill(0);
        xBits = filler.join('') + xBits;
    }

    const xBitsArr = xBits.split('');
    const yBitsArr = yBits.split('');

    for (i = 0; i< xBitsArr.length; i++) {
        if(xBitsArr[i] !== yBitsArr[i]) {
            counter++;
        }
    }

    return counter;
};