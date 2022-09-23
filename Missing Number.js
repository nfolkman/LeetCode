/* Description: Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.    */


var missingNumber = function(nums) {

    let sorted = nums.sort((a,b)=>a-b),
        start = 0,
        end = nums.length - 1
   
     while(start <= end){
       let mid = Math.ceil( (start + end) /2)

       if(sorted[mid] > mid) end = mid - 1
       
       else start = mid + 1

     }
   
    return start
   
};

// test cases:
nums([3,0,1])  // 2
nums([0,1])  // 2
nums([9,6,4,2,3,5,7,0,1])  // 8