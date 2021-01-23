const checkPermutation = (string1, string2) => {
    if (string1.length !== string2.length) return false;
    let hashing = new Array(128).fill(0);

    for(let i = 0; i < string1.length; i++) {
        hashing[string1.charCodeAt(i)]++;
    }

    for(let i = 0; i < string1.length; i++) {
        hashing[string2.charCodeAt(i)]--;
        if(hashing[string2.charCodeAt(i)] < 0) {
            return false;
        }
    }

    return true;
}

const s1 = 'ababbaba';
const s2 = 'ababbab1';
const s3 = 'ababbaab';

console.log(checkPermutation(s1, s2), 'Not a premutation')
console.log(checkPermutation(s1, s3), 'It is a premutation')