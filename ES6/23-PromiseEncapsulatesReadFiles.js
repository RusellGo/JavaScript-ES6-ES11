// 1.引入 fs模块
const fs = require('fs');

// 2.传统调用方法读取文件
fs.readFile('./resources/study.txt', (error, data) => {
  // 如果失败，抛出错误
  if (error) throw error;
  console.log(data.toString());
})

// 3.Promise封装
const p = new Promise(function (resolve, reject) {
  fs.readFile('./resources/study.txt', (error, data) => {
    // 失败
    if (error) reject(error);
    // 成功
    resolve(data);
  })
});
p.then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log('读取失败');
})