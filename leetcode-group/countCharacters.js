/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let hashmap = {};
  let totalLength = 0;
  for (let char of chars) {
      if (hashmap[char]) hashmap[char]++;
      else hashmap[char] = 1;
  }

  console.log(hashmap);
  for (let word of words) {
      let currentHashmap = {...hashmap};
      totalLength += word.length;
      for(let char of word) {
          if (currentHashmap[char]) {
              currentHashmap[char]--;
          } else {
              totalLength -= word.length;
              break;
          }
      }
  }
  return totalLength;
};