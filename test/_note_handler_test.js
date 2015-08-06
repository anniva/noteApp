var test = require('tape');
var server = require('../api/server.js');


test('request contains note from form', function(t) {
  var test='qwertyuiop';
  server.inject({method:'GET', url:'/note?content='+test}, function(response) {
    //console.log(response);
    t.equal(containsNote(response.raw.req.url, test), true);
    t.end(); 
  });
});



function containsNote (x, y) {
  return x.indexOf(y) !== -1;
}