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
}

let s1 = [19, 2, 3, 90, 25, 34];
sortStack(s1);
console.log(s1);