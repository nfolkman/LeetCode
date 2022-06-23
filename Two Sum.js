/* Description: 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 
Example:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.    */


var twoSum = function(nums, target) {
    let numObj = {};
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
          return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
};

/* test cases:
twoSum([2,7,11,15],9) // [0,1]
twoSum([3,3], 6)  // [0,1]
twoSum([0,8,3,12,28],31)  // [2,4] */

/* Results: Success
Runtime: 79 ms, faster than 85.36% of JavaScript online submissions for Two Sum.
Memory Usage: 42.5 MB, less than 58.39% of JavaScript online submissions for Two Sum.  */