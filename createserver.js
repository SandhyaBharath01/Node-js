const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Sandhya');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Sandhya');
});

server.listen(4000, () => {
  console.log('Server started on port 5000 Sandhya');
});