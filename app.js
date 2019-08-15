const http = require('http');

const server = http.createServer((request, response) => {
  response.end(`<h1>Hi! I'm a docker container!<h1>`);
});

server.listen(3000, err => {
  console.log('server is listening');
});
