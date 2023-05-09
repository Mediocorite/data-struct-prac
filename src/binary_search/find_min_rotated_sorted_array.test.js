const findMin = require("./find_min_rotated_sorted_array");

describe("findMin", () => {
	it("should return the minimum element in a rotated sorted array", () => {
		// Test case 1
		const nums1 = [3, 4, 5, 1, 2];
		expect(findMin(nums1)).toBe(1);

		// Test case 2
		const nums2 = [4, 5, 6, 7, 0, 1, 2];
		expect(findMin(nums2)).toBe(0);

		// Test case 3
		const nums3 = [11, 13, 15, 17];
		expect(findMin(nums3)).toBe(11);

		// Test case 4
		const nums4 = [1];
		expect(findMin(nums4)).toBe(1);

		// Test case 5
		const nums5 = [2, 1];
		expect(findMin(nums5)).toBe(1);
	});
});
