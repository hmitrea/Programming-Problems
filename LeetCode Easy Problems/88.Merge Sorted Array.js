// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(nums2.length == 0 ) return nums1;
    
    // Use substring method to get the # of elements according to m
    nums1.splice(m) // Time:O(1) still
    nums2.splice(n) // Time:O(1) still
   

    // Iterate over nums2
    for(let char of nums2) {
        //Push each element into nums1
        nums1.push(char);
    }

    // Sort nums1
    nums1.sort((a,b) => a-b);
    // Return nums1
    return nums1
};


// Time: 0(n^2)
// Space: O(1)


console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));
console.log(merge(nums1 = [1], m = 3, nums2 = [], n = 0));