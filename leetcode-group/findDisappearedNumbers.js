/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time O(n), Space O(n)
// var findDisappearedNumbers = function(nums) {
//     let counters = {};
//     let result = [];
//     for (const num of nums) {
//         if(!counters[num]) counters[num] = true;
//     }
//     for(let i = 1; i <= nums.length; i++) {
//         if(!counters[i]) result.push(i);
//     }
//     return result;
// };

// Time O(n), Space O(1)
var findDisappearedNumbers = function(nums) {
    const result = [];
    
    for (let i = 0; i<nums.length; i++) {
        const newIndex = Math.abs(nums[i]) - 1;
        if(nums[newIndex] > 0) {
            nums[newIndex] *= -1; 
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            result.push(i+1);
        }
    }
        
    return result;
};