/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
	for (const bracket of s.split("")) {
		/* Time O(N) */
		const isParenthesis = bracket === "(";
		if (isParenthesis) stack.push(")"); /* Space O(N) */

		const isCurlyBrace = bracket === "{";
		if (isCurlyBrace) stack.push("}"); /* Space O(N) */

		const isSquareBracket = bracket === "[";
		if (isSquareBracket) stack.push("]"); /* Space O(N) */

		const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
		if (isOpenPair) continue;

		const isEmpty = !stack.length;
		const isWrongPair = stack.pop() !== bracket;
		const isInvalid = isEmpty || isWrongPair;
		if (isInvalid) return false;
	}

	return stack.length === 0;
};

module.exports = isValid;
