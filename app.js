import http from 'http';

const server = http.createServer((req, res) => {
  // 1. Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 2. Send the response body
  res.end('Hello !');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});