"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>x});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),x=n,m=d["".concat(s,".").concat(x)]||d[x]||u[x]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function x(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={id:"csv-export",title:"CSV Export"},i=void 0,p={unversionedId:"advanced-tutorials/import-export/csv-export",id:"version-3.xx.xx/advanced-tutorials/import-export/csv-export",title:"CSV Export",description:"With refine, you can easily add export functionality to your application. By using the useExport hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-export.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-export",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-export",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-export.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680768795,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"csv-export",title:"CSV Export"},sidebar:"someSidebar",previous:{title:"Save and Continue",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/save-and-continue"},next:{title:"CSV Import",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-import"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:c};function x(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With ",(0,n.kt)("strong",{parentName:"p"},"refine"),", you can easily add export functionality to your application. By using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},(0,n.kt)("inlineCode",{parentName:"a"},"useExport"))," hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser."),(0,n.kt)("p",null,"Internally, it uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,n.kt)("inlineCode",{parentName:"a"},"export-to-csv"))," to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"CSV")," file."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useExport } from "@pankod/refine-core";\n\ninterface IPost {\n    id: number;\n    slug: string;\n    title: string;\n    content: string;\n}\n\nexport const PostList: React.FC = () => {\n    const { triggerExport } = useExport<IPost>();\n\n    return (\n        <div>\n            <button onClick={triggerExport}>Export Button</button>\n            ...\n        </div>\n    );\n};\n')),(0,n.kt)("p",null,"After this setup is done, when the user clicks the button, download process will initialize."),(0,n.kt)("p",null,"Manually running the ",(0,n.kt)("inlineCode",{parentName:"p"},"triggerExport")," function is another option."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useExport")," returns two properties: ",(0,n.kt)("inlineCode",{parentName:"p"},"isLoading: boolean")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"triggerExport: async () => void"),". You can use these properties to create your own export button or pass them to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ExportButton")," component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},"Refer to the useExport docs for more detailed information and export settings. ","\u2192"))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(l,{path:"import-export-antd",mdxType:"CodeSandboxExample"}))}x.isMDXComponent=!0}}]);