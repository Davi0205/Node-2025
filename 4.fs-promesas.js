const fs = require('node:fs/promises'); // Usando fs/promises para trabajar con promesas

console.log('Leyendo el contenido del primer archivo hola.txt...');
fs.readFile('./hola.txt', 'utf8')
  .then(texto =>{
    console.log('Primer texto:', texto);
  }) 
console.log('Haciendo cosas mientras lee el archivo Texto.txt...');


console.log('Leyendo el segundo contennido del archivo Texto.txt...');
fs.readFile('./texto.txt', 'utf8')
.then(texto => {
    console.log('Segundo texto:', texto);
  })
  