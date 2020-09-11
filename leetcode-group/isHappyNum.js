/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seenNum = new Set();

  const getNext = (num) => {
      let totalSum = 0;
      while(num > 0) {
          let digit = num % 10;
          num = Math.floor(num/10);
          totalSum += digit * digit;
      }
      return totalSum;
  }

  while ( n !== 1 && !seenNum.has(n)) {
      seenNum.add(n);
      n = getNext(n);
  }

  return n === 1;
};