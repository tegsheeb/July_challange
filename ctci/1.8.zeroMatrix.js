/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    let firstRowHasZero = false;
    let firstColHasZero = false;
    
    for (let i = 0; i< col; i++) {
        if(matrix[0][i] === 0) {
            firstRowHasZero = true;
            break;
        } 
    }
    
    for (let i = 0; i< row; i++) {
        if(matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        } 
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    for(let i = 1; i < col; i++) {
        if(matrix[0][i] === 0) {
            nullifyCol(matrix, i);
        }
    }
    
    for(let i = 1; i < row; i++) {
        if(matrix[i][0] === 0) {
            nullifyRow(matrix, i);
        }
    }
    
    if (firstRowHasZero) {
        nullifyRow(matrix, 0);
    }

    if (firstColHasZero) {
        nullifyCol(matrix, 0);
    }
};

const nullifyRow = (matrix, rowN) => {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[rowN][i] = 0;
    }
}

const nullifyCol = (matrix, colN) => {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][colN] = 0;
    }
}