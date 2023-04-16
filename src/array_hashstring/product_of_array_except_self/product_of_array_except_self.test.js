const productExceptSelf = require("./product_of_array_except_self");

describe("productExceptSelf", () => {
	test("for [1,2,3,4] -> [24,12,8,6]", () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});

	// TODO: Need to fix a test to consider -0 as 0
	// test("[-1,1,0,-3,3] -> [0,0,9,0,0]", () => {
	// 	expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
	// });
});
