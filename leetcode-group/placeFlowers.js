/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const existing = flowerbed.reduce((total, num) => (total + num));

    if ((existing + n) * 2 - 1 > flowerbed.length) return false;
    
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        // i is zero && previous one is zero or i is the first one && next is zero or i is the last one
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0) && (i === flowerbed.length - 1 || flowerbed[i+1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
        if (count >= n) return true;
    }
    
    return false;    
};