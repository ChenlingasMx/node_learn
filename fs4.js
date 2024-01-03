const fs = require("fs");
const process = require("process");

// 直接复制
// const data = fs.readFileSync("./座右铭.txt");
// fs.writeFileSync("./座右铭2.txt", data);

// 流式复制
const run = fs.createReadStream("./座右铭.txt");

const copyStream = fs.createWriteStream("座右铭3.txt");

run.on("data", (chunk) => {
  copyStream.write(chunk);
});

run.on("end", () => {
  console.log(process.memoryUsage());
});
