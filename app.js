var http = require('http')
var fs = require('fs')

for (let i =0; i <10000; i++){
  fs.writeFileSync('./content/big.txt', `abc ${i}`, {flag: 'a'})
}

const server = http.createServer((req, res) => {
  
  const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    console.log('error')
    res.end(err)
  })

})

server.listen(3000, () => {
  console.log('server is running')
})