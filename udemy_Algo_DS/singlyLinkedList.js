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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(val, index) {
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let tmp = previous.next;
    previous.next = newNode;
    newNode.next = tmp;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();

    let prevNod = this.get(index - 1);
    let removed = prevNod.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  
}

let list = new SinglyLinkedList();
list.push(1);
list.push(5);
list.push(8);