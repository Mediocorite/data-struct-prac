// Import the function to test
const containsDuplicate = require("./contain_duplicates");

// Define the test cases
describe("check for duplicates in an array", () => {
	test("should return true if array contains duplicates", () => {
		const myArray = [1, 2, 3, 3, 4, 4];
		const uniqueValues = new Set(myArray);
		const containsDuplicates = myArray.length !== uniqueValues.size;
		expect(containsDuplicates).toBe(true);
	});

	test("should return false if array does not contain duplicates", () => {
		const myArray = [1, 2, 3, 4, 5, 6];
		const uniqueValues = new Set(myArray);
		const containsDuplicates = myArray.length !== uniqueValues.size;
		expect(containsDuplicates).toBe(false);
	});

	test("should return true for an array with one duplicate value", () => {
		const myArray = [1, 2, 3, 4, 5, 5];
		const uniqueValues = new Set(myArray);
		const containsDuplicates = myArray.length !== uniqueValues.size;
		expect(containsDuplicates).toBe(true);
	});
});
