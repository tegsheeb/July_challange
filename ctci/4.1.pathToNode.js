class LinkdeNode {
    constructor(value, adjacentNodes){
        this.value = value;
        this.adjacentNodes = adjacentNodes;
        this.visited = false;
    }
}

const search = (graph, start, end) => {
    if(start === end) return true;

    const queue = [];
    let currentNode;
    queue.push(start);

    while(queue.length !== 0) {
        currentNode = queue.shift();
        if (currentNode === end) return true;
        if (currentNode !== null) {
            for (let i = 0; i < currentNode.adjacentNodes.length; i++) {
                queue.push(currentNode.adjacentNodes[i]);
            }
        }
        currentNode.visited = true;
    }

    return false;
}