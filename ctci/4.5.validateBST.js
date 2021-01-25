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
// case without duplicate values
// var isValidBST = function(root) {
//     let inorder = [];
    
//     const inorderTraverse = (root, result) => {
//         if (root === null) return;
//         if (root.left) inorderTraverse(root.left, result);
//         result.push(root.val);
//         if (root.right) inorderTraverse(root.right, result);
//     }
    
//     inorderTraverse(root, inorder);
//     for (let i = 0; i < inorder.length - 1; i++) {
//         if (inorder[i] >= inorder[i + 1]) return false;
//     }
//     return true;
// };

// var isValidBST = function(root) {
//     let prev = null;
    
//     const inorderTraverse = (root) => {
//         if (root === null) return true;
//         if (!inorderTraverse(root.left)) return false;
//         if (prev !== null && root.val <= prev) return false;
//         prev = root.val;        
//         if (!inorderTraverse(root.right)) return false;
        
//         return true;
//     }
    
//     // inorderTraverse(root);

//     return inorderTraverse(root);
// };

var isValidBST = function(root) {
    return checkBST(root, null, null);
}

const checkBST = (root, min, max) => {
    if(root === null) return true;
    if((min !== null && root.val <= min) || (max!== null && root.val >= max)) return false;
    return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);

}