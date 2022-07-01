/* Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.   */


// Solution 1

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



// Solution 2

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



/* test cases:
maxProfit([7,1,5,3,6,4])  //5
maxProfit([7,6,4,3,1])  //0    */