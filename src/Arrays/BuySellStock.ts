function maxProfit(prices: number[]): number {
    
  if (prices.length == 0) return 0;
  let minPrice = prices[0];
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    // calculate the min price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxPrice) {
        maxPrice = profit;
      }
    }
  }
  return maxPrice;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];

console.time('buy');
console.log(maxProfit(prices));
console.timeEnd('buy');
