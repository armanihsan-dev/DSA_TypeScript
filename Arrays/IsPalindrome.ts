
const isPalindrome  = (x:string) => {
    const cleaned = x.toLowerCase().replace(/[^a-z0-9]/g, '')

    // two pointer approach
    let left = 0
    let right = cleaned.length - 1

    while(left < right){
        if(cleaned[left] !== cleaned[right]){
            return false
        }
        left++
        right--
    }
    return  true
}

console.log(isPalindrome('tma'))
