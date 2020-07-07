// https://leetcode.com/problems/combination-sum/
// LeetCode Problem 39

const combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    var length = candidates.length;
    var res = [];
    search(0, [], target);
    return res;
  
    function search(idx, prefix, target) {
      if (target === 0) res.push(prefix.slice());
      if (idx === length) return;
      if (target <= 0) return;
  
    }
}

console.log(combinationSum([2,3,6,7], 7))