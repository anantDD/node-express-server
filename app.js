const { log } = require('console');
const os = require('os')

//info about user
const user = os.userInfo()
console.log(user);


console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
log(currentOS)