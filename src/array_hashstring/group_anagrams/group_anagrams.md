# Group Anagrams

## Explanation

Given an array of strings, group anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, "listen" and "silent" are anagrams.

## JavaScript Solution

The best solution for grouping anagrams involves using a hash table to store each anagram in a group. We iterate through the array of strings, sort each string, and then add it to its corresponding group in the hash table. If the group doesn't exist yet, we create it. Finally, we convert the hash table to an array and return it.

```javascript
function groupAnagrams(strs) {
	const groups = {};
	for (const str of strs) {
		const sortedStr = str.split("").sort().join("");
		if (!groups[sortedStr]) {
			groups[sortedStr] = [str];
		} else {
			groups[sortedStr].push(str);
		}
	}
	return Object.values(groups);
}
```

This solution has a time complexity of O(n _ k log k), where n is the number of strings in the array and k is the maximum length of a string. The space complexity is O(n _ k), since we're using a hash table to store each group of anagrams.

## Additional Notes

Another solution involves using a prime number to represent each character in a string, then multiplying the prime numbers together to get a unique hash value for each anagram. This solution has a time complexity of O(n \* k) and a space complexity of O(n).
When using the hash table solution, we could optimize the sorting step by using a counting sort instead of a comparison sort. However, this would only be useful if the strings in the array have a limited set of characters.
