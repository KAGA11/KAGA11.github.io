"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6916],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(p,".").concat(y)]||u[y]||d[y]||l;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={},o="call apply \u548c bind\u7b14\u8bb0",i={unversionedId:"Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0",id:"Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0",title:"call apply \u548c bind\u7b14\u8bb0",description:"call apply bind \u5c31\u662f\u663e\u5f0f\u7ed1\u5b9a, \u7528\u4e8e\u6539\u53d8\u51fd\u6570\u5185\u90e8 this \u6307\u5411\u7684\u65b9\u6cd5",source:"@site/docs/Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0.md",sourceDirName:"Javascript",slug:"/Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0",permalink:"/en/docs/Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/2024-07-31-call_apply\u548cbind\u7b14\u8bb0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Throttle vs Debounce",permalink:"/en/docs/Javascript/2024-07-29-Throttle vs Debounce"},next:{title:"for...of vs for...in",permalink:"/en/docs/Javascript/for...of vs for...in"}},p={},c=[{value:"call \u548c apply",id:"call-\u548c-apply",level:3},{value:"bind",id:"bind",level:3},{value:"\u5ef6\u8fdf\u8c03\u7528",id:"\u5ef6\u8fdf\u8c03\u7528",level:5},{value:"\u624b\u5199call, apply, bind",id:"\u624b\u5199call-apply-bind",level:4}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"call-apply-\u548c-bind\u7b14\u8bb0"},"call apply \u548c bind\u7b14\u8bb0"),(0,a.kt)("p",null,"call apply bind \u5c31\u662f\u663e\u5f0f\u7ed1\u5b9a, \u7528\u4e8e\u6539\u53d8\u51fd\u6570\u5185\u90e8 this \u6307\u5411\u7684\u65b9\u6cd5"),(0,a.kt)("h3",{id:"call-\u548c-apply"},"call \u548c apply"),(0,a.kt)("p",null,"call \u63a5\u53d7\u7684\u662f\u53c2\u6570\u5217\u8868"),(0,a.kt)("p",null,"apply \u65b9\u6cd5\u63a5\u53d7\u7684\u662f\u53c2\u6570\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"func.call(thisArg, arg1, arg2, ...)\nfunc.apply(thisArg, [argsArray])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Greetings.\n// Traveller from beyond the Fog.\n// I am Melina.\n// I offer you an accord. \n\nfunction greet(greeting,name){\n    console.log(`${greeting}.\\n${this.player} from ${this.from}.\\nI am ${name}.\\nI offer you an accord. `);\n}\n\nconst obj = {\n    player:'Traveller',\n    from:'beyond the Fog',\n}\n\ngreet.call(obj,'Greetings','Melina')\ngreet.apply(obj,['Greetings','Rani'])\n")),(0,a.kt)("h3",{id:"bind"},"bind"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(greeting, name) {\n    console.log(`${greeting}.\\n${this.player} from ${this.from}.\\nI am ${name}.\\nI offer you an accord.`);\n}\n\nconst obj = {\n    player: 'Traveller',\n    from: 'beyond the Fog',\n};\n\nconst boundGreet = greet.bind(obj, 'Greetings', 'Melina');\nboundGreet();\n")),(0,a.kt)("h5",{id:"\u5ef6\u8fdf\u8c03\u7528"},"\u5ef6\u8fdf\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const boundGreet = greet.bind(obj, 'Greetings');\n// \u7a0d\u540e\u8c03\u7528\u8fd9\u4e2aboundGreet\u5e76\u4f20\u9012\u5176\u4f59\u7684\u53c2\u6570\nboundGreet('Melina'); \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u533a\u522b"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"call")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," \u4f1a\u7acb\u5373\u8c03\u7528\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\uff0c\u9700\u8981\u624b\u52a8\u8c03\u7528\u8fd9\u4e2a\u65b0\u51fd\u6570\u624d\u4f1a\u6267\u884c\u3002"),(0,a.kt)("h4",{id:"\u624b\u5199call-apply-bind"},"\u624b\u5199call, apply, bind"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Function.prototype.myCall = function(thisArg,...args){ \n    let key = Symbol('key')\n    thisArg[key] = this\n\n    const res = thisArg[key](...args)\n    delete thisArg[key]\n    return res\n}\n\nFunction.prototype.myApply = function(thisArg,args){//\u4f20\u5165\u7684\u662f\u4e00\u4e2a\u6570\u7ec4\n    let key = Symbol('key')\n    thisArg[key] = this\n\n    const res = thisArg[key](...args)\n    delete thisArg[key]\n    return res\n}\n\nFunction.prototype.myBind = function(thisArg,...args){\n    let self = this\n    return function(...newArgs){\n        return self.myApply(thisArg,[...args,...newArgs])\n    }\n}\n")))}d.isMDXComponent=!0}}]);