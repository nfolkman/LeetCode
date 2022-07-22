/* Description: Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.  */

/// Details ///
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */


var hasPathSum = function(root, targetSum) {
    if(!root) return false

    let hasPath = false
    
const dfs = (node,sum) => {
        if(node.left === null && node.right === null){
            if(sum === node.val){
                hasPath = true
            }
            return
        }
        if(node.left){
            dfs(node.left,sum-node.val)
        }
        if(node.right){
            dfs(node.right,sum-node.val)
        }
    }
    
    dfs(root,targetSum)
    return hasPath
	
};

/* test cases:
hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1],22)
hasPathSum([1,2,3],5)   */