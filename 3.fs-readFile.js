const fs = require('node:fs');
const { text } = require('node:stream/consumers');

console.log('Leyendo el contenido del primer archivo hola.txt...');
fs.readFile('./hola.txt', 'utf8', (err, texto) => {
    console.log('Primer texto:',texto);
});

console.log('Haciendo cosas mientras lee el archivo Texto.txt...');


console.log('Leyendo el segundo contennido del archivo Texto.txt...');
const secondText = fs.readFile('./texto.txt', 'utf8', (err,texto) => {
    console.log('Segundo texto:',texto);
});
