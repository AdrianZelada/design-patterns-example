class IterableArguments {
    constructor(...args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        console.log('iterador');
        for (let arg of this.args) {
            console.log(arg);
            yield arg;
            // return arg
        }
    }
}

const iterador = new IterableArguments('hello', 'world', 'asd');
for (let x of iterador) {
    console.log(x);
}

// const ite =new IterableArguments('hello', 'world');
// console.log(ite)
//
