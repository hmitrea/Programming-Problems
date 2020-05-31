// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(x) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

      // Split the input string using split in an Array
      const individaulNums =  x.split('');
      console.log(individaulNums)

      // Declare variable to keep track of sum
      let integerNums = 0;
     // Since it's an array, iterate over 
    individaulNums.forEach(element => {
        // Reassing to the integerNums Variable the values within the 
        // key
        integerNums += obj[element];
    });
    console.log("here's the integer number:",integerNums);

};

let x =[1,2,3];
const y = new Map
// 2 - II
// 3- III
// 4- IV
/* 
Input: "MCMXCIV"
/////////////////////////
Output:2216
////////////////////////
Expected:1994
*/

console.log(romanToInt('IV'));
// console.log(romanToInt('IX'));
// console.log(romanToInt('XX'));
// console.log(romanToInt('III'));




//Hard coding it works to a certain point... If they're only Two numbers work, no more 
var romanToIntYo = function(roman) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let sum = 0;
    let four = 0;
    let nine = 0;
    let onehundit = 0;

    // split + reassing
    let integers = roman.split(''); // It's split
    //For 4
    if(integers.length == 2 && integers[1] == 'V') {
        return 4
    }  else if(integers.length == 2 && integers[1] == 'X') {
        return 9;
    }


    if(integers.length == 2 && integers[1] == 'L') {
        return 40;
    }  else if(integers.length == 2 && integers[1] == 'C') {
        return 90;
    }

    if(integers.length == 2 && integers[1] == 'D') {
        return 400;
    }  else if(integers.length == 2 && integers[1] == 'M') {
        return 900;
    }

        integers.forEach(el => {
        sum += obj[el];
        })
    
    return sum;
}

// console.log(romanToIntYo('IV'));
// console.log(romanToIntYo('IX'));
// console.log(romanToIntYo('XL'));
// console.log(romanToIntYo('XC'));
// console.log(romanToIntYo('CD'));
// console.log(romanToIntYo('CM'));