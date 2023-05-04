/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let [buySignal, sellSignal, maxProfit] = [0, 1, 0];

	// Terminaiting condition -> Until the
	// rightmost side reaches end of list.
	while (sellSignal < prices.length) {
		// Updating the left window
		let [buyPrice, sellPrice] = [prices[buySignal], prices[sellSignal]];

		// Moving the buy pointer to lowest found stock
		// when comparing between the buy and sell stock
		if (sellPrice <= buyPrice) buySignal = sellSignal;

		let profitGenerated = sellPrice - buyPrice;
		maxProfit = Math.max(profitGenerated, maxProfit);
		sellSignal++;
	}

	return maxProfit;
};

module.exports = maxProfit;
