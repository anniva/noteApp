var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');


test('/landing route  should return landing page as expected ', function(t) {
  server.inject({method:'GET', url:'/landing'}, function(response, reply) {
   var page = fs.readFileSync(__dirname + '/../views/landing.html', 'utf-8');
    t.equal(isInBody(response.result, page), true);
    t.equal(response.result, page);
    t.end();
  }); 
});

function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
