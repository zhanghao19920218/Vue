import VueRouter from "vue-router";
import Vue from 'vue';

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import('../components/Profile');

Vue.use(VueRouter);

const homeChildren = [
  // {
  //   path: '',
  //   redirect: 'news'
  // },
  {
    path: 'news',
    component: HomeNews
  },
  {
    path: 'message',
    component: HomeMessage
  }
]

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: homeChildren,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

// 前置钩子
// router.beforeEach((to, from, next) => {
//   next();
//   document.title = to.meta.title;
//   console.log(to.meta.title);
//   console.log(from);
// })

// 后置钩子
router.afterEach((to, from) => {
  // document.title = to.meta.title;
  // console.log(to.meta.title);
  // console.log(from);
});

export default router;
