###Vue-Router的基本使用

#### 什么是路由
* 通过互联的网络把信息从源地址传输到目的地址的互动
* 路由和转发: 映射表

#### 什么是前端渲染和后端渲染
##### 后端渲染
1. JSP/PHP: URL发射到服务器
2. 服务器: 进行解析->JSP技术->html+css+java代码动态从数据库获取数据库，动态放上去
3. 服务器拿到url2 -> JSP -> html+css+java
* 后端路由: 后端处理URL和页面之间的映射

*过程:
1. 一个页面有自己对应的网址，也就是URL
2. URL会发送到服务器，服务器会通过正则对该URL进行匹配，并且最后交给一个Controller进行处理
3. Controller进行各种处理，最终生成HTML或者数据，返回给前端
4. 这就完成了一个IO操作

##### 前后端分离
* 后端只负责提供数据，不负责任何阶段的内容

前端渲染: 浏览器中显示的页面中的大部分内容，都是由前端写的js代码在浏览器中执行，最终渲染出来的网页

##### SPA页面
SPA: Single Page Application
整个网页只有一个html页面

前端路由: 根据/后面进行页面资源抽取(只有一套html+css+js)
* SPA不要进行页面重新请求

##### 修改页面不进行刷新
* hash修改: location.hash = 'aaa',不会进行页面刷新
* href -> hyper reference 超链接
* hash表 => 路由映射 => 监听修改

##### HTML5的history模式修改也不会进行页面刷新: pushState, back
```javascript
history.pushState({}, '', 'home');
history.pushState({}, '', 'about');
history.back(); //返回上一个浏览地址
history.pushState({}, '', 'demo');
history.back();
```
数据结构栈结构中用的很多(先进后出)

##### HTML5的history模式: replaceState
```javascript
location.href
history.replaceState({}, '', '/foo');
location.href
history.replaceState({}, '', '/foo/bar')
location.href
```

##### HTML5的history模式: go和forward
```javascript
history.go(-1) = history.back();
history.forward()
history.back()
```

#### 配置vue-router的index文件
```javascript
// 配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
  // 配置路由和组件之间的应用关系

];
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes
});

// 3. 将router对象传入到vue实例
export default router;
```

#### 使用vue-router的步骤:
* 第一步: 创建路由组件
* 第二步: 配置路由映射: 组件和路径映射关系
* 第三步: 使用路由: <router-link>和<router-view>

#### 使用vue-router注意:
* 使用vue-router中, 进行默认的路由地址
```javascript
{
  path: '',
  redirect: '/home'
}
```
* 在router添加mode: 'history'

#### <router-link>的属性
* <router-link>默认渲染成<a>
* <router-link to="/home" tag="button">渲染成<button>
```vue
<router-link to="/home" tag="button">按钮</router-link>
```
* replace: 修改成replaceState和pushState区别
