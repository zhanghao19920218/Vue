import Vue from 'vue'

const app = new Vue({
  id: '#app',
  template: "<App></App>",
  data: {
    message: 'Hello webpack',
    name: 'Mason Schmidt'
  },
  components: {
    App: `
  <div>
  <h2>{{message}}</h2>
  <button>按钮</button>
  <h2>{{name}}</h2>
</div>
  `
  }
})
