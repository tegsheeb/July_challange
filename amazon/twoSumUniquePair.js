const twoSumUniquePair = (arr, target) => {
    let pair = {};
    let uniquePairs = new Set();
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(pair[target-arr[i]] && !uniquePairs.has(arr[i])) {
            uniquePairs.add(arr[i]);
            uniquePairs.add(target-arr[i])
            count++;
        } else {
            pair[target-arr[i]] = arr[i]
        }
    }
    console.log(pair);
    console.log(uniquePairs);
    return count;
}

const nums = [1, 1, 2, 45, 46, 46];
const target = 47;

console.log(twoSumUniquePair(nums, target));