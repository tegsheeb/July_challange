// Divisibility of Strings

const solution = (s1, s2) => {
    if(s1.length % s2.length !== 0 ) {
        return -1;
    } else {
        l2 = s2.length;
        for (let i = 0; i < s1.length; i++) {
            if(s1.charAt(i) !== s2.charAt(i % l2)) {
                return -1;
            }
        }
        for(let i = 1; i <= l2; i++) {
            let j;
            for(j = 0; j< l2; j++) {
                if(s2.charAt(j) !== s2.charAt((j % i))) {
                    break;
                }
            }

            if(j==s2.length) {
                return i;
            }
        }
        return -1;
    }
}


const s = "gcdgcdgcdgcdgcdgcd"
const t = "gcdgcd"

const s1 = "bcdbcdbcd", s2 = "bcdbcd";
const s3 = "bcdbcdbcdbcd", s4 = "bcdbcd";
const s5 = "aaaaaa", s6 = "aaa";

console.log(solution(s, t))
console.log(solution(s1, s2))
console.log(solution(s3, s4))
console.log(solution(s5, s6))