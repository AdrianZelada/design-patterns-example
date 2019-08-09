
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

var AddCommand = function (value) {
    return new Command(add, sub, value);
};

var SubCommand = function (value) {
    return new Command(sub, add, value);
};

var MulCommand = function (value) {
    return new Command(mul, div, value);
};

var DivCommand = function (value) {
    return new Command(div, mul, value);
};

var Calculator = function () {
    var current = 0;
    var commands = [];

    function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            console.log(current)
            commands.push(command);
            log.add(action(command) + ": " + command.value);
        },

        undo: function () {
            var command = commands.pop();
            current = command.undo(current, command.value);
            console.log(current)
            log.add("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: function () {
            return current;
        }
    }
};

class Calc {

    get current(){
        return this._current;
    }
    set current(data) {
        this.cb(data);
        this._current = data;
    }
    constructor(cb){
        this.cb = cb;
        this._current = 0;
        this.commands = [];
    }
    execute (command) {
        this.current = command.execute(this.current, command.value);
        // console.log(this.current)
        this.commands.push(command);
        // log.add(action(command) + ": " + command.value);
    }

    undo () {
        var command = this.commands.pop();
        this.current = command.undo(this.current, command.value);
        // console.log(this.current)
        // log.add("Undo " + action(command) + ": " + command.value);
    }

    getCurrentValue () {
        return this.current;
    }
}

// log helper

// var log = (function () {
//     var log = "";
//
//     return {
//         add: function (msg) { log += msg + "\n"; },
//         show: function () { console.log(log); log = ""; }
//     }
// })();

function run() {
    var calculator = new Calc((data) => {
        console.log("data", data);
    });

    // issue commands

    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));

    // reverse last two commands

    calculator.undo();
    calculator.undo();

    // log.add("\nValue: " + calculator.getCurrentValue());
    // log.show();
}


run();