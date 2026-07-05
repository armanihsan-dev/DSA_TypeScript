// leet code: 75 # Sort Colors

function sort(nums: number[]): void {
  let zero: number = 0;
  let ones: number = 0;
  let twos: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zero++;
    } else if (nums[i] == 1) {
      ones++;
    } else {
      twos++;
    }
  }
  for (let i = 0; i < zero; i++) {
    nums[i] = 0;
  }
  for (let i = zero; i < zero + ones; i++) {
    nums[i] = 1;
  }
  for (let i = zero + ones; i < nums.length; i++) {
    nums[i] = 2;
  }
  console.log(nums);
}
//let's test
sort([2, 0, 2, 1, 1, 0]);
