//var MongoClient = require('mongodb').MongoClient;
//require('dotenv').load();
var url = process.env.MONGOLAB_URI;




var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var mongoClient = new MongoClient(url);
  mongoClient.open(function(err, mongoClient) {
  var db1 = mongoClient.db("mydb");

  mongoClient.close();
});


