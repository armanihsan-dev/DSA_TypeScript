function bubbleSort(arr: number[]): number[] {
  let updatedArray: number[] = [];

  const sorted = [...arr];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        // Swap if they're in wrong order
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }

  return sorted;
}
//let' test
const befBubNums1: number[] = [64, 34, 25, 12, 22, 11, 90];
const befBubNums2: number[] = [23, 12, 43, 10, 4];
// console.log('Sorted array first : ' + bubbleSort(befBubNums1));
// console.log('Sorted array second: ' + bubbleSort(befBubNums2));

// sorting in normal ts
function bubbleSortNormal(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log('Sorted array first : ' + bubbleSortNormal(befBubNums1));
console.log(befBubNums1);
