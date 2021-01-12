import VueRouter from "vue-router";
import Vue from 'vue';
import Home from "@/components/Home";
import About from "@/components/About";
import User from "@/components/User";

// 1.使用插件
Vue.use(VueRouter);

// 2.配置router
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
    path: '/user/:id', //动态路由
    component: User
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

export default router;
