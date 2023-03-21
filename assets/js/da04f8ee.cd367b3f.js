"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,i={unversionedId:"api-reference/core/hooks/translate/useSetLocale",id:"version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale",title:"useSetLocale",description:"If you need to change the locale at runtime, refine provides the useSetLocale hook, It returns the changeLocale method from i18nProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale.md",sourceDirName:"api-reference/core/hooks/translate",slug:"/api-reference/core/hooks/translate/useSetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useSetLocale",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/translate/useSetLocale.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1679401339,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{},sidebar:"someSidebar",previous:{title:"useGetLocale",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useGetLocale"},next:{title:"useTranslate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate"}},s={},l=[{value:"Usage",id:"usage",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to change the locale at runtime, refine provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSetLocale")," hook, It returns the changeLocale method from ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You can use the features of your own i18n library to change the locale in your own components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@pankod/refine-core";\n\nexport const LanguageSwicher = () => {\n    const changeLanguage = useSetLocale();\n\n    return (\n        <div>\n            <span>Languages</span>\n            <button onClick={() => changeLanguage("en")}>English</button>\n            <button onClick={() => changeLanguage("es")}>Spanish</button>\n        </div>\n    );\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," is provided.")))}p.isMDXComponent=!0}}]);