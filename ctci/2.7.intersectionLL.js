/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//     if(headA === null || headB === null) return false;
    
//     let resultA = getSizeAndTail(headA);
//     let resultB = getSizeAndTail(headB);
    
//     if(resultA.tail !== resultB.tail) return false;
    
//     let diff = Math.abs(resultA.size - resultB.size);

//     let shorter = resultA.size > resultB.size ? headB : headA;
//     let longer = resultA.size > resultB.size ? headA : headB;
    
//     for (let i = 0; i < diff; i++) {
//         longer = longer.next;
//     }
    
//     console.log(longer);
//     console.log(shorter);
    
//     while(shorter !== longer && shorter !== null && longer !== null) {
//         shorter = shorter.next;
//         longer = longer.next;
//     }
        
//     return shorter;
// };
    
// const getSizeAndTail = (head) => {
//     if(head === null) return null;
    
//     let len = 1;
//     let current = head;
//     while(current.next !== null) {
//         len++;
//         current = current.next;
//     }
    
//     return {tail: current, size: len};
// }

// var getIntersectionNode = function(headA, headB) {
//     let pA = headA;
//     let pB = headB;
    
//     if(pA === null || pB === null) return null;
    
//     while(pA !== pB) {
//         // if(pA === null || pA === null) return null;
//         pA = pA.next || headB;
//         pB = pB.next || headA;
    
//         if (pA === pB) return pA;
//     }
    
//     return pA;

// }

// var getIntersectionNode = function(headA, headB) {
//     // 3 pointer
//     if(!headA || !headB) return null;
    
//     let a = headA;
//     let b = headB;
//     // a will equal to b on 2nd run
//     // either it will be a node or null;
//     // a and b will always catch up at the 2nd loop
//     // lengthA + lengthB = lengthB + lengthA
//     while(a !== b) {
//         // switch list
//         // make sure I don't move a or b twice after checking a === null, 
//         // or I'll miss intersection at the beginning of the nodes
//         a = a === null ? headB : a.next;
//         b = b === null ? headA : b.next;
        
//         // a will be a node or end of line(null)
//         if(a === b) {
//             return a;
//         }
//     }
//     // in case there is only 1 node
//     return a;
// }

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB ) return null;
    
    let a = headA;
    let b = headB;
    
    while(a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    
    return a;

}