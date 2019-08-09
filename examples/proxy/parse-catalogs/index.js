const Pair = require("./pair");

let firstPair = new Pair(0,1);

console.log(firstPair.human);
console.log(firstPair.pet);

firstPair.human = 2;

console.log(firstPair.human);


console.log(firstPair.pet_human);