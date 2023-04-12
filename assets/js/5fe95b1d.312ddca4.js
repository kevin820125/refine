"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,u=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/chakra-ui/add-create-page",id:"tutorial/adding-crud-pages/chakra-ui/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/docs/tutorial/4-adding-crud-pages/chakra-ui/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/chakra-ui/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/chakra-ui/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681287058,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},s={},l=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=d("Checklist"),h=d("ChecklistItem"),m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,o.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,o.kt)("p",null,"First, let's create our file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,o.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,o.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    ThemedLayout,\n    notificationProvider,\n    RefineThemes,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayout>\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,o.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,o.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/basic-views/create"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," package, has been developed by using the ",(0,o.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,o.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,o.kt)("p",{parentName:"li"},"It also provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,o.kt)("p",{parentName:"li"},"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," in the create page, it sends the form data to ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"@refinedev/react-hook-form")," ",(0,o.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All other components provided by ",(0,o.kt)("strong",{parentName:"p"},"Chakra UI")," are used to display the form fields."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"Chakra UI")," documentation for more information ","\u2192")))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useSelect/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/select/usage"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"Chakra UI")," ",(0,o.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n    resource: "categories",\n});\n')),(0,o.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,o.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    ThemedLayout,\n    notificationProvider,\n    RefineThemes,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            // highlight-next-line\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayout>\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            <Route path="blog-posts">\n                                <Route index element={<BlogPostList />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<BlogPostShow />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<BlogPostEdit />}\n                                />\n                                {/* highlight-start */}\n                                <Route\n                                    path="create"\n                                    element={<BlogPostCreate />}\n                                />\n                                {/* highlight-end */}\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the create page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(h,{id:"add-create-page-chakra-ui",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,o.kt)(h,{id:"add-create-page-chakra-ui-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,o.kt)(h,{id:"add-create-page-chakra-ui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}u.isMDXComponent=!0}}]);