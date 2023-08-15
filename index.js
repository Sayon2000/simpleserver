const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let result = '<html>'+
  '<head><title>Title</title>' ;
  if(req.url === '/home')
    result +=  '<body><h2>Welcome to home</h2></body>'+
    '</html>'
  else if(req.url === '/about')
  result +=  '<body><h2>Welcome to About Us page</h2></body>'+
  '</html>'
  else if(req.url === '/node')
  result +=  '<body><h2>Welcome to my Node Js project</h2></body>'+
  '</html>'

  res.end(result)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Server created by Sayon Dutta")
});