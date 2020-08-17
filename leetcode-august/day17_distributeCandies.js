/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let result = new Array(num_people).fill(0);
  let currentIndex = 0;
  let turn = 0;

  while(candies > 0) {

    if (currentIndex === num_people) {
      currentIndex = 0;
      turn++;
    }
    const currentCandy = (currentIndex + 1) + (num_people * turn);
    if (candies - currentCandy < 0) {
      result[currentIndex] += candies;
    } else {
      result[currentIndex] += currentCandy;
    }
    currentIndex++;
    candies -= currentCandy;
  }

  return result;
};


// console.log(distributeCandies(7, 4));
// console.log(distributeCandies(60, 4));