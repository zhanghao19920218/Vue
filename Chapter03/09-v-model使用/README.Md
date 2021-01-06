### 双向绑定 v-model

1. 自动数据对message进行绑定
2. 相当于v-bind:和v-on时间和事件监听
3. textarea也可以使用v-model
4. 语法糖: v-bind绑定value和v-on给当前元素绑定事件

#### 特殊类型 v-model: radio
1. radio里面的v-model和name可以删除一个

```vue
<label for="">
    <input type="checkbox" value="篮球" v-model="hobbies">篮球
    <input type="checkbox" value="足球" v-model="hobbies">足球
    <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
    <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
  </label>
```

#### v-model: select
原理 和checkbox一样, select也分成单选和多选两种情况
```vue
<select name="abc" id="" v-model="fruit">
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="橘子">橘子</option>
    <option value="榴莲">榴莲</option>
  </select>
```

#### 值绑定
1. 我们可以通过v-bind:value动态给value绑定值
2. 有时候值从网络获取,所以用v-bind:value来获取数据(语法糖 :value)

#### 修饰符使用
1. v-model: lazy: 降低改变频率, 当用户点击Enter时候再更新
```vue
<label for="2">
    <input type="text" v-model.lazy="message" id="2">
  </label>
```
2. v-model: number: 修改输入的type为number,限制用户输入的类型
3. v-model: trim: 去除用户输入的两边的空格
