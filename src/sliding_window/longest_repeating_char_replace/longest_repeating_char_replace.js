/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
	let [pointer, maxLenght] = [0, 0];

	// Create a sliding window
	// Starts from 0, right keeps increamenting
	// Each time the window is generated, create a counter
	// Check the max variable lenght.

	let window = new Array();

	while (pointer < s.length) {
		let charAtRight = s.charAt(pointer);
		window.push(charAtRight);
		let charCounter = new Map();

		for (const char of window) {
			if (charCounter.has(char)) {
				charCounter.get(char).size++;
			} else {
				charCounter.set(char, { size: 1 });
			}
		}

		let mostCommonCharCount = 0;
		charCounter.forEach((value) => {
			if (value.size > mostCommonCharCount) mostCommonCharCount = value.size;
		});

		if (window.length - mostCommonCharCount <= k) {
			maxLenght = window.length;
		} else {
			window.shift();
		}

		pointer++;
	}

	return maxLenght;
};

module.exports = characterReplacement;
