var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');

test('/ route  should return index.html page as expected ', function(t) {
  server.inject({method:'GET', url:'/'}, function(response, reply) {
   var page = fs.readFileSync(__dirname + '/../views/index.html', 'utf-8');
    t.equal(isInBody(response.result, page), true);
    t.equal(response.result, page);
    t.end();
  }); 
});



function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
