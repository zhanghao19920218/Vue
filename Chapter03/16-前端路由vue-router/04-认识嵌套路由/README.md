### 认识嵌套路由
#### 嵌套路由是一个很常见的功能
* 比如在home页面, 我们希望通过/home/news和/home/message访问一些内容
* 一个路径映射一个组件，访问这两个路径也会分别渲染两个组件

#### 路径和组件的关系如下
* 创建对应的子组件，并且在路径映射中配置对应的子路由
* 在组件内部使用<router-view>标签

* 在/router/index.js 创建一个children, 里面地址不添加/

### 参数传递
* 第一步: 创建新的组件User.vue
* 第二步: 配置路由映射
* 第三步: 添加跳转的<router-link>

#### 传递参数的两种类型: params和query
#### params的类型:
* 配置路由格式: /router/:id
* 传递的方式: 在path后面跟上对应的值
* 传递后形成的路径: /router/123, /router/abc

#### query的类型:
* 配置路由格式:/router，也就是普通配置
* 传递的方式: 对象使用query的key作为传递方式
* 传递后形成的路径: /router?id=123, /router?id=abc

```vue
this.$router.push({
path: '/profile',
query: {}
})
```

#### $route和$router的区别
* this.$router就是VueRouter,就是你export出去的router

#### 全局导航守卫
##### 修改页面的mounted(), created()
```vue
mounted()
{
  document.title = "修改的标题"
}
```
```javascript
router.beforeEach((to, next, navi) => {
  next();
  console.log(to);
  console.log(next);
})
```

#### 为什么使用导航守卫
* vue-router提供的导航守卫主要用来监听路由的进入和离开
* vue-router提供了beforeEach和afterEach的钩子函数，它们会在路由即将改变前和改变后触发

#### deactived()和actived()函数的比较
* 在keep-alive时候才会有效
* include和exclude进行正则匹配
