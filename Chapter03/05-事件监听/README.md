#### 语法糖
1. @click

#### 传递参数
1. 没有参数时候@click可以不添加()
2. 有参数的如果没有添加()在@click,则自动产生上去

#### v-on修饰符
1. 直接使用修饰符
2. 比如@click.stop修饰符
3. .stop - 调用event.stopPropagation()
4. .prevent - 调用event.preventDefault()
5. .{keyCode|keyAlias} - 只当事件从特定键触发时才触发回调
6. .native - 监听组件根元素的原生事件
7. .once - 只触发一次回调

