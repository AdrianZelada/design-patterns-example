class Car{

    constructor(des){
        this.description = des;
    }

    getDescription(){
        return this.description;
    }

    cost(){};
}

class CarOptions extends Car{
    constructor(car) {
        super();
        this.decoratedCar = car;
    }

    getDescription(){};
}

// ------------------------------ Cars ------------------------------
class ModelS extends Car{
    constructor(){
        super("Model S");
    }
    cost(){
        return 73000;
    }
}

class ModelX extends Car {
    constructor(){
        super("Model X");
    }

    cost(){
        return 77000
    }
}

// ------------------------------ Options ------------------------------
class EnhancedAutoPilot extends CarOptions {
    constructor(beverage) {
        super(beverage);
        // this.decoratedCar = beverage;
    }

    getDescription() {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    }

    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}

class SmartAirSuspension extends CarOptions {
    constructor(beverage) {
        super(beverage);
        // this.decoratedCar = beverage;
    }

    getDescription() {
        return this.decoratedCar.getDescription() + ', Smart Air Suspension';
    }

    cost() {
        return this.decoratedCar.cost() + 2500;
    }
}

class RearFacingSeats extends CarOptions {
    constructor(beverage) {
        super(beverage);
        // this.decoratedCar = beverage;
    }

    getDescription() {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats';
    }

    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}

// ------------------------------ Configure our Tesla! ------------------------------
let myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
