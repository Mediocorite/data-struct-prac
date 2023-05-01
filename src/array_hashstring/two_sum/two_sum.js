/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];
		let x = target - curr;
		if (map.has(x)) {
			return [i, map.get(x)];
		}
		map.set(curr, i);
	}
	return null;
};

module.exports = twoSum;
