const validParentheses = require("./valid_parentheses");

describe("validParentheses", () => {
	test("returns true for empty string", () => {
		expect(validParentheses("")).toBe(true);
	});

	test("returns true for valid parentheses string", () => {
		expect(validParentheses("()")).toBe(true);
		expect(validParentheses("()[]{}")).toBe(true);
		expect(validParentheses("{[]}")).toBe(true);
	});

	test("returns false for invalid parentheses string", () => {
		expect(validParentheses("(]")).toBe(false);
		expect(validParentheses("([)]")).toBe(false);
	});
});
