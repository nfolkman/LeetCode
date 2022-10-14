/* Description: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.   */


var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,'').split('').map((char)=> char.toLowerCase())
      return s.join('') === s.reverse().join('')
  };

  // test cases:
  isPalindrome("A man, a plan, a canal: Panama")
  isPalindrome("race a car")