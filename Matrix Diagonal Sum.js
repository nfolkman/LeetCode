/* Description: Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal. */


var diagonalSum = function(mat) {
    //  edge cases
    if(!mat.length) return null
    if(mat.length === 1) return mat[0][0]
    
    
    let sum = 0
    
        for(let i = 0, num=mat.length-1; i<mat.length; i++,num--){
    
            // primary diagonal
            sum += mat[i][i]
            // secondary diagonal
            sum += mat[num][i]
        }

    if(mat.length%2 === 0) return sum
    
    let index = Math.floor(mat.length/2)
    
    return (sum) - mat[index][index]
};

// test cases:
console.log(diagonalSum([[1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]]))  // 8
console.log(diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]]))  // 25
console.log(diagonalSum([[1]]))  // 1