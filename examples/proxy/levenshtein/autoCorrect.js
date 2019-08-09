// import {getClosestPropertyName} from "./getClosestPropertyName";
const getClosestPropertyName = require("./getClosestPropertyName");
function autoCorrect(target, recursive) {
    return new Proxy(target, {
        get: function(target, name) {
            if (!(name in target)) {
                name = getClosestPropertyName(Object.getOwnPropertyNames(target), name);
            }

            return target[name];
        },
    });
}

module.exports = autoCorrect;