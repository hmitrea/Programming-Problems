// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Declare 2 variables to concat the numbers from the ListNodes 
    let reverse1 = "";
    let reverse2 = "";

    // Iterate over L1 from the last el and push into var1
    for(let i = l1.length - 1; i >= 0; i--) {
        reverse1 += l1[i];
    }

    // Iterate over L2 from the last el and push into var2
    for(let i = l2.length -1; i >= 0; i--) {
        reverse2 += l2[i];
    }

    // You can use the unary plus operator to conver them to nums
    // +num1 + +num2;
    // https://stackoverflow.com/questions/8976627/how-to-add-two-strings-as-if-they-were-numbers
    let finaLL = +reverse1 + +reverse2;

    // make it a string
    let stringArr = finaLL.toString();

    // make it an array, split it and reverse it
    let reverseArr = stringArr.split('').reverse();

    return reverseArr;
};

// Time: 
// 2 For Loops , 1 .toString Method , 1 .split method, 1 reverse method

// Space: 



console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));


