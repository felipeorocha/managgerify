const http = require('http');

const reqTest = (req, res) => {
  res.end('Hello man');
};

const server = http.createServer(reqTest);

server.listen(3000);
