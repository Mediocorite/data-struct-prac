/**
 * @param {string} s
 * @return {number}
 */
// "abcabcbb"

var lengthOfLongestSubstring = function (s) {
	if (s.length === 0) return 0;

	let [left, right, longestLenght] = [0, 1, 1];

	// Terminating condition: right exhausts
	// lenght of the array s

	let uniqueChar = new Set();
	let currentLenght = 1;

	while (right < s.length) {
		let [charAtLeft, charAtRight] = [s.charAt(left), s.charAt(right)];
		// We shift the pointers regardless
		if (charAtLeft === charAtRight || uniqueChar.has(charAtRight)) {
			uniqueChar = new Set();
			currentLenght = 1;
		} else {
			currentLenght++;
			uniqueChar.add(charAtRight);
			if (!uniqueChar.has(charAtLeft)) uniqueChar.add(charAtLeft);
			longestLenght = Math.max(longestLenght, currentLenght);
		}
		left++;
		right++;
	}

	return longestLenght;
};

module.exports = lengthOfLongestSubstring;
