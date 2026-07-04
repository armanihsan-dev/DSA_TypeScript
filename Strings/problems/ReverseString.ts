


// brute force

function revStr(string: string[]): string[] {
    let strArr: string[] = []
    for (let i = string.length - 1; i >= 0; i--) {
        strArr.push(string[i])
    }
    return strArr
}





function reverseString(str: string[]) {
    let start = 0
    let end = str.length - 1

    while (start < end) {
        let temp = str[start]
        str[start] = str[end]
        str[end] = temp
        start++
        end--
    }
    return str
}

let string1: Array<string> = ['M', 'U', 'N', 'N', 'U']
// console.time('first')
// console.log(reverseString(string1));
// console.timeEnd('first')

// console.log(string1);

// console.time('sec')
// console.log(revStr(string1));
// console.timeEnd('sec')



let stringMunnu = "munnu"
console.log(stringMunnu.split('').reverse().join(''));