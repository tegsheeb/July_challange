/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {    
    let pointRows = matrix.length - 1;
    let pointCols = 0
    
    while(pointRows >= 0 && pointCols < matrix[0].length) {
        if(target = matrix[pointRows][pointCols]) {
            return true;
        } else if (target > matrix[pointRows][pointCols]) {
            pointCols++;
        } else {
            pointRows--;
        }
    }
    
    return false;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 5;

console.log(searchMatrix(matrix, target))

