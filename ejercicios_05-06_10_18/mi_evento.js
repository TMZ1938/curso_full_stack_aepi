// Módulo para manejar eventos
var events = require('events');
// Objeto emisor de eventos
var eventEmitter = new events.EventEmitter();
// Función manejadora del evento creado
var alarma_horno = function () {
	console.log('Pizza lista para comer');
}
//Asignar mi manejador de eventos
eventEmitter.on('pizza_lista', alarma_horno);
//Fire the 'scream' event:
eventEmitter.emit('pizza_lista');