//Check Null Before Access
let current: { value: number } | null = null;
if (current !== null) {
  // @ts-ignore
  current.value = 10;
}

// Wrap Primitives Immediately
let counterWrap = { value: 10 };
// ❌ When you try to share primitive
let counter = 0; // Can't share across functions

// shallow and deep copy re-practice
interface Person {
  name: string;
  age: number;
  address: {
    country: string;
    state: string;
  };
}

let person: Person = {
  name: 'Foo',
  age: 20,
  address: {
    country: 'India',
    state: 'WB',
  },
};
type multiArray = [number,number,{name:string}]
let personArray:multiArray = [1,3,{name:'arman'}];
let copiedPersonArray:multiArray = [...personArray];
copiedPersonArray[0] = 132;
copiedPersonArray[2].name = 'munnu';
// console.log(personArray);
// console.log(copiedPersonArray);

// for Objects
let copiedPersonObject: Person = Object.assign(person);
copiedPersonObject.address.country = 'Pakistan';
// console.log(copiedPersonObject);
// console.log(person);

let deepPeronObjectCopy: Person = JSON.parse(JSON.stringify(person));
deepPeronObjectCopy.address.country = 'afghanistan';
// console.log(deepPeronObjectCopy);
// console.log(person);

