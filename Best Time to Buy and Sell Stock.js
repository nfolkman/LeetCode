/* Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.   */


// Solution 1   O(N^2)   SLOWEST by 63%

var maxProfit = function(prices) {
let max = 0

for(let buy = 0; buy < prices.length; buy++){
	for(let sell = buy+1; sell<prices.length; sell++){
			let profit = prices[sell] - prices[buy]

			max = Math.max(max, profit)
		}
	}
return max
};



// Solution 2   O(N)  FASTEST by 8%

function maxProfit(prices) {
	let max = 0
		let minPrice = prices[0]

for(let sell = 1; sell < prices.length; sell++){
	let sellPrice = prices[sell]
let profit = sellPrice - minPrice

max = Math.max(max, profit)

if(sellPrice < minPrice) minPrice = sellPrice
	}
return max
}


// Solution 3   0(N)

function maxProfit(prices){
	let l = 0,
		r = 1,
		maxProf = 0
  
	while(r < prices.length){
	  if( prices[l] < prices[r]){
		let prof = prices[r] - prices[l]
		maxProf = Math.max(prof, maxProf)
	  } else{
		l = r
	  }
	  r++
	}
	return maxProf
  }



/* test cases:
maxProfit([7,1,5,3,6,4])  //5
maxProfit([7,6,4,3,1])  //0    */