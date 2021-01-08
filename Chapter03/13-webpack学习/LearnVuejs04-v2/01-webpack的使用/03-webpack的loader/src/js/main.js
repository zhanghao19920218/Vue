// 1.使用commonjs的模块化规范
const { add, mul } = require('./mathUtils');

console.log(add(30, 20)); //50
console.log(mul(30, 20)); //600

// 2.使用ES6的模块化的规范
import { name, height, age } from "./info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('../css/normal.css');
