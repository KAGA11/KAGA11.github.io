"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9446],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),u=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?l.createElement(v,s(s({ref:n},c),{},{components:t})):l.createElement(v,s({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const o={slug:"Promise",title:"Promise",authors:{name:"\u65f6\u96e8",title:"Promise\u7b14\u8bb0",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png"},tags:["JS"]},s="Promise\u7b14\u8bb0",a={permalink:"/blog/Promise",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-07-14-Promise\u7b14\u8bb0.md",source:"@site/blog/2023-07-14-Promise\u7b14\u8bb0.md",title:"Promise",description:"1.\u56de\u8c03\u5730\u72f1",date:"2023-07-14T00:00:00.000Z",formattedDate:"2023\u5e747\u670814\u65e5",tags:[{label:"JS",permalink:"/blog/tags/js"}],readingTime:4.69,hasTruncateMarker:!1,authors:[{name:"\u65f6\u96e8",title:"Promise\u7b14\u8bb0",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png",imageURL:"https://github.com/KAGA11.png"}],frontMatter:{slug:"Promise",title:"Promise",authors:{name:"\u65f6\u96e8",title:"Promise\u7b14\u8bb0",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png",imageURL:"https://github.com/KAGA11.png"},tags:["JS"]},prevItem:{title:"JS",permalink:"/blog/JS"},nextItem:{title:"\u4e8c\u53c9\u6811 \u9012\u5f52",permalink:"/blog/\u4e8c\u53c9\u6811 \u9012\u5f52"}},i={authorsImageUrls:[void 0]},u=[{value:"1.\u56de\u8c03\u5730\u72f1",id:"1\u56de\u8c03\u5730\u72f1",level:3},{value:"<strong>\u4e3a\u4ec0\u4e48\u9700\u8981Promise</strong>",id:"\u4e3a\u4ec0\u4e48\u9700\u8981promise",level:5},{value:"2.Promise \u7684\u57fa\u672c\u4f7f\u7528",id:"2promise-\u7684\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:5},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:5},{value:"1) Promise\u7684\u72b6\u6001\uff08state\uff09",id:"1-promise\u7684\u72b6\u6001state",level:4},{value:"2) Promise\u72b6\u6001\u7684\u6539\u53d8",id:"2-promise\u72b6\u6001\u7684\u6539\u53d8",level:4},{value:"resolve()",id:"resolve",level:5},{value:"reject()",id:"reject",level:5},{value:"3) Promise \u7684\u7ed3\u679c(result)",id:"3-promise-\u7684\u7ed3\u679cresult",level:4},{value:"resolve()",id:"resolve-1",level:5},{value:"reject()",id:"reject-1",level:5},{value:"3. Promise\u7684\u65b9\u6cd5",id:"3-promise\u7684\u65b9\u6cd5",level:3},{value:"1) then\u65b9\u6cd5",id:"1-then\u65b9\u6cd5",level:4},{value:"\u53c2\u6570 (\u4e24\u4e2a)",id:"\u53c2\u6570-\u4e24\u4e2a",level:5},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:5},{value:"then\u65b9\u6cd5\u7684\u5f62\u53c2",id:"then\u65b9\u6cd5\u7684\u5f62\u53c2",level:5},{value:"\u94fe\u5f0f\u64cd\u4f5c",id:"\u94fe\u5f0f\u64cd\u4f5c",level:5},{value:"2)catch\u65b9\u6cd5",id:"2catch\u65b9\u6cd5",level:4},{value:"4.\u7528Promise\u4fee\u6539\u56de\u8c03\u5730\u72f1",id:"4\u7528promise\u4fee\u6539\u56de\u8c03\u5730\u72f1",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1\u56de\u8c03\u5730\u72f1"},"1.\u56de\u8c03\u5730\u72f1"),(0,r.kt)("p",null,"\u200b\t\t\u56de\u8c03\u51fd\u6570\u4e2d\u5d4c\u5957\u56de\u8c03"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function fn1(n){\n    n = n + 1\n    fn2(n)\n    function fn2(n){\n        n = n + 2\n        fn3(n)\n        console.log('2:',n);\n        function fn3(n){\n            n = n + 3\n            fn4(n)\n            console.log('3:',n);\n            function fn4(n){\n                n = n + 4\n                console.log('4:',n);\n            }\n        }\n    }\n    console.log('1:',n);\n}\n        \n    fn1(10) // 20 16 13 11\n")),(0,r.kt)("h5",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981promise"},(0,r.kt)("strong",{parentName:"h5"},"\u4e3a\u4ec0\u4e48\u9700\u8981Promise")),(0,r.kt)("p",null,"\u200b\t\tPromise\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1"),(0,r.kt)("h3",{id:"2promise-\u7684\u57fa\u672c\u4f7f\u7528"},"2.Promise \u7684\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("h5",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"Promise \u4f5c\u4e3a\u4e00\u4e2a\u6784\u9020\u51fd\u6570, \u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u53c2\u6570\u51fd\u6570\u4e2d\u6709\u4e24\u4e2a\u53c2\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"resolve: \u6210\u529f\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"reject: \u5931\u8d25\u51fd\u6570")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' const p = new Promise((resolve,reject)=>{})\n console.dir(p);\n\n//[[Prototype]]: Promise \n//[[PromiseState]]: "pending"\n//[[PromiseResult]]: undefined\n')),(0,r.kt)("h5",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"promise\u5b9e\u4f8b\u6709\u4e24\u4e2a\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"state: \u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"result: \u7ed3\u679c")),(0,r.kt)("h4",{id:"1-promise\u7684\u72b6\u6001state"},"1) Promise\u7684\u72b6\u6001\uff08state\uff09"),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u72b6\u6001: pending (\u51c6\u5907)"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u79cd\u72b6\u6001: fulfilled (\u5df2\u5b8c\u6210)"),(0,r.kt)("p",null,"\u7b2c\u4e09\u79cd\u72b6\u6001: rejected (\u62d2\u7edd)"),(0,r.kt)("h4",{id:"2-promise\u72b6\u6001\u7684\u6539\u53d8"},"2) Promise\u72b6\u6001\u7684\u6539\u53d8"),(0,r.kt)("p",null,"\u901a\u8fc7\u8c03\u7528resolve() reject() \u6539\u53d8Promise\u7684\u72b6\u6001"),(0,r.kt)("h5",{id:"resolve"},"resolve()"),(0,r.kt)("p",null,"\u4f7f\u5f53\u524dPromise\u72b6\u6001\u6539\u6210fulfilled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject)=>{\n        resolve()\n })\nconsole.dir(p);\n//[[PromiseState]]: "fulfilled"\n')),(0,r.kt)("h5",{id:"reject"},"reject()"),(0,r.kt)("p",null,"\u4f7f\u5f53\u524dPromise\u72b6\u6001\u6539\u6210 rejected"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject)=>{\n        reject()\n })\nconsole.dir(p);\n//[[PromiseState]]: "rejected"\n')),(0,r.kt)("p",null,"Promise\u72b6\u6001\u53ea\u80fd\u6539\u53d8\u4e00\u6b21"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject)=>{\n                resolve()\n        reject()\n })\nconsole.dir(p);\n//[[PromiseState]]: "fulfilled\n')),(0,r.kt)("h4",{id:"3-promise-\u7684\u7ed3\u679cresult"},"3) Promise \u7684\u7ed3\u679c(result)"),(0,r.kt)("h5",{id:"resolve-1"},"resolve()"),(0,r.kt)("p",null," \u901a\u8fc7\u8c03\u7528 resolve() \u4f20\u9012\u53c2\u6570,\u6539\u53d8 \u5f53\u524dPromise\u5bf9\u8c61\u7684\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject)=>{\n      resolve(\'\u6210\u529f\u7684\u7ed3\u679c\')\n})\nconsole.dir(p);\n//[[PromiseState]]: "fulfilled\n//[[PromiseResult]]: "\u6210\u529f\u7684\u7ed3\u679c"\n')),(0,r.kt)("h5",{id:"reject-1"},"reject()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve,reject)=>{\n      resolve(\'\u5931\u8d25\u7684\u7ed3\u679c\')\n})\nconsole.dir(p);\n//[[PromiseState]]: "rejected"\n//[[PromiseResult]]: "\u5931\u8d25\u7684\u7ed3\u679c"\n')),(0,r.kt)("h3",{id:"3-promise\u7684\u65b9\u6cd5"},"3. Promise\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5b9e\u4f8b\u4f7f\u7528\u539f\u578b\u7684\u65b9\u6cd5"),(0,r.kt)("h4",{id:"1-then\u65b9\u6cd5"},"1) then\u65b9\u6cd5"),(0,r.kt)("h5",{id:"\u53c2\u6570-\u4e24\u4e2a"},"\u53c2\u6570 (\u4e24\u4e2a)"),(0,r.kt)("p",null,"\u200b\t1\uff1a\u51fd\u6570 (\u6267\u884c\u6210\u529f(fulfilled)\u7684\u8bed\u53e5)"),(0,r.kt)("p",null,"\u200b\t2:   \u4e5f\u662f\u51fd\u6570(\u6267\u884c\u5931\u8d25(rejected)\u7684\u8bed\u53e5)"),(0,r.kt)("h5",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"\u200b\t\u662f\u4e00\u4e2aPromise\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// p.then(()=>{ }, ()=>{ })\nconst p = new Promise((resolve,reject)=>{\n    resolve('\u6210\u529f\u7684\u7ed3\u679c')\n    //reject('\u5931\u8d25\u7684\u7ed3\u679c')\n})\np.then(()=>{\n    console.log('\u6210\u529f\u65f6\u8c03\u7528');\n},()=>{\n    console.log('\u5931\u8d25\u65f6\u8c03\u7528');\n})\nconsole.dir(p);\n//\"\u6210\u529f\u65f6\u8c03\u7528\"\n")),(0,r.kt)("h5",{id:"then\u65b9\u6cd5\u7684\u5f62\u53c2"},"then\u65b9\u6cd5\u7684\u5f62\u53c2"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230then\u65b9\u6cd5\u91cc\u7684\u5f62\u53c2\u8fd4\u56de\u7684\u662fresolve\u91cc\u7684\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const p = new Promise((resolve,reject)=>{\n    // resolve('\u6210\u529f\u7684\u7ed3\u679c')\n    reject('\u5931\u8d25\u7684\u7ed3\u679c')\n})\np.then((value)=>{\n    console.log('\u6210\u529f\u65f6\u8c03\u7528',value);\n},(error)=>{\n    console.log('\u5931\u8d25\u65f6\u8c03\u7528',error);\n})\nconsole.dir(p);\n//\u6210\u529f\u65f6\u8c03\u7528 \u6210\u529f\u7684\u7ed3\u679c\n//\u5931\u8d25\u65f6\u8c03\u7528 \u5931\u8d25\u7684\u7ed3\u679c\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c \u662f\u4e00\u4e2aPromise\u5bf9\u8c61"),(0,r.kt)("p",null," \u8bbe\u4e00\u4e2at\u63a5\u4f4f p.then(),\u53ef\u4ee5\u53d1\u73b0t\u8fd8\u662f\u4e00\u4e2apromise\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const t = p.then((value)=>{\n    console.log('\u6210\u529f\u65f6\u8c03\u7528',value);\n},(error)=>{\n    console.log('\u5931\u8d25\u65f6\u8c03\u7528',error);\n})\n\nconsole.dir(t);\n\n// \u8fd9\u91cct\u7684\u72b6\u6001\u662fpending\n")),(0,r.kt)("h5",{id:"\u94fe\u5f0f\u64cd\u4f5c"},"\u94fe\u5f0f\u64cd\u4f5c"),(0,r.kt)("p",null,"\u7531\u4e8ethen()\u65b9\u6cd5\u4f9d\u65e7\u8fd4\u56dePromise\u5b9e\u4f8b \u6240\u4ee5\u53ef\u4ee5\u591a\u7528\u51e0\u4e2athen\u63a5\u4f4f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"new Promise((resolve,reject)=>{}).then().then()\n")),(0,r.kt)("p",null,"Promise\u7684\u72b6\u6001\u4e0d\u6539\u53d8,\u4e0d\u6267\u884cthen()\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fd9\u91cc\u7684then\u4e0d\u6267\u884c\nnew Promise((resolve,reject)=>{\n  resolve('\u6210\u529f')\n  // reject('\u5931\u8d25')\n}).then(()=>{\n    console.log('\u6210\u529f\u65f6\u8c03\u7528');\n        return '\u7b2c\u4e00\u4e2athen\u6210\u529f\u4e86'\n},()=>{\n    console.log('\u5931\u8d25\u65f6\u8c03\u7528');\n}).then(()=>{\n    console.log('\u6210\u529f\u65f6\u8c03\u7528');\n},()=>{\n    console.log('\u5931\u8d25\u65f6\u8c03\u7528');\n})\nconsole.dir(p);\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a then\u7ed3\u675f\u540e \u72b6\u6001\u662fpending. \u6b64\u65f6\u4e0d\u80fd\u76f4\u63a5\u8c03\u7528\u7b2c\u4e8c\u4e2athen()\u65b9\u6cd5\u6267\u884c, "),(0,r.kt)("p",null,"\u5728then()\u65b9\u6cd5\u4e2d  ",(0,r.kt)("inlineCode",{parentName:"p"},"return ")," \u53ef\u4ee5\u5c06\u5b9e\u4f8b\u7684\u72b6\u6001\u6539\u6210fulfilled"),(0,r.kt)("h4",{id:"2catch\u65b9\u6cd5"},"2)catch\u65b9\u6cd5"),(0,r.kt)("p",null," catch\u4e2d\u7684\u53c2\u6570\u51fd\u6570\u5728\u4ec0\u4e48\u65f6\u5019\u88ab\u6267\u884c\uff1a"),(0,r.kt)("p",null,"\u200b\t\t\u5f53Promise\u7684\u72b6\u6001\u6539\u4e3arejcted.\u88ab\u6267\u884c\n\u200b\t\t\u5f53Promise\u6267\u884c\u4f53\u4e2d\u51fa\u73b0\u4ee3\u7801\u9519\u8bef\u65f6,\u88ab\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"p.catch(()=>{})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," const p = new Promise((resolve,reject)=>{\n    // resolve(' promise\u6210\u529f')\n    reject('promise\u5931\u8d25')\n})\np.catch(()=>{\n    console.log('\u5931\u8d25');\n})\nconsole.dir(p);\n// \u5931\u8d25\n")),(0,r.kt)("h3",{id:"4\u7528promise\u4fee\u6539\u56de\u8c03\u5730\u72f1"},"4.\u7528Promise\u4fee\u6539\u56de\u8c03\u5730\u72f1"),(0,r.kt)("p",null,"\u539f\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function fn1(n){\n    n = n + 1\n    fn2(n)\n    function fn2(n){\n        n = n + 2\n        fn3(n)\n        console.log('2:',n);\n        function fn3(n){\n            n = n + 3\n            fn4(n)\n            console.log('3:',n);\n            function fn4(n){\n                n = n + 4\n                console.log('4:',n);\n            }\n        }\n    }\n    console.log('1:',n);\n}\n        \n    fn1(10) // 20 16 13 11\n")),(0,r.kt)("p",null,"Promise:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const p = new Promise((resolve, reject) => {\n    resolve(10);\n}).then((value) => {\n    value = value + 1;\n    return value;\n}).then((value) => {\n    value = value + 2;\n    return value;\n}).then((value) => {\n    value = value + 3;\n    return value;\n}).then((value) => {\n    value = value + 4;\n    return value;\n})\n  .catch((error) => {\n    console.log('\u8ba1\u7b97\u5931\u8d25');\n});\n\np.then((final) => {\n    console.log(final);\n});\n")))}m.isMDXComponent=!0}}]);