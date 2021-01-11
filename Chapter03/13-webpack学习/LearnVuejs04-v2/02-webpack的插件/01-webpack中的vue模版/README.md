### 认识plugin
#### plugin是什么?
* plugin是插件的意思，通常用于对某个现有架构进行扩展
* webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等

#### loader和plugin区别
* loader主要用于转换某些类型的模块，它是一个转换器
* plugin是插件，它是对webpack本身的扩展，是一个扩展器

#### plugin的使用过程
步骤一: 通过npm安装需要使用的plugins(某些webpack已经内置的插件不需要安装)
步骤二: 在webpack.config.js中的plugins中配置插件

