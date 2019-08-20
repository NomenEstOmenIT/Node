const http = require("http");
const requestHandler = require("./requestHandler");

const port = 3000;

const server = http.createServer(requestHandler);

server.listen(port, err => {
  console.log(`server listening port ${port}`);
});
