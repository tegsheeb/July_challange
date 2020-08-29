function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const lookup = {};

  while(num1 > 0) {
      let digit = num1 % 10;
      lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1;
      num1 = Math.floor(num1 / 10);
  }

  while(num2 > 0) {
    let digit = num2 % 10;
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
    num2 = Math.floor(num2 / 10);

  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(181, 281));

