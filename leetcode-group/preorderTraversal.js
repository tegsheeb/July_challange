/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//     const result = [];
//     const traversal = (node) => {
//         if(node === null) return;

//         result.push(node.val);
//         if(node.children.length === 0) {
//             return; 
//         }
//         for(let i = 0; i < node.children.length; i++) {
//             traversal(node.children[i]);   
//         }
//     }
    
//     traversal(root);
//     return result;
// };

const preorder = (root) => {
    const result = [];
    if(root === null) return result;
    
    const stack = [];
    stack.push(root);
    
    while(stack.length !== 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val);
        for(let i = currentNode.children.length -1; i>=0; i--) {
            stack.push(currentNode.children[i]);
        }
    }
    
    return result;
}
