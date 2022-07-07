/* Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.  */


    //var isValid = function(s) {
    // Solution 1 : Incomplete
    // let result = 0
    //     for(let i = 0; i< s.length; i++){
    // 		if(s[i] + s[i+1] === '()'){
    // result += 1
    // 		} else if (s[i] + s[i+1] === '{}'){
    // result += 1
    // 		} else if (s[i] + s[i+1] === '[]'){
    // result += 1
    // 		}
    // 	}
    // if(result === 0 || result * 2 !== s.length){
    // return false
    // 	} else {
    // return true
    // 	} 
    
    // Solution 2
    var isValid = function(s) { 
    const stack = []
    
    for (let i = 0; i< s.length; i += 1){
      const top = stack[stack.length-1]
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
            } else if(s[i] === ')' && top === '(' && stack.length !== 0){
            stack.pop()
            } else if(s[i]=== ']' && top === '[' && stack.length !== 0){
            stack.pop()
            } else if(s[i] === '}' && top === '{' && stack.length !== 0){
            stack.pop()
            } else {
        return false
            }
        }
    
    return stack.length === 0
    }
    
    // Solution 3 | Fastest & Cleanest Solution
    var isValid = function(s) {
      if (s.length % 2 !== 0) return false;
      
      const stack = [];
      const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
      ]);
        
      for (let i = 0 ; i < s.length ; i += 1) {
        if (map.has(s[i])) {
          stack.push(map.get(s[i]));
        } else if (s[i] !== stack.pop()) {
          return false;
        } 
      }
      return stack.length === 0;
    };
    
    
    /* test cases:
    isValid("()")  // true
    isValid("()[]{}")  // true
    isValid("(]")  // false
    isValid('{[]}') // true */