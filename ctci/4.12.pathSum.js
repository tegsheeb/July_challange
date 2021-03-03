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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    const map = new Map()
    let count = 0
    
    const traverse = (node, currentSum) => {
        if (!node) {
            return
        }
        
        currentSum += node.val
        
        if (currentSum === sum) {
            count += 1
        }
        
        if (map.has(currentSum - sum)) {
            count += map.get(currentSum - sum)
        }
        
        if (map.has(currentSum)) {
            map.set(currentSum, map.get(currentSum) + 1)
        } else {
            map.set(currentSum, 1)
        }
        
        traverse(node.left, currentSum)
        traverse(node.right, currentSum)
        
        console.log('Before: ', map)
        map.set(currentSum, map.get(currentSum) - 1)
        console.log('After:', map)
    }
    
    traverse(root, 0)
	
    return count
};