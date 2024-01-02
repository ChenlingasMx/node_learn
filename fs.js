/**
 * 新建一个文件，座右铭.tst,写入内入，三人行，则必有我师
 *
 */

// 1.导入模块
const fs = require("fs");

// 2。写入文件
fs.writeFile("./座右铭.txt", "三人行，则必有我师", (err) => {
  // err 写入失败是个错误对象，写入成功null
  if (err) {
    console.log("写入失败");
    return;
  } else {
    console.log("写入成功");
  }
});
