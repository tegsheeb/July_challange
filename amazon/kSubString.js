/*
Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.

Example 1:

Input: s = "abcabc", k = 3
Output: ["abc", "bca", "cab"]
Example 2:

Input: s = "abacab", k = 3
Output: ["bac", "cab"]
Example 3:

Input: s = "awaglknagawunagwkwagl", k = 4
Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
Explanation: 
Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl" 
"wagl" is repeated twice, but is included in the output once.
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
Solution
Java sliding window: https://leetcode.com/playground/LRBxfw5W
*/

const uniqueSubstringSizeK = (str, k) => {
    const uniqueString = {}

    let start = 0;
    let end = 0;

    while(start < str.length - k + 1) {
        let substring = {};
        while(end < start + k) {
            if(!substring[str.charAt(end)]) {
                substring[str.charAt(end)] = true;
            } else {
                break;
            }
            end++;
        }
        if (end === start + k) {
            uniqueString[str.substring(start, end)] = true;
        } 
        start++;
        end = start;
    }
    return Object.keys(uniqueString)
}

const s1 = "abcabc"
const k1 = 3
// Output: ["abc", "bca", "cab"]

const s2 = "abacab";
const k2 = 3;
// Output: ["bac", "cab"]

const s3 = "awaglknagawunagwkwagl";
const k3 = 4
// Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]

console.log(uniqueSubstringSizeK(s1, k1))
console.log(uniqueSubstringSizeK(s2, k2))
console.log(uniqueSubstringSizeK(s3, k3))