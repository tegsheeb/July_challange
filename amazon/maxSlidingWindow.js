/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// brute force
// var maxSlidingWindow = function(nums, k) {
//     if(nums.length === 0 || k=== 0) return [0];
    
//     let n = nums.length;
//     let result = [];
//     for (let i = 0; i < n - k + 1; i++) {
//         const maxValue = Math.max(...nums.slice(i, i + k));
//         result.push(maxValue);
//     }

//     return result;
// };

// optimized
var maxSlidingWindow = function(nums, k) {
    const len = nums.length
    if(nums.length === 0 || k=== 0) return [0];
    if (k === 1) return nums;
    
    let left = new Array(len).fill(null);
    let right = new Array(len).fill(null);
    
    left[0] = nums[0];
    right[len - 1] = nums[len - 1];
    for (let i = 0; i < len; i++) {
        if(i % k === 0) left[i] = nums[i];
        else left[i] = Math.max(left[i-1], nums[i]);
        
        let j = len - i - 1;
        if((j + 1) % k === 0) right[j] = nums[j];
        else right[j] = Math.max(right[j + 1], nums[j]);
    }
    
    let result = [];
    for (let i = 0; i < len - k + 1; i++) {
        result.push(Math.max(left[i + k - 1], right[i]));
    }
    
    return result;
    

}