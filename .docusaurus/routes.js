import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', 'f2e'),
    exact: true
  },
  {
    path: '/en/blog/《控糖革命》读后感',
    component: ComponentCreator('/en/blog/《控糖革命》读后感', 'a94'),
    exact: true
  },
  {
    path: '/en/blog/代码块写法',
    component: ComponentCreator('/en/blog/代码块写法', '490'),
    exact: true
  },
  {
    path: '/en/blog/二叉树 递归',
    component: ComponentCreator('/en/blog/二叉树 递归', 'f08'),
    exact: true
  },
  {
    path: '/en/blog/链表题汇总',
    component: ComponentCreator('/en/blog/链表题汇总', 'fdd'),
    exact: true
  },
  {
    path: '/en/blog/面试笔记',
    component: ComponentCreator('/en/blog/面试笔记', '01a'),
    exact: true
  },
  {
    path: '/en/blog/面试题代码',
    component: ComponentCreator('/en/blog/面试题代码', '3c9'),
    exact: true
  },
  {
    path: '/en/blog/新Mac安装指南',
    component: ComponentCreator('/en/blog/新Mac安装指南', '3ec'),
    exact: true
  },
  {
    path: '/en/blog/月报 - [25-03]',
    component: ComponentCreator('/en/blog/月报 - [25-03]', '060'),
    exact: true
  },
  {
    path: '/en/blog/周报2024-6-24',
    component: ComponentCreator('/en/blog/周报2024-6-24', '8a6'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'd52'),
    exact: true
  },
  {
    path: '/en/blog/git撤回操作指南',
    component: ComponentCreator('/en/blog/git撤回操作指南', '959'),
    exact: true
  },
  {
    path: '/en/blog/Promise',
    component: ComponentCreator('/en/blog/Promise', '21c'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/博客格式',
    component: ComponentCreator('/en/blog/tags/博客格式', '836'),
    exact: true
  },
  {
    path: '/en/blog/tags/算法',
    component: ComponentCreator('/en/blog/tags/算法', 'b09'),
    exact: true
  },
  {
    path: '/en/blog/tags/随笔',
    component: ComponentCreator('/en/blog/tags/随笔', 'b14'),
    exact: true
  },
  {
    path: '/en/blog/tags/git',
    component: ComponentCreator('/en/blog/tags/git', 'bab'),
    exact: true
  },
  {
    path: '/en/blog/tags/js',
    component: ComponentCreator('/en/blog/tags/js', '79a'),
    exact: true
  },
  {
    path: '/en/blog/tags/other',
    component: ComponentCreator('/en/blog/tags/other', '5c4'),
    exact: true
  },
  {
    path: '/en/blog/tags/weekly',
    component: ComponentCreator('/en/blog/tags/weekly', 'e29'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '31d'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '17c'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'e2e'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'c27'),
            routes: [
              {
                path: '/en/docs/网络/跨域',
                component: ComponentCreator('/en/docs/网络/跨域', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/网络/HTTP 请求的基本流程',
                component: ComponentCreator('/en/docs/网络/HTTP 请求的基本流程', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/网络/HTTP版本',
                component: ComponentCreator('/en/docs/网络/HTTP版本', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/网络/HTTP和HTTPS',
                component: ComponentCreator('/en/docs/网络/HTTP和HTTPS', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/网络/HTTP请求方法',
                component: ComponentCreator('/en/docs/网络/HTTP请求方法', '834'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/网络/HTTP响应状态码',
                component: ComponentCreator('/en/docs/网络/HTTP响应状态码', '76e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/性能优化/Web 开发中的浏览器渲染机制',
                component: ComponentCreator('/en/docs/性能优化/Web 开发中的浏览器渲染机制', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/性能优化/Web 开发中的图片优化',
                component: ComponentCreator('/en/docs/性能优化/Web 开发中的图片优化', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/性能优化/Web 开发中的网络调试和优化',
                component: ComponentCreator('/en/docs/性能优化/Web 开发中的网络调试和优化', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/网络',
                component: ComponentCreator('/en/docs/category/网络', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/性能优化',
                component: ComponentCreator('/en/docs/category/性能优化', '549'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/css',
                component: ComponentCreator('/en/docs/category/css', 'c71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/javascript',
                component: ComponentCreator('/en/docs/category/javascript', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/react',
                component: ComponentCreator('/en/docs/category/react', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---basics',
                component: ComponentCreator('/en/docs/category/tutorial---basics', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tutorial---extras',
                component: ComponentCreator('/en/docs/category/tutorial---extras', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/CSS/Flex',
                component: ComponentCreator('/en/docs/CSS/Flex', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/CSS/Position',
                component: ComponentCreator('/en/docs/CSS/Position', 'c8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/Javascript/2024-07-29-Throttle vs Debounce',
                component: ComponentCreator('/en/docs/Javascript/2024-07-29-Throttle vs Debounce', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/Javascript/2024-07-31-call_apply和bind笔记',
                component: ComponentCreator('/en/docs/Javascript/2024-07-31-call_apply和bind笔记', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/Javascript/浅拷贝与深拷贝',
                component: ComponentCreator('/en/docs/Javascript/浅拷贝与深拷贝', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/Javascript/for...of vs for...in',
                component: ComponentCreator('/en/docs/Javascript/for...of vs for...in', 'c6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/React/对于useEffect的理解',
                component: ComponentCreator('/en/docs/React/对于useEffect的理解', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/React/对于useState的理解',
                component: ComponentCreator('/en/docs/React/对于useState的理解', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/React/React的Fiber',
                component: ComponentCreator('/en/docs/React/React的Fiber', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', '536'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
