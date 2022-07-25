/* Description: Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.  */



var countNegatives = function(grid) {
    // establish counter for negative nums present
    let counter = 0

        // double for-loop, first looping through each array, and second looping through each value in each looped array
		for(let i = 0; i<grid[0].length;i++){
			for(let j = 0; j<grid.length; j++){
			if(grid[j][i] < 0){
				counter += 1
			}
		}
	}

	return counter
};


/* test cases:
countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])  //8
countNegatives([[3,2],[1,0]])  //0    */