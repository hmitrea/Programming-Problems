// LeetCode Problem 14: Longest Common Prefix. Link => https://leetcode.com/problems/longest-common-prefix/
// YT: Video Explanation: https://www.youtube.com/watch?v=g5kH8EX4l-U&feature=youtu.be

/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // If an empty array
    if(strs.length == 0) {return ''}

    // Iterate over the array
    for(let i = 0; i < strs.length; i++) {
        // Iterate over the next letter
        for(let j = 1; j < strs.length; j++)  {
            // console.log(strs[i].slice(0,2))
            if(strs[i].slice(0,2) == strs[j].slice(0,2)) {
                return strs[j].slice(0,2);
            } else {
                return '';
            }
        }
    }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['monologue', 'monotone']));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(['aa','ab'])) // This should be 'a'
