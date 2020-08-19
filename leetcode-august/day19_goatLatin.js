/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const arrayS = S.split(' ');
  const result = [];
  const vowels = 'aeiouAEIOU';
  const endingA = 'a';
  for (let i = 0; i < arrayS.length; i++) {
      let goatLatin = '';
      if (vowels.includes(arrayS[i].charAt(0))) {
          goatLatin = arrayS[i] + 'ma';
      } else {
          goatLatin = arrayS[i].slice(1) + arrayS[i].charAt(0) + 'ma';
      }
      result.push(goatLatin + endingA.repeat(i + 1));
  }

  return result.join(' ');
};