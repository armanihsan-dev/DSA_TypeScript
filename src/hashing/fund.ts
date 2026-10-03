

// manual

let table = new Array(10)


function hash(key: number): number {
    return key % 10
}

table[hash(123)] = "Arman"

//console.log(table[hash(123)]);



const map = new Map<number, string>()
map.set(101, "Arman");
map.set(102, "Khalfan");
map.set(103, "Alyan");

console.log(map.get(101));
console.log(map.get(103));

const scores = new Map<string, number>()
scores.set("Yaman", 53)
scores.set("Irfan", 82)
scores.set("Burhan", 89)
console.log(scores.get("Burhan"));

class HashMap {
    private buckets: [number, string][][]
    constructor(size: number = 10) {
        this.buckets = Array.from({ length: size }, () => [])
    }

    private hash(key: number): number {
        return key % this.buckets.length
    }

    printBuckets(): void {
        console.log(this.buckets);
    }


    set(key: number, value: string): void {
        const index = this.hash(key)
        const bucket = this.buckets[index]

        for (const pair of bucket) {
            if (pair[0] == key) {
                pair[1] = value
                return
            }
        }
        bucket.push([key, value])
    }


    get(key: number): string | undefined {
        const index = hash(key)
        const bucket = this.buckets[index]

        for (const [storedKey, value] of bucket) {
            if (storedKey == key) {
                return value
            }
        }
        return undefined
    }
}


const studentsMap = new HashMap(5)
studentsMap.set(101, "Arman")
studentsMap.set(102, "Khalfan & Sabaoon")
console.log(studentsMap.get(102));
studentsMap.printBuckets()