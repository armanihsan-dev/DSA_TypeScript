


function printNum(n: number) {
    if (n == 1) {
        console.log(n);
        return
    }
    console.log(n);

    printNum(n - 1)
    console.log("Hii");

}

// printNum(6)



function fact(n: number): number {

    if (n <= 1) {
        return n
    }

    return n * fact(n - 1)
}

// console.log(fact(5));


function pow(base: number, expo: number): number {
    if (expo == 1) return base
    return base * pow(base, expo - 1)
}

//console.log(pow(3, 3));



function sumOfNum(n: number): number {

    if (n == 1) {
        return 1
    }
    return n + sumOfNum(n - 1)
}

console.log(sumOfNum(10));
console.log(sumOfNum(4));


function DigitCount(n: number): number { // 12
    if (n < 10) return 1
    return 1 + DigitCount(Math.floor(n / 10))
}
console.log(DigitCount(9876543));