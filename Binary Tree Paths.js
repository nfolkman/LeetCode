/* Description: Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.   */



var binaryTreePaths = (root) => {
    let result = []
    // edge case of none
    if(!root) return result

    // build out dfs function
    const dfs = (node) => {
        if(node.left === null && node.right === null){
            result.push(node.val+'')
            return
        }
        if(node.left){
            node.left.val = `${node.val}->${node.left.val}`
            dfs(node.left)
        }
        if(node.right){
            node.right.val = `${node.val}->${node.right.val}`
            dfs(node.right)
        }
    }

    //call dfs and return result array
    dfs(root)
    return result
}

/* test cases:
binaryTreePAths([1,2,3,null,5])
binaryTreePaths([1])  */