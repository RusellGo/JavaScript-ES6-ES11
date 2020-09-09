/**
 * const 基本使用及特点
 */
// 声明常量
const FRUIT = 'pear';
console.log(FRUIT);

// 1.使用const，必须初始化
// const A; // Missing initializer in const declaration

// 2.一般常量使用全大写字母,但语法并没有要求
const a = 1;
const A = 1;
console.log(a, A);

// 3.常量的值不能修改
const WEAPON = 'gun';
// WEAPON = "knife"; // Assignment to constant variable

// 4.const有块级作用域
const PLAYER = 'MLXG';
{
  const PLAYER = 'UZI';
  console.log(PLAYER);
}
console.log(PLAYER);

// 5.对于数组和对象的元素修改，不算作对常量的修改, 不会报错
const TEAM = ['Uzi', 'Mlxg', 'Ming', 'Letme', 'XiaoHu'];
TEAM.push('Zzltai');
console.log(TEAM);
