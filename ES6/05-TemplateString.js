/**
 * 模板字符串
 */
// ES6引入新的声明字符串的方式 ``
// 1.声明
let str = `这也是个字符串`;
console.log(str, typeof str);

// 2. 内容中可以直接出现换行
let star = `啦啦啦
啦啦`;
console.log(star);

// 3.变量拼接
let likeBest = '丙';
let someone = `${likeBest}是我的`;
console.log(someone);
