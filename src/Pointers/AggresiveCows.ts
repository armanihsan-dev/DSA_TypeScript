function aggCow(positions: number[], cows: number): number {
  positions.sort((a, b) => a - b);
  let ans: number = 1;
  let low: number = 1;
  let high: number = Math.max(...positions) - Math.min(...positions);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canPlace(positions, cows, mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function canPlace(
  positions: number[],
  cows: number,
  distance: number
): boolean {
  let cowsCount: number = 1;
  let lastPosition: number = positions[0];

  for (let i = 1; i < positions.length; i++) {
    if (positions[i] - lastPosition >= distance) {
      cowsCount++;
      lastPosition = positions[i];

      if (cowsCount >= cows) {
        return true;
      }
    }
  }

  return false;
}

let cowsPos: number[] = [1, 2, 4, 8, 9];
let cows: number = 4;
console.log(aggCow(cowsPos, cows)); // Output: 3 ✅
