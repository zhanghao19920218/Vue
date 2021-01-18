<template>
<div>
  <h2>首页</h2>
  <p>我是首页</p>
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
  <button @click="btnClick">按钮</button>
</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    btnClick() {
      this.test();
    },
  },
  data() {
    return {
      path: ''
    }
  },
  created() {
    console.log('created');
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    // this.$router.push({
    //   path: '/home/news'
    // })
    this.$router.push(this.path);
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>
