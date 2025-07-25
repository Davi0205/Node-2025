const os = require('node:os')

console.log('Informacion del sistema operativo:');
console.log('-----------------------');

console.log('Nombre del sisteama operativo:', os.platform());
console.log('Version del sistema operativo:', os.release());
console.log('Arquitectura del sistema operativo:', os.arch());
console.log('CPUs', os.cpus());
console.log('Memoria libre:', os.freemem()/1042/1024);
console.log('Memoria total:', os.totalmem()/1042/1024);
console.log('uptime:', os.uptime()/60/60/24, 'dias');