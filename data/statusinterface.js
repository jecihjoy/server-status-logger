const rp = require('request-promise');

function getServerStatus() {
    var options = {
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: 'eldoret',
            APPID: '5e10f5ba642bc4e43318bec00b34c420'
        },

        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
    });
}

var getServerStatus = {
    getServerStatus: getServerStatus,
}

module.exports.getServerStatus = getServerStatus;