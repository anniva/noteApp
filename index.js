var server = require('./api/server.js');

server.start(function() {
	console.log('Server running :', server.info.uri);
});

module.exports = server;

