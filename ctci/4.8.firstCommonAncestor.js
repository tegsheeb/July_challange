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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let answer = null;
    
    
    const recurseTree = (node, p, q) => {
        if(node === null) return false;
        let left = recurseTree(node.left, p, q) ? 1 : 0;
        let right = recurseTree(node.right, p, q) ? 1 : 0;
        let mid = (node === p || node === q) ? 1 : 0;
        
        if(mid + left + right >= 2) answer = node;
        
        return (mid + left + right > 0);
        
        
    }
    
    recurseTree(root, p, q);
    
    return answer;
};