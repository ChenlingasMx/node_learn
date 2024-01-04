const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const html = fs.readFileSync(__dirname + "/table.html");
  response.end(html);
});

server.listen("9000", () => {
  console.log("启动成功...");
});
