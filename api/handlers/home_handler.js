function home_handler (request, reply){
  return reply.view('index', null, {layout:'index'});
}

module.exports = home_handler;


