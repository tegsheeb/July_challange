/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//             return i;
//         }
//     }
// };

var peakIndexInMountainArray = function(arr) {
  let start = 0;
  let end = arr.length;

  while (end > start) {
      let mid = Math.floor((start + end)/2)

      if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
          return mid;
      } else {
           if (arr[mid] > arr[mid-1] && arr[mid] < arr[mid+1]) {
               start = mid;
           }
           if (arr[mid] < arr[mid-1] && arr[mid] > arr[mid+1]) {
               end = mid;
           }
      }
  }
};