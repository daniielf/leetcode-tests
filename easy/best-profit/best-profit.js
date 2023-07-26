var maxProfit = function(prices) {
  let highestProfit = 0;
  let bestBuyIndex = 0;
  for (let bestSellIndex = 1; bestSellIndex < prices.length ; bestSellIndex++) {
      let currentProfit = prices[bestSellIndex] - prices[bestBuyIndex]
      if (currentProfit > 0) {
          highestProfit = currentProfit > highestProfit ? currentProfit : highestProfit;
      } else {
          bestBuyIndex = bestSellIndex;
      }
  }

  return highestProfit;
};