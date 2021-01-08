const { add, mul } = require('./mathUtils.js');
import person from './info'

// CommonJS的打包方式
console.log(add(30, 20)); //50
console.log(mul(30, 20)); //600

// ES6的模块化的方式
console.log(person.name);
console.log(person.age);
