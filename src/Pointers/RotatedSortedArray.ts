function srcRotatedArr(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    //check if left half is sorted
    if (nums[start] <= nums[mid]) {
      // then apply binary search on left half sorted
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //right half is sorted
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

// Problem Understanding
// A rotated sorted array is created by taking a sorted array and shifting elements to the left or right. For example:

// Original: [1, 2, 3, 4, 5, 6, 7]

// Rotated: [4, 5, 6, 7, 1, 2, 3]
