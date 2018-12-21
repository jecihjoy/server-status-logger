const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

var customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};

const logger = createLogger({
  format: combine(
    label({ label: 'http://api.openweathermap.org/data/2.5/weather' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: __dirname + '/serverlogs.log' }),
    new transports.File({ filename: __dirname + '/error.log', level:'error' })
  ],
  exceptionHandlers: [
    new (transports.Console)({}),
    new transports.File({ filename: __dirname + '/exceptions.log' })
  ],
  /*colors: [
    info = 'green',
    warn = 'cyan',
    error = 'red',
    verbose = 'blue',
    debug = 'gray'
  ],*/
  exitOnError: false
})


module.exports = logger;
