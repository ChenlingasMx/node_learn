const fs = require("fs");

fs.stat("./座右铭.txt", (err, data) => {
  if (err) return;
  console.log(data);
});
