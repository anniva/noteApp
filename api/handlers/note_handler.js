var mongo = require('./mongo_handlers.js');

function note_handler (request, reply){
  var id = Date.now();
  var note = request.url.query.content;
    mongo.createNote(id, note, function(err, result) {
      //console.log(result);
      reply.redirect('/landing');
    });
}


module.exports = note_handler;

