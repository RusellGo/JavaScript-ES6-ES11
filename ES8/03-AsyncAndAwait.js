const fs = require('fs');
const { resolve } = require('path');

// 读取
function readStudy() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/study.txt', (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    })
  })
}

function readEEE() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/eee.txt', (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    })
  })
}

function readMoon() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/moon.txt', (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    })
  })
}

// 声明一个async函数
async function main() {
  try {
    let study = await readStudy();
    let eee = await readEEE();
    let moon = await readMoon();

    console.log(study.toString());
    console.log(eee.toString());
    console.log(moon.toString());
  } catch (e) {
    console.log(e);
  }
}
main();
