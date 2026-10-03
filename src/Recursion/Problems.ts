

// Fabonacci

function fib(index: number): number {
    if (index == 1 || index == 0) return index
    return fib(index - 1) + fib(index - 2)
}

// console.log(fib(4)); // should log 3 
// console.log(fib(8)); // should log 21


function isSorted(arr: number[], n: number): boolean {



    if (n == 1 || n == 0) return true


    return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1)
}

// console.log(isSorted([1, 2, 4, 4, 5], 5));
// console.log(isSorted([1, 2, 5, 4, 5], 5));
// console.log(isSorted([4, 9, 10, 5], 5));



function binSearch(arr: number[], tar: number, start: number, end: number) {


    if (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == tar) return mid
        
        else if (arr[mid] < tar) {
            return binSearch(arr, tar, mid + 1, end)
        } else {
            return binSearch(arr, tar, start, mid - 1)
        }
    }

    return -1
}

function search(arr: number[], tar: number): number {
    let start = 0;
    let end = arr.length - 1

    return binSearch(arr, tar, start, end)
}

let arr1: number[] = [1, 2, 3, 4, 5, 6]
console.log(search(arr1, 9));

