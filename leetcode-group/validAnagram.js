/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) {
      return false;
  }

  var sObj = {}
  for (var i = 0; i < s.length; i++) {
      if ( sObj[s.charAt(i)] === undefined) {
          sObj[s.charAt(i)] = 1;
      } else {
          sObj[s.charAt(i)] = sObj[s.charAt(i)] + 1;
      };
  }

  var tObj = {}
  for (var i = 0; i < s.length; i++) {
      if ( tObj[t.charAt(i)] === undefined) {
          tObj[t.charAt(i)] = 1;
      } else {
          tObj[t.charAt(i)] = tObj[t.charAt(i)] + 1;
      };
  }

  for (key in sObj) {
      if (sObj[key] !== tObj[key]) {
          return false;
      }
  }

  return true;
};