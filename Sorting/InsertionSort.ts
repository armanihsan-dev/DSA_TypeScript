function insertionSort(arr: number[]): number[] {
  if (arr.length < 1) return [];

  let sorted: number[] = [...arr];

  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    let prev = i - 1;

    while (prev >= 0 && sorted[prev] > current) {
      sorted[prev + 1] = sorted[prev];
      prev--;
    }
    sorted[prev + 1] = current;
  }
  return sorted;
}

// let's test
console.log(insertionSort([5, 1, 4, 2, 3])); // Output: [1, 2, 3, 4, 5]
