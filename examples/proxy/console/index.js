const factoryChannels = require('./factory-emit')();
const socket1 = require('./socket')(1);
const socket2 = require('./socket')(2);
factoryChannels.addChamnel(socket1);
factoryChannels.addChamnel(socket2);

require("./console")(
    {
        emitChannels:factoryChannels.emitChannels
    });

require("./example");