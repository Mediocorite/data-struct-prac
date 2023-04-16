const topKFrequent = require("./topkfreqelements");

describe("Top K Frequent Elements", () => {
	it("should return the k most frequent elements", () => {
		expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(expect.arrayContaining([1, 2]));
		expect(topKFrequent([1], 1)).toEqual(expect.arrayContaining([1]));
		expect(topKFrequent([1, 2, 3, 4, 5], 1)).toEqual(expect.arrayContaining([1]));
		expect(topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3)).toEqual(
			expect.arrayContaining([3, 4, 2])
		);
	});
});
