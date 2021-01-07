### 注册组件的基本步骤
#### 组件的使用分成三个步骤:
1. 创建组件构造器 (Vue.extend())
2. 注册组件(Vue.component())
3. 使用组件

#### 注册组件步骤解析
##### Vue.extend():
1. 调用Vue.extend()创建的是一个组件构造器
2. 通常在创建组件构造器时，传入template代表我们自定义组件的模版
3. 该模版就是在使用到组件的地方，要显示的HTML代码
4. 事实上，这种写法在Vue2.x的文档中几乎已经看不到

#### 子组件和父组件
1. 在Vue.extend里面定义子组件
2. Vue()可以定义为root组件,根组件
3. 局部组件只能在父组件里面使用(作用域)
4. 组件在components使用时候就已经编译好了, Vue实例是找不到子组件注册的样式

#### 模版分离写法
##### 第一种 script
类型必须是 type="text/x-template"
```vue
<script type="text/x-template" id="cpn">
<div>
  <h2>我是标题</h2>
  <p>我是内容，哈哈哈哈哈</p>
</div>
</script>
```
###第二种 template写法
注意留id
```vue
<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <p>我是内容，哈哈哈哈哈</p>
  </div>
</template>

```

### 组件数据获取
1. 模版属于自己的HTML模版，也应该有属性自己的数据data
2. 如果把所有数据都放在Vue实例中，Vue实例就会变得非常臃肿
3. Vue应该有自己保存数据的地方
4. 组件的data需要是一个函数

### 组件数据data为何是一个函数
1. 防止组件利用时候数据混乱
2. 组件复用数据不能连锁反应

### 父子组件的通信
1. props向子组件传递数据
2. 通过事件向父组件发送消息

### props数据验证
1. props数组
2. propF: 自己验证函数

### props驼峰标识
1. user-name的标签修改为userName

### 必须包含根组件
1. 树结构必须包括一个根组件
2. 组件必须有root-element

### 子传父
1. 不能使用驼峰
2. 发射事件: 自定义事件
```vue
      btnClick(item) {
        this.$emit('item-click', item)
      }
```

#### props里面数据不要变动
1. 使用watch函数

### 父子组件的访问方式: $children
1. 父组件访问子组件：使用$children或$ref
2. 子组件访问父组件: 使用$parent
3. $ref默认为空
4. $refs => 对象类型, 默认是一个空的对象

### 子访问父组件方式: $root
1. this.$root => 访问根组件
2. this.$parent => 访问父组件
