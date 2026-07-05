

console.log('Arman khan  is king'.replace('khan', 'faraz'));



function isPalindrome(str: string): boolean {

    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let start = 0;
    let end = cleaned.length - 1

    while (start < end) {
        if (cleaned[start] != cleaned[end]) {
            return false
        }
        start++
        end--
    }

    return true
}


console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('t$mtk'));