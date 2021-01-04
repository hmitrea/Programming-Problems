//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Edge Case 1
    if (!l1) {
      return l2;
    }
      
    // Edge Case 2
    if (!l2) {
      return l1;
    }
      
    // Edge Case 3
    if (!l1 && !l2) {
        return [];
    }
    
      
      let head; 
      let current;
  
  
      if (l1.val < l2.val){
          head = current = l1;
          l1 = l1.next;
      }
      
      else{
          head = current = l2;
          l2 = l2.next
      }
  
      while (current){
  
          if (l2 === null || (l1 && l1.val < l2.val)){
              current.next = l1;
              l1 = l1 ? l1.next : null;
          }
          else{
              current.next = l2;
              l2 = l2 ? l2.next : null;
          }
  
          current = current.next
  
      }
  
      return head;
  
  };