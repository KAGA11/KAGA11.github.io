"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||f[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",authors:{name:"\u65f6\u96e8",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png"},tags:["React"]},i="\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",p={permalink:"/blog/\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-30-\u5bf9\u4e8euseEffect\u7684\u7406\u89e3.md",source:"@site/blog/2024-07-30-\u5bf9\u4e8euseEffect\u7684\u7406\u89e3.md",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",description:"\u53c2\u8003react\u5b98\u65b9\u6587\u6863\u4e2d\u7684useEffect\u6559\u7a0b",date:"2024-07-30T00:00:00.000Z",formattedDate:"2024\u5e747\u670830\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:9.16,hasTruncateMarker:!1,authors:[{name:"\u65f6\u96e8",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png",imageURL:"https://github.com/KAGA11.png"}],frontMatter:{slug:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",authors:{name:"\u65f6\u96e8",title:"\u5bf9\u4e8euseEffect\u7684\u7406\u89e3",url:"https://github.com/KAGA11",image_url:"https://github.com/KAGA11.png",imageURL:"https://github.com/KAGA11.png"},tags:["React"]},nextItem:{title:"Throttle vs Debounce",permalink:"/blog/Throttle vs Debounce"}},o={authorsImageUrls:[void 0]},u=[{value:"React\u7ec4\u4ef6\u7684\u52a0\u8f7d\u9636\u6bb5",id:"react\u7ec4\u4ef6\u7684\u52a0\u8f7d\u9636\u6bb5",level:3},{value:"\u4ec0\u4e48\u662f\u526f\u4f5c\u7528\uff1f",id:"\u4ec0\u4e48\u662f\u526f\u4f5c\u7528",level:5},{value:"<code>useEffect</code> \u7684\u4f5c\u7528\u548c\u6267\u884c\u65f6\u673a",id:"useeffect-\u7684\u4f5c\u7528\u548c\u6267\u884c\u65f6\u673a",level:3},{value:"\u793a\u4f8b\uff1a\u4f7f\u7528 <code>useEffect</code> \u5904\u7406\u89c6\u9891\u64ad\u653e\u63a7\u5236",id:"\u793a\u4f8b\u4f7f\u7528-useeffect-\u5904\u7406\u89c6\u9891\u64ad\u653e\u63a7\u5236",level:5},{value:"\u9519\u8bef\u793a\u4f8b\uff1a\u5728\u6e32\u67d3\u9636\u6bb5\u64cd\u4f5cDOM",id:"\u9519\u8bef\u793a\u4f8b\u5728\u6e32\u67d3\u9636\u6bb5\u64cd\u4f5cdom",level:5},{value:"\u6b63\u786e\u793a\u4f8b\uff1a\u4f7f\u7528 <code>useEffect</code> \u5728\u63d0\u4ea4\u9636\u6bb5\u64cd\u4f5cDOM",id:"\u6b63\u786e\u793a\u4f8b\u4f7f\u7528-useeffect-\u5728\u63d0\u4ea4\u9636\u6bb5\u64cd\u4f5cdom",level:5},{value:"Effect \u4f9d\u8d56",id:"effect-\u4f9d\u8d56",level:3},{value:"\u4ec0\u4e48\u662f\u6302\u8f7d",id:"\u4ec0\u4e48\u662f\u6302\u8f7d",level:5},{value:"\u6309\u9700\u6dfb\u52a0\u6e05\u7406\uff08cleanup\uff09\u51fd\u6570",id:"\u6309\u9700\u6dfb\u52a0\u6e05\u7406cleanup\u51fd\u6570",level:3},{value:"\u7406\u89e3 <code>useEffect</code> \u7684\u6e05\u7406\u51fd\u6570",id:"\u7406\u89e3-useeffect-\u7684\u6e05\u7406\u51fd\u6570",level:3},{value:"\u4ec0\u4e48\u662f\u6e05\u7406\u51fd\u6570\uff1f",id:"\u4ec0\u4e48\u662f\u6e05\u7406\u51fd\u6570",level:4},{value:"\u4f7f\u7528\u6e05\u7406\u51fd\u6570\u7684\u793a\u4f8b",id:"\u4f7f\u7528\u6e05\u7406\u51fd\u6570\u7684\u793a\u4f8b",level:4},{value:"\u6e05\u7406\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a",id:"\u6e05\u7406\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a",level:4}],c={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c2\u8003react\u5b98\u65b9\u6587\u6863\u4e2d\u7684useEffect\u6559\u7a0b"),(0,r.kt)("p",null,"Effect \u662f React \u4e2d\u7684\u4e00\u79cd\u8131\u56f4\u673a\u5236\u3002\u5b83\u4eec\u8ba9\u4f60\u53ef\u4ee5 \u201c\u8131\u51fa\u201d React \u5e76\u4f7f\u7ec4\u4ef6\u548c\u4e00\u4e9b\u5916\u90e8\u7cfb\u7edf\u540c\u6b65\uff0c\u6bd4\u5982\u975e React \u7ec4\u4ef6\u3001\u7f51\u7edc\u8bf7\u6c42\u548c\u6d4f\u89c8\u5668 DOM."),(0,r.kt)("p",null,"\u94a9\u5b50\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u662f\u4e00\u4e2aHook\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u5904\u7406\u526f\u4f5c\u7528\uff0c\u5982\u6570\u636e\u83b7\u53d6\u3001\u8ba2\u9605\u548c\u624b\u52a8\u64cd\u4f5cDOM"),(0,r.kt)("h3",{id:"react\u7ec4\u4ef6\u7684\u52a0\u8f7d\u9636\u6bb5"},"React\u7ec4\u4ef6\u7684\u52a0\u8f7d\u9636\u6bb5"),(0,r.kt)("p",null,"\u8981\u7406\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uff0c\u9996\u5148\u9700\u8981\u4e86\u89e3React\u7ec4\u4ef6\u7684\u52a0\u8f7d\u8fc7\u7a0b\uff0c\u5206\u4e3a\u4e09\u4e2a\u4e3b\u8981\u9636\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u89e6\u53d1"),"\uff1a\u8fd9\u662f\u7ec4\u4ef6\u7684\u521d\u59cb\u52a0\u8f7d\u9636\u6bb5\u3002\u5f53\u5e94\u7528\u542f\u52a8\u65f6\uff0c\u4f1a\u89e6\u53d1\u521d\u6b21\u6e32\u67d3"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6e32\u67d3"),"\uff1a\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u5728\u8fdb\u884c\u521d\u6b21\u6e32\u67d3\u65f6,")," React \u4f1a\u8c03\u7528\u6839\u7ec4\u4ef6\u3002",(0,r.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u540e\u7eed\u7684\u6e32\u67d3,")," React \u4f1a\u8c03\u7528\u5185\u90e8\u72b6\u6001\u66f4\u65b0\u89e6\u53d1\u4e86\u6e32\u67d3\u7684\u51fd\u6570\u7ec4\u4ef6\u3002\u6e32\u67d3\u662f\u4e00\u4e2a",(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.react.dev/learn/keeping-components-pure"},"\u7eaf\u7cb9\u7684\u8ba1\u7b97\u8fc7\u7a0b"),"\uff0c\u4e0d\u5e94\u5305\u542b\u4efb\u4f55\u526f\u4f5c\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u63d0\u4ea4"),"\uff1a\u5728\u6e32\u67d3\u7ec4\u4ef6\u4e4b\u540e\uff0cReact \u5c06\u4f1a\u4fee\u6539 DOM\u3002",(0,r.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u521d\u6b21\u6e32\u67d3\uff0c")," React \u4f1a\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/Node/appendChild"},(0,r.kt)("inlineCode",{parentName:"a"},"appendChild()"))," DOM API \u5c06\u5176\u521b\u5efa\u7684\u6240\u6709 DOM \u8282\u70b9\u653e\u5728\u5c4f\u5e55\u4e0a\u3002",(0,r.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u540e\u7eed\u7684\u6e32\u67d3\uff0c")," React \u5c06\u5e94\u7528\u6700\u5c11\u7684\u5fc5\u8981\u64cd\u4f5c\uff08\u5728\u6e32\u67d3\u65f6\u8ba1\u7b97\uff09\uff0c\u4ee5\u4f7f\u5f97 DOM \u4e0e\u6700\u65b0\u7684\u6e32\u67d3\u8f93\u51fa\u76f8\u4e92\u5339\u914d\u3002")),(0,r.kt)("h5",{id:"\u4ec0\u4e48\u662f\u526f\u4f5c\u7528"},"\u4ec0\u4e48\u662f\u526f\u4f5c\u7528\uff1f"),(0,r.kt)("p",null,"\u526f\u4f5c\u7528\uff08side effects\uff09\u662f\u6307\u5728\u51fd\u6570\u6267\u884c\u8fc7\u7a0b\u4e2d\u5bf9\u5916\u90e8\u7cfb\u7edf\uff08\u5982DOM\u3001\u7f51\u7edc\u8bf7\u6c42\u3001\u672c\u5730\u5b58\u50a8\u7b49\uff09\u4ea7\u751f\u5f71\u54cd\u7684\u64cd\u4f5c\u3002\u5b83\u4eec\u901a\u5e38\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u51e0\u7c7b\uff1a"),(0,r.kt)("p",null,"\u200b\t1.\u6570\u636e\u83b7\u53d6\u548c\u5b58\u50a8\uff08\u5982API\u8bf7\u6c42\uff09"),(0,r.kt)("p",null,"\u200b\t2.\u8ba2\u9605\u6216\u53d6\u6d88\u8ba2\u9605\uff08\u5982WebSocket\u8fde\u63a5\uff09"),(0,r.kt)("p",null,"\u200b\t3.\u624b\u52a8\u64cd\u4f5cDOM\uff08\u5982\u8bbe\u7f6e\u4e8b\u4ef6\u76d1\u542c\u5668\uff09"),(0,r.kt)("h3",{id:"useeffect-\u7684\u4f5c\u7528\u548c\u6267\u884c\u65f6\u673a"},(0,r.kt)("inlineCode",{parentName:"h3"},"useEffect")," \u7684\u4f5c\u7528\u548c\u6267\u884c\u65f6\u673a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u5728React\u7684\u201c\u63d0\u4ea4\u201d\u9636\u6bb5\u8fd0\u884c\u3002\u5728\u7ec4\u4ef6\u7684\u6e32\u67d3\u7ed3\u679c\u5df2\u7ecf\u88ab\u63d0\u4ea4\u5230DOM\u4e4b\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f1a\u88ab\u8c03\u7528\u3002\u8fd9\u4f7f\u5f97\u5b83\u6210\u4e3a\u6267\u884c\u526f\u4f5c\u7528\u7684\u7406\u60f3\u65f6\u673a\uff0c\u6bd4\u5982\u6570\u636e\u83b7\u53d6\u3001\u8ba2\u9605\u7b49\u3002"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u4f7f\u7528-useeffect-\u5904\u7406\u89c6\u9891\u64ad\u653e\u63a7\u5236"},"\u793a\u4f8b\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h5"},"useEffect")," \u5904\u7406\u89c6\u9891\u64ad\u653e\u63a7\u5236"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u7684\u91cd\u8981\u6027\u3002\u5047\u8bbe\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"VideoPlayer"),"\u7ec4\u4ef6\uff0c\u9700\u8981\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"isPlaying"),"\u72b6\u6001\u63a7\u5236\u89c6\u9891\u7684\u64ad\u653e\u548c\u6682\u505c\u3002"),(0,r.kt)("h5",{id:"\u9519\u8bef\u793a\u4f8b\u5728\u6e32\u67d3\u9636\u6bb5\u64cd\u4f5cdom"},"\u9519\u8bef\u793a\u4f8b\uff1a\u5728\u6e32\u67d3\u9636\u6bb5\u64cd\u4f5cDOM"),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0b\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.play()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.pause()")," \u4f1a\u5728\u6e32\u67d3\u9636\u6bb5\u6267\u884c\uff0c\u4f46\u6b64\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"<video>"),"\u5143\u7d20\u53ef\u80fd\u5c1a\u672a\u6302\u8f7d\u5230DOM\u4e2d\uff0c\u8fd9\u6837\u505a\u662f\u4e0d\u5bf9\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useRef, useEffect } from 'react';\n\nfunction VideoPlayer({ src, isPlaying }) {\n  const ref = useRef(null);\n  // \u8fd9\u91cc\u662f\u9519\u7684\n  if (isPlaying) {\n    ref.current.play();\n  } else {\n    ref.current.pause();\n  }\n  return <video ref={ref} src={src} width=\"560\" height=\"315\" loop playsInline controls />;\n}\n\nexport default function App() {\n  const [isPlaying, setIsPlaying] = useState(false);\n  return (\n    <>\n      <button onClick={() => setIsPlaying(!isPlaying)}>\n        {isPlaying ? '\u6682\u505c' : '\u64ad\u653e'}\n      </button>\n      <hr />\n      <VideoPlayer\n        isPlaying={isPlaying}\n        src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\"\n      />\n    </>\n  );\n}\n")),(0,r.kt)("h5",{id:"\u6b63\u786e\u793a\u4f8b\u4f7f\u7528-useeffect-\u5728\u63d0\u4ea4\u9636\u6bb5\u64cd\u4f5cdom"},"\u6b63\u786e\u793a\u4f8b\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h5"},"useEffect")," \u5728\u63d0\u4ea4\u9636\u6bb5\u64cd\u4f5cDOM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function VideoPlayer({ src, isPlaying }) {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (isPlaying) {\n      ref.current.play();\n    } else {\n      ref.current.pause();\n    }\n  }, [isPlaying]); // \u8fd9\u91cc\u7684\u4ee3\u7801\u53ea\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\uff0c\u5e76\u4e14isPlaying\u7684\u503c\u4e0e\u4e0a\u6b21\u6e32\u67d3\u4e0d\u4e00\u81f4\u65f6\u6267\u884c\n  return <video ref={ref} src={src} width="560" height="315" loop playsInline controls />;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f1a\u628a\u8fd9\u6bb5\u4ee3\u7801\u653e\u5230\u5c4f\u5e55\u66f4\u65b0\u6e32\u67d3\u4e4b\u540e\u6267\u884c, \u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"VideoPlayer")," \u7ec4\u4ef6\u6e32\u67d3\u65f6\uff08\u65e0\u8bba\u662f\u5426\u4e3a\u9996\u6b21\u6e32\u67d3\uff09\uff0c\u90fd\u4f1a\u53d1\u751f\u4ee5\u4e0b\u4e8b\u60c5\u3002\u9996\u5148\uff0cReact \u4f1a\u5237\u65b0\u5c4f\u5e55\uff0c\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"<video>")," \u5143\u7d20\u5df2\u7ecf\u6b63\u786e\u5730\u51fa\u73b0\u5728 DOM \u4e2d\uff1b\u7136\u540e\uff0cReact \u5c06\u8fd0\u884c Effect\uff1b\u6700\u540e\uff0cEffect \u5c06\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"isPlaying")," \u7684\u503c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"play()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pause()")),(0,r.kt)("h3",{id:"effect-\u4f9d\u8d56"},"Effect \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  // \u8fd9\u91cc\u7684\u4ee3\u7801\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\u6267\u884c\n});\n\nuseEffect(() => {\n  // \u8fd9\u91cc\u7684\u4ee3\u7801\u53ea\u4f1a\u5728\u7ec4\u4ef6\u6302\u8f7d\u540e\u6267\u884c\n}, []);\n\nuseEffect(() => {\n  //\u8fd9\u91cc\u7684\u4ee3\u7801\u53ea\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u540e\uff0c\u5e76\u4e14 a \u6216 b \u7684\u503c\u4e0e\u4e0a\u6b21\u6e32\u67d3\u4e0d\u4e00\u81f4\u65f6\u6267\u884c\n}, [a, b]);\n")),(0,r.kt)("h5",{id:"\u4ec0\u4e48\u662f\u6302\u8f7d"},"\u4ec0\u4e48\u662f\u6302\u8f7d"),(0,r.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8bf4\u5728React\u4e2d\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u7684\u751f\u547d\u5468\u671f\u53ef\u4ee5\u5206\u4e3a\u51e0\u4e2a\u5173\u952e\u9636\u6bb5\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u89e6\u53d1"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u6e32\u67d3"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u63d0\u4ea4"),"\u3002\u5176\u4e2d\u63d0\u4ea4\u9636\u6bb5\u53c8\u53ef\u4ee5\u5206\u6210\u4e09\u4e2a\u5b50\u9636\u6bb5:"),(0,r.kt)("p",null,"1.",(0,r.kt)("strong",{parentName:"p"},"\u6302\u8f7d (mount)"),"\uff1a\u7ec4\u4ef6\u9996\u6b21\u63d2\u5165DOM\u4e2d\u3002"),(0,r.kt)("p",null,"2.",(0,r.kt)("strong",{parentName:"p"},"\u66f4\u65b0(update)"),"\uff1a\u7ec4\u4ef6\u7684props\u6216state\u53d1\u751f\u53d8\u5316\uff0c\u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\uff0c\u5e76\u5e94\u7528\u53d8\u5316\u5230DOM\u4e2d\u3002"),(0,r.kt)("p",null,"3.",(0,r.kt)("strong",{parentName:"p"},"\u5378\u8f7d(unmount)"),"\uff1a\u7ec4\u4ef6\u4eceDOM\u4e2d\u79fb\u9664\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4e0a\u9762\u662f\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u3002Effect \u4e0e\u7ec4\u4ef6\u6709\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u3002\u7ec4\u4ef6\u53ef\u4ee5\u6302\u8f7d\u3001\u66f4\u65b0\u6216\u5378\u8f7d\u3002Effect \u53ea\u80fd\u505a\u4e24\u4ef6\u4e8b\uff1a\u5f00\u59cb\u540c\u6b65\u67d0\u4e9b\u4e1c\u897f\uff0c\u7136\u540e\u505c\u6b62\u540c\u6b65\u5b83\u3002\u5982\u679c Effect \u4f9d\u8d56\u4e8e\u968f\u65f6\u95f4\u53d8\u5316\u7684 props \u548c state\uff0c\u8fd9\u4e2a\u5faa\u73af\u53ef\u80fd\u4f1a\u53d1\u751f\u591a\u6b21\u3002"),(0,r.kt)("h3",{id:"\u6309\u9700\u6dfb\u52a0\u6e05\u7406cleanup\u51fd\u6570"},"\u6309\u9700\u6dfb\u52a0\u6e05\u7406\uff08cleanup\uff09\u51fd\u6570"),(0,r.kt)("h3",{id:"\u7406\u89e3-useeffect-\u7684\u6e05\u7406\u51fd\u6570"},"\u7406\u89e3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"useEffect")," \u7684\u6e05\u7406\u51fd\u6570"),(0,r.kt)("p",null,"\u5728React\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684Hook\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u5904\u7406\u526f\u4f5c\u7528\u3002\u9664\u4e86\u5904\u7406\u526f\u4f5c\u7528\u4e4b\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\u6765\u6e05\u7406\u8fd9\u4e9b\u526f\u4f5c\u7528\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\u6216\u5176\u4ed6\u6f5c\u5728\u7684\u95ee\u9898\u3002\u8fd9\u4e2a\u673a\u5236\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u7684\u6e05\u7406\u51fd\u6570\u3002"),(0,r.kt)("h4",{id:"\u4ec0\u4e48\u662f\u6e05\u7406\u51fd\u6570"},"\u4ec0\u4e48\u662f\u6e05\u7406\u51fd\u6570\uff1f"),(0,r.kt)("p",null,"\u6e05\u7406\u51fd\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u8fd4\u56de\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u5728\u7ec4\u4ef6\u5378\u8f7d\u6216\u526f\u4f5c\u7528\u91cd\u65b0\u6267\u884c\u4e4b\u524d\u88ab\u8c03\u7528\u3002\u6e05\u7406\u51fd\u6570\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u8ba2\u9605"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u6e05\u7406\u8ba1\u65f6\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u9664\u4e8b\u4ef6\u76d1\u542c\u5668")),(0,r.kt)("p",null,"\u901a\u8fc7\u6e05\u7406\u51fd\u6570\uff0cReact\u53ef\u4ee5\u786e\u4fdd\u5728\u7ec4\u4ef6\u5378\u8f7d\u6216\u526f\u4f5c\u7528\u91cd\u65b0\u6267\u884c\u65f6\uff0c\u6240\u6709\u76f8\u5173\u7684\u526f\u4f5c\u7528\u90fd\u4f1a\u88ab\u6b63\u786e\u5730\u6e05\u7406\u6389\u3002"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u6e05\u7406\u51fd\u6570\u7684\u793a\u4f8b"},"\u4f7f\u7528\u6e05\u7406\u51fd\u6570\u7684\u793a\u4f8b"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u8ba1\u65f6\u5668\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\u6e05\u7406\u51fd\u6570\u7684\u4f7f\u7528\u3002\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u8ba1\u65f6\u5668\u7ec4\u4ef6\uff0c\u6bcf\u79d2\u949f\u66f4\u65b0\u4e00\u6b21\u65f6\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(prevCount => prevCount + 1);\n    }, 1000);\n\n    // \u8fd4\u56de\u4e00\u4e2a\u6e05\u7406\u51fd\u6570\n    return () => clearInterval(interval);\n  }, []); // \u7a7a\u4f9d\u8d56\u6570\u7ec4\u8868\u793a\u8fd9\u4e2aEffect\u53ea\u5728\u6302\u8f7d\u548c\u5378\u8f7d\u65f6\u6267\u884c\n\n  return <div>Count: {count}</div>;\n}\n\nexport default Timer;\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u8ba1\u65f6\u5668\uff0c\u6bcf\u79d2\u949f\u66f4\u65b0\u4e00\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\u3002\u4e3a\u4e86\u786e\u4fdd\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u6e05\u7406\u8ba1\u65f6\u5668\uff0c\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u4e2d\u8fd4\u56de\u4e86\u4e00\u4e2a\u6e05\u7406\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"clearInterval(interval)"),"\u3002\u5f53\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0cReact\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6e05\u7406\u51fd\u6570\uff0c\u4ece\u800c\u6e05\u7406\u6389\u8ba1\u65f6\u5668\u3002"),(0,r.kt)("h4",{id:"\u6e05\u7406\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a"},"\u6e05\u7406\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a"),(0,r.kt)("p",null,"\u6e05\u7406\u51fd\u6570\u4f1a\u5728\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\u4e0b\u6267\u884c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u5378\u8f7d\u65f6"),"\uff1a\u5f53\u7ec4\u4ef6\u4eceDOM\u4e2d\u79fb\u9664\u65f6\uff0cReact\u4f1a\u8c03\u7528\u6e05\u7406\u51fd\u6570\u6765\u6e05\u7406\u526f\u4f5c\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u526f\u4f5c\u7528\u91cd\u65b0\u6267\u884c\u524d"),"\uff1a\u5f53\u4f9d\u8d56\u6570\u7ec4\u4e2d\u7684\u67d0\u4e2a\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0cReact\u4f1a\u5728\u6267\u884c\u65b0\u7684\u526f\u4f5c\u7528\u4e4b\u524d\u5148\u8c03\u7528\u4e0a\u4e00\u6b21\u526f\u4f5c\u7528\u7684\u6e05\u7406\u51fd\u6570\u3002")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e\u7b2c\u4e8c\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState, useEffect } from 'react';\n\nfunction DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    let isMounted = true;\n\n    fetch(url)\n      .then(response => response.json())\n      .then(data => {\n        if (isMounted) {\n          setData(data);\n        }\n      });\n\n    // \u8fd4\u56de\u4e00\u4e2a\u6e05\u7406\u51fd\u6570\n    return () => {\n      isMounted = false;\n    };\n  }, [url]); // \u4f9d\u8d56\u6570\u7ec4\u5305\u542b url\uff0c\u5f53 url \u53d8\u5316\u65f6\uff0c\u526f\u4f5c\u7528\u4f1a\u91cd\u65b0\u6267\u884c\n\n  return (\n    <div>\n      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}\n    </div>\n  );\n}\n\nexport default DataFetcher;\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"url"),"\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u4f1a\u91cd\u65b0\u6267\u884c\u3002\u4e3a\u4e86\u907f\u514d\u5728\u7ec4\u4ef6\u5378\u8f7d\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"url"),"\u53d8\u5316\u65f6\u5f15\u53d1\u7684\u6570\u636e\u7ade\u4e89\uff08data race), \u901a\u5e38\u4f1a\u8bbe\u7f6e\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bc6\u7b26"),"\uff08ismounted\uff09, \u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"isMounted"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u53ea\u6709\u5728\u7ec4\u4ef6\u4ecd\u7136\u6302\u8f7d\u65f6\u624d\u4f1a\u66f4\u65b0\u6570\u636e\u3002"))}f.isMDXComponent=!0}}]);