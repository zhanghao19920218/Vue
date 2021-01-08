const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
}
