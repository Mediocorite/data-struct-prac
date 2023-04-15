// Import the function to test
const getConcatenation = require("./concatenation_of_array");

// Define the test cases
describe("Should return an array that is ", () => {
	test("[1, 2, 1, 1, 2, 1]", () => {
		const sol = getConcatenation([1, 2, 1]);
		expect(sol).toStrictEqual([1, 2, 1, 1, 2, 1]);
	});

	test("[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]", () => {
		const sol = getConcatenation([1, 2, 3, 4, 5, 6]);
		expect(sol).toStrictEqual([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
	});

	test("[1, 2, 3, 4, 5, 5, 1, 2, 3, 4, 5, 5]", () => {
		expect(getConcatenation([1, 2, 3, 4, 5, 5])).toStrictEqual([1, 2, 3, 4, 5, 5, 1, 2, 3, 4, 5, 5]);
	});
});
