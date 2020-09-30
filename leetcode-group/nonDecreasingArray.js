/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let index = null;

    for(let i=0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i+1]) {
            if(index !== null) return false;
            index = i;
        }
    }
    
    return (index === null || index === 0 || index === nums.length - 2 || nums[index-1] <= nums[index+1] || nums[index] <= nums[index + 2]);
};
