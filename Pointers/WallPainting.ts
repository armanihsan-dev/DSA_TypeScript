function paintWalls(costs: number[], time: number): number {
  let ans: number = -1;
  let start: number = Math.max(...costs);
  let end: number = costs.reduce((acc, cost) => acc + cost, 0);

  while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);

    if (isValid(costs, time, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

function isValid(
  wallLengths: number[],
  painters: number,
  mid: number
): boolean {
  let currentSum: number = 0;
  let curentPainters: number = 1;

  for (let i = 0; i < wallLengths.length; i++) {
    if (wallLengths[i] > mid) return false;

    if (wallLengths[i] + currentSum > mid) {
      curentPainters++;
      currentSum = wallLengths[i];

      if (curentPainters > painters) return false;
    } else {
      currentSum += wallLengths[i];
    }
  }
  return true;
}

//let's test
console.log(paintWalls([1, 2, 3, 4], 2)); // Output: 6
console.log(paintWalls([10, 20, 30, 40], 2)); // Output: 60
