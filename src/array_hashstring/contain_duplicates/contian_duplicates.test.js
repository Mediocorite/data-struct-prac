// Import the function to test
const containsDuplicate = require("./contain_duplicates");

// Define the test cases
describe("check for duplicates in an array", () => {
	test("should return true if array contains duplicates", () => {
		expect(containsDuplicate([1, 2, 3, 3, 4, 4])).toBe(true);
	});

	test("should return false if array does not contain duplicates", () => {
		expect(containsDuplicate([1, 2, 3, 4, 5, 6])).toBe(false);
	});

	test("should return true for an array with one duplicate value", () => {
		expect(containsDuplicate([1, 2, 3, 4, 5, 5])).toBe(true);
	});
});
