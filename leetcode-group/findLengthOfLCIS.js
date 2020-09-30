/**
 * @param {number[]} nums
 * @return {number}
 */
// Longest Continuous Increasing Subsequence
var findLengthOfLCIS = function(nums) {
    let maxLength = 1;
    let start = 0;
    let end = 1;
    
    if(nums.length < 1) return 0;
    
    while (end < nums.length) {
        if(nums[end - 1] < nums[end]) {
            if (maxLength < end - start + 1) {
                maxLength = end - start + 1;
            }
            end++;
        } else {
            start = end;
            end = end + 1;
        }
    }
    return maxLength;
};