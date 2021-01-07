import {flag, sum} from './aaa.js';

if (flag) {
  console.log('小明是天才');
}

console.log(sum(30, 40));

import { num1, height } from "./aaa.js";

console.log(num1);
console.log(height);

import { mul } from "./aaa.js";

console.log(mul(30, 20));

import { Person } from "./aaa.js";
let person = new Person();
person.run();

import * as aaa from './aaa.js';

console.log(aaa.name);
