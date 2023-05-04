const getMaxProfit = require("./best_time_to_buy_stocks");

describe("getMaxProfit", () => {
	it("returns 0 if the prices array is empty", () => {
		expect(getMaxProfit([])).toBe(0);
	});

	it("returns 0 if there is no opportunity to make a profit", () => {
		expect(getMaxProfit([5, 4, 3, 2, 1])).toBe(0);
	});

	it("returns the maximum profit that can be made", () => {
		expect(getMaxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
		expect(getMaxProfit([2, 4, 1])).toBe(2);
		expect(getMaxProfit([1, 2, 3, 4, 5])).toBe(4);
		expect(getMaxProfit([5, 4, 3, 2, 1, 6])).toBe(5);
	});
});
