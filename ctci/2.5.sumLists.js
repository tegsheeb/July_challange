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

 // didn't work in carry cases
// var addTwoNumbers = function(l1, l2) {
//     let l3  = new ListNode(0, null);
//     let newHead = l3;
//     let carryOver = 0;
    
//     while(l1 !== null && l2 !== null) {
//         let sum = l1.val + l2.val;
//         let newl3 = new ListNode(sum%10 + carryOver, null);
        
//         carryOver = Math.floor(sum/10);
//         l3.next = newl3;
//         l3 = newl3;
        
//         l1 = l1.next;
//         l2 = l2.next;
//     }
    
//     if(l1 !== null) l3.next = l1;
//     if(l2 !== null) l3.next = l2;
    
//     return newHead.next;
// };


var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    
    const recursive = (l1, l2, carry) => {
        if(l1 === null && l2 === null && carry === 0) return null;
        
        let result = new ListNode();
        let value = carry;
        
        if(l1 !== null) {
            value += l1.val;
        }
        if(l2 !== null) {
            value += l2.val;
        }
        
        result.val = value % 10;
        
        let nextNode = recursive(l1 === null ? null : l1.next, l2 === null? null: l2.next, value > 9 ? 1 : 0);

        result.next = nextNode;
        
        return result;
    }
    

    return recursive(l1, l2, carry);
}