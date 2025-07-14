import { readFile } from 'node:fs/promises'; // Importa solo readFile

console.log('Leyendo el contenido del primer archivo hola.txt...');
const texto = await readFile('./hola.txt', 'utf-8'); // Usa readFile directamente
console.log('Primer texto:', texto);
console.log('===> Hacer cosas mientras lee el primer archivo....');

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./Texto.txt', 'utf-8'); // También aquí
console.log('Segundo texto:', secondText);


