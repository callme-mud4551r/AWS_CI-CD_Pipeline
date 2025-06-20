const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js CI/CD app!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
