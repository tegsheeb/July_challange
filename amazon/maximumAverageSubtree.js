/*
Given an N-ary tree, find the subtree with the maximum average. Return the root of the subtree.
A subtree of a tree is the node which have at least 1 child plus all its descendants. The average value of a subtree is the sum of its values, divided by the number of nodes.

Example 1:

Input:
		 20
	   /   \
	 12     18
  /  |  \   / \
11   2   3 15  8

Output: 18
Explanation:
There are 3 nodes which have children in this tree:
12 => (11 + 2 + 3 + 12) / 4 = 7
18 => (18 + 15 + 8) / 3 = 13.67
20 => (12 + 11 + 2 + 3 + 18 + 15 + 8 + 20) / 8 = 11.125

18 has the maximum average so output 18.
Similar questions:

https://leetcode.com/problems/maximum-average-subtree

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
 * @return {number}
 */
var maximumAverageSubtree = function(root) {    
    const helper = (root) => {
        if(root === null) {
            return {count: 0, sum: 0, maxAverage: 0}            
        }
        
        let left = helper(root.left);
        let right = helper(root.right);
        
        const count = left.count + right.count + 1;
        const sum = helper(root.left).sum + helper(root.right).sum + root.val;
        let maxAverage = Math.max(sum/count, Math.max(left.maxAverage, right.maxAverage))
        
        return {count: count, sum: sum, maxAverage: maxAverage}            
    }
    
    return helper(root).maxAverage;
    
};


const root = [5,6,1]
console.log(maximumAverageSubtree(root));