/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++ ) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              if (grid[i-1] === undefined || grid[i-1][j] === 0 ) {
                  perimeter += 1;
              }
              if (grid[i][j - 1] === undefined || grid[i][j - 1] === 0 ) {
                  perimeter += 1;

              }
              if (grid[i + 1] === undefined || grid[i + 1][j] === 0 ) {
                  perimeter += 1;

              }
              if (grid[i][j + 1] === undefined || grid[i][j + 1] === 0 ) {
                  perimeter += 1;
              }

          }
      }
  }
  return perimeter;
};