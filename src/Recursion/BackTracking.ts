



function getAllSubsets(nums: number[], ans: number[], i: number, allSubsets: [number[]]) {
    if (i == nums.length) {
        allSubsets.push([...ans])
        return
    }

    ans.push(nums[i])
    getAllSubsets(nums, ans, i + 1, allSubsets)

    ans.pop()
    getAllSubsets(nums, ans, i + 1, allSubsets)
}

let nums: number[] = [1, 2, 3]
let allSubsets: [number[]] = [[]]
let ans: number[] = []

getAllSubsets(nums, ans, 0, allSubsets)
console.log(allSubsets);


