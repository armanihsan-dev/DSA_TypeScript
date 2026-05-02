function allocateBooks(pages: number[], students: number): number {
  if (pages.length < students) return -1;
  let ans: number = -1;
  let low: number = Math.max(...pages);
  let high: number = pages.reduce((acc, page) => acc + page, 0);

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (isValid(pages, students, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function isValid(pages: number[], students: number, mid: number): boolean {
  let currentSum: number = 0;
  let currentStus: number = 1;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i] > mid) return false;

    if (currentSum + pages[i] > mid) {
      currentStus++;
      currentSum = pages[i];

      if (currentStus > students) return false;
    } else {
      currentSum += pages[i];
    }
  }
  return true;
}

console.log(allocateBooks([12, 34, 67, 90], 2));
console.log(allocateBooks([1, 2, 3, 4], 2));
console.log(allocateBooks([15, 17, 20], 5));
