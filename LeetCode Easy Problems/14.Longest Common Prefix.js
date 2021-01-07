//https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    // If the string is empty 
    if(strs.length === 0) {
        return "";
    }
    // Use the first word in the arr to cut 
    let prefix = strs[0];
    
    // Iterate from the next forward
    for (let i = 1; i <strs.length; i++) {
        // while it exists in the arr
        while(strs[i].indexOf(prefix) != 0) {
            // reasisng it by subtracting 1
            prefix = prefix.substring(0, prefix.length - 1);
            console.log("prefix is...", prefix);
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
