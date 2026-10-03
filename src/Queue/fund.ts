

class Queue<T> {
    private items: T[] = []

    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }

    front(): T | undefined {
        return this.items[0]
    }

    back(): T | undefined {
        return this.items[this.items.length - 1]
    }

    isEmpty(): boolean {
        return this.items.length == 0
    }

    size(): number {
        return this.items.length
    }
}

let numberQueue = new Queue<number>()

numberQueue.enqueue(10)
numberQueue.enqueue(20)
numberQueue.enqueue(30)
numberQueue.enqueue(40)

console.log({ front: numberQueue.front(), back: numberQueue.back() });