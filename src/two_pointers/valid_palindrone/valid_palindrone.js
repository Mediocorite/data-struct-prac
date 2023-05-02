/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length <= 1) return true;

	let regexToMakeAlphanumeric = new RegExp("[^a-z0-9]", "gi");
	let formatString = s.toLowerCase().replace(regexToMakeAlphanumeric, "");
	let reversedString = formatString.split("").reverse().join("");

	return formatString === reversedString;
};

module.exports = isPalindrome;
