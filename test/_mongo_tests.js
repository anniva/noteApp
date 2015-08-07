var MongoClient = require('mongodb').MongoClient;
var test = require('tape');
var server = require('../api/server.js');
var url = 'mongodb://localhost:27017/notes';
var mongo = require('../api/handlers/mongo_handlers');


test('mongo createnote function works', function(t) {
  var id = Date.now();
  var message= 'testi viesti';
  mongo.createNote(id, message, function (err, result) {
    t.deepEqual(result.ops, [{_id: id, note:message}]);
    t.end();
  });
});


test('mongo getNotes function works', function(t) {
  mongo.getNotes('notes',{},url,function (err, result) {
  var testObject =  { _id: 1438952729880, note: 'testi viesti' } ;
    t.equal(containsTestObject(result.toString(), testObject), true);
    t.end();
  });
});



function containsTestObject (x, y) {
  return x.indexOf(y) !== -1;
}