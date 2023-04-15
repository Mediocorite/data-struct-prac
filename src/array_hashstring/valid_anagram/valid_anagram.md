## Definition

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Problem

Given two strings s and t, write a function isAnagram(s, t) to determine if t is an anagram of s.

### Solution

The simplest solution to this problem is to sort both s and t and compare them. If they are equal, then t is an anagram of s. This solution has a time complexity of O(n log n) due to the sorting operation.

```javascript
function isAnagram(s, t) {
	if (s.length !== t.length) return false;

	const sortedS = s.split("").sort().join("");
	const sortedT = t.split("").sort().join("");

	return sortedS === sortedT;
}
```

Another solution is to use a hash table to count the occurrences of each character in s and then decrement the count for each character in t. If all the counts are zero at the end, then t is an anagram of s. This solution has a time complexity of O(n).

```javascript
function isAnagram(s, t) {
	if (s.length !== t.length) return false;

	const charCounts = {};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		charCounts[char] = (charCounts[char] || 0) + 1;
	}

	for (let i = 0; i < t.length; i++) {
		const char = t[i];
		if (!charCounts[char]) {
			return false;
		} else {
			charCounts[char]--;
		}
	}

	return true;
}
```

### Explanation

The first solution sorts both s and t, which rearranges the letters in each string so that they are in alphabetical order. If t is an anagram of s, then sorting should result in the same string for both s and t. Therefore, if the sorted strings are equal, then t is an anagram of s.

The second solution uses a hash table to count the occurrences of each character in s. Then, for each character in t, the function decrements the count in the hash table. If all the counts are zero at the end, then t is an anagram of s. This solution is faster than the first one because it avoids the expensive sorting operation.

## Additional Notes

In the second solution, we check if the length of s and t are equal before proceeding to create the hash table. This is an optimization that allows us to return false early if the lengths are different.
The charCounts[char] = (charCounts[char] || 0) + 1 line in the first loop is a shorthand for incrementing the count of a character in the hash table. If the character has not been seen before, then charCounts[char] will be undefined, so the || 0 part ensures that it starts at zero before incrementing.
The if (!charCounts[char]) line in the second loop checks if the character in t has a count of zero in the hash table. If it does, then t has a character that is not in s, so we can return false early. If it doesn't, then we decrement the count of the character in the hash table.
The time complexity of
