<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息</p>
  <p>{{userId}}</p>
  <button @click="onClickMine">按钮</button>
</div>
</template>

<script>

export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  methods: {
    onClickMine() {
      // console.log(this.$route.params.id);
      alert(this.userId);
    }
  }
}
</script>

<style scoped>

</style>
