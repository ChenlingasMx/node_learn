const fs = require("fs");
// fs.readFile("./观书有感.txt", (err, data) => {
//   if (err) {
//     console.log("读取错误");
//     return;
//   } else {
//     console.log("data", data.toString());
//   }
// });


const data  = fs.readFileSync('./观书有感.txt')
console.log('data',data.toString());