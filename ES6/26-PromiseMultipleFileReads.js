// 引入文件模块
const fs = require('fs');
const { resolve } = require('path');

fs.readFile('./resources/study.txt', (err, data1) => {
  fs.readFile('./resources/eee.txt', (err, data2) => {
    fs.readFile('./resources/moon.txt', (err, data3) => {
      let result = data1 + '\r\n\n' + data2 + '\r\n\n' + data3;
      console.log(result);
    });
  });
});

// 使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/study.txt', (err, data) => {
    resolve(data);
  })
})
p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/eee.txt', (err, data) => {
      resolve([value, data]);
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/moon.txt', (err, data) => {
      value.push(data);
      resolve(value);
    })
  })
}).then(value => {
  console.log(value.join('\r\n\n'));
})