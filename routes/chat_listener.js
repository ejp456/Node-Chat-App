var socketio = require('socket.io');

var listener = function(socket, io) {
	socket.on('chat message', function(msg){
		console.log(io);
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
};

var userConnected = function(socket) {
	console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
};

exports.socketServer = function (app, server) {
	var io = socketio.listen(server);
	io.on('connection', function(socket){
		console.log("listening on socket.io");
		console.log(io);
		userConnected(socket);
		listener(socket, io);
	});
};