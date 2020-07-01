/**
 * @param {number} n
 * @return {number}
 */


// Solution O(n)
// var arrangeCoins = function(n) {
//   let sum = 0;
//   let i = 1;
//   while (sum <= n) {
//       sum += i;
//       i++ ;
//   }

//   return (i - 2);
// };

// Solution O(1)

var arrangeCoins = function(n) {
  return Math.floor(Math.pow((2*n + 0.25), 0.5) - 0.5);
};