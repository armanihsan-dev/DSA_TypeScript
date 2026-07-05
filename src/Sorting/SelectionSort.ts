function selectionSort(arr: number[]): number[] {
  if (arr.length < 1) return [];
  let n = arr.length;
  let sorted: number[] = [...arr];

  for (let i = 0; i < n; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (sorted[j] < sorted[smallestIndex]) {
        smallestIndex = j;
      }
    }
    // swamp the smallest index with arr[i]
    [sorted[i], sorted[smallestIndex]] = [sorted[smallestIndex], sorted[i]];
  }

  return sorted;
}

// let's test
const arrSele = [64, 25, 12, 22, 11];
console.log(selectionSort([4, 1, 5, 2, 3])); // Output: [11, 12, 22, 25, 64]
