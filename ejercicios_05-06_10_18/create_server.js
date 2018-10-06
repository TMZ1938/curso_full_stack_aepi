var http = require("http");
http.createServer(function (request,response){
	// Envía cabezado HTTO
	// HTTP Estado : 200: OK
	// Tipo de contexto: text/plain
	response.writeHead(200, {'Content-Type':'text/plain'});

	// Enviar respuesta como "Hello World"
	response.end('Hello World\n');
}).listen(8081);

// La consola imprimirá el mensaje
console.log('Server running at http://127.0.0.1:8081'); 