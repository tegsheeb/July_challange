/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalSquare = function(matrix) {
//     let max = 0;
//     const m = matrix.length;
//     const n = matrix[0].length;
    
//     const findAllOneSquare = (matrix, i, j) => {
//         const localMax = 0;            
//         let increment = 1;

//         if(matrix[i][j] !== 0) {
//             let foundZero = false;
//             while(!foundZero && increment + i< m && increment + j < n) {
//                 for(let k = i; k < i+increment; k++) {
//                     if(matrix[k][i + increment] === 0) {
//                         foundZero = true;
//                     }
//                 }    
//                 for(let k = j ; k < j + increment; k++) {
//                     if(matrix[k][j + increment] === 0) {
//                         foundZero = true;
//                     }
                    
//                 }
//                 increment++;
                
//             }
         
//         }
//         return increment
//     }
    
    
//     for (let i = 0; i < m; i++) {
//         for(let j  = 0; j < n; i++) {
//             const allOnes = findAllOneSquare(matrix, i, j)
//             if(max < allOnes) max = allOnes;
//         }
//     }
    
//     return max;

// };


const maximalSquare = (matrix) => {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    let dp = new Array(rows + 1).fill(new Array(cols + 1).fill(0))
    let maxSquareLen = 0;

    for(let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if(matrix[i-1][j-1] === '1') {
                // dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
                console.log(dp)
                console.log('i, j', i, j)
                dp[i][j] = Math.min(Math.min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]) + 1;
                console.log(matrix[i - 1][j - 1], dp[i][j])
                console.log(dp)
                maxSquareLen = Math.max(dp[i][j], maxSquareLen)
            }
        }
    }
    console.log(dp)

    return maxSquareLen * maxSquareLen
}


const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximalSquare(matrix))