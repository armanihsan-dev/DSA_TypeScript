

function freqOfString(word: string): Record<string, number> {
    let freq: Record<string, number> = {}

    for (let char of word) {
        freq[char] = (freq[char] || 0) + 1
    }

    return freq
}


function matches(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i <= 26; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false

    const s1Count = new Array(26).fill(0)
    const windowCount = new Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {
        const index = s1.charCodeAt(i) - 97
        s1Count[index]++
    }


    for (let i = 0; i < s1.length; i++) {
        const index = s2.charCodeAt(i) - 97
        windowCount[index]++
    }

    // console.log({ s1Count, windowCount });
    if (matches(s1Count, windowCount)) return true


    for (let i = s1.length; i < s2.length; i++) {

        const addIndex = s2.charCodeAt(i) - 97
        windowCount[addIndex]++

        const removeIndex = s2.charCodeAt(i - s1.length) - 97
        windowCount[removeIndex]--

     //   console.log({ s1Count, windowCount });

        if (matches(s1Count, windowCount)) return true
    }

    return false

}


console.log(checkInclusion('abc', 'bbbca'));
console.log(checkInclusion('jkl', 'dsa'));
