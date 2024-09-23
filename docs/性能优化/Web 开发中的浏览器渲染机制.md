---
sidebar_position: 3
---

# Web 开发中的浏览器渲染机制

本文主要聚焦浏览器渲染机制

---

### 基本概念: 浏览器的渲染机制

浏览器内核可以分成两个引擎：渲染引擎和 JS 引擎。早期渲染引擎和 JS 引擎并没有十分明确的区分，但随着 JS 引擎越来越独立，内核也成了渲染引擎的代称（**下文我们将沿用这种叫法**）。渲染引擎又包括了 HTML 解释器、CSS 解释器、布局、网络、存储、图形、音视频、图片解码器等等零部件。  

### 渲染过程

在浏览器里，每一个页面的首次渲染都经历了如下阶段（图中箭头不代表串行，有一些操作是并行进行的)

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/27/16618c829b879f35~tplv-t2oaga2asx-image.image)



- 解析 HTML：浏览器从服务器获取 HTML 文件后，会开始**逐行解析** HTML 代码，并构建出 **DOM 树**

- 计算样式：解析 CSS 文档, 构建 **CSSOM 树**

- 生成渲染树:  浏览器将 **DOM 树** 和 **CSSOM 树** 结合，生成**渲染树**。渲染树中包含所有可见的元素和它们的样式（例如：隐藏的元素或 `<head>` 元素不会出现在渲染树中）。

- **布局**：布局计算每个对象的精确位置和大小。

- **绘制**：布局完成后，浏览器进入**绘制**阶段，将每个渲染树中的元素绘制到屏幕上。这包括颜色、文本、图像、边框等视觉属性。

- 图层合成: 最后一步浏览器会合并合各个图层，将数据由 CPU 输出给 GPU 最终绘制在屏幕上。

- JavaScript 引擎：编译执行 Javascript 代码。如果 HTML 文件中包含 `<script>` 标签，浏览器会在解析 DOM 的过程中**暂停渲染**，先下载并执行 JavaScript 代码，然后再继续解析 HTML。这是因为 JavaScript 可能会修改 DOM 或样式。



### 几棵重要的“树”

为了使渲染过程更明晰一些，我们需要给这些”树“们一个特写:   

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/27/16619d637d220b20~tplv-t2oaga2asx-image.image)

- DOM 树：解析 HTML 以创建的是 DOM 树（DOM tree ）：渲染引擎开始解析 HTML 文档，转换树中的标签到 DOM 节点，它被称为“内容树”。

- CSSOM 树：解析 CSS（包括外部 CSS 文件和样式元素）创建的是 CSSOM 树。CSSOM 的解析过程与 DOM 的解析过程是**并行的**。

- 渲染树：CSSOM 与 DOM 结合，之后我们得到的就是渲染树（Render tree ）。

- 布局渲染树：从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标，我们便得到了基于渲染树的布局渲染树（Layout of the render tree）。

- 绘制渲染树: 遍历渲染树，每个节点将使用 UI 后端层来绘制。整个过程叫做绘制渲染树（Painting the render tree）。



## 告别阻塞：CSS 与 JS 的加载顺序优化

HTML、CSS 和 JS，都具有**阻塞渲染**的特性。   

HTML 阻塞，天经地义——没有 HTML，何来 DOM？没有 DOM，渲染和优化，都是空谈。   

那么 CSS 和 JS 的阻塞又是怎么回事呢？   


### CSS 的阻塞

在刚刚的渲染过程中，我们提到 DOM 和 CSSOM 合力才能构建渲染树。这一点会给性能造成严重影响：默认情况下，CSS 是阻塞的资源。浏览器在构建 CSSOM 的过程中，**不会渲染任何已处理的内容**。即便 DOM 已经解析完毕了，只要 CSSOM 不 OK，那么渲染这个事情就不 OK（这主要是为了避免没有 CSS 的 HTML 页面丑陋地“裸奔”在用户眼前）。   

我们知道，只有当我们开始解析 HTML 后、解析到 link 标签或者 style 标签时，CSS 才登场，CSSOM  的构建才开始。很多时候，DOM 不得不等待 CSSOM。因此我们可以这样总结：   

> CSS 是阻塞渲染的资源。需要将它尽早、尽快地下载到客户端，以便缩短首次渲染的时间。   

事实上，现在很多项目都已经做到了尽早（将 CSS 放在 head 标签里）和尽快（启用 CDN 实现静态资源加载速度的优化）。

### JS 的阻塞

不知道大家注意到没有，前面我们说过程的时候，花了很多笔墨去说 HTML、说 CSS。相比之下，JS 的出镜率也太低了点。   
这当然不是因为 JS 不重要。而是因为，在首次渲染过程中，JS 并不是一个非登场不可的角色——没有 JS，CSSOM 和 DOM 照样可以组成渲染树，页面依然会呈现——即使它死气沉沉、毫无交互。   

JS 的作用在于**修改**，它帮助我们修改网页的方方面面：内容、样式以及它如何响应用户交互。这“方方面面”的修改，本质上都是对 DOM 和 CSSDOM 进行修改。因此 JS 的执行会阻止 CSSOM，在我们不作显式声明的情况下，它也会阻塞 DOM。

#### 案例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>JS阻塞测试</title>
  <style>
    #container {
      background-color: yellow;
      width: 100px;
      height: 100px;
    }
  </style>
  <script>
    var container = document.getElementById("container")
    // 尝试获取container元素
    console.log('container', container)
    
  </script>
</head>
<body>
  <div id="container"></div>
  <script>
    var container = document.getElementById("container")
    // 尝试获取container元素
    console.log('container', container)
    // 输出container元素此刻的背景色
    console.log('container bgColor', getComputedStyle(container).backgroundColor)
  </script>
  <style>
    #container {
      background-color: blue;
    }
  </style>
</body>
</html>
```

 三个 console 的结果分别为：
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/28/166203a2d62212c9~tplv-t2oaga2asx-image.image)

第一次尝试获取 id 为 container 的 DOM 失败，这说明 JS 执行时阻塞了 DOM，后续的 DOM 无法构建；第二次才成功，这说明脚本块只能找到在它前面构建好的元素。这两者结合起来，“阻塞 DOM”得到了验证。再看第三个 console，尝试获取 CSS 样式，获取到的是在 JS 代码执行前的背景色（yellow），而非后续设定的新样式（blue），说明 CSSOM 也被阻塞了。那么在阻塞的背后，到底发生了什么呢？    

我们知道，**JS 引擎是独立于渲染引擎存在的**。我们的 JS 代码在文档的何处插入，就在何处执行。当 HTML 解析器遇到一个 script 标签时，它会暂停渲染过程，将控制权交给 JS 引擎。JS 引擎对内联的 JS 代码会直接执行，对外部 JS 文件还要先获取到脚本、再进行执行。等 JS 引擎运行完毕，浏览器又会把控制权还给渲染引擎，继续 CSSOM 和 DOM 的构建。 因此与其说是 JS 把 CSS 和 HTML 阻塞了，不如说是 JS 引擎抢走了渲染引擎的控制权。       

现在理解了阻塞的表现与原理，我们开始思考一个问题。浏览器之所以让 JS 阻塞其它的活动，是因为它不知道 JS 会做什么改变，担心如果不阻止后续的操作，会造成混乱。但是我们是写 JS 的人，我们知道 JS 会做什么改变。假如我们可以确认一个 JS 文件的执行时机并不一定非要是此时此刻，我们就可以通过对它使用 defer 和 async 来避免不必要的阻塞，这里我们就引出了外部 JS 的**三种加载方式**

### JS的三种加载方式 

- 正常模式： 

  ```html
  <script src="index.js"></script>
  ```

这种情况下 JS 会**阻塞**浏览器，浏览器必须等待 index.js 加载和执行完毕才能去做其它事情。   

- async 模式：

  ```html
  <script async src="index.js"></script>
  ```

async 模式下，JS **不会阻塞**浏览器做任何其它的事情。它的加载是异步的，当它加载结束，JS 脚本会**立即执行**。   

- defer 模式：

  ```html
  <script defer src="index.js"></script>
  ```

defer 模式下，JS 的加载是异步的，执行是**被推迟的**。等整个文档解析完成、DOMContentLoaded 事件即将被触发时，被标记了 defer 的 JS 文件才会开始依次执行。  



从应用的角度来说，一般当我们的脚本与 DOM 元素和其它脚本之间的依赖关系不强时，我们会选用 async；当脚本依赖于 DOM 元素和其它脚本的执行结果时，我们会选用 defer。   

通过审时度势地向 script 标签添加 async/defer，我们就可以告诉浏览器在等待脚本可用期间不阻止其它的工作，这样可以显著提升性能。   