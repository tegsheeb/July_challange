function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if (!str1) return true;

  let i = 0;
  let j = 0;

  while(j < str2.length) {
    if(str1[i] === str2[j]) i++;
    if(str1.length === i) return true;
    j++;
  }

  return false;
}