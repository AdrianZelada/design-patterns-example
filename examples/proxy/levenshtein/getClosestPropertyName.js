
const levenshtein = require("./levenshtein");
function getClosestPropertyName(names, name) {
    let lowest = Infinity;

    return names.reduce(function(previous, current) {
        let distance = levenshtein(current, name);
        if (distance < lowest) {
            lowest = distance;
            return current;
        }

        return previous;
    }, '');
}

module.exports = getClosestPropertyName;