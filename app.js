const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello from Docker to Kubernetes! - v1");
});
server.listen(3000, () => console.log('Server listening on 3000'));
