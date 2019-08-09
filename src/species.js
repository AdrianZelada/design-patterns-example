class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() {
        console.log(Symbol.species)
        console.log([Symbol.species])
        console.log([Symbol.species])
        return Array;
    }
}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x * x);
console.log(a.length);
console.log(MyArray); // false
console.log(mapped instanceof MyArray); // falseR
console.log(mapped instanceof Array);   // true