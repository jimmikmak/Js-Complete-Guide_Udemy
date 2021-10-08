const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello there!");
  res.end();
});

server.listen(3000);
