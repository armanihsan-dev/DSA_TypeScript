function findLeft(numbers: number[], target: number): number {
  let ans: number = -1;
  let left: number = 0;
  let right: number = numbers.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);

    if (numbers[mid] == target) {
      ans = mid;
      right = mid - 1;
    } else if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

function findRight(numbers: number[], target: number): number {
  let ans: number = -1;

  let left: number = 0;
  let right: number = numbers.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);

    if (numbers[mid] == target) {
      ans = mid;
      left = mid + 1;
    } else if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

function firstAndLast(nums: number[], target: number): number[] {
  let left: number = findLeft(nums, target);

  let right: number = findRight(nums, target);

  if (left == -1 || right == -1) return [-1, -1];

  return [left, right];
}

// let's test
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 8)); // [3,4] ✅
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 7)); // [1,2] ✅
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 5)); // [0,0] ✅
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 10)); // [5,5] ✅
console.log(firstAndLast([5, 7, 7, 8, 8, 10], 6)); // [-1,-1] ✅
console.log(firstAndLast([1], 1)); // [0,0] ✅
console.log(firstAndLast([], 1)); // [-1,-1] ✅
