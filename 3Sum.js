/* Description: Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.  */


var threeSum = function(nums) {
    nums = nums.sort((a,b)=> a-b)
  let sum,
      results = []

  for(let i =  0; i<nums.length-2; i++){
    
    if(nums[i] != nums[i-1]){
      var l = i+1,
          r = nums.length-1
    }
      while (l < r){
        sum = nums[i] + nums[l] + nums[r]

        if(sum === 0) {
          results.push([nums[i],nums[l], nums[r]])
          
          // if duplicates - skip
          while(nums[l] == nums[l+1]) l++
          while(nums[r] == nums[r-1]) r--
          
          // main increment
          l++
          r--
        }
        //
        if(sum < 0) l++
        if(sum > 0) r--
      }
  }

  return results
};

// test cases:
console.log(threeSum([-1,0,1,2,-1,-4]))  // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]))  // []
console.log(threeSum([0,0,0,0]))  // [[0,0,0]]