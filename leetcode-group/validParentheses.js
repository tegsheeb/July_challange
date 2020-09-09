/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let brackets = {'(':')', '{': '}', '[': ']'}
  for (let i = 0; i < s.length; i++) {
      if (brackets[stack[stack.length - 1]] === s[i]) {
          stack.pop();
      } else {
          stack.push(s[i]);
      }
  }

  if(stack.length === 0) return true;
  else return false;

};