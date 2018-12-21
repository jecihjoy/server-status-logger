const serverStatus = require('./data/statusService')
const config = require('./config/config')
const logger = require('./logger/logger');
const routes = require('./routes');

const Hapi = require('hapi');

const server = Hapi.server({
    port: config.server.port,
    host: config.server.host
});

const init = async () => {
    for (var route in routes) {
        server.route(routes[route]);
    }

    await server.start();
    console.log('server running');
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();