const mountainArr = [0, 2, 5, 8, 6, 3, 1];
const mountArr2 = [0, 2, 1, 0];
const mountArr3 = [1, 2, 3, 4, 5, 3, 2, 1];
const mountArr4 = [3, 5, 3, 2, 0];

function peakIndexInMountainArray(arr: number[]): number {
  if (!arr || arr.length < 3) {
    return -1;
  }

  let start = 1;
  let end = arr.length - 2;

  while (start < end) {
    let mid = (start + end) >> 1;

    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(peakIndexInMountainArray(mountainArr));
console.log(peakIndexInMountainArray(mountArr2));
console.log(peakIndexInMountainArray(mountArr3));
console.log(peakIndexInMountainArray(mountArr4));

// Problem Understanding
// A mountain array is an array that:

// Strictly increases to a peak

// Then strictly decreases after the peak

// Example: [0, 2, 5, 8, 6, 3, 1] - peak is at index 3 (value 8)

// The mountain property creates a binary search friendly pattern:

// If we're on the increasing side: arr[mid] < arr[mid + 1]

// If we're on the decreasing side: arr[mid] > arr[mid + 1]

// How Binary Search Works
// Let's trace through [0, 2, 5, 8, 6, 3, 1]:

// Step 1: left=0, right=6, mid=3

// Compare arr[3]=8 with arr[4]=6

// 8 < 6? No (decreasing)

// So right = mid = 3

// Step 2: left=0, right=3, mid=1

// Compare arr[1]=2 with arr[2]=5

// 2 < 5? Yes (increasing)

// So left = mid + 1 = 2

// Step 3: left=2, right=3, mid=2

// Compare arr[2]=5 with arr[3]=8

// 5 < 8? Yes (increasing)

// So left = mid + 1 = 3

// Step 4: left=3, right=3 → Loop ends

// Return 3 (peak index)
