const longestConsecutive = require("./longest_consecutive_sequence");
describe("longestConsecutive", () => {
	it("returns the length of the longest consecutive sequence", () => {
		expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
		expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
		expect(longestConsecutive([1, 3, 5, 7])).toEqual(1);
		expect(longestConsecutive([2, 4, 6, 8])).toEqual(1);
		expect(longestConsecutive([-1, -3, -5, -7])).toEqual(1);
		expect(longestConsecutive([0])).toEqual(1);
		expect(longestConsecutive([])).toEqual(0);
	});
});
