/* Description: Given a string s, return true if the s can be palindrome after deleting at most one character from it.  */

var validPalindrome = function(s) {
    var l = 0,
        r = s.length-1

// isPalindrome helper function
  function isPalindrome(s,l,r){
  while(l <= r){
    if(s[l++] != s[r--]){
      return false
    }
  }
return true
}
// end of helper

    while(l <= r){
    if(s[l] != s[r]){
        return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
     }
    l++
    r--
  }
  return true
}

// test cases:
console.log(validPalindrome("aba"))  // true
console.log(validPalindrome("abca"))  // true
console.log(validPalindrome("deeee"))  // true
console.log(validPalindrome("abc"))  // false