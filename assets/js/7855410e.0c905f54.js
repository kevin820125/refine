"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,g=p["".concat(l,".").concat(f)]||p[f]||c[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}},o=void 0,d={unversionedId:"tutorial/adding-crud-pages/mui/adding-sort-and-filters",id:"tutorial/adding-crud-pages/mui/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed blog posts data in a table using the ``. This component includes built-in support for sorting and filtering, so you don't have to manually add these features.",source:"@site/docs/tutorial/4-adding-crud-pages/mui/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/adding-sort-and-filters",permalink:"/docs/tutorial/adding-crud-pages/mui/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/adding-sort-and-filters.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681287058,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:"tutorial/understanding-authprovider/index"}}},l={},s=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("Checklist"),p=u("ChecklistItem"),f={toc:s};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the previous ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mui/index"},"Adding List Page")," section, we have displayed blog posts data in a table using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DataGrid/>"),". This component includes built-in support for sorting and filtering, so you don't have to manually add these features."),(0,a.kt)("p",null,"When you click arrow icons on the table header, it will sort the data by the column you clicked. You can also filter the data by clicking the menu icon on the table header and selecting the filter."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To see how the filtering and sorting work and more detail, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid/"},(0,a.kt)("inlineCode",{parentName:"a"},"useDataGrid")," documentation"),".")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Checklist"},(0,a.kt)(p,{id:"add-search-and-filters-mui",mdxType:"ChecklistItem"},"I added search and filters to the table")))}g.isMDXComponent=!0}}]);