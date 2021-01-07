//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Have a predetermiend way of checking if the parnas () , [], {} are closed
    let brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }


    // Create reference object 
    let heap = [];

    // Break down the string
    // Iterate over
    for (let char of s) { // es6
        if(brackets[char]) {
            heap.push(brackets[char])
        } else {
            if(heap.pop() !== char) return false
        }
    }
    return (!heap.length);
};

console.log(isValid("()"));
console.log(isValid("(){}"));