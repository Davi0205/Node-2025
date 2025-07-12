const fs = require('node:fs'); // Desde Node 16 se recomienda usar node: para módulos nativos

const stats = fs.statSync('./hola.txt'); // Inspecciona el archivo

console.log(
  stats.isFile() ? '✅ Es un fichero' : '❌ No es un fichero',
  stats.isDirectory() ? '📁 Es un directorio' : '🚫 No es un directorio',
  stats.isSymbolicLink() ? '🔗 Es un enlace simbólico' : '⛔ No es un enlace simbólico',
  `📏 Tamaño: ${stats.size} bytes`,
  `📅 Fecha de creación: ${stats.birthtime}`
);

// 📝 Leer el contenido del archivo hola.txt

// const contenido = fs.readFileSync('./hola.txt', 'utf8');
// console.log('\n🗂️ Contenido del archivo hola.txt:\n');
// console.log(contenido);
