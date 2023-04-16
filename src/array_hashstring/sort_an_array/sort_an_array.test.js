const sortArray = require("./sort_an_array");

describe("sortArray", () => {
	test("should sort an array of numbers in ascending order", () => {
		const input = [5, 3, 2, 8, 1, 4];
		const output = [1, 2, 3, 4, 5, 8];
		expect(sortArray(input)).toEqual(output);
	});

	test("should sort an array of strings in ascending order", () => {
		const input = ["banana", "apple", "cherry", "date"];
		const output = ["apple", "banana", "cherry", "date"];
		expect(sortArray(input)).toEqual(output);
	});

	test("should return an empty array for an empty input", () => {
		expect(sortArray([])).toEqual([]);
	});

	test("should return an array with a single element for an input with only one element", () => {
		expect(sortArray([42])).toEqual([42]);
	});
});
