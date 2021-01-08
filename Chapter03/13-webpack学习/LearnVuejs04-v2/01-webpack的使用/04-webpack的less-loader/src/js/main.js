// 1.使用CommonJS的方法导入
const { add, mul } = require('./mathUtils.js');

console.log(add(30, 20));
console.log(mul(30, 20));

// 2.使用ES6导入
import { name, age, height } from './info.js'

console.log(name);
console.log(age);
console.log(height);

// 3.导入css
require('../css/normal.css');

// 4.导入less
require('../less/normal.less');
document.writeln('<h2>你好啊,李银河</h2>')
