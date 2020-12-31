/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length === 0) {
        return 0;
    }
    
    const lakeCol = grid.length;
    const lakeRow = grid[0].length;
    let numberOfIslands = 0;
    
    const dfs = (grid, col, row) => {
        if (col < 0 || row < 0 || col >= lakeCol || row >= lakeRow || grid[col][row] === '0')  return 
        
        grid[col][row] = '0';
        dfs(grid, col + 1, row);
        dfs(grid, col, row + 1);
        dfs(grid, col - 1, row);
        dfs(grid, col, row - 1);   
    }
    
    for (let col = 0; col < lakeCol; col++) {
        for (let row = 0; row < lakeRow; row++) {
            if (grid[col][row] === '1') {
                numberOfIslands++;
                dfs(grid, col, row);
            }
        }
    }
        
    return numberOfIslands;
    
};