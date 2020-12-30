### Mustache插值操作
1. 将数据绑定在html里面
2. Mustache语法 {{}}
3. 可以进行简单的数据操作

#### v-once
1. `<h1 v-once>{{}}</h1> `数据只会更新一次
2. 后面不要跟表达式,类似于v-for这些

#### v-html和v-text
1. 直接显示DOM标签
2. v-text直接v-text="message",不需要{{}}
3. 但是v-text不够灵活

#### v-pre
1. 和`<pre>`标签很像
2. 不做任何解析

#### v-cloak
1. 
