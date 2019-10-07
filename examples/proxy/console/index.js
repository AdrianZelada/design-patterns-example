const factoryChannels = require('./factory-emit')();
const socket = require('./socket')(9999);
factoryChannels.addChamnel(socket);
require("./console")(
    {
        emitChannels:factoryChannels.emitChannels
    });

// require("./example");