/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// var partition = function(head, x) {
//     let leftDummy = new ListNode(0, null);
//     let rightDummy = new ListNode(0, null);
    
//     let p1 = leftDummy;
//     let p2 = rightDummy;
    
//     let current = head;
//     while (current !== null) {
//         if (current.val < x) {
//             p1.next = current;
//             current = current.next;
//             p1 = p1.next;
//         } else {
//             p2.next = current;
//             current = current.next;
//             p2 = p2.next;
//         }
//     }
    
//     p1.next = rightDummy.next;
//     p2.next = null;
    
//     return leftDummy.next;  
// };


var partition = function(node, x) {
    let newHead = node;
    let newTail = node;
    
    // let current = node

    while(node !== null) {
        let next = node.next;
        if(node.val < x) {
            node.next = newHead;
            newHead = node;
        } else {
            newTail.next = node;
            newTail = node;
        }
        
        node = next;
    }
    
    newTail.next = null;
    
    return newHead;   
}