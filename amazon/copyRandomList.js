/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function(head) {
    if (head === null) return null;
    
    let pointer = head;
    while(pointer !== null) {
        const newNode = new Node(pointer.val, null, null);
        
        newNode.next = pointer.next;
        pointer.next = newNode;
        pointer = newNode.next;
    }

    pointer = head;
    
    while (pointer !== null) {
        pointer.next.random = pointer.random !== null ? pointer.random.next: null;
        pointer = pointer.next.next;
    }
    
    let pointer_old = head;
    let pointer_new = head.next;
    const head_new = head.next;
        
    while(pointer_old !== null) {
        pointer_old.next = pointer_old.next.next;
        pointer_new.next = pointer_new.next !== null ? pointer_new.next.next: null;
        pointer_old = pointer_old.next;
        pointer_new = pointer_new.next;
    }
    
    return head_new;
};

