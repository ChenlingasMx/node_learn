const fs = require("fs");

// 重命名文件
fs.rename("./座右铭3.txt", "改名座右铭3.txt", (err) => {
  if (err) {
    return;
  }
  console.log("脚本成功");
});

// 移动文件
fs.rename("./座右铭2.txt", "./资料/座右铭2.txt", (err) => {
  if (err) {
    return;
  }
  console.log("脚本成功");
});