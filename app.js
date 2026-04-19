console.log('hi')

/*
GLOBALS
__dirname - path to curr dir
__filename - file name
require - function to use modules
module - info about current module (file). tells you about the exports etc
process - info about env where program is being executed
*/

/*
MODULES
commonjs - every file is module bby default

*/
console.log(__dirname)

const names = require('./names')
const sayHi = require('./utils')

// setInterval(() => {
//     console.log('hello world');
// }, 1000)
console.log('hi2')


sayHi(names.john)
sayHi(names.peter)
console.log(names.check)