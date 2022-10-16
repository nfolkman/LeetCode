/* Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/


// Solution 1
var containsDuplicate = function(nums) {
    let filteredArr = nums.filter((el,index) => nums.indexOf(el) !== index)
    if(filteredArr.length > 0){
    return true
    } else {
    return false
    }
};
    
    // Solution 2
var containsDuplicate = function(nums) {
    if(nums.filter((el,index)=> nums.indexOf(el) !== index).length > 0){
    return true
    } else {
return false
}
    
    // Solution 3
var containsDuplicate = function(nums) {
    return nums.filter((el,index)=> nums.indexOf(el) !== index).length > 0 
};
    
    // Solution 4
let containsDuplicate = (nums) => nums.filter((el,index)=> nums.indexOf(el) !== index).length > 0

    // Solution 5 
let containsDuplicate = (nums) => {
    if(nums.join() === [...new Set(nums)].join()) return false
    return true
}

    // Solution 6
let containsDuplicate = (nums) => {
    for(let i = 0; i<nums.length; i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
    }
return false
}
    
    
    /* test cases:
    containsDuplicate([1,1,1,3,3,4,3,2,4,2])
    containsDuplicate([1,2,3,1])
    containsDuplicate([1,2,3,4]) */
