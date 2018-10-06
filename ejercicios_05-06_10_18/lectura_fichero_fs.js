var http = require('http');
// Modulo file sistem
var file = require('fs');
http.createServer(function (req, res) {
	file.readFile('html/ejemplo_archivo.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);