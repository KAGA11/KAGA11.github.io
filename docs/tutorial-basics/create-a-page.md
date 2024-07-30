---
sidebar_position: 1
---

# 创建页面

将**Markdown 或 React**文件添加到`src/pages`以创建**独立页面**：

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建一个新的React Page

创建一个js文件： `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

路径为:  [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## 创建一个新的Markdown Page

`md`对应markdown文件, `mdx`可以嵌入React组件

创建一个md文件：`src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

路径为:   [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
