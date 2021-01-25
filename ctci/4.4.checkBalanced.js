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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return checkHeight(root) !== Number.MIN_VALUE;
};

const checkHeight = (root) => {
   if(root === null) return -1;
   
   let leftHeight = checkHeight(root.left);
   let rightHeight = checkHeight(root.right);
   
   if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
   if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
   
   if (Math.abs(leftHeight - rightHeight) > 1) {
       return Number.MIN_VALUE; 
   } else {
       return Math.max(leftHeight, rightHeight) + 1;
   }
   
}