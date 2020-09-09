/**
 * 变量的解构赋值
 */
// ES6 允许按照一定的模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
// 1.数组的解构
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝'];
// 数组中的变量 和 F4中存放的值一一对应
let [a, b, c, d] = F4;
console.log(a, b, c, d);

// 2. 对象的解构
const zhao = {
  name: '赵本山',
  age: '不详',
  handle: function () {
    console.log('小品');
  }
}
// 对象解构赋值时，变量名要和对象的key值相同9
let { name, age, handle } = zhao;
console.log(name, age, handle);