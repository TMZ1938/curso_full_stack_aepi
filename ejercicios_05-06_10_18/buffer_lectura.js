buf = new Buffer(26);

for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));//Salida abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));//Salida abcde
console.log(buf.toString('utf8',0,5));//Salida abcde
console.log(buf.toString('undefined',0,5));//Salida unknown encoding
