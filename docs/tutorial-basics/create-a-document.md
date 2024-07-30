---
sidebar_position: 2
---

# 创建文章

文档是通过以下方式连接的**页面组**：

- 一个**侧边栏(sidebar)**
- **上一页/下一页**
- **版本**

## 创建第一个文档

在 `docs/hello.md` 创建一个 Markdown 文件：

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

现在可以在 http://localhost:3000/docs/hello 访问到一个新文档

## 配置侧边栏

Docusaurus 会自动从 `docs` 文件夹**创建侧边栏**

添加元数据以自定义侧边栏标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在 `sidebars.js` 中显式创建侧边栏：

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
