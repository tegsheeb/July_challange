/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let p = 0;

  let copy_nums1 = [...nums1];

  while (p1 < m && p2 < n) {
      if (copy_nums1[p1] < nums2[p2]) {
          nums1[p] = copy_nums1[p1];
          p1++;
      } else {
          nums1[p] = nums2[p2];
          p2++;
      }
      p++;
  }

  if (p1 < m) {
      while(p1 < m) {
          nums1[p] = copy_nums1[p1];
          p++;
          p1++;
      }
  } else {
      while(p2 < n) {
          nums1[p] = nums2[p2];
          p++;
          p2++;
      }
  }
  return nums1;
};