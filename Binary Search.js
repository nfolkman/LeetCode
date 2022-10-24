/* Description: Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.   */


var search = function(nums, target) {
    let left = 0,
        right = nums.length-1,
        mid = 0

    for(let i = 0; i<nums.length; i++){
    mid = Math.floor((right+left)/2)
  
    if(nums[mid] === target) return mid

    if(nums[mid] > target) right = mid-1

    if(nums[mid] < target) left = mid+1
  }

  return -1
}

// test cases:
console.log(search([-1,0,3,5,9,12],9))  // 4
console.log(search([-1,0,3,5,9,12],2))  // -1