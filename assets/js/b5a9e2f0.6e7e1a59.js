"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"useIsAuthenticated",title:"useIsAuthenticated",siderbar_label:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},i=void 0,c={unversionedId:"api-reference/core/hooks/auth/useIsAuthenticated",id:"api-reference/core/hooks/auth/useIsAuthenticated",title:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/api-reference/core/hooks/auth/useIsAuthenticated.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useIsAuthenticated",permalink:"/docs/api-reference/core/hooks/auth/useIsAuthenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useIsAuthenticated.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680768795,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"useIsAuthenticated",title:"useIsAuthenticated",siderbar_label:"useIsAuthenticated",description:"useIsAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useIsAuthenticated/index.ts"},sidebar:"someSidebar",previous:{title:"useCan",permalink:"/docs/api-reference/core/hooks/accessControl/useCan"},next:{title:"useOnError",permalink:"/docs/api-reference/core/hooks/auth/useOnError"}},s={},u=[{value:"Usage",id:"usage",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,a.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"isError"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Data that is resolved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n    authenticated: boolean;\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authenticated"),": A boolean value indicating whether the user is authenticated or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirectTo"),": A string value indicating the URL to redirect to if authentication is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logout"),": A boolean value indicating whether the logout method should be called."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the check.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," can be useful when you want to check for authentication and handle the result manually."),(0,a.kt)("p",null,"We have used this hook in refine's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/auth/authenticated"},(0,a.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component which allows only authenticated users to access the page or any part of the code."),(0,a.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have a public page but you want to make some specific fields private."),(0,a.kt)("p",null,"We have a logic in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthBindings = {\n    // ---\n    // highlight-start\n    check: () =>\n        localStorage.getItem("email")\n            ? {\n                  authenticated: true,\n              }\n            : {\n                  authenticated: false,\n                  error: {\n                    message: "Check failed",\n                    name: "Not authenticated",\n                  },\n                  logout: true,\n                  redirectTo: "/login",\n              },\n    // highlight-end\n    // ---\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method returns the Promise resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useIsAuthenticated, useGo } from "@refinedev/core";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n    children,\n    fallback,\n    loading,\n}) => {\n    // highlight-next-line\n    const { isLoading, data } = useIsAuthenticated();\n\n    const go = useGo();\n\n    if (isLoading) {\n        return <>{loading}</> || null;\n    }\n\n    if (data.error) {\n        if (!fallback) {\n            go({ to: redirectTo, type: "replace" });\n            return null;\n        }\n\n        return <>{fallback}</>;\n    }\n\n    if (data.authenticated) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n\ntype AuthenticatedProps = {\n    fallback?: React.ReactNode;\n    loading?: React.ReactNode;\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, only authenticated users can see the price field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'// highlight-next-line\nimport { Authenticated } from "components/authenticated";\n\nexport const PostShow: React.FC = () => (\n    <div>\n        // highlight-start\n        <Authenticated>\n            <span>Only authenticated users can see</span>\n        </Authenticated>\n        // highlight-end\n    </div>\n);\n')))}d.isMDXComponent=!0}}]);