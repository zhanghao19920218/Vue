### 案例:计数器 ###
1. 新的属性:methods. 该属性用于在Vue对象中定义方法
2. 新的指令:@click. 用于监听某个元素的点击事件
3. v-for:进行循环计数
4. 语法糖: 简写


### MVVM
1. Model通过Data Binding将数据和View连接显示
2. View通过DOM Listener数据更新来更新model
3. View - ViewModel - Model

### 创建Vue实例传入的options
#### 目前掌握的选项
1. el: 
   类型:string | HTMLElement 
   作用: 决定之后Vue实例会管理哪一个DOM.
2. data: 
   类型:Object | Function (组件当中data必须是一个函数)
   作用: Vue实例对应的数据对象
3. methods:
   类型: {{ [key:string]: Function }}
   作用: 定义属于Vue的一些方法, 可以在其他地方调用, 也可以在指令中使用


#### 生命周期
1. 必须先获取挂载点
2. 然后进行挂载el
3. 当执行到某一个周期，进行回调

### Template
1. 将数据绑定在html里面
2. Mustache语法 {{}}
3. 
