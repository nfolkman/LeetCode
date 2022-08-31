/* Description: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().  */


var strStr = function(haystack, needle) {
    //edge cases
	if(!needle.length) return 0


	let solution = -1

	if(haystack.includes(needle)) solution = haystack.indexOf(needle)

return solution
};


// test cases:
console.log(strStr('hello','ll'))  // 2

// Time & Space Complexity:
/*
Runtime: 96 ms, faster than 36.18% of JavaScript online submissions for Implement strStr().
Memory Usage: 41.6 MB, less than 93.93% of JavaScript online submissions for Implement strStr(). */