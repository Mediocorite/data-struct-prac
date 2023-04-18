/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const uniqueNumber = new Set(nums);
	let maxScore = 0;

	for (const number of nums) {
		// Have to find the first number of series
		// First doesn't have a value left to it in the set
		let leftNumber = number - 1;
		if (uniqueNumber.has(leftNumber)) continue; // Keep jumping until first is found

		let [currNumber, score] = [number, 1];

		const streakHelper = () => uniqueNumber.has(currNumber + 1);

		while (streakHelper()) {
			currNumber++;
			score++;
		}

		// Will store the longest max
		maxScore = Math.max(maxScore, score);
	}
	return maxScore;
};

module.exports = longestConsecutive;
