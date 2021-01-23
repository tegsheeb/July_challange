/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 0;
    let consecutiveChar = 1;
    
    while(read < chars.length && write < chars.length) {
        if (chars[read] === chars[read + 1]) {
            consecutiveChar++;
            read++;
        } else {
            chars[write] = chars[read];
            if(consecutiveChar > 1 && consecutiveChar <= 9) {
                chars[write + 1] = consecutiveChar.toString();
                write += 2;   
            } else if (consecutiveChar > 9) {
                let numberStr = consecutiveChar.toString();
                for (let i = 0; i < numberStr.length; i++) {
                    chars[write + 1 + i] = numberStr[i];
                }
                write += (1 + numberStr.length);
            } else {
                write ++;  
            }
            read++;
            consecutiveChar = 1;
        }
    }
    
    return write--;
    
};