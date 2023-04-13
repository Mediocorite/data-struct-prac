/**
 * @param {number[]} numbers
 * @return {boolean}
 */
var containsDuplicate = function (numbers) {
	// Sets allow a O(n) complexity when retrieving
	const hashSet = new Set();

	for (const i of numbers) {
		if (hashSet.has(i)) return true;

		hashSet.add(i);
	}

	return false;
};

module.exports = containsDuplicate;
