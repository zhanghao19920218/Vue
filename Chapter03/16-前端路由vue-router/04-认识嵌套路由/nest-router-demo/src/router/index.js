import VueRouter from "vue-router";
import Vue from 'vue';

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
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

export default router;
