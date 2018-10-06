var buffer1 = new Buffer('Tutorial ');
var buffer2 = new Buffer('Simple y fácil de aprender');
var buffer3 = new Buffer.concat([buffer1,buffer2]);

console.log("buffer3 contiene: "+ buffer3.toString());
