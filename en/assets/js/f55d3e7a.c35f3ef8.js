"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Build \u548c Deploy",l={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",title:"Build \u548c Deploy",description:"\u6784\u5efa\u7f51\u7ad9",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/en/docs/tutorial-basics/deploy-your-site",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown \u529f\u80fd",permalink:"/en/docs/tutorial-basics/markdown-features"},next:{title:"\u540e\u7eed",permalink:"/en/docs/tutorial-basics/congratulations"}},s={},u=[{value:"\u6784\u5efa\u7f51\u7ad9",id:"\u6784\u5efa\u7f51\u7ad9",level:2},{value:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",id:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-\u548c-deploy"},"Build \u548c Deploy"),(0,o.kt)("h2",{id:"\u6784\u5efa\u7f51\u7ad9"},"\u6784\u5efa\u7f51\u7ad9"),(0,o.kt)("p",null,"\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u73af\u5883"),"\u6784\u5efa\u4f60\u7684\u7f51\u7ad9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"\u9759\u6001\u6587\u4ef6\u751f\u6210\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"},"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"),(0,o.kt)("p",null,"\u5728\u672c\u5730\u6d4b\u8bd5\u4f60\u7684\u751f\u4ea7\u73af\u5883\u6784\u5efa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,o.kt)("p",null,"\u5728\u8fdc\u7a0b\u90e8\u7f72\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"\u90e8\u7f72\u6307\u5357"))))}d.isMDXComponent=!0}}]);