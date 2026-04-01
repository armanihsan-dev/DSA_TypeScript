class Dog {
    constructor(name) {
        this.name = name
    }
    bark() { }
}

// a class is just a function (which is an object)
console.log(typeof Dog)         // "function"

// it has properties like any object
console.log(Dog.name)           // "Dog"
console.log(Dog.prototype)      // { bark: f, constructor: f }

// you can even add properties to it like any object
Dog.species = "Canis lupus"
console.log(Dog.species)        // "Canis lupus"
