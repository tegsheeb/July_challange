const selectionSort = (arr) => {
  let minIndex, minValue;
  for (let i = 0; i < arr.length; i ++) {
    minIndex = i;
    minValue = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minIndex = j;
        minValue = arr[j];
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