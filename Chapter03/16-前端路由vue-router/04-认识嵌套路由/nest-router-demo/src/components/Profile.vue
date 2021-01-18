<template>
<div>
  <h2>我是Profile</h2>
  <p>我是Profile内容</p>
  <button @click="clickButton">点击</button>
</div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    clickButton() {
      // 所有的组件都继承自Vue类的原型
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  created() {
    console.log('Profile');
  }
}
</script>

<style scoped>

</style>
