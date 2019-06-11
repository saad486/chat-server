var net = require('net');

var server = net.createServer((socket)=>{
		console.log("Connection happened");
		//socket.write('Echo server\r\n');
		socket.setEncoding('utf8');
        
		socket.on('data',(chunk)=>{
				
				chunk = chunk.slice(0, chunk.length - 1)
		  		console.log('Received: ',chunk);
			
		});

		console.log('Enter: ')
		process.stdin.pipe(socket);
});

server.on('error',(err)=>{

	throw err;
});



server.listen(9999,'127.0.0.1', function(){

});


console.log("Server started");