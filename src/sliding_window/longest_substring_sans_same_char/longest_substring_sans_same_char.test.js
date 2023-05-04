const lengthOfLongestSubstring = require("./longest_substring_sans_same_char");

describe("lengthOfLongestSubstring", () => {
	it('should return 3 for input "abcabcbb"', () => {
		expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
	});

	it('should return 1 for input "bbbbb"', () => {
		expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
	});

	it('should return 3 for input "pwwkew"', () => {
		expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
	});

	it("should return 0 for empty string input", () => {
		expect(lengthOfLongestSubstring("")).toBe(0);
	});

	it(`should return 3 for input "dvdf" `, () => {
		expect(lengthOfLongestSubstring("dvdf")).toBe(3);
	});
});
