const assert = require('assert');

const sortStack = (s)=> {
    let sorted = [];
    let tmp;

    while(s.length !== 0) {
        tmp = s.pop();
        while(sorted[sorted.length - 1] > tmp && sorted.length > 0 ) {
            s.push(sorted.pop());
        }

        sorted.push(tmp);
    }

    while(sorted.length > 0) {
        s.push(sorted.pop());
    }

    return s;
}

// Test Case 1
let s1 = [19, 2, 3, 90, 25, 34]; // output: [ 90, 34, 25, 19, 3, 2 ]
sortStack(s1);
// console.log(s1);

// Test Case 2
let s2 = []
sortStack(s2)
// console.log(s2 )

///.....

// console.log(sortStack[19, 2, 3, 90, 25, 24] === 'tomato') // output: [ 90, 34, 25, 19, 3, 2 ]

// console.log('tomato'.toUpperCase() === 'TOMATO')
assert('tomato'.toUpperCase() === 'TOMAssTO')
assert.deepStrictEqual(sortStack([19, 2, 3, 90, 25, 34]), [90, 34, 25, 19, 3, 2]);