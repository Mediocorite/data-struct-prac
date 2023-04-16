const groupAnagrams = require("./group_anagrams");

describe("groupAnagrams", () => {
	test("should group anagrams correctly", () => {
		const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
		const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
		expect(groupAnagrams(input)).toEqual(output);
	});

	test("should return an empty array for an empty input", () => {
		expect(groupAnagrams([])).toEqual([]);
	});

	test("should return an array with a single element for an input with only one word", () => {
		expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
	});

	test("should return an array with one element for an input with only anagrams", () => {
		expect(groupAnagrams(["abc", "cab", "bca"])).toEqual([["abc", "cab", "bca"]]);
	});
});
