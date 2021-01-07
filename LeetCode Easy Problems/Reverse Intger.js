// LeetCode Problem 'Reverse Integer' aka 7 LINK: https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    // If it's greater than 32 bits return 0

    // Declare a variable to check if it's negative 
    let isNegative = false 
    
    // Check if the given number is negative
    if(Math.sign(x) === -1) {
        // If negative then we'll set variable to true 
        isNegative = true;
    }  
    
    // Declare a variable turn number into string, reverse it and if variable is true(meaning the number is negative) remove last character 
    let stringNum = x.toString()
    //console.log(typeof stringNum) // it's a string

    // Declare a variable and return and join the string
    let reverseStr = stringNum.split("").reverse().join("");

    //console.log(reverseStr)
    
    if(isNegative) {
        reverseStr = reverseStr.substring(0,reverseStr.length - 1);
    }
    
    // Make it back into a number and store it into a variable  and multiply by -1
    let numberStr = Number(reverseStr) 
    
    

    
     // Make it a negative and reassign
    
     // If number is negative multiply by -1 else return the number
     if(isNegative) {
        numberStr = numberStr * -1
     } 
    //console.log(numberStr);
    if(numberStr < (Math.pow(2, 31) * -1) || numberStr > Math.pow(2, 31) - 1) {
       return 0;
    }
    return numberStr;
    
}


console.log(reverse(1534236469));
console.log(reverse(1463847412));

console.log(Math.pow(2,31));