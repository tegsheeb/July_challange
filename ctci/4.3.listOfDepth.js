/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    let result = [];
    let queue = [];
    let currentLevel;
    let levelLength;
    
    queue.push(root);
    
    while(queue.length > 0) {
        currentLevel = [];
        levelLength = queue.length;
        let node;
        for (let i = 0; i < levelLength; i++) {
            node = queue.shift();
            currentLevel.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        
        result.push(currentLevel);
        
    }
    
    return result;
};