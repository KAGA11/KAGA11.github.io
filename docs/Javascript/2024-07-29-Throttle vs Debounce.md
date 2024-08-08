
# Throttle vs Debounce

防抖与节流 in jsx

```react
import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  function handleClik(){
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <hr />
      <button onClick={handleClik}>click</button>
    </>
  )
}
```



## Throttle

节流的基本思想是确保在一定时间间隔内只执行一次函数

#### 节流函数实现

```js
function throttle(func, duration) {
  let shouldWait = false;

  return function(...args) {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, duration);
    }
  };
}
```

这个 **throttle** 函数接受两个参数：

- `func`: 需要被节流的函数。
- `duration`: 节流的时间间隔（毫秒）。

函数内部使用了一个 `shouldWait` 变量来跟踪是否应该等待。当函数被调用时，如果 `shouldWait` 为 `false`，则执行函数并设置 `shouldWait` 为 `true`，然后在指定的时间间隔后重置 `shouldWait` 为 `false`



### 在 React 中使用节流函数

```react
import React, { useState, useCallback, useRef, useEffect } from 'react';

// 节流函数
function throttle(func, duration) {
  let shouldWait = false;

  return function(...args) {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(() => {
        shouldWait = false;
      }, duration);
    }
  };
}

export default function App() {
  const [duration, setDuration] = useState(500);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(0);

  // 使用 useCallback 保证 handleClick 函数在组件生命周期中不变
  const handleClickCallback = useCallback(() => {
    setCount((count) => count + 1); // 更新函数
  }, []);

  // 创建节流函数，并在 duration 变化时更新
  const throttledHandleClick = useRef( throttle(handleClickCallback, duration) );

  // 在 duration 变化时更新节流函数
  useEffect(() => {
    throttledHandleClick.current = throttle(handleClickCallback, duration);
  }, [duration, handleClickCallback]);

  const handleClick = () => {
    throttledHandleClick.current();
    setClicked((clicked) => clicked + 1);
  };

  return (
    <>
      <h3>Throttle duration: {duration}ms</h3>
      <input 
        type="range" 
        min="0" 
        max="2000" 
        defaultValue="500" 
        onChange={(e) => {setDuration(e.target.value)}}  
      />
      <br />
      <div>按钮点击了: {clicked}次</div>
      <div>事件调用了: {count}次</div>
      <hr />
      <button onClick={handleClick}>click</button>
    </>
  );
}

```



这样无论我们按下按钮多少次，在每个节流间隔（这里默认为 500ms）内，事件的调用次数不会超过一次



## Debounce

防抖函数是在数次事件中执行最后一次

#### 防抖函数实现

```react
function debounce(func, duration) {
  let timeout //用于存储计时器的 ID，以便在函数再次调用时可以清除之前的计时器

  return function (...args) {
    // effect在计时器到期时执行
    const effect = () => {
      timeout = null
      return func.apply(this, args) //执行func
    }

    clearTimeout(timeout) //清除之前的计时器，确保计时器重新开始计时
    timeout = setTimeout(effect, duration) //新的计时器
  }
}
```

这个 **debounce** 函数接受两个参数：

- 接受两个参数：`func`（需要防抖的函数）和 `duration`（防抖时间间隔）。
- 返回一个新的函数，该函数在每次调用时会清除之前的计时器，并启动一个新的计时器。

### 在 React 中使用节流函数

```react
import React, { useState, useCallback, useRef, useEffect } from 'react';

// 防抖函数
function debounce(func, duration) {
  let timeout

  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}

export default function App() {
  const [duration, setDuration] = useState(500);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(0);

  // 使用 useCallback 保证 handleClick 函数在组件生命周期中不变
  const handleClickCallback = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  // 创建防抖函数，并在 duration 变化时更新
  const debouncedHandleClick = useRef( debounce(handleClickCallback, duration) );

  // 在 duration 变化时更新防抖函数
  useEffect(() => {
    debouncedHandleClick.current = debounce(handleClickCallback, duration);
  }, [duration, handleClickCallback]);

  const handleClick = () => {
    debouncedHandleClick.current();
    setClicked((clicked) => clicked + 1);
  };

  return (
    <>
      <h3>Debounce duration: {duration}ms</h3>
      <input 
        type="range" 
        min="0" 
        max="2000" 
        defaultValue="500" 
        onChange={(e) => {setDuration(e.target.value)}}  
      />
      <br />
      <div>按钮点击了: {clicked}次</div>
      <div>事件调用了: {count}次</div>
      <hr />
      <button onClick={handleClick}>click</button>
    </>
  );
}
```

