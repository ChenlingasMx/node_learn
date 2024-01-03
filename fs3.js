const fs = require("fs");

// 异步读取
// fs.readFile("./观书有感.txt", (err, data) => {
//   if (err) {
//     console.log("读取错误");
//     return;
//   } else {
//     console.log("data", data.toString());
//   }
// });

// 同步读取
// const data  = fs.readFileSync('./观书有感.txt')
// console.log('data',data.toString());


// 流式读取
const res = fs.createReadStream("./观书有感.txt");

res.on("data", (chunk) => {
  console.log("chunk", chunk);
});

res.on("end", () => {
  console.log("读取结束");
});
