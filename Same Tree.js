/* Description: Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.   */


var isSameTree = (p,q) => {

        // edge case
    if(!p && !q) return true

    if(p && q){
        // if all vals equal after recursing for both sides of each tree, return true
    return (p.val === q.val
    && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
    }
    return false
}

/* test cases:
isSameTree([1,2,3],[1,2,3])
isSameTree([1,2],[1,null,2])
isSameTree([1,2,1],[1,1,2])   */