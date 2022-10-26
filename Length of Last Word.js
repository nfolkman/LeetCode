/* Description: Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.   */


var lengthOfLastWord = function(s) {
    s = s.split(' ')
  for(let i =s.length-1; i>=0; i--){
    if(s[i].length) return s[i].length
  }
}
// test cases:
console.log(lengthOfLastWord("   fly me   to   the moon  "))  // 4