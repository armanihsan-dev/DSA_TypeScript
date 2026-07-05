

function removeOcc(s: string, part: string): string {
    while (s.includes(part)) {
        const index = s.indexOf(part)
        s = s.slice(0, index) + s.slice(index + part.length)
    }
    return s;
}

console.log(removeOcc('daabcbaabcbc', 'abc'));

const animals = ['Ant', 'Bison', 'Camel', 'Duck', 'Elephant'];

// 1. Extract from index 2 to the end
console.log(animals.slice(2));

console.log('daabcbaabcbc'.slice(0, 2));


