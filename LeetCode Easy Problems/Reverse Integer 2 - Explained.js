/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Declare a variable to check if it's Negative (Example 2 keep in mind)
    let isNegative = false;
    // This is called a switch or flag to check if something is true/false
    
    // Check if the number is negative
    if (Math.sign(x) === -1) {
        // If negative we'll set the variable to true
        isNegative = true;
    }


    //Declare a variable to turn number into string,   
    let stringNum = x.toString();
    console.log(stringNum);
    console.log(typeof stringNum);

    // Reverse string
    let reverseStr = stringNum.split("").reverse().join("");
    console.log(reverseStr);

    //If variable isNegative is true... remove last character
    if(isNegative) {
        reverseStr = reverseStr.substring(0,reverseStr.length-1);
    }
    console.log(reverseStr); // last char removed 

    // Make it back into a number and store it into a variable and multiply by -1
    let numberStr = +reverseStr 
    // You could use +variable_name to make it a number instead of Number(variable_name)
    // When you make it into a Number JS automatically takes away the zeros in the beggining
    // Eg: 021 => 21 s
    console.log(numberStr);
    // If number is negative multiply by -1 ELSE return the number
    if(isNegative) {
        numberStr *= -1
    }
    
    // Check if it's within the 32 bit integer range
    if(numberStr < (Math.pow(2,31) * -1) || numberStr > Math.pow(2,31) - 1) {
        return 0;
    }
    return numberStr;
}

// console.log(reverse(-123));
console.log(reverse(120));
// console.log(reverse(-13));
// console.log(reverse(2147483647)); // Max 32-bit Integer number in JS
// console.log(reverse(-2147483648)); // Min 32-bit Integer number in JS