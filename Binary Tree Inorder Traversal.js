/* Description: Given the root of a binary tree, return the inorder traversal of its nodes' values.  */


var inorderTraversal = function(root) {
    const stack = []
   
     const walk = (node) => {
   
               // if null, nothing
           if(node === null) return
       
               // else execute code below
               walk(node.left)
   
               stack.push(node.val)
   
               walk(node.right)
   
           }
   
       walk(root)
   
       return stack
   };

/* test cases:
inorderTraversal([1,null,2,3])  */