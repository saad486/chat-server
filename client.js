var net = require('net');

var client = new net.Socket();

client.connect(9999,'127.0.0.1');

client.on('data', function(data) {
	data = data.slice(0, data.length - 1)
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('connect',()=>{
	console.log('connected');
	
});  

client.on('close', function() {
console.log('Connection closed');})

process.stdin.on('readable',()=> {
	const chunk = process.stdin.read();
		
		client.write(chunk);
		process.stdin.resume();
	
});
//process.stdin.pipe(client);