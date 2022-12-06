/* Description: You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".  */

/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {

    /* double for loop, outer loop being jewels and inner loop being stones, 
    test each letter of inner loop to see if it is included in outer jewels string, if yes count++, 
    else continue  */
    
    jewels = jewels.split(''),
    stones = stones.split('')
    
    var count = 0
  
    for(let i = 0; i<jewels.length;i++){
      for(let j = 0; j<stones.length;j++){
        if(jewels[i] == stones[j]) count++
      }
    }
    return count
  };
  
  console.log(numJewelsInStones("aA","aAAbbbb"))  // 3
  console.log(numJewelsInStones("z","ZZ"))  // 0