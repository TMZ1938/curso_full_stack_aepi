var fs = require('fs');
//Stream de lectura de datos
var readStream = fs.createReadStream('./html/ejemplo_archivo.html');
//Cuando se abra el archivo, mostrar por consola un mensaje
readStream.on('open', function () {
	console.log('El fichero se ha abierto');
});