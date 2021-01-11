#### CLI是什么
* CLI是Command-Line Interface, 翻译为命令行界面,但是俗称脚手架
* Vue CLI是一个官方发布的vue.js项目脚手架
* 使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置
```shell
vue create my-project
```

#### 环境搭建
##### 安装NodeJS
* 可以直接在官方网站中下载下来
* 网址: http://nodejs.cn/download/

##### 检测安装默认版本

##### 什么是NPM
NPM全程是Node Package Manager

##### 安装Vue脚手架
* npm install -g @vue/cli

#### 认识Vue CLI3
* vue-cli3 和2版本有很大区别
* vue-cli 3是基于webpack4打造, vue-cli 2还是webpack 3
* vue-cli 3 的设置原则是"0配置"，移除配置文件根目录下的，build和config等目录
* vue-cli 3 提供了 vue ui的命令，提供了可视化配置，更加人性化
* 移除static文件夹，新增public，并且把index.html移动到public

#### VCL3.0创建的项目
* node_modules 是npm安装的包
* public 静态文件库
* src 是源代码
* .browserslistrc 浏览器配置
* .gitignore 忽略git文件

#### Vue ui 
* 处理本地的UI项目管理
* 
