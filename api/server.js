var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./routes.js');	

server.connection({
  host: 'localhost',
  port: 8000
});




server.route(routes);

module.exports = server;