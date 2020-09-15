/**
 * @param {number} n
 * @return {number}
 */

// Naive solution
// var countPrimes = function(n) {    
//     let isPrime = (num) => {
//         if(num === 2) return true;
//         if(num === 3) return true;
//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }
    
//     let counter = 0; 

//     for (let i = 2; i < n; i++ ) {
//         if(isPrime(i)) {
//             counter++;
//         }
//     }
    
//     return counter;
// };

var countPrimes = function(n) {    
  let primes = new Array(n);
  
  for (let i = 2; i * i < primes.length; i++ ) {
      if(!primes[i]) {
          for(let j = i; j * i < primes.length; j++) {
              primes[i * j] = true;
          }
      }
  }
  
  let counter = 0;
  for (let k = 2; k < primes.length; k++) {
      if(!primes[k]) counter++;
  }
  
  return counter;
};
