"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",slug:"use-react-dangerouslysetinnerhtml",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/use-react-dangerouslysetinnerhtml",source:"@site/blog/2022-09-25-react-dangerouslyInnerhtml.md",title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",date:"2022-09-25T00:00:00.000Z",formattedDate:"September 25, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.35,hasTruncateMarker:!1,authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],frontMatter:{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",slug:"use-react-dangerouslysetinnerhtml",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/social.png",hide_table_of_contents:!1},prevItem:{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples"},nextItem:{title:"How to use the useParams hook in React Router",permalink:"/blog/react-router-useparams"},relatedPosts:[{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.37,date:"2022-09-20T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.675,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.455,date:"2022-10-02T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is dangerouslySetInnerHTML?",id:"what-is-dangerouslysetinnerhtml",level:2},{value:"When to use dangerouslySetInnerHTML?",id:"when-to-use-dangerouslysetinnerhtml",level:2},{value:"Building a simple example app",id:"building-a-simple-example-app",level:3},{value:"Conclusion",id:"conclusion",level:2}],p=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Rendering HTML markup from rich text created in a WYSIWYG editor might be difficult. Because numerous pieces of logic are required to make things work as they should. This can be attributed to the fact that React uses a browser-independent system to manipulate the DOM elements, thus preventing direct interaction with the DOM. Things can be pretty much easier and faster with dangerouslySetInnerHTML."),(0,r.kt)("p",null,"In this tutorial, we'll see how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," in a React application."),(0,r.kt)("p",null,"Step we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-dangerouslysetinnerhtml"},"What is dangerouslySetInnerHTML?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-use-dangerouslysetinnerhtml"},"When to use dangerouslySetInnerHTML?"))),(0,r.kt)("h2",{id:"what-is-dangerouslysetinnerhtml"},"What is dangerouslySetInnerHTML?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"React dangerouslySetInnerHTML")," is an HTML property that makes it easy to programmatically set the HTML elements from an external source. It has replaced the innerHTML used in the browser DOM.\ndangerouslySetInnerHTML helps React know how to handle the HTML elements in a component where the contents are to be rendered."),(0,r.kt)("h2",{id:"when-to-use-dangerouslysetinnerhtml"},"When to use dangerouslySetInnerHTML?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," is mostly used in any application where you need to render formatted text in a div element. Also, you can use it to render content exactly as you have formatted it. For instance, let's consider a blog application. The body of a blog is usually formatted with headers, paragrams, images, code blocks, etc."),(0,r.kt)("p",null,"To render such contents in a React application, you'll need to manipulate the DOM to get the HTML elements in the contents and set them to an element using innerHTML. Because React does not allow direct interaction with the DOM, your content will end up not being displayed as it should. However, when dangerouslySetInnerHTML is applied, React recognizes the HTML tags and correctly renders them."),(0,r.kt)("p",null,"Due to its vulnerability to cross-site scripting (XSS) attacks, dangerouslySetInnerHTML might constitute a major threat to your application, as the name suggests. However, DOMPurify has proven to be a highly effective tool in overcoming such difficulties. DOMPurify is a DOM-only XSS sanitizer for HTML for preventing XSS attacks by stripping out all dangerous HTML in content rendered in an application."),(0,r.kt)("p",null,"For example, if users are permitted to insert HTML directly into a web page via a form field, hackers can embed malicious code into the application, causing the application to behave inappropriately or even resulting in data loss. Consider the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const data = `lorem <b onmouseover=\"alert('mouseover');\">ipsum</b>`;\n\n  return (\n    <div dangerouslySetInnerHTML={{__html: data}} />\n  );\n}\n")),(0,r.kt)("p",null,"A piece of JavaScript code was embedded in the above code. This will trigger an alert each time a user tries to access the application. This is because the data was not sanitized before being rendered in the application. The above code will return the below result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'lorem ipsum <img src="" onerror="alert(\'mailicious message\');" />\n')),(0,r.kt)("p",null,"As shown below, you can sanitize the data to remove all malicious code and scripts embedded in it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import DOMPurify from 'dompurify';\n\nconst App = () => {\n  const data = `lorem <b onmouseover=\"alert('mailicious message');\">test</b>`\n\n  const sanitizedData = () => ({\n    __html: DOMPurify.sanitize(data)\n  })\n\n  return (\n   dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data)}}></div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"The above code will strip out the script in the data that has been rendered on the application and the result below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},' lorem test <img src="">\n')),(0,r.kt)("hr",null),(0,r.kt)(p,{title:"Does your CRUD app need server state management?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/mui_banner.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"building-a-simple-example-app"},"Building a simple example app"),(0,r.kt)("p",null,"To demonstrate how dangerouslySetInnerHTML works in a React application, let's build a simple blog application. To make things easier, we'll use  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI to create React apps."),(0,r.kt)("p",null,"To get started, create a new app with the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx superplate-cli blog\n")),(0,r.kt)("p",null,"The above command will prompt you to choose the configuration for your project. Your selection should look like the screenshot below."),(0,r.kt)("div",{class:"img-container","align-items":"center",style:{alignSelf:"center",width:"400px"}},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/dangerouslySetInnerhtml-cli.png",alt:"dangerouslySetInnerhtml cli"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Once you complete the prompts, Superlate will install all the required packages and set up the project folders for your application."),(0,r.kt)("p",null,"Now install the Dompurify module to sanitize the HTML codes we'll render in the app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install dompurify @types/dompurify\n")),(0,r.kt)("p",null,"Next, open the application in your favorite text editor. Then create a ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," file in the src folder of the project and add the dummy data below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "blogs": [\n    {\n      "title": "<h3>Node.js for begineers</h3>",\n      "content": "<p>Lorem ipsum dolor <b>sit</b> amet consectetur adipisicing elit. <strike>Enim ex a</strike> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    },\n    {\n      "title": "<h3>Sit amet consectetur adipisicing eli</h3>",\n      "content": "<p>Lorem ipsum dolor <b>sit</b> amet consectetur adipisicing elit. <strike>Enim ex a</strike> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    },\n    {\n      "title": "<h3>Sit amet consectetur adipisicing eli</h3>",\n      "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <i>Enim ex a</i> veniam, molestiae praesentium culpa, mollitia officiis quas quia vitae voluptates</p>"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In the above JSON data, we created some HTML formatted blog data we'll render to the application."),(0,r.kt)("p",null,"Now update the code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/index.ts")," file to render the data with the code snippet below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport DOMPurify from "dompurify";\nimport { Row, Col, Container, Card } from "react-bootstrap";\nimport data from "../data.json"\n\nconst Home: React.FC = () => {\n  return (\n    <div className="d-flex flex-column min-vh-100">\n      <Container className="my-5 flex-grow-1">\n      <Row>\n        {(data.blogs.map((data) => (\n          <Col md={4} key={data.title} className="mb-3">\n            <Card className="border-none">\n              <Card.Body>\n                <Card.Title>\n                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.title)}}></div>\n                 </Card.Title>\n                <Card.Text>\n                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.content)}}></div>\n                </Card.Text>\n              </Card.Body>\n            </Card>\n          </Col>\n        )))}\n      </Row>\n    </Container>\n    </div>\n  );\n};\n\nexport default Home;\n')),(0,r.kt)("p",null,"In the above code snippet, we imported dompurify to sanitize the contents in the blog, react-bootstrap components to style the application, and the dummy JSON data we created. Then in the card, we looped through the blogs to access and render the data in the objects."),(0,r.kt)("p",null," For the Card title and Text, we added div elements and attached the ",(0,r.kt)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," property to render the contents according to how they were formatted."),(0,r.kt)("p",null," To allow the div where the contents are rendered to have children, we passed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"--html")," key to ",(0,r.kt)("strong",{parentName:"p"},"dangerouslySetInnerHTML")," and wrapped the content to be rendered in the dompurify ",(0,r.kt)("strong",{parentName:"p"},"sanitize")," method."),(0,r.kt)("div",{class:"img-container","align-items":"center"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-25-react-dangerouslyInnerhtml/dangerouslySetInnerhtml-usage.png",alt:"dangerouslySetInnerhtml usage"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"In the above screenshot, ",(0,r.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," has rendered the contents just the way they were been formatted to look like."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"dangerouslySetInnerHTML in a React application. We started by explaining what dangerouslySetInnerHTML is, when to use it, and the best practices for using it in a React application."))}m.isMDXComponent=!0}}]);