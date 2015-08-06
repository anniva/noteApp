var home_handler = require('./handlers/home_handler.js');
var landing_handler = require('./handlers/landing_handler.js');
var note_handler = require('./handlers/note_handler.js');


var routes = [

	{
	method: 'GET',
	path: '/public/{param*}',
		config: {
			handler: {
				directory: {
				path: 'public'
				}
			}
		}
	},

  {
    method: 'GET',
    path: '/',
  	handler: home_handler
  },

  {
    method: ['GET'],
    path: '/landing',
    handler: landing_handler
  },

  {
    method: ['GET', 'POST'],
    path: '/note/{content?}',
    handler: note_handler
  },

];

module.exports = routes;
