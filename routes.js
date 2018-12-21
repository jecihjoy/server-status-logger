const serverStatus  = require('./data/statusinterface');

module.exports = function () {
    var routes = [
        {
            method: "GET",
            path: '/hello',
            config: {
                handler: function (request, h) {
                    return serverStatus.getServerStatus().then((res) => {
                        return res;
                    }).catch((err) => {
                        return 'failed';
                    })

                }
            }
        },
        {
            method: "GET",
            path: '/test',
            config: {
                handler: function (request, h) {
                    return "server running";

                }
            }
        },
    ];
    return routes;
}();