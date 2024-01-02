const fs = require("fs");

const ws = fs.createWriteStream("./观书有感");

// write
ws.write("加内容");
ws.write("\r\n加内容2");

// 关闭通道
ws.close();
