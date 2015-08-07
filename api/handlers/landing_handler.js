var mongo = require('./mongo_handlers.js');
var url = 'mongodb://localhost:27017/notes';

function landing_handler (request, reply){
  mongo.getNotes('notes', {}, url, function(err, notes) {
    var content = [];
    for(var i = 0; i<notes.length; i++){
      content.push(notes[i].note);
    }
    console.log(notes.length);

    return reply.view('landing',{
      notes:content[0]
    });
  });
}

module.exports = landing_handler;
