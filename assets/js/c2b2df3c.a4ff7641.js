"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71975],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(o),y=n,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},29921:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={id:"deploy-project",title:"6. Deploying your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}},a=void 0,l={unversionedId:"tutorial/getting-started/deploy-project",id:"tutorial/getting-started/deploy-project",title:"6. Deploying your app to the web",description:"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service.",source:"@site/docs/tutorial/1-getting-started/5-deploy-project.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/deploy-project",permalink:"/docs/tutorial/getting-started/deploy-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/5-deploy-project.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679649594,formattedLastUpdatedAt:"Mar 24, 2023",sidebarPosition:5,frontMatter:{id:"deploy-project",title:"6. Deploying your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}}},p={},c=[{value:"Create a new Netlify site",id:"create-a-new-netlify-site",level:2},{value:"Visit your new website",id:"visit-your-new-website",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=s("Checklist"),d=s("ChecklistItem"),y={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service."),(0,n.kt)("p",null,"Netlify will use your GitHub repository to build and deploy your site every time you commit a change to your code. To connect your repository to Netlify, you will need to create a new Netlify site and link it to your GitHub repository."),(0,n.kt)("h2",{id:"create-a-new-netlify-site"},"Create a new Netlify site"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you don't already have a Netlify account, go to ",(0,n.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify.com")," and create a free account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Add new site")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Import an existing project"),"."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You will be prompted to connect to a Git provider. Choose GitHub and follow the on-screen instructions to authenticate your GitHub account. Then, choose your project\u2019s GitHub repository from the list provided.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To complete the process of deploying your app to the web, you will need to review and confirm the settings provided by Netlify. These settings should already be correctly configured for your ",(0,n.kt)("strong",{parentName:"li"},"refine")," project. Simply scroll down and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy site"),".")),(0,n.kt)("p",null,"Congratulations! You now have an ",(0,n.kt)("strong",{parentName:"p"},"refine")," website hosted on Netlify."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information on client-side routing, check out the create Create React App documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/#netlify"},"deployment"),".")),(0,n.kt)("h2",{id:"visit-your-new-website"},"Visit your new website"),(0,n.kt)("p",null,"To view your new website, visit the URL provided in your site settings or type it into a browser window."),(0,n.kt)(u,{mdxType:"Checklist"},(0,n.kt)(d,{id:"deploy-your-project",mdxType:"ChecklistItem"},"I have deployed my app to the Netfly.")))}m.isMDXComponent=!0}}]);