const http = require("http");

const server = http.createServer((request, response) => {
  // 设置响应状态码
  response.statusCode = 203;
  response.write("love");
  response.end();
});

server.listen("9000", () => {
  console.log("启动成功...");
});
