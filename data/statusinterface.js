const rp = require('request-promise');
const config = require('../config/servers.json')

function getServerStatus() {
    console.log('called', config.servers[1].baseurl);
    var options = {
        url: config.servers[1].baseurl,
        json: true
    };
    return new Promise(function (resolve, reject) {
        rp(options)
            .then(function (data) {
                console.log(data);
                resolve(data);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
    });
}



module.exports.getServerStatus = getServerStatus;