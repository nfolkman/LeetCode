/* Description: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.  */

var moveZeroes = function(nums) {
    // not in-place
        // let zeroes = nums.filter((num)=> num === 0)
        // nums = nums.filter((num)=> num != 0)
    
    
    // in-place lol
    /* Subtracting booleans returns a 1, -1 or 0.
    
    true - false === 1
    false - true === -1
    true - true === 0
    If a is 0 and b isn't, 1 will be returned and a will be moved to the end of the array. If both a and b are zero or non-zero, they aren't moved relative to each other.  */
    
        return nums.sort((a,b)=> (a===0)-(b===0))
};

// test cases:
console.log(moveZeroes([0,0,1]))
console.log(moveZeroes([0,1,0,3,12]))