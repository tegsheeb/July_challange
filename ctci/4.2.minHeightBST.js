class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const createMinBST = (array) => {
    return createBST (array, 0, array.length - 1);
}

const createBST = (array, start, end) => {
    if (start > end) return null;

    const mid = Math.floor((start + end)/2);

    let node = new TreeNode(array[mid]);
    node.left = createBST(array, start, mid - 1);
    node.right = createBST(array, mid + 1, end);

    return node;
}

console.log(createMinBST([])) // [];
console.log(createMinBST([1])) // [];
console.log(createMinBST([1, 2, 3])) // [];
console.log(createMinBST([1, 2, 3, 5, 6, 7, 8])) // [];
console.log(createMinBST([1, 2, 3, 5])) // [];
console.log(createMinBST([1, 2, 3, 5, 6])) // [];
