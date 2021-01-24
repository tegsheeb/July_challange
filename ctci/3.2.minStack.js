/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.value = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.value.push(x);
    if (this.min.length === 0) {
        this.min.push(x);
    } else {
        if(this.min[this.min.length - 1] >= x) {
            this.min.push(x);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.value.pop();
    if (this.min[this.min.length - 1] === popped) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let topEle = this.value[this.value.length - 1];
    return topEle;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.length === 0 ? 0: this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */