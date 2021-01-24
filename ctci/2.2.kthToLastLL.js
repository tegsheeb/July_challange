/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    
    let first = dummy;
    let kBehind = dummy;
    
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    while(first !== null) {
        first = first.next;
        kBehind = kBehind.next;
    }
    
    kBehind.next = kBehind.next.next;
    
    return dummy.next;
};