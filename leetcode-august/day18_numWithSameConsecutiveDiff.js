/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  let result = [];

  const innerFunc = (num, N, K, result) => {
      if (N === 0) {
          result.push(num);
          return;
      }

      const last_digit = num%10;
      if(last_digit >= K) {
          innerFunc(num*10 + last_digit - K, N - 1, K, result);
      }
      if(K > 0 && last_digit + K < 10) {
          innerFunc(num*10 + last_digit + K, N - 1, K, result);
      }
  }

  if(N === 1) {
      result.push(0);
  }

  for (let i = 1; i < 10; i++) {
      innerFunc(i, N - 1, K,  result);
  }

  return result;

};