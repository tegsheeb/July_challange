class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        } 
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            this.removeEdge(vertex, this.adjacencyList[vertex].pop());
        }
        delete this.adjacencyList[vertex];
    }

}

const testGraph = new Graph();
testGraph.addVertex('tokyo');
testGraph.addVertex('nyc');
testGraph.addVertex('sf');
testGraph.addEdge('sf', 'tokyo');
testGraph.addEdge('sf', 'nyc');
// testGraph.removeEdge('sf', 'tokyo');
testGraph.removeVertex('tokyo');

console.log(testGraph.adjacencyList)

