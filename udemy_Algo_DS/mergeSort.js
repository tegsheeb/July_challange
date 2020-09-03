const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let leftIndex = 0;
  let rigthIndex = 0;
  let result = [];

  while (leftIndex < left.length && rigthIndex < right.length) {
    if (left[leftIndex] < right[rigthIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rigthIndex]);
      rigthIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rigthIndex));
}

// console.log(merge([1,4,9], [2,6,7]));
// console.log(mergeSort([9, 4, 2, 8, 5]));