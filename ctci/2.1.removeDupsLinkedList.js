class Node {
    constructor(value, next) {
       this.value = value;
       this.next = next; 
    }
}

const deleteDups = (head) => {
    let seen = {};

    let current = head;
    let prev = new Node(null, null);

    while(current !== null) {
        if(seen[current.value]) {
            prev.next = current.next;
        } else {
            seen[current.value] = true;
            prev = current;
        }
        current = current.next;
    }

    return head;
}