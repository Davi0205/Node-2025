// js-> por defecto utiliza CommonJS
// mjs-> por defecto utiliza ESM (ECMAScript Modules)
// cjs-> para utiulizar CommonJS.

import {sum,multiplicacion,resta} from'./suma.mjs'
console.log(sum(1, 2)); // Imprime el resultado de la suma de 1 y 2 usando la función sum del módulo sum.mjs
console.log(multiplicacion(4, 5));//Imprime el resultado de la multiplicación de 4 y 5 usando la función multiplicacion del módulo sum.mjs
console.log(resta(10, 5));// IMprime el resultado de la resta de 10 y 5 usando la función resta del módulo sum.mjs