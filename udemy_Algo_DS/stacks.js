class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var tmp = this.first;
            this.first = newNode;
            this.first.next = tmp;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if(!this.first) return null;
        const tmp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp.value;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(10);
stack.push(15);
stack.pop();
stack.pop();

