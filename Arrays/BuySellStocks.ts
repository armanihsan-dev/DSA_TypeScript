function myPow(x: number, n: number) {
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

console.log(myPow(3, 5));


// Example: Calculating  3 power 5

//   with Your Code
// Let's trace through with x = 3, n = 5:

// Initial State
// text
// binForm = 5 (binary: 101)
// answer = 1
// x = 3
// Iteration 1
// text
// binForm = 5 → binary 101
// Check: 5 % 2 = 1 → odd → answer *= x
//   answer = 1 * 3 = 3
// x *= x → x = 3 * 3 = 9
// binForm = Math.floor(5 / 2) = 2 (binary: 10)  ← REMOVED LAST DIGIT!
// Binary: Processed digit 1 (least significant bit), now remaining bits: 10

// Iteration 2
// text
// binForm = 2 → binary 10
// Check: 2 % 2 = 0 → even → skip multiplication
// x *= x → x = 9 * 9 = 81
// binForm = Math.floor(2 / 2) = 1 (binary: 1)  ← REMOVED LAST DIGIT!
// Binary: Processed digit 0, now remaining bits: 1

// Iteration 3
// text
// binForm = 1 → binary 1
// Check: 1 % 2 = 1 → odd → answer *= x
//   answer = 3 * 81 = 243
// x *= x → x = 81 * 81 = 6561
// binForm = Math.floor(1 / 2) = 0  ← REMOVED LAST DIGIT, LOOP ENDS
// Binary: Processed last digit 1, no more bits left

// What If We Removed That Line?
// Let's see what happens WITHOUT binForm = Math.floor(binForm / 2):

// javascript
// function myPowWrong(x, n) {
//   let binForm = n;
//   let answer = 1;
  
//   while (binForm > 0) {
//     console.log('run');
//     if (binForm % 2 === 1) {
//       answer *= x;
//     }
//     x *= x;
//     // binForm never changes! ← MISSING LINE
//   }
//   return answer;
// }
// Result:
// text
// binForm = 5 (always stays 5, never decreases)
// while (5 > 0) → infinite loop! 💀
// The loop would run forever because binForm never reaches 0.

// Visual Representation
// Think of binary exponentiation like processing digits from right to left:

// text
// Exponent 5 in binary: 1 0 1
//                        ↑ ↑ ↑
//                   bit2 bit1 bit0 (LSB)

// We process:
// Step 1: Check bit0 (1) → multiply
//         Remove bit0 → remaining: 10 (binary) = 2

// Step 2: Check bit1 (0) → skip
//         Remove bit1 → remaining: 1 (binary) = 1

// Step 3: Check bit2 (1) → multiply
//         Remove bit2 → remaining: 0 → done
// Each binForm = Math.floor(binForm / 2) is like shifting right by one bit:

// 5 >> 1 = 2 (101 → 10)

// 2 >> 1 = 1 (10 → 1)

// 1 >> 1 = 0 (1 → 0)