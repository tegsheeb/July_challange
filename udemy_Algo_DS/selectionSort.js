const selectionSort = (arr) => {
  let minIndex, minValue;
  for (let i = 0; i < arr.length; i ++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([8, 2, 5, 7, 4]));