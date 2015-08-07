var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/notes';
var mongo = require('../api/handlers/mongo_handlers');



test('/landing route  should return landing page as expected ', function(t) {
  server.inject({method:'GET', url:'/landing'}, function(response, reply) {
    t.equal(isInBody(response.result, '<h1>Simple Notes</h1>'), true);
    t.end();
  }); 
});



test('mongo createnote function works', function(t) {
  var id = Date.now();
  var message= 'qwertyuiop';
  mongo.createNote(id, message, function (err, result) {
    t.deepEqual(result.ops, [{_id: id, note:message}]);
    t.end();
  });
});

test('/landing route  renders the testmessage on page', function(t) {
  server.inject({method:'GET', url:'/landing'}, function(response, reply) {
    t.equal(isInBody(response.result, 'qwertyuiop'), true);
    t.end();
  }); 
});


function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
