<template>
  <div>
    <h2>用户</h2>
    <p>我是用户</p>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>

</style>
