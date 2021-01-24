/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackOldest = [];
    this.stackNewest = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackNewest.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stackOldest.length === 0) {
        while(this.stackNewest.length !== 0) {
            this.stackOldest.push(this.stackNewest.pop());
        }
    }
    return this.stackOldest.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stackOldest.length === 0) {
        while(this.stackNewest.length !== 0) {
            this.stackOldest.push(this.stackNewest.pop());
        }
    }

    return this.stackOldest[this.stackOldest.length - 1];
    
    
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackOldest.length === 0 && this.stackNewest.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */