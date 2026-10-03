

// basic stack DS using Arrays
class NumbersStack {
    Numbers: Array<number> = []


    push(num: number): void {
        this.Numbers.push(num)
    }

    pop(): void {
        this.Numbers.pop()
    }

    top(): number {
        return this.Numbers[this.Numbers.length - 1]
    }

    empty(): boolean {
        return this.Numbers.length == 0 ? true : false
    }

    StackData(): void {
        while (this.Numbers.length !== 0) {
            console.log(this.Numbers[this.Numbers.length - 1])
            this.Numbers.pop()
        }
    }

}

let stack1 = new NumbersStack()
stack1.push(30)
stack1.push(50)
stack1.push(70)
console.log(stack1.StackData());