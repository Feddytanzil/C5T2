const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end();
    });
  } else if (requestUrl === "/welcome") {
    fs.readFile("./welcome.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end();
    });
  } else {
    response.writeHead(404);
    response.write("not found");
  }
});

server.listen(8000);
