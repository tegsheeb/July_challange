/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    const isSameTree = (s, t) => {
        if(s === null || t === null) {
            return s === null && t === null;
        } else if(s.val === t.val) {
            return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
        } else {
            return false;
        }
    }
    
    if(s === null) return false;
    else if(isSameTree(s, t)) return true;
    else return isSubtree(s.left, t) || isSubtree(s.right, t);   
};