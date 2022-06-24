/* Description: Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.      */


// Solution 1
var isPalindrome = function(x) {
    if(x.toString().split('').reverse().join('') == x){
return true
	} else {
return false
}
};

// Solution 2
var isPalindrome = function(x) {
   return x == x.toString().split('').reverse().join('');
	
};

// Solution 3
var isPalindrome = (x) => x.toString().split('').reverse().join('') == x ? true : false


/* test cases: 
isPalindrome(121)
isPalindrome(10)
isPalindrome(-121) */