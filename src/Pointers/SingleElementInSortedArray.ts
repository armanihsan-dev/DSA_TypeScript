function sinNonDup(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid - 1] != nums[mid] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    if (mid % 2 == 0) {
      if (nums[mid - 1] == nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid - 1] == nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

let arr: number[] = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arrr2: number[] = [3, 3, 7, 7, 10, 11, 11];

console.log(sinNonDup(arr)); // Output: 2
console.log(sinNonDup(arrr2)); // Output: 4
