class Node {
    constructor(){
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
                if(current.value === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.value === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if(!this.root) return false 
        else {
            const current = this.root;
            const found = null;
            while(!found) {
                if(val === current.value) found = current.value;
                if(val < current.value) {
                    current = current.left;
                }
                if(val > current.value) {
                    current = current.right;
                }
            }
            return false;
        }
    }

}

