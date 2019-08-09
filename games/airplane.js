class FighterPlane{

    constructor ( name , damage, shield) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    rollback() {
        return this;
    }

    attack(){
        return this.damage;
    }
}

class Power{
    constructor(fighterPlane, power) {
        this.fighterPlane = fighterPlane;
        this.damage = power;
    }

    rollback() {
        return this.fighterPlane;
    }

    attack() {
        return this.fighterPlane.attack() + this.damage;
    }
}

class Player{
    constructor(fighterPlane) {
        this.fighterPlane = fighterPlane;
    }

    addPower(power) {
        this.fighterPlane = new Power(this.fighterPlane, power);
    }

    minusPower() {
        this.fighterPlane = this.fighterPlane.rollback();
    }

    attack(){
        console.log(this.fighterPlane.attack());
        return this.fighterPlane.attack();
    }
}
//
// let plane = new FighterPlane('Drian',10);
// console.log("-------1");
// console.log(plane.attack());
// plane = new Power(plane, 5);R
// console.log("-------2");
// console.log(plane.attack());
// plane = new Power(plane, 10);
// console.log("-------3");
// console.log(plane.attack());
//
//
//
// console.log("-------back");
// plane = plane.rollback();
// console.log(plane.attack());
// console.log("-------back");
// plane = plane.rollback();
// console.log(plane.attack());
// console.log("-------back");
// plane = plane.rollback();
// console.log(plane.attack());
//
let plane = new FighterPlane('Adrian',10, 2);
const player = new Player(plane);
player.attack();
player.addPower(10);
player.attack();

player.addPower(4);
player.attack();

player.addPower(6);
player.attack();

player.minusPower();
player.attack();
