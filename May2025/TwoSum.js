// LeetCode 1 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

 let nums = [2, 7, 11, 15]
 let target = 9

//brute force 
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//optimized
var twoSum2 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (map.has(rem)) {
      return [map.get(rem), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum(nums,target))


