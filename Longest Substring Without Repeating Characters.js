/* Description: Given a string s, find the length of the longest substring without repeating characters.  */



var lengthOfLongestSubstring = function(s) {
    s = s.split('')
      let max = 0,
          map = new Map()
  
       for(let i = 0; i<s.length; i++){
        if(!map.has(s[i])) map.set(s[i], i)
  
        else{
            i = map.get(s[i])
            map.clear()
        }
      if( max < map.size) max = map.size
    }
    return max
  };
  
  // test cases:
  console.log(lengthOfLongestSubstring("abcabcbb"))  // 3
  console.log(lengthOfLongestSubstring("bbbbb"))  // 1
  console.log(lengthOfLongestSubstring("pwwkew"))  // 3