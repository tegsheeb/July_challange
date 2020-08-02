const mergeSort = (array) => {
  if (array.length <= 1 ) {
    return array;
  }

  const mid = Math.floor(array.length/2);
  const left = array.slice(0, mid);
  const right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (arr1, arr2) => {
  let sortedArray = [], leftIndex = 0, rightIndex = 0;
  while(leftIndex < arr1.length && rightIndex < arr2.length) {
    if(arr1[leftIndex] < arr2[rightIndex]) {
      sortedArray.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(arr2[rightIndex]);
      rightIndex++;
    }
  }
  sortedArray = sortedArray.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
  return sortedArray;
};

// console.log(mergeSort([4,9,2,8,3,1]));