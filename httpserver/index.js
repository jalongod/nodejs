const http = require('http')
console.log('create a http server')

function createServer() {
  http
    .createServer(function(req, res) {
      res.writeHead(200)
      res.end('hello')
    })
    .listen(3000)
}
exports.createServer = createServer
