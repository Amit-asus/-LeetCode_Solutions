// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length == 0 || nums.length == 1){
        return nums ;
    }
    let mid = Math.floor(nums.length/2) ;
    let left = sortArray(nums.slice(0,mid)) ;
    let right = sortArray(nums.slice(mid,nums.length)) ;

    return merge(left,right) ; 
};


var merge = function(arr1 , arr2) {
    const result = [] ;
    while(arr1.length && arr2.length )
    {
        if(arr1[0] < arr2[0]){
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift())
        }
    }
    return [...result , ...arr1 , ...arr2]
}