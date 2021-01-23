/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if(s.length === t.length) {
        return oneReplace(s, t);
    } else if (s.length + 1 === t.length) {
        return oneInsertDelete(s, t);
    } else if (s.length - 1 === t.length) {
        return oneInsertDelete(t, s);
    } else {
        return false;
    }
      
};

const oneReplace = (s1, s2) => {
    if(s1.length === 0 && s2.length === 0) return false;
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            if(foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return foundDifference;
};

const oneInsertDelete = (s1, s2) => {
    let index1 = 0;
    let index2 = 0;
    
    while (index1 < s1.length && index2 < s2.length) {
        if(s1[index1] !== s2[index2]) {
            if(index1 !== index2) {
                return false;
            }
            index2++;
            
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}





