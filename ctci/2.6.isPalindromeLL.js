/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // let dummy = new ListNode(0, head);
    let slow = null;
    let fast = head;
    let tmp;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        tmp = head.next;
        head.next = slow;
        slow = head;
        head = tmp;
    }
    
    if(fast !== null) head = head.next;
    
    while(head !== null && slow != null) {
        if(head.val !== slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    
    return true;
};