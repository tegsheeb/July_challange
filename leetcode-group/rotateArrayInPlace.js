/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  time O(n), Space O(n)
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     const firstHalf = nums.slice(0, nums.length - k);
//     const secondHalf = nums.slice(nums.length - k);

//     for(let i = 0; i < k; i++) {
//         nums[i] = secondHalf[i];
//     }
//     for(let i = k; i < nums.length; i++) {
//         nums[i] = firstHalf[i -k];
//     }
// };

// time O(n), Space O(n)
// var rotate = function(nums, k) {
//     k = k % nums.length;
//     let helperArr = new Array(nums.length);
    
//     for(let i = 0; i < nums.length; i++) {
//         helperArr[(i + k) % nums.length] = nums[i];
//     }
    
//     for(let i = 0; i < nums.length; i++) {
//         nums[i] = helperArr[i];
//     }
// };

// Time O(n), Space O (1)
var rotate = function(nums, k) {
    k = k % nums.length;
    
    const reverse = (arr, start, end) => {
        while(start < end) {
            const tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }
    
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
