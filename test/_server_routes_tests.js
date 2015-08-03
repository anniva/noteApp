var test = require('tape');
var server = require('../api/server.js');

test('/ route  should return StatusCode 200 ', function(t) {
	server.inject({method:'GET', url:'/'}, function(response, reply) {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

