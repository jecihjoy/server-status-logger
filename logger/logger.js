const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  format: combine(
    label({ label: 'http://api.openweathermap.org/data/2.5/weather' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: __dirname + '/serverlogs.log' }),
    new transports.File({ filename: __dirname + '/error.log' })],
  exceptionHandlers: [
    new (transports.Console)({}),
    new transports.File({ filename: __dirname + '/exceptions.log' })
  ],
  exitOnError: false
})

module.exports = logger;
