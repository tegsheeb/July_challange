/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let hashMap = {'0': 0}
    let count = 0;
    
    for (let i = 0; i < time.length; i++) {
        let remainder = time[i] % 60
        
        if (remainder !== 0) {
            if(hashMap[60 - remainder]) {
                count += hashMap[60 - remainder] 
            }
        } else {
            count += hashMap[0]
        }

        
        if (!hashMap[remainder]) {
            hashMap[remainder] = 1;
        } else {
            hashMap[remainder]++;
        }   
    }
    
    return count;
};