
import { readFile } from 'node:fs/promises'; // Importa solo readFile


console.log('Leyendo archivos en paralelo...');

try {
    const [texto1,texto2] = await Promise.all([
        readFile('./hola.txt', 'utf-8'),
        readFile('./Texto.txt', 'utf-8'),
    ]);
    console.log('Contenido del texto 1:',texto1);
    console.log('Contenido del texto 2:',texto2);
} catch(error){
    console.error('Error al leer los archivos', error);
}


