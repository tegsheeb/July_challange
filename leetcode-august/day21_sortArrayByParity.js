/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const evenNum = [];
  const oddNum = [];
  for (let i = 0; i < A.length; i++) {
      if(A[i] % 2 === 0) {
          evenNum.push(A[i]);
      } else {
          oddNum.push(A[i]);
      }
  }

  return evenNum.concat(oddNum);
};