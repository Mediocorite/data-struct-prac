/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let frequency = {};
	for (let i = 0; i < nums.length; i++) {
		if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
		else frequency[nums[i]] = 1;
	}
	let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
	let sortedResult = result.sort((a, b) => {
		return b[1] - a[1];
	});
	return sortedResult.splice(0, k).map((array) => array[0]);
};

module.exports = topKFrequent;
