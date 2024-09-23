---
sidebar_position: 1
---
# Web 开发中的图片优化

本文主要聚焦图片的优化

---

### 1. 基本概念: 不同的图片格式

目前应用较为广泛的 Web 图片格式有 JPEG/JPG、PNG、SVG、WebP 等, 以下是对这些类型的简单介绍:

- **JPEG/JPG**：JPEG 是一种**有损压缩**格式，体积小、加载快、不支持透明。
  
- **PNG**：PNG 是一种**无损压缩**格式，通常用于需要**透明度**的图像或需要精确显示质量的图形（如图标、logo）。
  
- **SVG**：SVG 是基于 XML 的矢量图格式，适合图标、标志和其他需要缩放的图形。由于 SVG 是矢量格式，它在任何分辨率下都能保持清晰，并且文件大小通常很小，非常适合用于响应式设计。

- **WebP**：WebP 是一种现代的图片格式，支持有损和无损压缩，并且具有更好的压缩率。与 JPEG 和 PNG 相比，WebP 通常能在保持相似图像质量的情况下提供更小的文件大小，因而被越来越多地用于提高页面加载性能。

---

### 2. JPEG/JPG

关键字：**有损压缩、体积小、加载快、不支持透明**

#### JPG 的优点

JPG 最大的特点是**有损压缩**。这种高效的压缩算法使它成为了一种非常轻巧的图片格式。另一方面，即使被称为“有损”压缩，JPG的压缩方式仍然是一种高质量的压缩方式：当我们把图片体积压缩至原有体积的 50% 以下时，JPG 仍然可以保持住 60% 的品质。JPG 格式足以应对大多数场景下对色彩的要求，这一点决定了它压缩前后的质量损耗并不容易被我们人类的肉眼所察觉。

#### 使用场景

JPG 适用于呈现色彩丰富的图片，在我们日常开发中，JPG 图片经常作为大的背景图、轮播图或 Banner 图出现。

以淘宝首页为例: 对大图的处理，是 JPG 图片应用场景的最佳写照：

![taobao_jpg](/Blog_img/taobao_jpg.jpg)



打开淘宝首页，我们可以发现页面中最醒目、最庞大的图片，一定是以 .jpg 为后缀的

#### JPG 的缺陷

有损压缩在上文所展示的轮播图上确实很难露出马脚，但当它处理**矢量图形**和 **Logo** 等线条感较强、颜色对比强烈的图像时，人为压缩导致的图片模糊会相当明显。

此外，JPEG 图像**不支持透明度处理**，透明图片需要召唤 PNG 来呈现。

---



### 3. PNG

关键字：**无损压缩、体积大、加载慢、支持透明**

#### PNG 的优点

PNG是一种**无损压缩**的高保真的图片格式。PNG 图片具有比 JPG 更强的色彩表现力，对线条的处理更加细腻，对透明度有良好的支持。它弥补了我们提到的 JPG 的局限性，唯一的问题就是**体积太大**。

#### 使用场景

PNG 有在处理线条和颜色对比度方面的优势，我们主要用它来呈现小的 **Logo**、**颜色简单**且对比强烈的图片或**背景**等。

前面我们提到，复杂的、色彩层次丰富的图片，用 PNG 来处理的话，成本会比较高，我们一般会交给 JPG 去存储。

以淘宝首页为例: 会发现它页面上的 Logo是 PNG 格式：

![taobao_png](/Blog_img/taobao_png.jpg)

#### PNG 的缺陷

PNG 的主要缺点是**文件体积较大**，尤其是用于复杂图像时，加载速度会变慢，这对网页的性能优化不利。因此，PNG 通常不适合用来存储大尺寸的彩色图片或背景图。





### 4.SVG

关键字：**文本文件、体积小、不失真、兼容性好**

SVG是一种基于 XML 语法的图像格式。它和其它图片种类有着本质的不同：SVG 对图像的处理不是基于像素点，而是是基于对图像的形状描述。

#### SVG 的优点

SVG 是一种基于**矢量**的图像格式，意味着它不会因为缩放而失真。由于 SVG 是以 XML 形式存储图像信息，文件非常小，并且可以在 HTML 文档中直接嵌入，支持 DOM 操作和样式修改。SVG 还支持动画，使其在网页中动态展示图形非常方便。

#### 使用场景

SVG 广泛用于图标、Logo、图形和插图，尤其是在需要适配多种分辨率时。响应式设计中，SVG 是首选的图像格式。

#### SVG 的缺陷

SVG 的复杂性较高，渲染需要一定的计算开销，对于非常复杂的图形，其渲染性能可能会受到影响。此外，对于处理像素图像（如照片），SVG 并不适合。



### 5. WebP

关键字：**有损/无损压缩、体积小、兼容性、支持透明**

#### WebP 的优点

WebP 是一种现代图片格式，支持**有损和无损压缩**，并且提供比 JPG 和 PNG 更优的压缩效率。相较于 JPG，WebP 在相同的质量下能够生成更小的文件，且支持透明度，这使得它能够替代 PNG 的很多使用场景。WebP 在页面加载速度上有显著优势，特别是在优化移动端性能时效果明显。

#### 使用场景

WebP 适用于网页中的各种图片资源，如背景图、产品图、图标等。在性能敏感的场景中，WebP 能够显著提升加载速度，同时保证图像质量。

#### WebP 的缺陷

WebP 的主要缺陷是浏览器的**兼容性**问题。尽管现代浏览器大部分已经支持 WebP，但在一些老旧版本的浏览器上可能无法正确显示 WebP 图片。

![webp_supprt](/Blog_img/webp_supprt.png)

​											webp的支持情况

---



### Lazy-load

懒加载用于延迟加载页面上的图片资源，直到用户滚动到图片可见的区域时才开始加载。这样做可以提高网页的初始加载速度，减少带宽消耗

#### 懒加载实现

#### Scroll

```html
<script>
    // 获取所有的图片标签
    const imgs = document.getElementsByTagName('img')
    // 获取可视区域的高度
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    // num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
    let num = 0
    function lazyload(){
        for(let i=num; i<imgs.length; i++) {
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0 ){
                // 给元素写入真实的src，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
                num = i + 1
            }
        }
    }
    // 监听Scroll事件
    window.addEventListener('scroll', lazyload, false);
</script>
```

这是一个最基本的懒加载功能。但是大家要注意一点：这个 scroll 事件，是一个**危险**的事件——它太容易被触发了。试想，用户在访问网页的时候，是不是可以无限次地去触发滚动？尤其是一个页面死活加载不出来的时候，疯狂调戏鼠标滚轮的用户可不在少数       

再回头看看我们上面写的代码。按照我们的逻辑，每一次滚动都将触发我们的监听函数。函数执行是吃性能的，频繁地响应某个事件将造成大量不必要的页面计算。这就引出了我们另一个API **IntersectionObserver** 



#### IntersectionObserver

这是一个异步 API，它并不会在每次滚动时频繁触发计算，而是只在指定的条件下触发（如元素进入视口的某个百分比），极大地减少了不必要的 DOM 计算，优化了性能。

```html
<div class="container">
    <img data-src="./TAT.png" alt="Lazy loaded image 1">
    <img data-src="./TAT.png" alt="Lazy loaded image 2">
    <img data-src="./TAT.png" alt="Lazy loaded image 3">
    <img data-src="./TAT.png" alt="Lazy loaded image 4">
</div>

<script>
    const images = document.querySelectorAll('img');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                setTimeout(() => {
                    img.src = img.dataset.src;
                    console.log(`Image loaded: ${img.src}`);
                }, 1000); // 模拟网络请求1秒延迟加载
                observer.unobserve(img); // 取消观察，避免重复加载
            }
        });
    };

    // 配置IntersectionObserver的属性: 只有当图片进入视口 20% 时触发加载
    const observerOptions = {
        root: null, // 基于视口
        rootMargin: '0px',
        threshold: 0.2 // 图片进入视口 20% 时触发
    };

    const observer = new IntersectionObserver(lazyLoad, observerOptions);
    // 观察每个图片
    images.forEach(img => {
        observer.observe(img);
    });
</script>
```



此外如果需要针对那些有可能被**频繁触发**的事件作进一步地优化。我会在debounce和throttle讲述

