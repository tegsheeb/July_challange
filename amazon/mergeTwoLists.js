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
    const preHead = new ListNode(-1);
    let l3 = preHead;
    
    while (l1 !== null & l2 !== null) {
        if(l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
            
        }
        l3 = l3.next
    }
    
    l3.next = l1 === null? l2 : l1;
    
    return preHead.next;
};