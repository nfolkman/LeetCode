/* Description: You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. 
Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.    */


var sumNumbers = function(root) {

	//base edge case
	if(!root) return null

	const dfs = (node,prev) => {
		
		// node edge case (if node is null)
		if(!node) return 0

        // if node is LEAF, concatenate values (shift decimal places) and return
		if(!node.left && !node.right){
			return prev*10 + node.val
		}
		
        let curr = prev*10 + node.val
	
        // recurse dfs left and right with curr (concatenated path number) parameter
	    return dfs(node.left,curr) + dfs(node.right,curr)
    }

    // call dfs with root and initial prev value
    return dfs(root,0)

};

/* test cases:
sumNumbers([1,2,3])
sumNumbers([4,9,0,5,1]) */