class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1)/2);
    
        // bubble up 
        while(index > 0 && this.values[parentIndex].priority >= this.values[index].priority) {
            let tmp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = tmp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
    }

    dequeue() {
        this.swap(0, this.values.length - 1);
        const min = this.values.pop();
        this.sinkDown();
        return min;
    }
    
    swap (idx1,idx2) {
        const tmp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = tmp;
    }

    sinkDown() {
        let index = 0;
        let element = this.values[index];
        let length = this.values.length;
        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let swap = null;
            let rightChild, leftChild;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if(element.priority > leftChild.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if((swap === null && element.priority > rightChild.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            if(swap !== null) {
                this.swap(index, swap);
                index = swap;
            }
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

const er = new PriorityQueue();
er.enqueue('cold', 10);
er.enqueue('gun shot', 3);
er.enqueue('high fever', 6);
er.enqueue('broken arm', 4);

console.log(er.values);
console.log(er.dequeue());
console.log(er.values);
console.log(er.dequeue());
console.log(er.values);