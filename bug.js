const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  // Missing 'end' event listener
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  // Missing res.end() to signal the end of the response
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});