const countToN = (n) => {
  if(n === 0) return 0;
  return n + countToN(n-1);
};

const sumAllNumbers = (list) => {
  if (list.length === 0) return 0; // constant
  const lastEle = list.pop();
  return lastEle + sumAllNumbers(list); // linear
};

const sumAllNumbers2 = (list) => {
  const innerfunc = (pointer) => {
    if (pointer === list.length) return 0;
    return list[pointer] + innerfunc(pointer + 1);
  }
  return innerfunc(0);
};


const myList = [1, 2, 3, 4, 5];
const sum = sumAllNumbers = (myList);
// sum == 15
// myList == [] :(

const sumListWithReturn = (list, i) => {
  if(i >= list.length) return 0 ; // the person sitting by the screen
  return list[i] + sumListWithReturn(list, i + 1);
};

sumListWithReturn(list, 0);

const sumListSanseReturn = (list, i) => {
  let bucket = 0;

  const inner = (index) => {
    bucket += list[index];
    inner(index+1);
  };

  return bucket;
};


/*
input: [1, 2, 3, 4, 5, 6, 7]
target: 10

example output: [
  [3, 5, 2],
  [1, 4, 5]
  ...
]
*/

// ([], 10)

// ([1], 9) : ([], 10)

// ([1, 2], 7) : ([2], 8)

// ..

const targetSum = (array, target) => {


  const result = []; // bucket
  const wc = [];

  const inner = (i, remainder) => {

    if(i >= array.length || remainder < 0) return;
    if (remainder === 0) return result.push(answerInProgress.slice());

    // try including the ith el
    answerInProgress.push(array[i]);
    inner(i+1, remainder - array[i]);
    answerInProgress.pop(); // BACKTRACK

    // try NOT including the ith el
    inner(i+1, remainder);
  };

  inner(0, target);

  return result;
};