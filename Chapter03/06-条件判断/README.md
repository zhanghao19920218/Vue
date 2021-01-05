#### v-if的使用
```
<h2 v-if="">{{message}}</h2>
```
1. 不建议使用v-if和v-else-if一起

#### v-if中的小问题
1. 虚拟DOM导致input切换原数据还在
2. 使用key来修改这个BUG

#### v-show的作用
1. 和v-if差不多,但是只是单纯修改display:none
2. 但是v-if是完全不存在dom中
