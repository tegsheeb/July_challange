class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop () {
    if (!this.head) return undefined;

    let current = this.head;
    let previous = current;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift () {
    if (!this.head) return undefined;
    let tmp = this.head;
    this.head = this.head.next;
    this.length--;
    return tmp;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this.head;

  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(5);
console.log(list);
console.log(list.pop());