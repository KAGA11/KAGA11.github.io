### Position

**CSS中`position`属性的总结：**

1. **static**：元素按照文档流的默认位置排列。
2. **relative**：元素仍在文档流中，但可以通过`top`, `left`等偏移。
3. **absolute**：元素脱离文档流，相对于最近的非`static`祖先定位。
4. **fixed**：元素脱离文档流，相对于浏览器窗口固定定位。
5. **sticky**：结合`relative`和`fixed`，在滚动到一定位置时变为`fixed`。



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      color: #fff;
      font-size: 12px;
    }
    .parent{
      position: relative;
      height: 800px;
      width: 1000px;
      border: 1px solid black;
    }
    .brother{
      position: relative;
      width: 200px;
      height: 200px;
      background-color: blue;
    }
    .inner{
      position: absolute;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: darkorange;
    }
    .box{
      position: fixed;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: darkblue;
    }
    .test{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: red;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="brother">
      <div class="inner">absolute相对于最近的非static祖先定位(brother)</div>
      <div class="box">fixed相对于浏览器窗口固定定位</div>
    </div>
    <div class="test">absolute相对于最近的非static祖先定位(parent)</div>
  </div>
</body>
</html>
```

