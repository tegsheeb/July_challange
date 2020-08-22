function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
      return false;
  }

  const frequency1 = {};
  const frequency2 = {};

  for (let char of str1) {
      frequency1[char] ? frequency1[char] += 1 : frequency1[char] = 1;
  }

  for (let char of str2) {
      frequency2[char] ? frequency2[char] += 1 : frequency2[char] = 1;
  }

  for (let key in frequency1) {
      if (frequency2[key] === undefined) {
          return false;
      }

      if (frequency1[key] !== frequency2[key]) {
          return false;
      }
  }

  return true;
}

// console.log(validAnagram('aaz', 'zza'));
