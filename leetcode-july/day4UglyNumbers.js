/**
 * @param {number} n
 * @return {number}
 */

// Better than naive solution
var nthUglyNumber = function(n) {
  let uglyNumbers = [1];
  let twos = 2;
  let threes = 3;
  let fives = 5;
  let index2 = 0, index3 = 0, index5 = 0;

  for(let i = 1; i < n; i++) {
      uglyNumbers[i] = Math.min(twos, threes, fives);
      if (uglyNumbers[i] === twos) {
          index2++;
          twos = uglyNumbers[index2] * 2;
      }
      if (uglyNumbers[i] === threes) {
          index3++;
          threes = uglyNumbers[index3] * 3;
      }
      if (uglyNumbers[i] == fives) {
          index5++;
          fives = uglyNumbers[index5] * 5;
      }
  }
  return uglyNumbers[uglyNumbers.length - 1];
}

// Naive approach works on small number,  but timed out at n = 1407
// var nthUglyNumber = function(n) {
//     const isUgly = (number) => {
//         while (number > 6) {
//             if (number % 5 === 0) {
//                 number = number / 5;
//             } else if (number % 3 === 0) {
//                 number = number/3;
//             } else if (number % 2 === 0) {
//                 number = number / 2;
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     }

//     let currentNumber = 2;
//     let counter = 0;
//     while (counter < (n - 1)) {
//         if (isUgly(currentNumber)) {
//             counter ++;
//             currentNumber ++;
//         } else {
//             currentNumber ++;
//         }
//     }
//     return currentNumber - 1;
// };