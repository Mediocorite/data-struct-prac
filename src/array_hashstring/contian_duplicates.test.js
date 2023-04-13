// Import the testing library
const assert = require("chai").assert;

// Import the function to test
const containsDuplicates = require("./containsDuplicates");

// Define the test cases
describe("containsDuplicates", function () {
	it("should return true for arrays with duplicates", function () {
		assert.equal(containsDuplicates([1, 2, 3, 1]), true);
		assert.equal(containsDuplicates(["a", "b", "c", "b"]), true);
		assert.equal(containsDuplicates(["hello", "world", "hello"]), true);
	});

	it("should return false for arrays without duplicates", function () {
		assert.equal(containsDuplicates([1, 2, 3, 4]), false);
		assert.equal(containsDuplicates(["a", "b", "c"]), false);
		assert.equal(containsDuplicates(["hello", "world"]), false);
	});

	it("should return false for empty arrays", function () {
		assert.equal(containsDuplicates([]), false);
	});
});
