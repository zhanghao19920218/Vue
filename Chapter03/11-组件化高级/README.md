### 为什么使用slot
1. 让我们原来的设备具备更多的扩展性
2. 里面的button是默认值
```vue
<slot><button>按钮</button></slot>
```

### 具名的slot
1. 新增name属性
```vue
<slot name=""></slot>
```
2. 替换的属性
```vue
<span slot="center">标题</span>
```

### 编译作用域
1. v-for和v-if都是在实例里面去查找,并不会去组件里面去查找

### 作用域插槽：准备
1. 作用域插槽是slot比较难理解的一个点
2. 在template模版里新增v-bind:data
```vue
<template slot-scope="slot">
      <ul>
        <li v-for="item in slot.data">{{item}}</li>
        <li>新增</li>
      </ul>
    </template>
```
```vue
<slot v-bind:data="pLanguages">
      <ul>
        <li v-for="(language, index) in pLanguages" :key="index">{{language}}</li>
      </ul>
    </slot>
```
