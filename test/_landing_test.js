var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');


test('/landing route  should return landing page as expected ', function(t) {
  server.inject({method:'GET', url:'/landing'}, function(response, reply) {
    t.equal(isInBody(response.result, '<h1>Simple Notes</h1>'), true);
    t.end();
  }); 
});

test('/landing route  renders the testmessage on page', function(t) {
  server.inject({method:'GET', url:'/landing'}, function(response, reply) {
    t.equal(isInBody(response.result, 'qwertyuiop'), true);
    //t.equal(isInBody(response.result, 'Cheer Up Claire!'), true);
    
    t.end();
  }); 
});


function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
