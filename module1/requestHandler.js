const bodyParser = require("./bodyParser");

module.exports = async function(request, response) {
  switch (request.method) {
    case "GET":
      console.log("this is get method");

      if (request.url === "/test") {
        response.writeHead(200, { "Content-Type": "application/json" });
        return response.end(JSON.stringify({ message: "This is test route." }));
      }
      break;
    case "POST":
      const body = await bodyParser(request);

      if (!/^\S{3,16}@([a-z]|\d){3,20}\.[a-z]{3}$/.test(body.email)) {
        console.log("validation failed");
        response.writeHead(400, { "Content-Type": "application/json" });
        return response.end(JSON.stringify({ message: "validation failed" }));
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        return response.end(JSON.stringify({ message: "validation success" }));
      }
      break;
    default:
      response.writeHead(200, { "Content-Type": "plain/text" });
      response.end("Hello world");
      break;
  }
};
