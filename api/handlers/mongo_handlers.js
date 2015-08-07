
var url = 'mongodb://localhost:27017/notes',
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

module.exports = {
 createNote:createNote,
 getNotes:getNotes,
 deleteNotes:deleteNotes,
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

function getNotes (collection, query, url, callback) {
  MongoClient.connect(url, function (err, db){
    db.collection(collection).find(query).toArray(function(err, result){
      db.close();
      /* istanbul ignore if */    
      if (err) { callback(err); } 
      else { callback(null, result); }    
    });
  });
}


function deleteNotes (collection, query, url, callback) {
  MongoClient.connect(url, function (err, db){
    db.collection(collection).remove(query,function(err, result){
      db.close();
      /* istanbul ignore if */    
      if (err) { callback(err); } 
      else { callback(null, result); }    
    });
  });
}
