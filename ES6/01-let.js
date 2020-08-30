// 声明变量
let a;
let b, c, d;
let e = 100;
let f = 1, g = 'so what', h = [1, 2, 3];

// 1.let声明的变量不能再次被声明
let fruit = 'orange';
let fruit = 'pear';

// 2.块级作用域 全局 函数 eval（ES5严格模式）
// 在块级作用域内定义的变量 外部无法访问
// 包括 if else where for ...
{
  let girl = '丙';
}
console.log(girl);

// 3.不存在变量提升
console.log(pen);
let pen = '神笔';

// 4.不影响作用域链
{
  let school = '清华';
  function fn() {
    console.log(school);
  }
  fn();
}

// 变量声明 作用域的问题
let i = 5;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
