/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
	let [leftPoint, rightPoint, maxVol] = [0, height.length - 1, 0];

	while (leftPoint < rightPoint) {
		const [leftHeight, rightHeight] = [height[leftPoint], height[rightPoint]];
		const boundary = Math.min(leftHeight, rightHeight);
		const width = rightPoint - leftPoint;
		const area = boundary * width;

		maxVol = Math.max(maxVol, area);

		if (leftHeight <= rightHeight) leftPoint++;
		if (rightHeight < leftHeight) rightPoint--;
	}

	return maxVol;
};
