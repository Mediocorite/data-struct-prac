/**
 * @param {string} s
 * @return {number}
 */
// "dvdf";

var lengthOfLongestSubstring = function (s) {
	// The window will be opearted as dragging a
	// set, such that left side of the set is
	// left = 0; and right side is end of the set.

	// You keep moving the right side;

	let [left, longestLenght] = [0, 0];

	let window = new Set();

	for (let right = 0; right < s.length; right++) {
		let charAtRight = s.charAt(right);

		// we eliminate all the strings until the
		// the letter in the right string
		while (window.has(charAtRight)) {
			let charAtLeft = s.charAt(left);
			window.delete(charAtLeft);
			left++;
		}

		window.add(charAtRight);

		longestLenght = Math.max(longestLenght, window.size);
	}

	return longestLenght;
};

module.exports = lengthOfLongestSubstring
