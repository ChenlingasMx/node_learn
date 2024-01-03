const http = require("http");

// 创建服务对象
const server = http.createServer((request, response) => {
  //   console.log('method',request.method)
  //   console.log('url',request.url)
  //   console.log('headers',request.headers)
  let body = null;
  request.on("data", (chunk) => {
    body += chunk
  });
  request.on("end", () => {
    console.log("body", body);
    response.end("http");
  });
});

// 监听端口启动服务
server.listen(9000, () => {
  console.log("服务以及启动...");
});
