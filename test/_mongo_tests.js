var MongoClient = require('mongodb').MongoClient;
var test = require('tape');
var server = require('../api/server.js');
var url = 'mongodb://localhost:27017/notes';
var mongo = require('../api/handlers/mongo_handlers');


test('mongo createnote function works', function(t) {
  var id = Date.now();
  var message= 'test message';
  mongo.createNote(id, message, function (err, result) {
    console.log(result.ops);
    t.deepEqual(result.ops, [{_id: id, note:message}]);
    t.end();
  });
});

