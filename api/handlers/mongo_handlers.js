
var url = 'mongodb://localhost:27017/notes',
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

module.exports = {
 createNote:createNote,
 getNotes:getNotes,
};


function createNote (id, msg, callback) {
  MongoClient.connect(url, function (err, db){
    var notes = db.collection('notes');
    notes.insert({_id: id, note:msg},
      function (err, result) {
        db.close();
        /* istanbul ignore if */    
        if (err) { callback(err); } 
        else { callback(null, result); }
      });
  });
}


function getNotes (id, callback) {
  MongoClient.connect(url, function (err, db){
    var notes = db.collection('notes');
    notes.find({_id: id},
      function (err, result) {
        db.close();
        /* istanbul ignore if */    
        if (err) { callback(err); } 
        else { callback(null, result); }
      });
  });
}



/*
function getNotes (input, callback) {
  MongoClient.connect(url, function (err, db){
    var notes = db.collection('notes');
    notes.find(input,
      function (err, result) {
        db.close();
        console.log(result);
        if (err) { callback(err); } 
        else { callback(null, result); }
        console.log(result);
      });
  });
}

/*
function getNotes (input, callback) {
  MongoClient.connect(url, function (err, db){
    var notes = db.collection('notes');
    notes.find(input,
      function (err, result) {
        db.close();
        console.log(result);
        if (err) { callback(err); } 
        else { callback(null, result); }
      });
  });
}
function getNotes (input, callback) {
  MongoClient.connect(url, function (err, db){
      db.getCollection(input, function(err, result) {
      db.close();
      if (err) { callback(err); } 
      else { callback(null, result); }
    });
  });
}

*/

        /* istanbul ignore if */    
