### Webpack安装
1. webpack模块化打包
2. webpack为了可以正常运行，必须依赖node环境
3. node环境为了可以正常的执行很多代码，必须其中包含各种依赖的包
4. npm工具(node packages manager)

#### 安装流程
1. 安装webpack首先需要安装Node.js, Node.js自带了软件包管理工具npm
2. 查看自己的node版本: node -v
3. 全局安装webpack
```shell
npm install webpack@3.6.0 -g
```
4. 局部安装
```shell
cd 对应目录
npm install webpack@3.6.0 --save-dev
```

5. 为什么全局安装后，还需要局部安装
* 在终端直接执行webpack命令，使用全局安装的webpack
* 当在package.json中定义了scripts, 其中包含了webpack命令

6. 文件夹名称
* dist -> distribution(发布), 开发的东西在src, 打包的东西在dist

#### webpack进行js打包
```shell
cd 目录文件下
webpack --entry ./src/main.js -o ./dist/bundle.js
```
#### 开发时依赖和运行时依赖
1. 开发时依赖
```shell
npm install webpack@3.6.0 --save-dev
```

2. 只要在cmd里面敲的webpack都是使用全局的webpack
```shell
# 使用本地的
./node_modules/.bin/webpack -enrty ** -o ***
```

#### loader的使用过程
1. loader是webpack中一个非常核心的概念
2. webpack来处理我们写的js代码, 并且webpack自动处理js之间的相关依赖
3. 在开发工程中的js代码,我们需要加载css,图片.
4. webpack本身没有办法，但是loader可以

### 使用步骤
* 通过npm安装需要使用的loader

```javascript
require('../css/normal.css'); //依赖css文件
```  

* 在webpack.config.js的modules关键字下进行配置

* 首先，你需要安装 css-loader
```shell
npm install --save-dev css-loader
```

* 把 loader 引用到你 webpack 的配置
`file.js`
```javascript
import css from "file.css";
```
`webpack.config.js`
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

* css-loader只负责将css文件进行加载
* style-loader 将模块导出的内容作为样式并添加到 DOM 中

### url-loader使用 (打包成base64)

### 当图片大于url-loader options时候使用file-loader

### 引入Vue.js
#### 安装vue三种方式
* 直接下载应用
* CDN引入
* npm安装

* runtime-only -> 代码中不能有任何template
* runtime-compiler -> 代码中能有template

* SPA(simple page web application) -> vue-router(前端路由)
    
