/* Description: Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.  */



// about 2-3% slower
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length-1,
        mid

    while(left <= right){
    mid = Math.floor((right+left)/2)

    if(nums[mid] === target) return mid
    if(nums[mid] < target) left = mid+1
    if(nums[mid] > target) right = mid-1
  }
  return left
}
// test cases:
searchInsert([1,3,5,6],5)
searchInsert([1,3,5,6],2)


// faster solution
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length-1,
        mid

    while(left <= right){
    mid = Math.floor((right+left)/2)

    if(nums[mid] === target) return mid
    if(nums[mid] < target) left = mid+1
    else right = mid-1
  }
  return left
}
//test cases:
searchInsert([1,3,5,6],5)
searchInsert([1,3,5,6],2)