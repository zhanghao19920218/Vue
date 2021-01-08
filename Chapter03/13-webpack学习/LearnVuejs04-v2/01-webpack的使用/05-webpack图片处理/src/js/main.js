// 1.CommonJS导入
const { add, mul } = require('./mathUtils.js');

console.log(add(30, 20));
console.log(mul(30, 20));

// 2.ES6导入
import { name, age, height } from "./info.js";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css
require('../css/normal.css');

// 4.依赖less
require('../css/special.less');
document.writeln('<h2>你好，黄秋风</h2>')
