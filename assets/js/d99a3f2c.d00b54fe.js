"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"index",title:"1. Build your first refine app",tutorial:{order:0,prev:!1,next:"tutorial/introduction/prequisite"}},a=void 0,l={unversionedId:"tutorial/introduction/index",id:"version-3.xx.xx/tutorial/introduction/index",title:"1. Build your first refine app",description:"About this Tutorial",source:"@site/versioned_docs/version-3.xx.xx/tutorial/0-introduction/0-intro.md",sourceDirName:"tutorial/0-introduction",slug:"/tutorial/introduction/index",permalink:"/docs/3.xx.xx/tutorial/introduction/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/0-introduction/0-intro.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680772962,formattedLastUpdatedAt:"Apr 6, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Build your first refine app",tutorial:{order:0,prev:!1,next:"tutorial/introduction/prequisite"}}},u={},p=[{value:"About this Tutorial",id:"about-this-tutorial",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=c("Checklist"),d=c("ChecklistItem"),m={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-this-tutorial"},"About this Tutorial"),(0,o.kt)("p",null,"In this tutorial, you'll learn how to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," by building a fully-functioning CRUD app, from scratch to full launch! \ud83d\ude80"),(0,o.kt)("p",null,"We'll cover the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up your development environment"),(0,o.kt)("li",{parentName:"ul"},"Create your first refine app"),(0,o.kt)("li",{parentName:"ul"},"Understanding the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/data-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider"))),(0,o.kt)("li",{parentName:"ul"},"What is the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#resources"},(0,o.kt)("inlineCode",{parentName:"a"},"resources"))," concept"),(0,o.kt)("li",{parentName:"ul"},"Adding CRUD pages")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you would rather start exploring ",(0,o.kt)("strong",{parentName:"p"},"refine")," with some examples before diving in, visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/"},"examples")," page and choose an example to open and explore it in an online editor.")),(0,o.kt)("admonition",{title:"Thank you Astro Community! \u2764\ufe0f",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While preparing the refine's tutorial, we were inspired (quite) by the ",(0,o.kt)("a",{parentName:"p",href:"https://astro.build/"},"Astro")," tutorial. Thank you to Astro for your contributions to the open-source community \ud83c\udf89")),(0,o.kt)(s,{mdxType:"Checklist"},(0,o.kt)(d,{id:"looks-great",mdxType:"ChecklistItem"},"Great! I'm ready to begin!")))}f.isMDXComponent=!0}}]);