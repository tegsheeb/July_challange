class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true) {
            if(val === current.value) return undefined
            if(val < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    
    find(val) {
        if(!this.root) return false 
        const current = this.root;
        const found = false;
        while(current && !found) {
            if(val === current.value) found = true;
            else if(val < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(val) {
        if(!this.root) return false 
        const current = this.root;
        const found = false;
        while(current && !found) {
            if(val === current.value) found = true;
            else if(val < current.value) {
                current = current.left;
            }
            if(val > current.value) {
                current = current.right;
            }
        }
        return found;
    }

    BFS () {
        let queue = [];
        let visited = [];
        let current = null;
        queue.push(this.root);
        while (queue.length !== 0) {
            current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            visited.push(current.value);
        }

        return visited;
    }

    DFSPreorder () {
        let visited = [];
        let current = this.root;
        const traverse = (node) => {
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }
    DFSInorder () {
        let visited = [];
        let current = this.root;
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }
    DFSPostorder () {
        let visited = [];
        let current = this.root;
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(current);
        return visited;
    }
}

const tree1 = new BinarySearchTree();
tree1.insert(5);
tree1.insert(3);
tree1.insert(2);
tree1.insert(4);
tree1.insert(7);
tree1.insert(10);
tree1.insert(6);

console.log(tree1.BFS());
console.log(tree1.DFSPreorder());
console.log(tree1.DFSInorder());
console.log(tree1.DFSPostorder());

