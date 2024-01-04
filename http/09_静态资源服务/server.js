const http = require("http");
const fs = require("fs");
const path = require("path");

const mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
};

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.statusCode = 405;
    response.end("405 Not Implemented");
    return;
  }

  let { pathname } = new URL(request.url, "http://127.0.0.1");

  let root = __dirname + "/page";

  let filePath = root + pathname;

  fs.readFile(filePath, (err, data) => {
    console.log("err", err);
    if (err) {
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404;
          response.end("404 Not Found");
        case "EPERM":
          response.statusCode = 403;
          response.end("403 Forbidden");
        default:
          response.statusCode = 500;
          response.end("Interal Server Error");
      }
      return;
    }
    let ext = path.extname(filePath).slice(1);

    let type = mimes[ext];

    if (type === "html") {
      response.setHeader("content-type", type + ";charset=utf-8");
    } else {
      response.setHeader("content-type", type);
    }

    response.end(data);
  });
});

server.listen("9000", () => {
  console.log("启动成功...");
});
