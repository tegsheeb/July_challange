/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let firstIntersection = null;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {
            firstIntersection = slow;
            break;
        }
    }
    
    if(firstIntersection === null) return null;
    
    slow = head;
    fast = firstIntersection;
    
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};