class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      oldHead.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter, target;
    if(index < this.length / 2) {
      counter = 0;
      target = this.head;
      while(counter < index) {
        target = target.next;
        counter++;
      }
      return target;
    } else {
      counter = this.length - 1;
      target = this.tail;
      while(counter > index) {
        target = target.prev;
        counter--;
      }
    }
    return target;
  }

  set(index,val){
    const foundNode = this.get(index);
    if(foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    const newNode = new Node(val);
    if(index < 0 || index > this.length - 1) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    
    prevNode.next = newNode, newNode.prev = prevNode;
    newNode.next = nextNode, nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || )
  }


}

let list = new DoublyLinkedList();
list.push(25);
list.push(36);
list.push(43);
list.push(57);
list.push(68);