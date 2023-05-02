const maxArea = require("./container_with_most_water");

describe("Container With Most Water", () => {
	test("Returns the maximum area for [1,8,6,2,5,4,8,3,7] input", () => {
		expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
	});

	test("Returns 0 if there are less than 2 heights", () => {
		expect(maxArea([1])).toEqual(0);
	});

	test("Returns 0 if the heights are same", () => {
		expect(maxArea([1, 1])).toEqual(0);
	});

	test("Returns 0 if all heights are the same", () => {
		expect(maxArea([5, 5, 5, 5])).toEqual(0);
	});

	test("Returns the maximum area for [1,2,3,4,5] input", () => {
		expect(maxArea([1, 2, 3, 4, 5])).toEqual(6);
	});

	test("Returns the maximum area for [5,4,3,2,1] input", () => {
		expect(maxArea([5, 4, 3, 2, 1])).toEqual(6);
	});
});
