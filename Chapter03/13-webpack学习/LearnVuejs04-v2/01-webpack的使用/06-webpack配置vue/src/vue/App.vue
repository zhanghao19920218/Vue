<template>
<div>
  <h2 class="title">{{message}}</h2>
  <button>按钮</button>
  <h2>{{name}}</h2>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: 'Hello webpack',
      name: 'mason_schmidt'
    };
  },
  methods: {
    btnClick() {
      //点击按钮
      console.log('点击了按钮')
    }
  }
}
</script>

<style scoped>

.title {
  color: #5c6b77;
}

</style>
