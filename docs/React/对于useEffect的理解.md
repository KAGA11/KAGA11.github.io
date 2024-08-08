---
sidebar_position: 4
---
# 对于useEffect的理解

参考react官方文档中的useEffect教程

Effect 是 React 中的一种脱围机制。它们让你可以 “脱出” React 并使组件和一些外部系统同步，比如非 React 组件、网络请求和浏览器 DOM.

钩子函数 `useEffect` 是一个Hook，它允许我们在函数组件中处理副作用，如数据获取、订阅和手动操作DOM



### React组件的加载阶段

要理解`useEffect`，首先需要了解React组件的加载过程，分为三个主要阶段：

1. **触发**：这是组件的初始加载阶段。当应用启动时，会触发初次渲染
2. **渲染**：在这个阶段，**在进行初次渲染时,** React 会调用根组件。**对于后续的渲染,** React 会调用内部状态更新触发了渲染的函数组件。渲染是一个[纯粹的计算过程](https://zh-hans.react.dev/learn/keeping-components-pure)，不应包含任何副作用。
3. **提交**：在渲染组件之后，React 将会修改 DOM。**对于初次渲染，** React 会使用 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) DOM API 将其创建的所有 DOM 节点放在屏幕上。**对于后续的渲染，** React 将应用最少的必要操作（在渲染时计算），以使得 DOM 与最新的渲染输出相互匹配。

##### 什么是副作用？

副作用（side effects）是指在函数执行过程中对外部系统（如DOM、网络请求、本地存储等）产生影响的操作。它们通常包括但不限于以下几类：

​	1.数据获取和存储（如API请求）

​	2.订阅或取消订阅（如WebSocket连接）

​	3.手动操作DOM（如设置事件监听器）



### `useEffect` 的作用和执行时机

`useEffect` 在React的“提交”阶段运行。在组件的渲染结果已经被提交到DOM之后，`useEffect` 会被调用。这使得它成为执行副作用的理想时机，比如数据获取、订阅等。

##### 示例：使用 `useEffect` 处理视频播放控制

让我们通过一个示例来说明`useEffect`的重要性。假设有一个`VideoPlayer`组件，需要根据`isPlaying`状态控制视频的播放和暂停。

##### 错误示例：在渲染阶段操作DOM

在以下代码中，`ref.current.play()` 和 `ref.current.pause()` 会在渲染阶段执行，但此时`<video>`元素可能尚未挂载到DOM中，这样做是不对的。

```javascript
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  // 这里是错的
  if (isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
  return <video ref={ref} src={src} width="560" height="315" loop playsInline controls />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <hr />
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
```

##### 正确示例：使用 `useEffect` 在提交阶段操作DOM

```javascript
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]); // 这里的代码只会在每次渲染后，并且isPlaying的值与上次渲染不一致时执行
  return <video ref={ref} src={src} width="560" height="315" loop playsInline controls />;
}
```

`useEffect` 会把这段代码放到屏幕更新渲染之后执行, 当 `VideoPlayer` 组件渲染时（无论是否为首次渲染），都会发生以下事情。首先，React 会刷新屏幕，确保 `<video>` 元素已经正确地出现在 DOM 中；然后，React 将运行 Effect；最后，Effect 将根据 `isPlaying` 的值调用 `play()` 或 `pause()`



### Effect 依赖 

```javascript
useEffect(() => {
  // 这里的代码会在每次渲染后执行 不加可能会死循环
});

useEffect(() => {
  // 这里的代码只会在组件挂载后执行
}, []);

useEffect(() => {
  //这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行
}, [a, b]);
```

##### 什么是挂载

如上文所说在React中，**组件**的生命周期可以分为几个关键阶段：**触发**、**渲染**和**提交**。其中提交阶段又可以分成三个子阶段:

1.**挂载 (mount)**：组件首次插入DOM中。

2.**更新(update)**：组件的props或state发生变化，导致重新渲染，并应用变化到DOM中。

3.**卸载(unmount)**：组件从DOM中移除。

**注意**：上面是组件的生命周期。Effect 与组件有不同的生命周期。组件可以挂载、更新或卸载。Effect 只能做两件事：开始同步某些东西，然后停止同步它。如果 Effect 依赖于随时间变化的 props 和 state，这个循环可能会发生多次。



### 按需添加清理（cleanup）函数 

### 理解 `useEffect` 的清理函数

在React中，`useEffect`是一个功能强大的Hook，它允许我们在函数组件中处理副作用。除了处理副作用之外，`useEffect`还提供了一种机制来清理这些副作用，以避免内存泄漏或其他潜在的问题。这个机制就是`useEffect`的清理函数。

#### 什么是清理函数？

清理函数是`useEffect`返回的一个函数，这个函数会在组件卸载或副作用重新执行之前被调用。清理函数的主要作用是：

- 取消订阅
- 关闭连接
- 清理计时器
- 解除事件监听器

通过清理函数，React可以确保在组件卸载或副作用重新执行时，所有相关的副作用都会被正确地清理掉。

#### 使用清理函数的示例

我们通过一个计时器的例子来说明清理函数的使用。假设我们有一个计时器组件，每秒钟更新一次时间：

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // 返回一个清理函数
    return () => clearInterval(interval);
  }, []); // 空依赖数组表示这个Effect只在挂载和卸载时执行

  return <div>Count: {count}</div>;
}

export default Timer;
```

在这个例子中，我们设置了一个计时器，每秒钟更新一次`count`。为了确保在组件卸载时清理计时器，我们在`useEffect`中返回了一个清理函数`clearInterval(interval)`。当组件卸载时，React会调用这个清理函数，从而清理掉计时器。

#### 清理函数的执行时机

清理函数会在以下两种情况下执行：

1. **组件卸载时**：当组件从DOM中移除时，React会调用清理函数来清理副作用。
2. **副作用重新执行前**：当依赖数组中的某个值发生变化时，React会在执行新的副作用之前先调用上一次副作用的清理函数。

让我们通过一个示例来说明第二种情况：

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setData(data);
        }
      });

    // 返回一个清理函数
    return () => {
      isMounted = false;
    };
  }, [url]); // 依赖数组包含 url，当 url 变化时，副作用会重新执行

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;
```

在这个示例中，当`url`发生变化时，`useEffect`会重新执行。为了避免在组件卸载或`url`变化时引发的数据竞争（data race), 通常会设置一个**标识符**（ismounted）, 将`isMounted`设置为`false`。这样可以确保只有在组件仍然挂载时才会更新数据。





