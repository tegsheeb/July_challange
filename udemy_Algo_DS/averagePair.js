function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
      let remain = target * 2 - arr[i];
      if (lookup[arr[i]]) {
          return true;
      } else {
          lookup[remain] = arr[i];
      }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));