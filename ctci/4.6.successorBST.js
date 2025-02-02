/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let candidate = null;
    let current = root;
    
    while(current !== null) {
        if (current.val > p.val) {
            candidate = current;
            current = current.left;
        } else {
            current = current.right;
        }
    }
    
    return candidate;
};