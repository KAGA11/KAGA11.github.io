"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="\u521b\u5efa\u9875\u9762",p={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"\u521b\u5efa\u9875\u9762",description:"\u5c06Markdown \u6216 React\u6587\u4ef6\u6dfb\u52a0\u5230src/pages\u4ee5\u521b\u5efa\u72ec\u7acb\u9875\u9762\uff1a",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"\u521b\u5efa\u6587\u7ae0",permalink:"/docs/tutorial-basics/create-a-document"}},l={},c=[{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684React Page",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684react-page",level:2},{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Markdown Page",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684markdown-page",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u521b\u5efa\u9875\u9762"},"\u521b\u5efa\u9875\u9762"),(0,n.kt)("p",null,"\u5c06",(0,n.kt)("strong",{parentName:"p"},"Markdown \u6216 React"),"\u6587\u4ef6\u6dfb\u52a0\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages"),"\u4ee5\u521b\u5efa",(0,n.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u9875\u9762"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684react-page"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684React Page"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2ajs\u6587\u4ef6\uff1a ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"\u8def\u5f84\u4e3a:  ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684markdown-page"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Markdown Page"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"md"),"\u5bf9\u5e94markdown\u6587\u4ef6, ",(0,n.kt)("inlineCode",{parentName:"p"},"mdx"),"\u53ef\u4ee5\u5d4c\u5165React\u7ec4\u4ef6"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2amd\u6587\u4ef6\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"\u8def\u5f84\u4e3a:   ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);