function binarySearch(arr, target){
  let start = 0, end = arr.length - 1;
  let mid = Math.floor((start + end)/2);

  while (start <= end && arr[mid] !== target) {
      if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
      mid = Math.floor((start + end)/2);
  }
  return arr[mid] === target ? mid : -1;
}