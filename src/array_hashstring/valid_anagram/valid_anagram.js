/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	// Escape condition
	if (s.length !== t.length) return false;

	// We are going to hot index array
	const alphabetIndex = new Array(26).fill(0);
	// First loop adds to the hot array
	for (let index = 0; index < s.length; index++) {
		alphabetIndex[s.charAt(index).charCodeAt(0) - 97]++;
		alphabetIndex[t.charAt(index).charCodeAt(0) - 97]--;
	}

	for (const hotVector of alphabetIndex) {
		if (hotVector > 0) return false;
	}

	return true;
};

// isAnagram("anagram", "nagaram");
module.exports = isAnagram;
