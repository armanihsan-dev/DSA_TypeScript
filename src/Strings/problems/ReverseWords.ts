
console.log("  My name is   ".trim().split(' ').reverse().join(' '));

type str = string

let myString: str = "Hello world"
let str2: str = ""
for (let i = 0; i < myString.length; i++) {
    str2 += myString[i]
}
console.log('Str 2 is', str2);

let withSpaceString: str = "the  word    is beautiful"


// function reverseWords(s: str): str {
//     let reversedWords = s.trim().split(' ').reverse().join(' ')
//     return reversedWords
// }

// console.log(reverseWords(myString));

console.log(withSpaceString.split(' ').filter((word) => word !== '').reverse().join(' '));