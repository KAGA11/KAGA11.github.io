#### Flex 容器属性

Flex 容器属性主要用于定义 Flex 项目在容器中的排列方式、对齐方式和换行行为。

##### 1. `flex-direction`

定义 Flex 项目在主轴（默认是水平方向）上的排列方向。

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上端。
- `column-reverse`：主轴为垂直方向，起点在下端。

##### 2. `flex-wrap`

控制 Flex 项目是否在一行内显示，还是换行显示。

- `nowrap`（默认值）：所有 Flex 项目在一行内显示，不换行。
- `wrap`：Flex 项目换行显示。
- `wrap-reverse`：Flex 项目反方向换行显示。

##### 3. `flex-flow`

`flex-direction` 和 `flex-wrap` 的简写属性

```css
.container {
  flex-flow: row wrap;
}
```

##### 4. `justify-content`

定义 Flex 项目在主轴上的对齐方式。

- `flex-start`（默认值）：左对齐。
- `flex-end`：右对齐。
- `center`：居中对齐。
- `space-between`：均匀排列每个元素首个元素放置于起点，末尾元素放置于终点(一般来说第一个的左边和最后一个右边没有空隙)
- `space-around`：项目两侧的间隔相等，每个元素周围分配相同的空间(每个左右都有空隙)
- `space-evenly`：项目之间的间隔均等。

```css
.container {
  justify-content: center;
}
```

##### 5. `align-items`

定义 Flex 项目在交叉轴（与主轴垂直的轴）上的对齐方式。

- `stretch`（默认值）：拉伸以填满容器。
- `flex-start`：与容器的起点对齐。
- `flex-end`：与容器的终点对齐。
- `center`：居中对齐。
- `baseline`：项目的基线对齐。

```css
.container {
  align-items: center;
}
```

##### 6. `align-content`

定义多行 Flex 项目在交叉轴上的对齐方式。仅在有多行项目时有效。

- `stretch`（默认值）：拉伸以填满容器。
- `flex-start`：与容器的起点对齐。
- `flex-end`：与容器的终点对齐。
- `center`：居中对齐。
- `space-between`：行之间的间隔相等，首尾对齐。
- `space-around`：行两侧的间隔相等。

```css
.container {
  align-content: space-between;
}
```

---



#### Flex 项目属性

Flex 项目属性用于控制单个 Flex 项目的尺寸和对齐方式。

##### 1. `flex-grow`

定义 Flex 项目如何在主轴上放大，以填满容器的剩余空间。默认值为 `0`，即不放大。

##### 2. `flex-shrink`

定义 Flex 项目如何在主轴上缩小，以适应容器的空间。默认值为 `1`，即允许缩小， `0` 表示不缩小

##### 3. `flex-basis`

定义 Flex 项目在分配多余空间之前，占据主轴方向的初始大小。可以是长度单位（如 `px`、`em`）或 `auto`（默认值）。

##### 4. `flex`

是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写，常用于快速设置这三个属性。

- `flex: none` 等同于 `flex-grow: 0; flex-shrink: 0; flex-basis: auto;`
- `flex: auto` 等同于 `flex-grow: 1; flex-shrink: 1; flex-basis: auto;`
- `flex: 1` 等同于 `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`



有多个flex属性时，会按flex的数值等比例占据空间, 比如`left` 的 `flex：1` ， `right` 的 `flex:3`. 那么left占据25%，right占据75%

同样，给`flex-shrink`设置left 为1，right为3， 右边会以3倍的比例缩小

---



## 场景：设计一个左边定宽500px 右边自适应的布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flexbox 示例</title>
  <style>
    .container {
      height: 100vh;
      display: flex;
    }
    .left {
      width: 500px;
      background-color: wheat;
    }
    .right {
      flex: 1;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="left">左侧（固定 500px）</div>
    <div class="right">右侧（flex: 自适应）</div>
  </div>
</body>
</html>
```

#### flex:1 等同于 `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`

让我们来探寻这三个属性分别代表了什么

首先按在上述代码，当调整浏览器窗口宽度时，发现以下情况：

**`.right` 为 `flex: 1 1 0%` 时**：

缩小窗口宽度，蓝色部分（`.right`）会变小，而左侧（`.left`）保持固定的 `500px`。

**原因:**

- **`flex-grow: 1`**：`.right` 会占据容器中剩余的所有可用空间。
- **`flex-shrink: 1`**：当容器空间减少时，`.right` 可以缩小。
- **`flex-basis: 0%`**：`.right` 的初始大小为 `0`，完全依赖 `flex-grow` 来填充空间。

#### 如果修改为：`flex: 1 1 500px`

```css
.right {
  flex: 1 1 500px;
  background-color: blue;
}
```

- **`flex-grow: 1`**：`.right` 会占据容器中剩余的所有可用空间。
- **`flex-shrink: 1`**：当容器空间减少时，`.right` 可以缩小。
- **`flex-basis: 500px`**：`.right` 的初始大小为 `500px`。

**效果**：
- **容器宽度减少时**：
  - `.left` 保持 `500px`。
  
  - `.right` 也尝试保持 `500px`，但由于容器宽度不足，两者**都需要缩小**
  
    

### 如果修改为：`flex: 1 0 500px`

**`flex-shrink: 0`** 表示right不会缩小, 当我们缩小容器宽度时，会保持右侧定宽500px 优先缩小左边的宽度

### 如果修改为：`flex: 0 1 500px`

**`flex-grow: 0`** 表示right不会放大, 视口足够大时，我们能看到right没有撑满, 两个都占了500px.当我们缩小容器宽度时，两者**都需要缩小**

