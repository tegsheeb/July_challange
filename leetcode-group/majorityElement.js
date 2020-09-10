/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let counter = {};
  for(let i = 0; i < nums.length; i++) {
      if(!counter[nums[i]]) {
          counter[nums[i]] = 1;
      } else {
          counter[nums[i]]++
      }
      if (counter[nums[i]]> nums.length / 2) {
          return nums[i];
      }
  }
};