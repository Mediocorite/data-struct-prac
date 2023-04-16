/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let hashMap = new Map();
	for (const word of strs) {
		let hotVectorArray = new Array(26).fill(0);
		for (let i = 0; i < word.length; i++) {
			hotVectorArray[word.charAt(i).charCodeAt(0) - 97]++;
		}
		hotVectorArray = hotVectorArray.toString();
		if (!hashMap.has(hotVectorArray)) {
			hashMap.set(hotVectorArray, [word]);
		} else {
			hashMap.get(hotVectorArray).push(word);
		}
	}
	return Array.from(hashMap.values());
};

module.exports = groupAnagrams;
