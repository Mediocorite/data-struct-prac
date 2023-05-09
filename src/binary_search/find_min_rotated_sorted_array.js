/**
 * @param {number[]} nums
 * @return {number}
 */
var findMininOn = function (nums) {
	// keep checking if the value is less than previous one.
	let foundMoreThanNext = false;
	let value = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			value = nums[i + 1];
			foundMoreThanNext = true;
		}
	}

	return foundMoreThanNext ? value : nums[0];
};

var findMin = function (nums) {
	let [left, right] = [0, nums.length - 1];

	while (left < right) {
		const mid = (left + right) >> 1;
		const guess = nums[mid];
		const [leftNum, rightNum] = [nums[left], nums[right]];

		const isTarget = leftNum < rightNum;
		if (isTarget) return leftNum;

		const isTargetGreater = leftNum <= guess;
		if (isTargetGreater) left = mid + 1;

		const isTargetLess = guess < leftNum;
		if (isTargetLess) right = mid;
	}

	return nums[left];
};

module.exports = findMin;
