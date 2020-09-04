关于vue
1、[key的用处](https://cn.vuejs.org/v2/api/#key)
    a.主要用在vue的虚拟DOM算法，处理新旧VNodes。在使用key时，它会基于key的变化重新排列元素的顺序，并且移除key不存在的元素
    b.何时用，为什么
      有相同的父元素的子元素，必须要有独特的key，重复的key会造成渲染错误
      v-for中的key
    ```
    <ul>
        <li v-for="item in items" :key="item.id" ></li>
    </ul>
    ```
    也可以用于强制替换元素/组件而不是重复的使用它。以下场景比较适合：
     1. 完整的触发组件的生命周期的钩子
     2. 触发过渡
    ```
        <transition>
            <span :key="text">{{ text }}</span>
        </transition>
    ```
