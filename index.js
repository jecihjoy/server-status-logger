const serverStatus = require('./data/statusService')
const config = require('./config/config')
const logger = require('./logger/logger');

const Hapi = require('hapi');

const server = Hapi.server({
    port: config.server.port,
    host: config.server.host
});

const init = async () => {

    await server.start();
    serverStatus.getResponseCode.getResponseCode();
    setInterval(() => {
        serverStatus.getResponseCode.getResponseCode();
    }, 20000)
    logger.info(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();