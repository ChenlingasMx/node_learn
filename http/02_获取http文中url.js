const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  let uri = url.parse(request.url);
  console.log("uri", uri.pathname);
  console.log("query", uri.query);
  response.end("url");
});

server.listen("9000", () => {
  console.log("服务已启动....");
});
