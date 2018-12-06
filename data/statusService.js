const data = require('./statusinterface')
const nodemailer = require('nodemailer');
const logger = require('../logger/logger');



function getResponseCode() {
    data.getServerStatus.getServerStatus()
        .then((res) => {
            let code = 305; 
            // let code = res.cod;
            if (code >= 200 && code <= 300) {
                logger.info('SUCCESS: Server responding well to requests')
            } else if (code > 300) {
                sendMail(code);
                logger.error('ERROR: Server encountered an error while processing requests. Server status code', code)
            } else {
                logger.warn('status code ' + code + 'less than 200');
            }
        })
}

function sendMail(code) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jecihjoy23@gmail.com',
            pass: 'joy12345'
        }
    });

    var mailOptions = {
        from: 'jecihjoy23@gmail.com',
        to: 'jecihjoy@gmail.com',
        subject: 'Lab server status',
        text: 'Server encountered an error while processing request. Server status code ' + code
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            logger.info(error);
        } else {
            logger.info('Email sent: ' + info.response);
        }
    });
}

var getResponseCode = {
    getResponseCode: getResponseCode,
}

module.exports.getResponseCode = getResponseCode;
