
var url = 'mongodb://localhost:27017/notes',
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

module.exports = {
 createNote:createNote,
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


