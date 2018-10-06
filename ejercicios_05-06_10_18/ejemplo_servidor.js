// usar módulo HTTP
var http = require('http');
var url = require('url');
const utf8 = require('utf8');

http.createServer(function (req, res) {
	url_consulta = req.url;	
	console.log('url_consulta'+url_consulta);
	/*The query property returns an object with all the querystring 
	parameters as properties:*/
	parametros = url.parse(url_consulta,true).query;
	if (parametros != null)
	{	
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('MI primer servidor en Node. url_consulta: '+utf8.encode(url_consulta)+
			", parametro1:"+parametros.param1+
			", parametro2:"+parametros.param2+
			", parametro3:"+parametros.param3);
		//res.end('Hola Mundo '+parametros.param3);
	}else
	{
		console.log("url.parse("+url_consulta+").query vale null");
	}
}).listen(8080);
	console.log('Servidor escuchando en el puerto 8080')