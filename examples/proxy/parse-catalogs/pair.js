const catalogs = require('./catalogs');

class Pair{

    constructor(human, pet) {
        this.human = human;
        this.pet = pet;

        return new Proxy(this,  {
            get: (target, prop) => {
                // console.log(prop);
                let result = {};
                if (prop in target) {
                    // console.log(prop);
                    result = target[prop];
                    if( prop === 'human') {
                        catalogs.humans.forEach((obj) => {
                            if ( obj.value === target[prop]) {
                                result = obj;
                            }
                        });
                    }

                    if( prop === 'pet') {
                        catalogs.pets.forEach((obj) => {
                            if ( obj.value === target[prop]) {
                                result = obj;
                            }
                        });
                    }


                } else {
                    const combiProp = prop.split('_');
                    if (combiProp.length > 1) {
                        const newPair = new Pair();
                        combiProp.forEach((p) => {
                            if (p in target) {
                                newPair[p] = target[p];
                                result[p] = newPair[p];
                            }
                        });
                    } else {
                        return target[prop];
                    }
                }
                return result;
            }
        })
    }
}

module.exports = Pair;