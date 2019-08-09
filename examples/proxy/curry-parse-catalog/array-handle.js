const matcherCatalog = require('./match-catalog');
function proxyCatalogs(list, catalogs) {
    const preMatch = matcherCatalog(catalogs);
    return new Proxy(list, {
        get: function(target, property) {
            // console.log('getting ' + property + ' for ' + target);
            // property is index in this case
            if( typeof property === 'symbol') {
                // console.log(property);

                return target;
            }
            const nPro = parseInt(property);

            if (Number.isInteger(nPro)) {
                console.log(property);
                const pair = preMatch(target[property])
                const result = {};
                Object.keys(target[property]).forEach((key) => {
                    // pair[key] = target[property][key];
                    console.log(key)
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
    })
}

module.exports = proxyCatalogs;