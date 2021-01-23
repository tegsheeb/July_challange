/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Solution 1: transpose by diagnose

// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// transpose by diagnose

// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]

// reverse 
// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]
// var rotate = function(matrix) {
//     // transpose 
//     let len = matrix.length;
    
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             const tmp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = tmp;
//         }
//     }
    
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len / 2; j++) {
//             const tmp = matrix[i][j];
//             matrix[i][j] = matrix[i][len - 1 - j];
//             matrix[i][len - 1 - j] = tmp;
//         }
//     }
// };

// Solution 2
var rotate = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n/ 2 ; i++) {
        let start = i;
        let end = n - 1 - i;
        for (let j = start; j < end; j++) {
            const offset = j - start
            const top = matrix[start][j];
            matrix[start][j] = matrix[end - offset][start];
            matrix[end - offset][start] = matrix[end][end - offset];
            matrix[end][end - offset] = matrix[j][end];
            matrix[j][end] = top;
        }
    }

}



