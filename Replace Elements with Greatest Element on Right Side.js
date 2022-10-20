/* Description: Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
and replace the last element with -1.

After doing so, return the array.   */


var replaceElements = function(arr) {
    let rightMax = -1

    for(let i = arr.length-1; i>=0; i--){
      // compare rightMax to current value
    let newMax = Math.max(rightMax, arr[i])
      // current value becomes rightMax
    arr[i] = rightMax
      // rightMax becomes newMax
    rightMax = newMax
  }
  return arr
}
// test cases:
console.log(replaceElements([17,18,5,4,6,1]))  // [18,6,6,6,1,-1]
console.log(replaceElements([400]))  // [-1]


    // potentially faster with larger datasets? Not a VERY noticeable difference
var replaceElements = function(arr) {
   let max = -1; 
   // to store the current value before replaced
   let cur;
   for(let i=arr.length-1;i >= 0;i--)  {
       cur = arr[i]
       arr[i] = max;
       if(cur > max) {
           max = cur
       }
   }
   return arr
}
// test cases:
console.log(replaceElements([17,18,5,4,6,1]))  // [18,6,6,6,1,-1]
console.log(replaceElements([400]))  // [-1]