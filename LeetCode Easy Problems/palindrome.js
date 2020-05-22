// LeetCode Problem Palindrom Number aka 9 https://leetcode.com/problems/palindrome-number/

// Not completed
/**
 * @param {number} x
 * @return {boolean}
 */
// LeetCode Version
var isPalindrome = function(x) {
    // Edge Case
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        console.log(revertedNumber);
        x = x / 10;
        console.log(x);
    }
    console.log(x)
    console.log(revertedNumber / 10);
    return x == revertedNumber  || x == revertedNumber/10;

}
console.log(isPalindrome(121));

// 1234
//base = 1
// every time 1234 can be divided into 10, we are going to multiply the base by 10

// 1234 / 10 = math.floor(123.4)
// base = 1 * 10
// 123 / 10 = math.floor(12.3)
// base = 10 * 10 === 100
// 12 / 10 = math.floor(1.2)
// base = 100 * 10 === 1000
// 1 / 10 < 0 break out of the loop here 

// console.log(isPalindrome(10));


// let addedNums;

// x = 1213
// addedNums = x % 10
// addedNums = x % 10 // x itself does not change 

// console.log(addedNums) // 3
// console.log(addedNums); // 3


// // This below will work backwards. We have to figure out how to do it recursively and push it onto a variable
// // console.log(1213 % 10)
// // console.log(121 % 10);
// // console.log(12 % 10);
// // console.log(1 % 10);

// // console.log(palindrome);
// // return x = palindrome;
// // 'hello'
// // let num = 26
// // for (let i = 0; i <= num; i++)

// // console.log(isPalindrome(11));
// console.log(121 % 10);
// console.log('hi');


// 10 % 10 === 0 
// console.log(100 % 10) // false
// console.log(11)
// console.log(11 == 11)
// console.log(001 == 100)

// let x = 100;


// //  // No making the x a string
// var isPalindrome = function(x) { // Nothing happens to X
//         let xCopy = x
//         let palindrome =  0;
//         let baseTen = 1;
//         let newTotal = 0;
//         let xCopy2 = x;

//         while (x > 10){
//                 x = x/10;
//                 baseTen = baseTen * 10;
            
//         }
//         console.log(baseTen)
    
//         // Iterate over the number recursively
//         while(xCopy > 0) {
//         palindrome =  xCopy % 10 
//         palindrome *= baseTen

//         newTotal = newTotal + palindrome
//         palindrome = 0;
//         baseTen = baseTen / 10   
        
//         xCopy = Math.floor(xCopy / 10)
//     }
//     return xCopy2 == newTotal;  
    
// };
//  // STRINGIFY IT WORKS , But it's slower than 
// var isPalindrome = function(x) {
//     // Edge Cases:

//     // Declare variable to keep our reversed 
//     let reversed;

//     // Make the x paramaeter a string
//     let string =  x.toString(); 

//     // reverse it normally
//     reversed = string.split("").reverse().join("");
//     console.log(reversed);
//     console.log(typeof reversed);
//     console.log(typeof x);

//     // This will return a boolean
//    return reversed == x;
// };

// console.log(isPalindrome('civic')) // => It works for strings  but not for numbers
// console.log(isPalindrome(11));
// console.log(isPalindrome(10));

// let x = 1;
// x.split(''); // you cannot split a number type, only a string so
// make sure you make the Number a string before
// // x.split('') is not a function
// === Stritly equal will compare their types as well numer === string => FAlSE while number == string => TRUE
// 