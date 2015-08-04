var MongoClient = require('mongodb').MongoClient;
var test = require('tape');
var server = require('../api/server.js');

var url = 'mongodb://localhost:27017/notes';


test('mongo database connection working', function(t) {
  console.log(url);
  MongoClient.connect(url, function(err, db){
    t.equal(null, err);
    db.close();
    t.end();
  });
});

