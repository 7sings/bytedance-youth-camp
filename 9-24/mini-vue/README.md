# Vue3入门

## 为什么使用函数式编程(composition API)

为了更好的支持TS，消灭this

复用性、可读性、可维护性

静态方法，属性(会成为dead code)改成了实例方法和属性 为了优化tree-shaking

API简化：保持一致性，删除相同功能的api，`render`

扩展性：自定义渲染器 `Vue.craeteRender()`

## mini-vue

`setup`优先级很高，可以当做`created`来用

## vue3的优化

`proxy`：

1. 懒处理，用到的时候才监听
2. 数组的操作
3. 对象嵌套的递归问题
4. 新增删除属性要专门的api
5. 解决`class collection`的支持
