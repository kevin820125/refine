"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,v=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(v,r(r({ref:t},m),{},{components:n})):a.createElement(v,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),o=n(28813);const r={title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs","enviroment-variables"],image:"/img/blog/2022-09-07-next-env/social.jpg",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/next-js-environment-variables",source:"@site/blog/2022-09-07-next-env.md",title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"enviroment-variables",permalink:"/blog/tags/enviroment-variables"}],readingTime:6.455,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs","enviroment-variables"],image:"/img/blog/2022-09-07-next-env/social.jpg",hide_table_of_contents:!1},prevItem:{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store"},nextItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},relatedPosts:[{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:13.22,date:"2022-08-17T00:00:00.000Z"},{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:14.62,date:"2022-08-18T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"}],authorPosts:[{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:8,date:"2022-09-12T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.695,date:"2022-08-23T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What are Environment Variables?",id:"what-are-environment-variables",level:2},{value:"How to use environment variables in Next.js",id:"how-to-use-environment-variables-in-nextjs",level:2},{value:"Using environment variables in the browser",id:"using-environment-variables-in-the-browser",level:2},{value:"Types of Environment Variables in Next.js",id:"types-of-environment-variables-in-nextjs",level:2},{value:"Default environment variables",id:"default-environment-variables",level:4},{value:"Development environment variables",id:"development-environment-variables",level:4},{value:"Production environment variables",id:"production-environment-variables",level:4},{value:"Environment variable load order",id:"environment-variable-load-order",level:4},{value:"Test Environment Variables",id:"test-environment-variables",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Next.js is a React framework that provides many out-of-the-box solutions for building single-page web applications. Under the hood, it handles a lot of tooling and configuration intuitively, making the process of developing applications a breeze."),(0,i.kt)("p",null,"One of the configurations Next.js handles by default are ",(0,i.kt)("strong",{parentName:"p"},"environment variables"),". Built-in support for environment variables got a lot easier in Next.js versions 9.4 and later. This means using environment variables in your applications has become seamless and straightforward."),(0,i.kt)("p",null,"Don't worry if environment variables sound unfamiliar to you. We will take a closer look at them in this article, and explain how they can be used in your Next.js applications."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-are-environment-variables"},"What are Environment Variables?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-environment-variables-in-the-browser"},"Using environment variables in the browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-environment-variables"},"Default environment variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#development-environment-variables"},"Development environment variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#production-environment-variables"},"Production environment variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#environment-variable-load-order"},"Environment variable load order")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-environment-variables"},"Test Environment Variables"))),(0,i.kt)("h2",{id:"what-are-environment-variables"},"What are Environment Variables?"),(0,i.kt)("p",null,"An environment variable is a key-value pair (key=value) in which a value (or data) is assigned to a key (variable). "),(0,i.kt)("p",null,"Environment variables are used in software development for many use cases; for providing configurations for different application running environments (e.g. development and production environments); for keeping sensitive application data out of application code from malicious users; "),(0,i.kt)("p",null,"The following are valid examples of environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"API_KEY='c4W39R56&gyh_ujij89$'\nAPI_KEY=c4W39R56&gyh_ujij89$\nACCESS_TOKEN='A54EzZoU7o33SByHk1qr'\n")),(0,i.kt)("h2",{id:"how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js"),(0,i.kt)("p",null,"Basically, environment variables are added into Next.js apps through a ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," file. This will then load every variable into the Node.js process. ",(0,i.kt)("strong",{parentName:"p"},"Environment variables in Next.js")," are only available for use on the server. This means we can only use them in any of Next.js data fetching methods (getServerSideProps, getStaticProps, and getStaticPaths) or API routes."),(0,i.kt)("p",null,"For example, given a ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"API_URL='https://dev.to/api/api/articles/{id}/unpublish'\nAPI_KEY='your_secret_api_key_here'\n")),(0,i.kt)("p",null,"Next.js will automatically load the variables as ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.API_URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.API_KEY"),"\nwhich we can then use as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"export async function getServerSideProps() {\n    const response = await axios({\n        method: 'put',\n        url: process.env.API_URL,\n        header: {  \n              Authorization: process.env.API_KEY\n        },\n        data: {\n            id: 12\n        }\n    });\n}\n")),(0,i.kt)("p",null,"NOTE: You should always put the ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory to avoid Next.js running into errors."),(0,i.kt)("p",null,"We can also reference other variables in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," file using a dollar (",(0,i.kt)("inlineCode",{parentName:"p"},"$"),") sign. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"ADMIN_NAME='John'\nADMIN_ID=1234\nPROTECTED_URL='https://api.example.com?admin=$ADMIN_NAME&id=$ADMIN_ID'\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"process.env.PROTECTED_URL")," will now evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.example.com?admin=John&id=1234"),"."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"using-environment-variables-in-the-browser"},"Using environment variables in the browser"),(0,i.kt)("p",null,"Like we mentioned earlier, Next.js env is only available for use on the server by default. However, Next.js provides us a solution to expose the variables to the browser. By adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," prefix to a variable defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," Next.js will automatically make it accessible for use in the browser and anywhere else in our application."),(0,i.kt)("p",null,"For example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# env.local\nNEXT_PUBLIC_GOOGLE_ANALYTICS_ID='your_google_analytics_id_here'\n")),(0,i.kt)("p",null,"Now we can use it in our code like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/_app.js"',title:'"pages/_app.js"'},"... \nreturn (\n    <>\n        <Script strategy=\"lazyOnload\" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />\n        <Script strategy=\"lazyOnload\">\n            {`\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {\n                page_path: window.location.pathname,\n                });\n            `}\n        <\/Script>\n        ...\n     </>\n)\n")),(0,i.kt)("p",null,"Here's what is going on above."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"env.local")," we defined a ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," variable which holds the value for our Google analytics ID. The prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," lets us use the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," in client side code (",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/_app.js"),"). Note that _app.js runs on both the client and server."),(0,i.kt)("p",null,"We added two ",(0,i.kt)("inlineCode",{parentName:"p"},"<Script/>")," components from Next.js to add Javascript code to configure google analytics. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Script/>")," component optimizes external scripts that are loaded in a Next.js application by using strategies to improve browser and user experience."),(0,i.kt)("p",null,"In the previous code, we added ",(0,i.kt)("inlineCode",{parentName:"p"},"lazyOnload")," strategy to both scripts; this is to tell the browser we want the analytics to be generated when all other resources have been fetched and the browser is idle."),(0,i.kt)("h2",{id:"types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,i.kt)("p",null,"A single ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," file is usually all you need for your environment variables but at times you may want to specify different configurations for different application environments. Next.js allows us to take charge of how we want to configure the variables. There are basically three application environments we'll talk about in this article. These are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Development environment (initiated with ",(0,i.kt)("inlineCode",{parentName:"li"},"next dev"),")"),(0,i.kt)("li",{parentName:"ol"},"Production environment (initiated with ",(0,i.kt)("inlineCode",{parentName:"li"},"next start"),")"),(0,i.kt)("li",{parentName:"ol"},"Test environment ")),(0,i.kt)("h4",{id:"default-environment-variables"},"Default environment variables"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file can be used to specify a default configuration for all three application environments. Note that if the same variables are declared in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local"),", it'll override the defaults. ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," files must be added to ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," since they are where sensitive application data are stored."),(0,i.kt)("h4",{id:"development-environment-variables"},"Development environment variables"),(0,i.kt)("p",null,"You can specify development environment variables in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," file. This file should be kept in your project directory."),(0,i.kt)("h4",{id:"production-environment-variables"},"Production environment variables"),(0,i.kt)("p",null,"Use a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," file for ",(0,i.kt)("strong",{parentName:"p"},"environment variables")," that are particular to production. This file should also be kept in your project directory."),(0,i.kt)("p",null,"For example, to add environment variables to your live deployments (if you use ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," to deploy your application), you can add environment variables to a project by going to ",(0,i.kt)("em",{parentName:"p"},"Settings")," on your dashboard and clicking on ",(0,i.kt)("em",{parentName:"p"},"Environment Variables"),". The UI should look like below:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"deploy"})),(0,i.kt)("h4",{id:"environment-variable-load-order"},"Environment variable load order"),(0,i.kt)("p",null,"Next.js will always search for an environment variable in five places in your application code in the following order until it's found:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process.env")," (start)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV).local")," (where ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,i.kt)("inlineCode",{parentName:"li"},"development"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"test"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.local")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV)")," (where ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,i.kt)("inlineCode",{parentName:"li"},"development"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"test"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env"),"  (end)")),(0,i.kt)("p",null,"So for example if you define a variable in ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development.local")," and then redefine it in ",(0,i.kt)("inlineCode",{parentName:"p"},"env.development"),", the value in ",(0,i.kt)("inlineCode",{parentName:"p"},"env.development.local")," will be used. "),(0,i.kt)("h2",{id:"test-environment-variables"},"Test Environment Variables"),(0,i.kt)("p",null,"We can also use a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.test")," to specify environment variables for testing purposes. In order to use default test environment variables, you must set ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," to test. Here's an example showing how you can do this in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'  ...\n"scripts": {\n    "dev": "next dev",\n    "start": "next start",\n    "test": "NODE_ENV=test mocha spec"\n}\n  ...\n')),(0,i.kt)("p",null,"Other tools like jest will configure the settings for you by automatically setting the environment to ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,i.kt)("p",null,"Note that Next.js will configure your ",(0,i.kt)("strong",{parentName:"p"},"environment variables")," differently when you're in a test environment. Variables from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," won't be loaded in order for test executions to use the same default configuration. You must include the ",(0,i.kt)("inlineCode",{parentName:"p"},".env.test")," file in your project directory to prevent it from being overridden by ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article we learned about what environment variables are and how to use them in Next.js. We also implement how to define Next.js env's for different application running environments.  "),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,i.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),",if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/pankod/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,i.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,i.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,i.kt)("strong",{parentName:"p"},"styling"),", ",(0,i.kt)("strong",{parentName:"p"},"customization")," and ",(0,i.kt)("strong",{parentName:"p"},"project workflow.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,i.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}u.isMDXComponent=!0},28813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-4b2dcaa2b31ab1ffe61cb8a95eea6314.png"}}]);