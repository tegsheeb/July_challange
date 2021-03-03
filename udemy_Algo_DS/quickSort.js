const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let mid = pivot(arr, left, right);
    console.log('pivot: ',  mid);
    quickSort(arr, left, mid - 1);
    console.log("left", arr);
    quickSort(arr, mid + 1, right);
    console.log("right: ",arr);
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const pivot = (arr, start=0, end=arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for(let i = start + 1; i <= end; i++) {
    if(arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(quickSort([3, 9, 4, 2, 1, 5, 8]))