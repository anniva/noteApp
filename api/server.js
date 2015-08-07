var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./routes.js');	

server.connection({
  host: 'localhost',
  port: 8000
});

server.views({
  engines: {
        html: require('handlebars')
    },
    path: __dirname + '/../views',
    helpersPath: __dirname + '/../views/helpers'
});


server.route(routes);

module.exports = server;