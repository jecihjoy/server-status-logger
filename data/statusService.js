const data = require('./statusinterface')
const nodemailer = require('nodemailer');



function getResponseCode() {
    data.getServerStatus.getServerStatus()
        .then((res) => {
            let code = 305;
            if (code >= 200 && code <= 300) {
                console.log('SUCCESS')
            } else {
                sendMail(code);
                console.log('ERROR: Server encountered an error while processing request. Server status code', code)
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
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

var getResponseCode = {
    getResponseCode: getResponseCode,
}

module.exports.getResponseCode = getResponseCode;
