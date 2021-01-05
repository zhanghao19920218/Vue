#### v-for遍历数组
1. 遍历过程中没有用到下表
```vue
<li v-for="item in names">{{item}}</li>
```
2. 有下标的
```vue
<ol>
    <li v-for="(item, index) in names">{{index}} - {{item}}</li>
</ol>
```

#### v-for遍历对象
1. 直接遍历(把value遍历出来)
```vue
<li v-for="item in info">{{item}}</li>
```

#### 官方推荐
1. 在v-for上的元素加上key,更好的复用
2. v-for利用了diff操作
3. 如果没有key插入手法会很笨,而有key的话就会很轻松

#### 数组哪些方法是响应式
1. push方法
2. pop(): 删除数组最后一个元素
3. shift(): 删除数组的第一个元素
4. unshift(): 在数组最前面添加元素
5. splice(): 删除元素/插入元素/替换元素
6. sort()
7. reverse()
