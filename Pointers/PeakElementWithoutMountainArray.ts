function findPeakElement(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const arr1: number[] = [1, 2, 1, 3, 5, 6, 4];
const arr2: number[] = [1, 2, 3, 1];
console.log(findPeakElement(arr1)); // Output: 1 or 5 (both are valid peak indices)
console.log(findPeakElement(arr2)); // Output: 2 (the peak element is 3 at index 2)
