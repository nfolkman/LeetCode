/* Description: Given an array, rotate the array to the right by k steps, where k is non-negative. */



//DOESN'T WORK FOR EDGE CASE OF HUGE INPUT
// var rotate = function(nums, k) {
//     const step = k%nums.length;
//     for(let i = 0 ; i < step ; i++){
//         let end = nums.pop();
//         nums.unshift(end);
//     }
// return nums
// };


var rotate = function(nums, k) {
    k %= nums.length;
    if (k !== 0){ 
      var end = nums.slice(-k);
      nums.splice(-k, k);
      Array.prototype.unshift.apply(nums, end);
    }
  return nums
  };
  
  // test case:
  rotate([1,2,3,4,5,6,7], 3)  // [5,6,7,1,2,3,4]