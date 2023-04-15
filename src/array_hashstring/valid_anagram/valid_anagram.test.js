const isAnagram = require("./valid_anagram");

describe("check if two strings are anagrams", function () {
	test("should return true", () => {
		expect(isAnagram("anagram", "nagaram")).toBe(true);
	});
	test("should return false", () => {
		expect(isAnagram("rat", "car")).toBe(false);
	});
});
