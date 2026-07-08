


let chars: string[] = ["a", "a", "b", "b", "c", "c", "c"]
function compressString(chars: string[]): number {
    let writeIndex = 0
    let readIndex = 0


    while (readIndex < chars.length) {
        let currentChar = chars[readIndex]
        let count = 0

        // Step 2: Count how many times it repeats
        while (readIndex < chars.length && chars[readIndex] === currentChar) {
            count++
            readIndex++
        }

        //write the character
        chars[writeIndex] = currentChar
        writeIndex++

        if (count > 1) {
            const countStr = count.toString()
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex] = countStr[i]
                writeIndex++
            }
        }
    }
    return writeIndex
}

console.log(compressString(chars));

//  String Compression(LeetCode 443) - Complete Masterclass
// Let me teach you this problem from absolute zero to complete mastery!

// 📝 Understanding the Problem
// What We Need to Do:
// Count consecutive repeating characters

// Replace them with: character + count(if count > 1)

// Do this in -place(modify the original array)

// Return the new length

// Simple Examples:
// typescript
// ["a", "a", "b", "b", "c", "c", "c"] 
// →["a", "2", "b", "2", "c", "3"]  // Length: 6

// ["a"] 
// →["a"]  // Length: 1 (single char, no count needed)

// ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
// →["a", "b", "1", "2"]  // Length: 4 ("b" appears 12 times)
// 🧠 The Core Concept: Two Pointers
// Why Two Pointers ?
//     We need to read from the array(to find groups)

// We need to write to the same array(to compress)

// These operations happen at different speeds!

// Visual Analogy:
// text
// Think of it like reorganizing books on a shelf:
// - readIndex: Your eyes scanning the shelf
//     - writeIndex: Your hands placing books in new positions

// Sometimes your eyes move faster than your hands!
// 🎨 Step - by - Step Visual Learning
// Example 1: ["a", "a", "b", "b", "c", "c", "c"]
// text
// Step 0: Initial array
// Index: 0  1  2  3  4  5  6
// [a][a][b][b][c][c][c]
//         ↑
// read = 0
// write = 0

// Step 1: Find group "aa"
//     - read=0, char = 'a', count = 2
//         - Write 'a' at write = 0
//             - Write '2' at write = 1
// Result: [a][2][b][b][c][c][c]
//               ↑
// write = 2
//                     ↑
// read = 2

// Step 2: Find group "bb"
//     - read=2, char = 'b', count = 2
//         - Write 'b' at write = 2
//             - Write '2' at write = 3
// Result: [a][2][b][2][c][c][c]
//                     ↑
// write = 4
//                          ↑
// read = 4

// Step 3: Find group "ccc"
//     - read=4, char = 'c', count = 3
//         - Write 'c' at write = 4
//             - Write '3' at write = 5
// Result: [a][2][b][2][c][3][c]
//                          ↑
// write = 6

// Return: 6(first 6 characters are compressed)
// 💻 Solution 1: The Two - Pointer Approach(Most Important)
// typescript

// 🔍 Deep Dive: Line by Line Explanation
// Line 1-3: Setup
// typescript
// let writeIndex = 0;  // Points to where we'll write next
// let readIndex = 0;   // Points to where we'll read next
// Why two indices?

// text
// writeIndex: Always points to the next empty position in the compressed array
// readIndex:  Always points to the next unread position in the original array

// They start at 0 but diverge as we compress!
// Line 5-11: Finding and Counting Groups
// typescript
// const currentChar = chars[readIndex];  // Save the character we're counting
// let count = 0;

// while (readIndex < chars.length && chars[readIndex] === currentChar) {
//     count++;
//     readIndex++;
// }
// Step-by-Step Example:

// text
// chars = ["a","a","b","b","c","c","c"]

// Iteration 1:
// readIndex = 0, currentChar = 'a', count = 0
// Check: chars[0] === 'a'? Yes → count=1, readIndex=1
// Check: chars[1] === 'a'? Yes → count=2, readIndex=2
// Check: chars[2] === 'a'? No → exit loop
// Result: count = 2, readIndex = 2

// Iteration 2:
// readIndex = 2, currentChar = 'b', count = 0
// Check: chars[2] === 'b'? Yes → count=1, readIndex=3
// Check: chars[3] === 'b'? Yes → count=2, readIndex=4
// Check: chars[4] === 'b'? No → exit loop
// Result: count = 2, readIndex = 4

// Iteration 3:
// readIndex = 4, currentChar = 'c', count = 0
// Check: chars[4] === 'c'? Yes → count=1, readIndex=5
// Check: chars[5] === 'c'? Yes → count=2, readIndex=6
// Check: chars[6] === 'c'? Yes → count=3, readIndex=7
// Check: chars[7] === 'c'? No (readIndex = 7 = length) → exit
// Result: count = 3, readIndex = 7
// Line 13-15: Write the Character
// typescript
// chars[writeIndex] = currentChar;
// writeIndex++;
// Example:

// text
// After processing "aa":
// writeIndex = 0 → chars[0] = 'a'
// writeIndex becomes 1

// After processing "bb":
// writeIndex = 2 → chars[2] = 'b'
// writeIndex becomes 3
// Line 17-23: Write the Count
// typescript
// if (count > 1) {
//     const countStr = count.toString();
//     for (let i = 0; i < countStr.length; i++) {
//         chars[writeIndex] = countStr[i];
//         writeIndex++;
//     }
// }
// Why convert to string?

// text
// count = 2   → "2"  → Write one character
// count = 12  → "12" → Write two characters ('1', '2')
// count = 123 → "123" → Write three characters
// Example with count = 12:

// text
// chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
//                       ↑
//                   count = 12

// countStr = "12"
// i=0: chars[writeIndex] = '1', writeIndex++
// i=1: chars[writeIndex] = '2', writeIndex++

// Result: ["a","b","1","2"]