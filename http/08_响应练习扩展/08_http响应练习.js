const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, "http://127.0.0.1:9000");
  if (pathname === "/") {
    const html = fs.readFileSync(__dirname + "/table.html");
    response.end(html);
  } else if (pathname === "/index.css") {
    const css = fs.readFileSync(__dirname + "/index.css");
    response.end(css);
  } else if (pathname === "/index.js") {
    const js = fs.readFileSync(__dirname + "/index.js");
    response.end(js);
  } else {
    response.statusCode = 404;
    response.end("<h1>404</h1>");
  }
});

server.listen("9000", () => {
  console.log("启动成功...");
});
