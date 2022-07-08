


// fast solution with BEST memory usage
var firstUniqChar = function(s) {
    const m = new Map()
  
  for(let i = 0; i<s.length; i++){
          const letter = s[i]
          
          if(!m.has(letter)) {
              m.set(letter, 1)
          } else {
              m.set(letter, m.get(letter) + 1)
          }
      }
  
  for(let i = 0; i<s.length; i++) {
          const count = m.get(s[i])
          if(count === 1) {
              return i
          }
      }
  return -1
  
  };
  
  
  // FASTER solution with good memory usage
  var firstUniqChar = function(s) {
  if(s.length === 0) return -1
  
  for(let i = 0; i < s.length; i++){
          if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
  return i
          }
      }
  return -1
  };
  

  /* test cases:
  firstUniqChar("leetcode")
  firstUniqChar("loveleetcode")
  firstUniqChar("aabb")   */