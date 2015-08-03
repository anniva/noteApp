function landing_handler (request, reply){
  return reply.view('landing', null, {layout:'landing'});
}

module.exports = landing_handler;