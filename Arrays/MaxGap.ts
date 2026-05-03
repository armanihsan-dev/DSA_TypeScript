function maxGap(nums: number[]): number {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);

  let maxGap: number = 0;

  for (let i = 1; i < nums.length; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }
  return maxGap;
}

let arrMax: number[] = [3, 6, 9, 1];
console.log(maxGap(arrMax)); // Output: 3 ✅
