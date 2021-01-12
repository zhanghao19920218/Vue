import Vue from 'vue';
import VueRouter from "vue-router";

// 懒加载
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');

// 1.配置插件
Vue.use(VueRouter);

// 2.配置路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

// 3.导出在实例上声明
export default router;
