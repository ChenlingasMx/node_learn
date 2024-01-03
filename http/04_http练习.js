const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const uri = url.parse(request.url);
  if (uri.pathname === "/login" && request.method === "GET") {
    response.end("login");
  } else if (uri.pathname === "/reg" && request.method === "GET") {
    response.end("reg");
  } else {
    response.end("NOT_FOUND");
  }
});

server.listen("9000", () => {
  console.log("服务启动成功...");
});
