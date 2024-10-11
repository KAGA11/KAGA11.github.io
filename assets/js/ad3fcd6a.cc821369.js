"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,c=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},i=void 0,p={unversionedId:"\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5",id:"\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5",title:"HTTP\u8bf7\u6c42\u65b9\u6cd5",description:"HTTP\u8bf7\u6c42\u65b9\u6cd5",source:"@site/docs/\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5.md",sourceDirName:"\u7f51\u7edc",slug:"/\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5",permalink:"/docs/\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7f51\u7edc/HTTP\u8bf7\u6c42\u65b9\u6cd5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HTTP \u8bf7\u6c42\u7684\u57fa\u672c\u6d41\u7a0b",permalink:"/docs/\u7f51\u7edc/HTTP \u8bf7\u6c42\u7684\u57fa\u672c\u6d41\u7a0b"},next:{title:"HTTP\u54cd\u5e94\u72b6\u6001\u7801",permalink:"/docs/\u7f51\u7edc/HTTP\u54cd\u5e94\u72b6\u6001\u7801"}},o={},u=[{value:"1. GET",id:"1-get",level:2},{value:"\u7528\u9014",id:"\u7528\u9014",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"2. POST",id:"2-post",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-1",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"3. PUT",id:"3-put",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-2",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-2",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"4. PATCH",id:"4-patch",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-3",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-3",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"5. DELETE",id:"5-delete",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-4",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-4",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:3},{value:"6. OPTIONS",id:"6-options",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-5",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:3},{value:"7. HEAD",id:"7-head",level:2},{value:"\u7528\u9014",id:"\u7528\u9014-6",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f-6",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:3}],k={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HTTP\u8bf7\u6c42\u65b9\u6cd5")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GET"),"\uff1a\u7528\u4e8e\u68c0\u7d22\u6570\u636e\uff0c\u65e0\u526f\u4f5c\u7528\uff0c\u5b89\u5168\u4e14\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"POST"),"\uff1a\u7528\u4e8e\u521b\u5efa\u65b0\u8d44\u6e90\uff0c\u975e\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PUT"),"\uff1a\u7528\u4e8e\u66f4\u65b0\u6216\u66ff\u6362\u8d44\u6e90\uff0c\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"PATCH"),"\uff1a\u7528\u4e8e\u90e8\u5206\u66f4\u65b0\u8d44\u6e90\uff0c\u901a\u5e38\u8bbe\u8ba1\u4e3a\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DELETE"),"\uff1a\u7528\u4e8e\u5220\u9664\u8d44\u6e90\uff0c\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"OPTIONS"),"\uff1a\u7528\u4e8e\u67e5\u8be2\u652f\u6301\u7684HTTP\u65b9\u6cd5\u548c\u5176\u4ed6\u901a\u4fe1\u9009\u9879\uff0c\u975e\u5e42\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HEAD"),"\uff1a\u7528\u4e8e\u83b7\u53d6\u8d44\u6e90\u7684\u5934\u90e8\u4fe1\u606f\uff0c\u65e0\u526f\u4f5c\u7528\uff0c\u5b89\u5168\u4e14\u5e42\u7b49\u3002")),(0,l.kt)("h2",{id:"1-get"},"1. GET"),(0,l.kt)("h3",{id:"\u7528\u9014"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u68c0\u7d22"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),"\u65b9\u6cd5\u7528\u4e8e\u4ece\u670d\u52a1\u5668\u68c0\u7d22\u8d44\u6e90\u6570\u636e\u3002\u5b83\u4e0d\u5e94\u5bf9\u670d\u52a1\u5668\u4e0a\u7684\u8d44\u6e90\u4ea7\u751f\u4efb\u4f55\u526f\u4f5c\u7528\uff0c\u5373\u4e0d\u5e94\u4fee\u6539\u6216\u521b\u5efa\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b89\u5168\u4e14\u5e42\u7b49"),"\uff1a\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),"\u8bf7\u6c42\u4e0d\u4f1a\u6539\u53d8\u670d\u52a1\u5668\u72b6\u6001\uff0c\u5b83\u88ab\u8ba4\u4e3a\u662f",(0,l.kt)("strong",{parentName:"li"},"\u5b89\u5168"),"\u7684\uff0c\u5e76\u4e14\u591a\u6b21\u76f8\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),"\u8bf7\u6c42\u5c06\u4ea7\u751f\u76f8\u540c\u7684\u6548\u679c\uff0c\u8fd9\u4f7f\u5176\u6210\u4e3a",(0,l.kt)("strong",{parentName:"li"},"\u5e42\u7b49"),"\u7684\u8bf7\u6c42\u65b9\u6cd5\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u8d44\u6e90\u7684\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7279\u5b9a\u8d44\u6e90\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"GET /books HTTP/1.1\nHost: api.example.com\nAccept: application/json\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n[\n    {\n        "id": 1,\n        "title": "\u300aJavaScript\u6743\u5a01\u6307\u5357\u300b",\n        "author": "David Flanagan",\n        "publishedYear": 2020\n    },\n    {\n        "id": 2,\n        "title": "\u300a\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\u300b",\n        "author": "Kyle Simpson",\n        "publishedYear": 2019\n    }\n]\n')),(0,l.kt)("h2",{id:"2-post"},"2. POST"),(0,l.kt)("h3",{id:"\u7528\u9014-1"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u521b\u5efa"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"POST"),"\u65b9\u6cd5\u7528\u4e8e\u5411\u670d\u52a1\u5668\u63d0\u4ea4\u6570\u636e\uff0c\u4ee5\u521b\u5efa\u65b0\u7684\u8d44\u6e90\u3002\u5b83\u901a\u5e38\u7528\u4e8e\u8868\u5355\u63d0\u4ea4\u3001\u6587\u4ef6\u4e0a\u4f20\u7b49\u573a\u666f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u975e\u5e42\u7b49"),"\uff1a\u6bcf\u6b21\u53d1\u9001",(0,l.kt)("inlineCode",{parentName:"li"},"POST"),"\u8bf7\u6c42\u90fd\u4f1a\u5728\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8d44\u6e90\uff0c\u56e0\u6b64\u5b83\u4e0d\u662f\u5e42\u7b49\u7684\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-1"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7528\u6237\u3001\u6587\u7ae0\u3001\u8ba2\u5355\u7b49\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u8868\u5355\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'POST /books HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\nAuthorization: Bearer your-jwt-token\n\n{\n    "title": "\u300aNode.js\u5b9e\u6218\u300b",\n    "author": "Mike Cantelon",\n    "publishedYear": 2021\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 201 Created\nLocation: https://api.example.com/books/3\nContent-Type: application/json\n\n{\n    "id": 3,\n    "title": "\u300aNode.js\u5b9e\u6218\u300b",\n    "author": "Mike Cantelon",\n    "publishedYear": 2021\n}\n')),(0,l.kt)("h2",{id:"3-put"},"3. PUT"),(0,l.kt)("h3",{id:"\u7528\u9014-2"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u66f4\u65b0/\u66ff\u6362"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"PUT"),"\u65b9\u6cd5\u7528\u4e8e\u66f4\u65b0\u6216\u66ff\u6362\u670d\u52a1\u5668\u4e0a\u7684\u73b0\u6709\u8d44\u6e90\u3002\u5b83\u901a\u5e38\u8981\u6c42\u5ba2\u6237\u7aef\u53d1\u9001\u5b8c\u6574\u7684\u8d44\u6e90\u8868\u793a\uff0c\u4ee5\u66ff\u6362\u670d\u52a1\u5668\u4e0a\u7684\u5f53\u524d\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5e42\u7b49"),"\uff1a\u591a\u6b21\u76f8\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"PUT"),"\u8bf7\u6c42\u5c06\u4ea7\u751f\u76f8\u540c\u7684\u6548\u679c\uff0c\u56e0\u6b64\u5b83\u662f\u5e42\u7b49\u7684\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-2"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u7528\u6237\u4fe1\u606f\u3001\u6587\u7ae0\u5185\u5bb9\u7b49\u5b8c\u6574\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u6362\u73b0\u6709\u8d44\u6e90\u7684\u5168\u90e8\u6570\u636e\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'PUT /books/3 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\nAuthorization: Bearer your-jwt-token\n\n{\n    "title": "\u300aNode.js\u5b9e\u6218\uff08\u7b2c\u4e8c\u7248\uff09\u300b",\n    "author": "Mike Cantelon",\n    "publishedYear": 2022\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "id": 3,\n    "title": "\u300aNode.js\u5b9e\u6218\uff08\u7b2c\u4e8c\u7248\uff09\u300b",\n    "author": "Mike Cantelon",\n    "publishedYear": 2022\n}\n')),(0,l.kt)("h2",{id:"4-patch"},"4. PATCH"),(0,l.kt)("h3",{id:"\u7528\u9014-3"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u90e8\u5206\u66f4\u65b0\u8d44\u6e90"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH"),"\u65b9\u6cd5\u7528\u4e8e\u5bf9\u670d\u52a1\u5668\u4e0a\u7684\u73b0\u6709\u8d44\u6e90\u8fdb\u884c\u90e8\u5206\u4fee\u6539\u3002\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"PUT"),"\u4e0d\u540c\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH"),"\u4e0d\u9700\u8981\u53d1\u9001\u8d44\u6e90\u7684\u5b8c\u6574\u8868\u793a\uff0c\u53ea\u9700\u53d1\u9001\u9700\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u975e\u5e42\u7b49"),"\uff08\u89c6\u5177\u4f53\u5b9e\u73b0\u800c\u5b9a\uff09\uff1a\u867d\u7136",(0,l.kt)("inlineCode",{parentName:"li"},"PATCH"),"\u65b9\u6cd5\u672c\u8eab\u5e76\u4e0d\u4fdd\u8bc1\u5e42\u7b49\u6027\uff0c\u4f46\u5728\u5927\u591a\u6570\u5b9e\u73b0\u4e2d\uff0c\u5b83\u53ef\u4ee5\u88ab\u8bbe\u8ba1\u4e3a\u5e42\u7b49\u7684\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-3"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u8d44\u6e90\u7684\u90e8\u5206\u5b57\u6bb5\uff0c\u5982\u4fee\u6539\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6216\u66f4\u6539\u6587\u7ae0\u7684\u6807\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u9ad8\u6548\u4f20\u8f93\u6570\u636e\uff0c\u53ea\u53d1\u9001\u53d8\u5316\u7684\u90e8\u5206\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'PATCH /books/3 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\nAuthorization: Bearer your-jwt-token\n\n{\n    "publishedYear": 2023\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "id": 3,\n    "title": "\u300aNode.js\u5b9e\u6218\uff08\u7b2c\u4e8c\u7248\uff09\u300b",\n    "author": "Mike Cantelon",\n    "publishedYear": 2023\n}\n')),(0,l.kt)("h2",{id:"5-delete"},"5. DELETE"),(0,l.kt)("h3",{id:"\u7528\u9014-4"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u5220\u9664"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE"),"\u65b9\u6cd5\u7528\u4e8e\u5220\u9664\u670d\u52a1\u5668\u4e0a\u7684\u6307\u5b9a\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5e42\u7b49"),"\uff1a\u591a\u6b21\u53d1\u9001\u76f8\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE"),"\u8bf7\u6c42\u5c06\u4ea7\u751f\u76f8\u540c\u7684\u6548\u679c\uff0c\u5373\u5220\u9664\u8d44\u6e90\uff08\u5982\u679c\u8d44\u6e90\u5df2\u5220\u9664\uff0c\u518d\u6b21\u5220\u9664\u4e0d\u4f1a\u6709\u526f\u4f5c\u7528\uff09\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-4"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u7528\u6237\u8d26\u6237\u3001\u6587\u7ae0\u3001\u8ba2\u5355\u7b49\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u4e0d\u518d\u9700\u8981\u7684\u6216\u9519\u8bef\u7684\u8d44\u6e90\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"DELETE /books/3 HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer your-jwt-token\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 204 No Content\n")),(0,l.kt)("h2",{id:"6-options"},"6. OPTIONS"),(0,l.kt)("h3",{id:"\u7528\u9014-5"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u67e5\u8be2\u652f\u6301\u7684HTTP\u65b9\u6cd5\u548c\u5176\u4ed6\u9009\u9879"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"OPTIONS"),"\u65b9\u6cd5\u7528\u4e8e\u63cf\u8ff0\u76ee\u6807\u8d44\u6e90\u7684\u901a\u4fe1\u9009\u9879\u3002\u5b83\u5e38\u7528\u4e8eCORS\u7684\u9884\u68c0\u8bf7\u6c42\uff0c\u4ee5\u786e\u5b9a\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8\u5b9e\u9645\u7684\u8de8\u57df\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u975e\u5e42\u7b49"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"OPTIONS"),"\u8bf7\u6c42\u4e0d\u4f1a\u6539\u53d8\u670d\u52a1\u5668\u72b6\u6001\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-5"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0CORS\u7684\u9884\u68c0\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u670d\u52a1\u5668\u652f\u6301\u54ea\u4e9bHTTP\u65b9\u6cd5\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"OPTIONS /books/1 HTTP/1.1\nHost: api.example.com\nOrigin: https://frontend.example.com\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: Content-Type, Authorization\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 204 No Content\nAccess-Control-Allow-Origin: https://frontend.example.com\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Max-Age: 86400\n")),(0,l.kt)("h2",{id:"7-head"},"7. HEAD"),(0,l.kt)("h3",{id:"\u7528\u9014-6"},"\u7528\u9014"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u83b7\u53d6\u8d44\u6e90\u7684\u5934\u90e8\u4fe1\u606f"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"HEAD"),"\u65b9\u6cd5\u7c7b\u4f3c\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),"\uff0c\u4f46\u670d\u52a1\u5668\u53ea\u8fd4\u56de\u54cd\u5e94\u5934\u90e8\uff0c\u4e0d\u5305\u542b\u54cd\u5e94\u4f53\u3002\u5b83\u7528\u4e8e\u68c0\u67e5\u8d44\u6e90\u7684\u5143\u6570\u636e\uff0c\u5982\u5185\u5bb9\u7c7b\u578b\u3001\u5185\u5bb9\u957f\u5ea6\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b89\u5168\u4e14\u5e42\u7b49"),"\uff1a\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),"\u65b9\u6cd5\u7c7b\u4f3c\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"HEAD"),"\u8bf7\u6c42\u4e0d\u4f1a\u5bf9\u670d\u52a1\u5668\u4e0a\u7684\u8d44\u6e90\u4ea7\u751f\u526f\u4f5c\u7528\uff0c\u5e76\u4e14\u662f\u5e42\u7b49\u7684\u3002")),(0,l.kt)("h3",{id:"\u9002\u7528\u573a\u666f-6"},"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u8d44\u6e90\u662f\u5426\u5b58\u5728\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8d44\u6e90\u7684\u66f4\u65b0\u65f6\u95f4\u6216\u5176\u4ed6\u5143\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6027\u80fd\uff0c\u901a\u8fc7\u83b7\u53d6\u5934\u90e8\u4fe1\u606f\u5224\u65ad\u662f\u5426\u9700\u8981\u4e0b\u8f7d\u5b8c\u6574\u8d44\u6e90\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"HEAD /books/1 HTTP/1.1\nHost: api.example.com\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 85\nLast-Modified: Wed, 08 Oct 2024 12:34:56 GMT\n")))}m.isMDXComponent=!0}}]);