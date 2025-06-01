
// leetcode 3. Longest Substring Without Repeating Characters\

// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    let char = s[right];
    if (!map.has(char)) {
      map.set(char, 1);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      map.delete(s[left]);
      left++;
    }
  }

  return max;
};
