var test = require('tape');
var server = require('../api/server.js');


test('request contains note from form', function(t) {
  var teststring='qwertyuiop';
  server.inject({method:'GET', url:'/note?content='+teststring}, function(response) {
    //console.log(response);
    t.equal(containsNote(response.raw.req.url, teststring), true);
    t.end(); 
  });
});

test('If note == emptystring will be redirect [statusCode 302]', function(t) {
  var emptystring='';
  server.inject({method:'GET', url:'/note?content='+emptystring}, function(response) {
    t.equal(response.statusCode, 302);
    t.end(); 
  });
});


function containsNote (x, y) {
  return x.indexOf(y) !== -1;
}