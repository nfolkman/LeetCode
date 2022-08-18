/* Description: You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, 
and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. 
The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.  */


var islandPerimeter = function(grid) {

	let perim = 0
		for(let i =0; i<grid.length; i++){
			for(let j = 0; j<grid[i].length; j++){
				if(grid[i][j] === 1){
					if(!grid[i-1] || grid[i-1][j] !== 1) perim+=1
				    if(!grid[i+1] || grid[i+1][j] !== 1) perim +=1
					if(grid[i][j-1] !== 1) perim += 1
					if(grid[i][j+1] !== 1) perim += 1
				}
			}
		}
return perim
};

// test cases:
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])) // 16

// Run Time: 150 ms (faster than 95.61% of JS submissions)
// Memory Usage: 49.8 MB (more efficient than 93.56% of JS submissions)