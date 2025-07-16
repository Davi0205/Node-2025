const path = require('node:path');

// unir rutas con path.join
console.log(path.sep)

// unir rutas con pathc.join 
const filePath = path.join('./contemt','subfolder','test.txt')
console.log(filePath)

const base = path.basename('/tmp/alfonso-secret/password.txt')
console.log(base)

const filemane = path.basename('/tmp/alfonso-secret/password.txt','.txt')
console.log(filemane)

const extension = path.extname('my.super.image.jpg')
console.log(extension)