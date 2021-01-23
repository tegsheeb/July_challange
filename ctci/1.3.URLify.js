const urlify = (s) => {
    let stringArry = s.split(' ');
    for (let i = 0; i< stringArry.length-1; i++) {
        if(stringArry[i] !== '') {
            stringArry[i] = stringArry[i] + '%20'
        }
    }

    return stringArry.join('').slice(0, -3);
}

console.log(urlify('this is    same  '));
console.log(urlify('this is    same  hfdh  more  space '));