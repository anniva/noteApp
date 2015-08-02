var hanlder = require('./handlers/handler.js');

var routes = [

  {
    method: 'GET',
    path: '/',
  	handler: hanlder
  }

];

module.exports = routes;