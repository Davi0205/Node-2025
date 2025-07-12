const { log } = require('node:console');
const fs = require('node:fs');

console.log('Leyendo el contenido del archivo hola.txt...');
const texto = fs.readFileSync('./hola.txt', 'utf8');

console.log(texto);

console.log('Haciendo cosas mientras lee el archivo Texto.txt...');


console.log('Leyendo el segundo contennido del archivo Texto.txt...');
const secondText = fs.readFileSync('./texto.txt', 'utf8');

console.log(secondText)