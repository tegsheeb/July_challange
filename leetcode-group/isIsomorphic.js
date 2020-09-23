/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map1 = {}, map2 = {};
    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]] === undefined && map2[t[i]] === undefined) {
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
            
        } else {
            if(map1[s[i]] !== t[i] || map2[t[i]] !== s[i]) {
                return false;
            }
        }
    }
    return true;
};