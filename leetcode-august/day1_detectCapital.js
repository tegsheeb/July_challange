var detectCapitalUse = function(word) {
  if(word.length === 1) {
      return true;
  }
  const case1 = word.toUpperCase();
  const case2 = word.toLowerCase();
  const case3 = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  console.log(case1, case2, case3);

  if (word === case1 || word === case2 || word === case3) {
      return true;
  }

  return false;
};