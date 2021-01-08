<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <ul>
      <li v-for="(item, index) in students" :key="index">{{item}}</li>
    </ul>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: 'Hello Webpack',
      students: [
          '阿维',
          '小王',
          '小草'
      ],
      name: 'coderwhy'
    }
  },
  methods: {
    btnClick() {
      console.log('按钮点击了');
    }
  }
}
</script>

<style scoped>

.title {
  color: green;
}

</style>
