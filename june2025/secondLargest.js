class Solution {
  getSecondLargest(arr) {

    let largest = arr[0];
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }

    return secondLargest;
  }
}
