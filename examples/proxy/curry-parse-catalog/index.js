const catalogs = require('./catalogs');
const proxyCatalogs = require('./array-handle');
let pairs = [
    { human: 0, pet :0, id: 111},
    { human: 1, pet :1},
    { human: 0, pet :2},
    { human: 2, pet :3},
    { human: 1, pet :4},
];

pairs = proxyCatalogs(pairs, catalogs);
const l = pairs.length;
console.log(l);

for (let i =0 ; i< l ; i++) {
    console.log(pairs[i]);
}

console.log(pairs);