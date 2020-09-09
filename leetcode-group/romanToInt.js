/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;
  let i = 0;
  let lookup = {'I': 1, 'V': 5, 'X': 10, 'L':50, 'C':100, 'D':500, 'M':1000};

  while(i < s.length) {
      if (lookup[s[i]] >= [lookup[s[i + 1]]]) {
          result += lookup[s[i]]
          i += 1;
      } else {
          result += lookup[s[i + 1]] - lookup[s[i]];
          i += 2;
      }
  }

  return result;
};