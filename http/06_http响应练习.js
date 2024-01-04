const http = require("http");

const server = http.createServer((request, response) => {
  response.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <table border="1">
    <tr>
     <td></td>
     <td></td>
     <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
   </tr>
   <tr>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
 </tr>
  </table>
  </body>
  </html>
  <style>
    td{
        padding:20px 40px;
    }
    table tr:nth-child(odd){
        background: red
    }
    table tr:nth-child(even){
        background: blue
    }
    table,td{
        border:1px solid #ccc
    }
  </style>
  `);
});

server.listen("9000", () => {
  console.log("启动成功...");
});
