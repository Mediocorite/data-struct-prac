const characterReplacement = require("./longest_repeating_char_replace");

describe("characterReplacement", () => {
	it("returns 4, if the input is ABAB, 2", () => {
		expect(characterReplacement("ABAB", 2)).toBe(4);
	});
	it("returns 4, if the input is AABABBA 1", () => {
		expect(characterReplacement("AABABBA", 1)).toBe(4);
	});
	it("returns 4, if the input is AAAA, 0", () => {
		expect(characterReplacement("AAAA", 0)).toBe(4);
	});
	it("returns 2, if the input is ABCD, 1", () => {
		expect(characterReplacement("ABCD", 1)).toBe(2);
	});
});
