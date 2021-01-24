var AnimalShelter = () => {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 1;
}

AnimalShelter.prototype.enqueue = (x) => {
    if (x.type === 'dog') {
        this.dogQueue.push([x, this.order]);
    } else {
        this.catQueue.push([x, this.order]);
    }
    this.order++
}

AnimalShelter.prototype.dequeue = () => {
    if (this.dogQueue.length !== 0 && this.catQueue.length === 0) {
        if(this.dogQueue[0][1] > this.catQueue[0][1]) {
            return this.catQueue.shift()[0];
        } else {
            return this.dogQueue.shift()[0];
        }
    } else if (this.dogQueue.length === 0) {
        return this.catQueue.shift()[0];
    } else {
        return this.dogQueue.shift()[0];
    }
}