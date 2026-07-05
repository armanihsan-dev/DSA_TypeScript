interface shape {
  name: string;
  age: number;
}
let x: shape = {
  name: 'Foo',
  age: 25,
};
let y: shape = x;
y.age = 45;
y.name = 'kamran';
//console.log(x)
let z = y;
z.name = 'zz';
z.age = 12;
// console.log(x)

// Behavior 2: Modifying Primitives (Numbers, Strings, Booleans)

// let num: number = 10;
// function increment(val:number){
//     val++ //  // Only changes COPY
//     console.log(val)
// }
// increment(num)
//console.log(num) // num is STILL 10 ❌
// because JavaScript (and TypeScript) always passes primitives(string, numbers, boolean, undefined, null) by value, but passes non-premitives(object,arrays,function)  by reference.

//solution in ts: wrap in an object
interface myNumShape {
  value: number;
}
let myNum: myNumShape = { value: 10 };
function increment(obj: myNumShape) {
  obj.value++;
  console.log(obj.value);
}
// increment(myNum);
// console.log(myNum);

// Behavior 3: Null/No Object (The "Null Pointer")

let nullObj: { value: number } | null = null;
function handleNullPointer(obj: { value: number } | null) {
  if (obj == null) {
    console.log('Null pointer detected! Cannot access properties of null.');
  }
}
handleNullPointer(nullObj);
