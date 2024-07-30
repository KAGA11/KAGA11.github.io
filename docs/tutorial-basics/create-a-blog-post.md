---
sidebar_position: 3
---

# 创建笔记

Docusaurus 为每篇笔记创建一个**页面**，同时也会创建一个**博客索引页面**、一个**标签系统**、一个 **RSS** 源...

## 创建你的第一篇笔记

在 `blog/2021-02-28-greetings.md` 创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

现在可以在 http://localhost:3000/blog/greetings 访问到一篇新笔记
