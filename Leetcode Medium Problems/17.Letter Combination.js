// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// Backtracking
// https://stackoverflow.com/questions/50069675/recursive-backtracking-algorithm-in-javascript

// Time: O(4^n)
// Space: O(4^n)

// Declare Object to hold our letters 
const numberToLetter = {
    1: [],
    2: ['a', 'b' , 'c'],
    3: ['d', 'e' , 'f'],
    4: ['g', 'h' , 'i'],
    5: ['j', 'k' , 'l'],
    6: ['m', 'n' , 'o'],
    7: ['p', 'q' , 'r', 's'],
    8: ['t', 'u' , 'v'],
    9: ['w', 'x' , 'y', 'z'],
}

var letterCombinations = function(digits) {
    // Check if empty first
    if(digits.length == 0) {
        return [];
    }
    // Spread the 1st element
    let combinationsArr = [...numberToLetter[digits[0]]];
    
    //
    for (let i = 1; i < digits.legnth; i++) {
        // We don't want to push something over the Arr we iterate
        let updatedCombinationsArr = [];
        // Here
        combinationsArr.forEach(combination => {
            numberToLetter[digits[i]].forEach(letter => {
                updatedCombinationsArr.push(combination + letter)
            })
        })
        combinationsArr = updatedCombinationsArr;
    }
    return combinationsArr;
    
};


console.log(letterCombinations('23'));
console.log(letterCombinations(''));