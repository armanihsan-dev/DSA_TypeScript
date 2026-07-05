function minInRotatedSortedArr(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(minInRotatedSortedArr([3, 4, 5, 1, 2])); // Output: 1

//Find Minimum in Rotated Sorted Array but the array may contain duplicates

function minInDupSorted(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }

  return nums[left];
}

// let's test
console.log(minInDupSorted([3, 4, 5, 1, 2])); // Output: 1
console.log(minInDupSorted([2, 2, 2, 0, 1])); // Output: 0
