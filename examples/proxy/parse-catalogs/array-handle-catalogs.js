const Pair = require("./pair");

const arrayHandleCatalogs = {
    get: function(target, property) {
        // console.log('getting ' + property + ' for ' + target);
        // property is index in this case
        if( typeof property === 'symbol') {
            // console.log(property);

            return target;
        }
        const nPro = parseInt(property);
        if (Number.isInteger(nPro)) {
            // console.log(property);
            const pair = new Pair();
            const result = {};
            Object.keys(target[property]).forEach((key) => {
                pair[key] = target[property][key];
                result[key] = pair[key]
            });

            return result;
        } else {
            return target[property];
        }
        // return target[property];
    },
    set: function(target, property, value, receiver) {
        // console.log('setting ' + property + ' for ' + target + ' with value ' + value);
        target[property] = value;
        // you have to return true to accept the changes
        return true;
    }
};

let pairs = [
    { human: 0, pet :0, id: 111},
    { human: 1, pet :1},
    { human: 0, pet :2},
    { human: 2, pet :3},
    { human: 1, pet :4},
];

pairs = new Proxy(pairs, arrayHandleCatalogs);
const l = pairs.length;
console.log(l);

for (let i =0 ; i< l ; i++) {
    console.log(pairs[i]);
}

console.log(pairs);