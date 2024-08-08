---
sidebar_position: 1
---

### 对于useState的理解  参考[React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

hooks 中的状态管理都是关于数组的

```jsx
function createComponent() {
  let componentState = []; // 每个组件实例的状态数组  在 React 内部 这个不是直接暴露给开发者的
  let currentStateIndex = 0; // 当前状态的索引

  function useState(initialState) {
    const state = componentState[currentStateIndex] || initialState;

    const setState = (newState) => {
      componentState[currentStateIndex] = newState; // 更新状态
      render(); // 触发重新渲染（简化版，不是实际实现）
    };

    componentState[currentStateIndex] = state;
    currentStateIndex++;
    
    return [state, setState];
  }

  function RenderFunctionComponent() {
    const [firstName, setFirstName] = useState("Rudi");
    const [lastName, setLastName] = useState("Yardley");

    return (
      <button onClick={() => setFirstName("Fred")}>Fred</button>
    );
  }

  function render() {
    currentStateIndex = 0; // 重置索引
    // 渲染组件
    RenderFunctionComponent();
  }

  return { render };
}

// 创建组件实例
const componentInstance = createComponent();

// 模拟组件初始渲染
componentInstance.render();
```

步骤

### 1.初始化

​	创建两个空数组：state 和 setters, cursor这里代表的是索引值

​	在初始化时，React 会创建一个内部的状态数组 `componentState(作用域在组件内)` 和索引值。在每次渲染组件时，React 会通过调用 `useState` 来管理状态，并通过索引值来跟踪每个状态。



​	![img](https://miro.medium.com/v2/resize:fit:1280/1*LAZDuAEm7nbcx0vWVKJJ2w.png)

### 2. 第一次渲染

​         每个 `useState()` 调用在首次运行时，会将 setter 函数推送到 `setters` 数组，然后将状态推送到 `state` 

​	 调用`useState("Rudi")` 时，`componentState` 数组为空，所以 `componentState[0]` 被初始化为 `"Rudi"`。

​	 调用 `useState("Yardley")` 时，`componentState[1]` 被初始化为 `"Yardley"`。

#### 内部实现细节

1. **状态存储**： React 通过一个内部的**状态数组**来存储组件的所有状态。每次调用 `useState`，React 会从这个数组中获取当前状态值并返回。
2. **状态更新**： 当调用 `setState` 时，React 会更新状态数组中对应的状态值，并触发组件重新渲染。在重新渲染时，React 会再次从状态数组中读取最新的状态值。

![img](https://miro.medium.com/v2/resize:fit:1260/1*8TpWnrL-Jqh7PymLWKXbWg.png)

内部数组中index = 0对应的是'Rudi', index = 1 对应的'Yardley'

### 3.后续渲染(状态更新)

   调用 `setState` 函数时，会更新数组中的状态值并触发重新渲染。 每次后续渲染都会重置，并且仅从每个数组读取这些值。

   在这里调用 `setFirstName("Fred")` 时，`componentState[0]`(就是图中的state 命名不同) 被更新为 `"Fred"`

![img](https://miro.medium.com/v2/resize:fit:1260/1*3L8YJnn5eV5ev1FuN6rKSQ.png)

#####    关键点

1. **每次渲染时，状态数组中的索引值会重置为 0**：这样确保每次渲染时，`useState` 会按照相同的顺序被调用，并从状态数组中正确地获取对应的状态值。
2. **状态更新机制**：调用 `setState` 时，React 会更新状态数组中的值，并触发组件重新渲染。
3. **状态历史记录**：React 并不会自动记录状态的历史。状态更新时，新的状态值会直接覆盖掉旧的状态值，状态数组中只会保留当前的状态值。





