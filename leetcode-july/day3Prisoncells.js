/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {

  let days = 0;
  newN = N % 14 + 14

  while (days < newN) {
      let nextDay = [];
      for (let i = 0; i < cells.length; i += 1 ) {
          if (cells[i-1] !== undefined && cells[i+1] !==undefined) {
              if (cells[i-1] === cells[i+1]) {
                  nextDay[i] = 1;
              } else {
                  nextDay[i] = 0;
              }
          } else {
              nextDay[i] = 0
          }
      }

      days += 1;
      cells = nextDay;
  }
  return cells;

};