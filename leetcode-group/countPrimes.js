/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let counter = 0;
  for (let i = 1; i < n; i++ ) {
      if(isPrime(i)) counter++;
  }
  return counter ;
};

const isPrime = (num) => {
  if (num <= 1 ) return false;

  for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
  }
  return true;
}