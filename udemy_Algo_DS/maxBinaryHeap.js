class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1)/2);
    
        // bubble up 
        while(this.values[parentIndex] < this.values[index] && index > 0) {
            let tmp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = tmp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
    }

    extractMax() {
        this.swap(0, this.values.length - 1);
        const max = this.values.pop();
        this.sinkDown();
        return max;
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
                if(element < leftChild) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if((swap === null && element < rightChild) || (swap !== null && rightChild > leftChild)) {
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

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(10);
maxHeap.insert(2);
maxHeap.insert(15);
maxHeap.insert(22);
maxHeap.insert(30);
maxHeap.insert(11);
maxHeap.insert(45);
maxHeap.insert(55);
console.log(maxHeap.values);
maxHeap.extractMax();
console.log(maxHeap.values);