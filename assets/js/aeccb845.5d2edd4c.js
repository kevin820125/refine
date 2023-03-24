"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,s.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==x&&!v.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:y}=(0,l.U)(),[b,w]=(0,a.useState)(x),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=g){const e=P[g];null!=e&&e!==b&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==b&&(C(t),w(r),null!=g&&y(g,String(r)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>N.push(e),onKeyDown:A,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},57565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={id:"custom-pages",title:"Custom Pages"},l=void 0,p={unversionedId:"advanced-tutorials/custom-pages",id:"version-3.xx.xx/advanced-tutorials/custom-pages",title:"Custom Pages",description:"This document is related to how to create custom pages for react applications. Since Nextjs and Remix have a file system based router built on the page concept, you can create your custom pages under the pages or routes folder.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-pages.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/custom-pages",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/custom-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679649594,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"custom-pages",title:"Custom Pages"},sidebar:"someSidebar",previous:{title:"Custom Layout",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-layout"},next:{title:"Appwrite",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/appwrite"}},u={},c=[{value:"Public Custom Pages",id:"public-custom-pages",level:2},{value:"Authenticated Custom Pages",id:"authenticated-custom-pages",level:2},{value:"Layout for Custom Pages",id:"layout-for-custom-pages",level:2},{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const g={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This document is related to how to create custom pages for ",(0,a.kt)("strong",{parentName:"p"},"react")," applications. Since ",(0,a.kt)("strong",{parentName:"p"},"Nextjs")," and ",(0,a.kt)("strong",{parentName:"p"},"Remix")," have a file system based router built on the page concept, you can create your custom pages under the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," folder."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"../ssr/nextjs"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Nextjs Guide")," documentation for detailed information. ","\u2192")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"../ssr/remix"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Remix Guide")," documentation for detailed information. ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," allows us to add custom pages to our application. To do this, it is necessary to create an object array with ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Route"},"react-router-dom")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," properties. Then, pass this array as ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," property."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When you create a custom page, it will not be visible in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider />")," component. You can trick the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider/>")," by passing an empty resource to show your custom page."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Example"',title:'"Example"'},'const App = () => (\n    <Refine\n        resources={[\n            // This will add an item to `<Sider/>` with route `/my-custom-item`\n            { name: "my-custom-item", list: () => null },\n        ]}\n    />\n);\n'))),(0,a.kt)("h2",{id:"public-custom-pages"},"Public Custom Pages"),(0,a.kt)("p",null,"Allows creating custom pages that everyone can access via path."),(0,a.kt)(o.Z,{defaultValue:"react-router-v6",values:[{label:"React Router V6",value:"react-router-v6"},{label:"React Location",value:"react-location"},{label:"React Router V5",value:"react-router"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"react-router-v6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        element: <CustomPage />,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-location",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-location";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        element: <CustomPage />,\n                        path: "custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-router",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')))),(0,a.kt)("p",null,"Everyone can access this page via ",(0,a.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,a.kt)("h2",{id:"authenticated-custom-pages"},"Authenticated Custom Pages"),(0,a.kt)("p",null,"Allows creating custom pages that only authenticated users can access via path."),(0,a.kt)(o.Z,{defaultValue:"react-router-v6",values:[{label:"React Router V6",value:"react-router-v6"},{label:"React Location",value:"react-location"},{label:"React Router V5",value:"react-router"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"react-router-v6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, Authenticated, AuthProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { CustomPage } from "pages/custom-page";\n\nconst authProvider: AuthProvider = {\n    login: (params: any) => {\n        if (params.username === "admin") {\n            localStorage.setItem("username", params.username);\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem("username");\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () =>\n        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),\n    getPermissions: () => Promise.resolve(["admin"]),\n};\n\n// highlight-start\nconst AuthenticatedCustomPage = () => {\n    return (\n        <Authenticated>\n            <CustomPage />\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        element: <AuthenticatedCustomPage />,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-location",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// highlight-start\nimport { Refine, Authenticated, AuthProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-location";\n// highlight-end\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\n// highlight-start\nconst authProvider: AuthProvider = {\n    login: (params: any) => {\n        if (params.username === "admin") {\n            localStorage.setItem("username", params.username);\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem("username");\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () =>\n        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),\n    getPermissions: () => Promise.resolve(["admin"]),\n};\n// highlight-end\n\n// highlight-start\nconst AuthenticatedCustomPage = () => {\n    return (\n        <Authenticated>\n            <CustomPage />\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        component: <AuthenticatedCustomPage />,\n                        path: "custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-router",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// highlight-start\nimport { Refine, Authenticated, AuthProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n// highlight-end\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\n// highlight-start\nconst authProvider: AuthProvider = {\n    login: (params: any) => {\n        if (params.username === "admin") {\n            localStorage.setItem("username", params.username);\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem("username");\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () =>\n        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),\n    getPermissions: () => Promise.resolve(["admin"]),\n};\n// highlight-end\n\n// highlight-start\nconst AuthenticatedCustomPage = () => {\n    return (\n        <Authenticated>\n            <CustomPage />\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: AuthenticatedCustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')))),(0,a.kt)("p",null,"Only authenticated users can access this page via ",(0,a.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For authenticated custom page, your application needs an ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"authProvider")," for more detailed information. ","\u2192"))),(0,a.kt)("h2",{id:"layout-for-custom-pages"},"Layout for Custom Pages"),(0,a.kt)(o.Z,{defaultValue:"react-router-v6",values:[{label:"React Router V6",value:"react-router-v6"},{label:"React Location",value:"react-location"},{label:"React Router V5",value:"react-router"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"react-router-v6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        element: <CustomPage />,\n                        path: "/custom-page",\n                        layout: true\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-location",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-location";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        element: <CustomPage />,\n                        path: "custom-page",\n                        layout: true\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n'))),(0,a.kt)(i.Z,{value:"react-router",mdxType:"TabItem"},(0,a.kt)("p",null,"By default, custom pages don't have any layout. If you want to show your custom page in a layout, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," for more detailed information. ","\u2192")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,'Let\'s make a custom page for posts. On this page, the editor can approve or reject the posts with the "draft" status.'),(0,a.kt)("p",null,"Before starting the example, let's assume that our ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," has an endpoint that returns posts as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'{\n    [\n        {\n            id: 1,\n            title: "Dolorem suscipit assumenda laborum id facilis maiores.",\n            content:\n                "Non et asperiores dolores. Vero quas natus sed ut iste omnis sequi. Enim veniam soluta vel. Est soluta suscipit velit architecto et. Tenetur ea impedit alias rerum in tenetur. Aut tempore consequatur ipsa neque aspernatur sit. Ut ea aspernatur aut voluptatem. Nulla quos laboriosam molestiae impedit eius. Dicta est maxime fuga debitis. Dicta necessitatibus odit quis qui animi.",\n            category: {\n                id: 32,\n            },\n            status: "draft",\n        },\n        {\n            id: 2,\n            title: "Voluptatibus laboriosam dignissimos non.",\n            content:\n                "Dolor cumque blanditiis aspernatur earum quo autem voluptatem vel consequuntur. Consequatur et sed dolores rerum ipsam aut et sed. Nostrum provident voluptas facere distinctio voluptates in et. Magni asperiores quod unde tempore veritatis beatae qui cum officia. Omnis quia cumque et qui. Quis et explicabo et similique voluptatum. Culpa assumenda autem laborum impedit perspiciatis ducimus perferendis. Quo doloribus magnam perferendis doloremque voluptas libero autem. Nihil enim aliquam molestias aspernatur impedit. Ad eius qui sit et.",\n            category: {\n                id: 22,\n            },\n            status: "draft",\n        },\n        // ...\n    ];\n}\n')),(0,a.kt)("p",null,"First, we will create the post's CRUD pages and bootstrap the app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Now, let's create the custom page with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostReview>"),". We will use the properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"useList"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination"),' to fetch a post with "draft" status.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useList")," documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import { useList } from "@pankod/refine-core";\n\nconst PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"We set the filtering process with ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," then the page size set with ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," to return only one post."),(0,a.kt)("p",null,"Post's category is relational. So we will use the post's category \"id\" to get the category title. Let's use ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," to fetch the category we want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'// highlight-next-line\nimport { useList, useOne } from "@pankod/refine-core";\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n\n    // highlight-start\n    const post = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: post!.category.id,\n            queryOptions: {\n                enabled: !!post,\n            },\n        });\n};\n// highlight-end\n')),(0,a.kt)("p",null,"Now we have the data to display the post as we want. Let's use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component of refine to show this data."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component is not required, you are free to display the data as you wish.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import { useOne, useList } from "@pankod/refine-core";\nimport {\n    // highlight-start\n    Typography,\n    Show,\n    MarkdownField,\n    // highlight-end\n} from "@pankod/refine-antd";\n\n// highlight-next-line\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n        // highlight-start\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            headerProps={{\n                backIcon: false,\n            }}\n        >\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n        // highlight-end\n    );\n};\n')),(0,a.kt)("p",null,"Then, pass this ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostReview>")," as the routes property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\n// highlight-next-line\nimport { PostReview } from "pages/post-review";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            // highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        element: <PostReview />,\n                        path: "/post-review",\n                    },\n                ],\n            }}\n            // highlight-end\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Now our page looks like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/custom-pages/basic.png",alt:"A custom page"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now let's put in approve and reject buttons to change the status of the post shown on the page. When these buttons are clicked, we will change the status of the post using ",(0,a.kt)("inlineCode",{parentName:"p"},"useUpdate"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useUpdate")," documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import {\n    useList,\n    useOne,\n    //highlight-next-line\n    useUpdate,\n} from "@pankod/refine-core";\nimport {\n    Typography,\n    Show,\n    MarkdownField,\n    // highlight-start\n    Space,\n    Button,\n    // highlight-end\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    // highlight-next-line\n    const mutationResult = useUpdate<IPost>();\n\n    // highlight-next-line\n    const { mutate, isLoading: mutateIsLoading } = mutationResult;\n\n    // highlight-start\n    const handleUpdate = (item: IPost, status: string) => {\n        mutate({ resource: "posts", id: item.id, values: { ...item, status } });\n    };\n    // highlight-end\n\n    const buttonDisabled = isLoading || categoryIsLoading || mutateIsLoading;\n\n    return (\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            headerProps={{\n                backIcon: false,\n            }}\n            // highlight-start\n            headerButtons={\n                <Space\n                    key="action-buttons"\n                    style={{ float: "right", marginRight: 24 }}\n                >\n                    <Button\n                        danger\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "rejected")\n                        }\n                    >\n                        Reject\n                    </Button>\n                    <Button\n                        type="primary"\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "published")\n                        }\n                    >\n                        Approve\n                    </Button>\n                </Space>\n            }\n            // highlight-end\n        >\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/custom-pages/gif.gif",alt:"A custom page in action"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"example-1"},"Example"),(0,a.kt)(d,{path:"with-custom-pages",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);