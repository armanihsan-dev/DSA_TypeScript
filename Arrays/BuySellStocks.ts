function myPow(x: number, n: number) {
  // Handle negative exponent
  if (n < 0) {
    x = 1 / x; // Take reciprocal of base
    n = -n; // Make exponent positive
  }
  let binForm = n;
  let answer = 1;

  while (binForm > 0) {
    if (binForm % 2 === 1) {
      answer *= x;
    }
    x *= x;
    binForm = Math.floor(binForm / 2);
  }
  return answer;
}

console.log(myPow(3, -5));
