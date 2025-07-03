// console.log("Hola mundo es mi primer programa en Node.js");
// console.log(globalThis); // This will log the global object in Node.js)

const Elnombrequequiera = require('./suma'); // Importante esto llama ami mudulo suma.js que contiene la funcion sum
console.log(Elnombrequequiera(1, 2)); // Imprime el resultado de la suma de 1 y 2 usando la función sum del módulo suma.js