// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

//helper function
let swapNumbers = function (nums, i) {
  let temp = nums[i];
  nums[i] = nums[i + 1];
  nums[i + 1] = temp;
};

let bubbleSort = function (nums) {
  let swap = true;

  while (swap == true) {
    swap = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swapNumbers(nums, i);
        swap = true;
      }
    }
  }

  return nums ;
};

console.log(bubbleSort([2, 0, 2, 1, 1, 0]));
