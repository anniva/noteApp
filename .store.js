/*






module.exports= { 
createNote:createNote
};

function createNote (id, msg, callback) {
  MongoClient.connect(url, function (err, db){
    var notes = db.collection('notes');
    notes.insert({_id: id, note:msg},
      function (err, result) {
        db.close();
        if (err) { callback(err); }
        else { callback(null, result); }
      });
  });
}




/*
var MongoClient = require('mongodb').MongoClient,
   Server = require('mongodb').Server;

var mongoClient = new MongoClient(new Server('localhost', 27017));
  mongoClient.open(function(err, mongoClient) {
  var db1 = mongoClient.db("mydb");

  mongoClient.close();
});

module.exports = {

};

function createNote (id, callback){
  MongoClient.connect(url, function(err, db) {
    if(err){return err;}
    else{
      return console.log('connection successful');
    }
    db.close();
  });
}


var MongoClient = require('mongodb').MongoClient;
require('dotenv').load();
var url = process.env.MONGOLAB_URI;

module.exports = {
  findContent: findContent,
};


function findContent (step, callback) {
  MongoClient.connect(url, function (err, db) {
    var content = db.collection('content');
    content.findOne({step: step}, function (err, result) {
      db.close();
     
      if (err) { callback(err); }
      else { callback(null, result); }
    });
  });
}


*/