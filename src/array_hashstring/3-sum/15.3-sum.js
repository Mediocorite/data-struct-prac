/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// Sort the array
	// set a target -> a (target)
	// Left -> a + 1
	// Right -> End of sorted array
	// Check if numbers[left] + numbers[right] > numbers[target]
	// move the left pointer.
	// else
	// move the right pointer.
	// check if if number[left] + numbers[right] === numbers[target]
	// add to result array.
	// move target until new value is found.

	let result = new Array();
	nums.sort((a, b) => a - b);
	for (let targetPointer = 0; targetPointer < nums.length; targetPointer++) {
		target = nums[targetPointer];
		if (target > 0) break;
		if (targetPointer > 0 && target === nums[targetPointer - 1]) continue;

		let [left, right] = [targetPointer + 1, nums.length - 1];

		while (left < right) {
			let threeSumValue = nums[left] + nums[right] + target;
			if (threeSumValue < 0) {
				left++;
			} else if (threeSumValue > 0) {
				right--;
			} else {
				result.push([nums[left], nums[right], target]);
				left++;
				right--;
				while (nums[left] === nums[left - 1] && left < right) {
					left++;
				}
			}
		}
	}
	return result;
};

// @lc code=end
