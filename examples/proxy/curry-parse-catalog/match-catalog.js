function matcherCatalog(catags) {
    const catalogs = catags;

    return (item) => {
        return new Proxy(item, {
            get: (target, prop) => {
                if(prop in catalogs) {
                    let result = {};
                    catalogs[prop].forEach((obj) => {
                        if ( obj.value === target[prop]) {
                            result = obj;
                        }
                    });
                    return result;
                } else {
                    return target[prop]
                }
            }
        })
    }
}

module.exports = matcherCatalog;