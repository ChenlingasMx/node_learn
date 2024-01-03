const http = require("http");

const server = http.createServer((request, response) => {
  let url = new URL(request.url, "http://127.0.0.1:9000/");
  // 输出路径
  console.log("pathname", url.pathname);
  // 查询字符串
  console.log("keyword", url.searchParams);

  response.end("url");
});

server.listen("9000", () => {
  console.log("服务已启动....");
});
