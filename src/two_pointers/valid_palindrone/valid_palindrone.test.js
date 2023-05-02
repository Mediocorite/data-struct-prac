// Import the function that checks for valid palindromes
const isPalindrome = require("./valid_palindrone");

describe("isPalindrome", () => {
	it("returns true for valid palindrome strings", () => {
		expect(isPalindrome("racecar")).toBe(true);
		expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
		expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
	});

	it("returns false for non-palindrome strings", () => {
		expect(isPalindrome("hello")).toBe(false);
		expect(isPalindrome("Palindrome")).toBe(false);
		expect(isPalindrome("This is not a palindrome")).toBe(false);
	});
});
