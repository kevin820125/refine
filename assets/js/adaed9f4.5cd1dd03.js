"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(a),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},i=void 0,d={unversionedId:"examples/table/mui/useDataGrid",id:"version-3.xx.xx/examples/table/mui/useDataGrid",title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/3.xx.xx/examples/table/mui/useDataGrid",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/mui/useDataGrid.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679649594,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/3.xx.xx/examples/table/mui/filter"},next:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/mui/useDeleteMany"}},p={},l=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",level:2}],s=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const c={toc:l};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,o.kt)("h2",{id:"with-datagrid-component"},"With ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,o.kt)(s,{path:"table-mui-use-data-grid",mdxType:"CodeSandboxExample"}),(0,o.kt)("h2",{id:"with-datagridpro-component"},"With ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,o.kt)(s,{path:"table-mui-data-grid-pro",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);