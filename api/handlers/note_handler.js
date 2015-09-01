var mongo = require('./mongo_handlers.js');

function note_handler (request, reply){
  var id = Date.now();
  var note = request.url.query.content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if(note.length>0){
    mongo.createNote(id, note, function(err, result) { 
      reply.redirect('/landing');
    });
  }else{
    reply.redirect('/landing');
  }
}


module.exports = note_handler;

