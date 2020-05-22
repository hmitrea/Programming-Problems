// LeetCode Problem 1 Two Sum. Did it before but they erased it 
// https://leetcode.com/problems/two-sum/


var twoSum = function(nums,target) {
    // Iterate over everything once
    for (let i = 0; i < nums.length;i++) {
        // Iterate again from the next number
        for (let j = i+1; j < nums.length;j++) {
            // If the iteration equal the target
            if(nums[i] + nums[j] == target) {
                // Return the indeces as an array
                return [i,j];
            }
        }
    }

};

console.log(twoSum([3,2,4],6));