function myPow(x: number, n: number) {
  if (n == 0) return 1.0;
  if (x == 0) return 0.0;
  if (x == 1) return 1.0;
  if (x == -1 && n % 2 == 0) return 1.0;

  if (n < 0) {
    // Handle negative exponent
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
