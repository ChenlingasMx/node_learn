const fs = require("fs");

// const data = fs.readFileSync("./座右铭.txt");

// fs.writeFileSync("./复制一个座右铭.txt", data);

// unlink删除
// fs.unlink("./改名座右铭3.txt", (err) => {
//   if (err) return;
//   console.log("删除成功");
// });

// rm删除
fs.rm("./复制一个座右铭.txt", (err) => {
  if (err) return;
  console.log("删除成功");
});
