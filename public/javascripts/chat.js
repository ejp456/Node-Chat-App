var socket = io();
$(document).ready(function(){

	$('.sendButton').click(function(){
		console.log("chat stuff");
	  socket.emit('chat message', $('#m').val());
	  $('#m').val('');
	  return false;
	});

	socket.on('chat message', function(msg){
    $('#messages').append($('<h5>').text('User'));
    $('#messages').append($('<p>').text(msg));
  });
});
