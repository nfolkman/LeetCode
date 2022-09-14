/* Description: Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.  */


var searchRange = function(nums, target) {
    let first = nums.indexOf(target),
		last = nums.lastIndexOf(target)

	// edge case
		if(!nums.includes(target)) return [-1,-1]

	// main

		return [first,last]
};

// test cases:
console.log(searchRange([5,7,7,8,8,10],8))  // [3,4]