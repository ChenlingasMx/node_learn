// buffe字符串转换
// let buffer_1 = Buffer.from([105,108,111,118,101,121,111,117]);
// console.log( buffer_1.toString()); // utf-8

// []
// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2));
// buf[0]=95
// console.log(buf.toString());

// 溢出
// let buf = Buffer.from('hello')
// buf[0]= 361;  // 舍弃高位的数字 0001 0110 1001 => 0110 1001
// console.log('buf',buf);  

//中文
// let buf = Buffer.from('你好')
// console.log('buf',buf);  