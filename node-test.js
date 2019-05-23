var http = require('http')

http.createServer(function (request, response) {
  //send http header
  response.writeHead(200, {'content-Type': 'text/plain'})

  //send the response body
  response.end('hello world\n')
}).listen(8081)

console.log("servering at http://127.0.0.1:8081/")
