/**
 * 对象的简化写法
 */
// ES6 允许在大括号内，直接写入变量和函数，作为对象的属性和方法。这样写更简洁

let name = 'Simira';
let handle = function () {
  console.log('沙漠特工，刀枪精通');
}

const hero = {
  // ES6 对象属性名和属性值相同，可以只写一个
  name,
  handle,
  // ES6 新简写方法
  improve() {
    console.log('找呀找呀找job');
  }
}
console.log(hero);
