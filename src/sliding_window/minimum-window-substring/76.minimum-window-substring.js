/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	debugger;
	if (t === "") return "";

	const window = new Map();
	const mapOfT = createHashMap(t);

	let [need, have, left, right] = [mapOfT.size, 0, 0, 0];
	let [result, resLenght] = [[-1, -1], s.split("").length + 1];

	while (right < s.length) {
		debugger;
		let charAtRight = s.charAt(right);
		window.set(charAtRight, (window.get(charAtRight) || 0) + 1);
		if (mapOfT.has(charAtRight) && mapOfT.get(charAtRight) === window.get(charAtRight)) have++;
		debugger;
		while (need === have) {
			let currentLenght = right - left + 1;
			if (currentLenght < resLenght) {
				result = [left, right];
				resLenght = currentLenght;
			}
			debugger;
			let charAtLeft = s.charAt(left);
			window.set(charAtLeft, (window.get(charAtLeft) || 0) - 1);

			if (mapOfT.has(charAtLeft) && mapOfT.get(charAtLeft) > window.get(charAtLeft)) have--;
			debugger;
			left++;
		}

		right++;
	}

	if (resLenght !== s.length + 1) {
		let [leftPtr, rightPtr] = result;
		let sString = s.split("");
		debugger;
		return sString.splice(leftPtr, rightPtr).join("");
	} else return "";
};

var createHashMap = (string, map = new Map()) => {
	for (let char of string.split("")) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	return map;
};

// @lc code=end
