"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9763],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"module-dev",title:"28. \u6a21\u5757\u5316\u5f00\u53d1",sidebar_label:"28. \u6a21\u5757\u5316\u5f00\u53d1"},p=void 0,d={unversionedId:"module-dev",id:"module-dev",title:"28. \u6a21\u5757\u5316\u5f00\u53d1",description:"\u4ee5\u4e0b\u7684\u6a21\u5757\u5316\u914d\u7f6e\u5fc5\u987b\u5728 appsettings.json \u4e0b\u914d\u7f6e\u624d\u6709\u6548\uff0c\u539f\u56e0\u662f\u542f\u52a8\u7684\u65f6\u5019 appsettings.json \u5df2\u7ecf\u52a0\u8f7d\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u8fd8\u672a\u52a0\u8f7d\u3002",source:"@site/docs/module-dev.mdx",sourceDirName:".",slug:"/module-dev",permalink:"/furion/docs/module-dev",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/module-dev.mdx",tags:[],version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1623497638,formattedLastUpdatedAt:"6/12/2021",frontMatter:{id:"module-dev",title:"28. \u6a21\u5757\u5316\u5f00\u53d1",sidebar_label:"28. \u6a21\u5757\u5316\u5f00\u53d1"},sidebar:"docs",previous:{title:"27. \u5206\u5e03\u5f0f ID \u751f\u6210",permalink:"/furion/docs/idgenerator"},next:{title:"29. \u7c98\u571f\u5bf9\u8c61",permalink:"/furion/docs/clayobj"}},s={},m=[{value:"28.1 \u5173\u4e8e\u6a21\u5757\u5316\u5f00\u53d1",id:"281-\u5173\u4e8e\u6a21\u5757\u5316\u5f00\u53d1",level:2},{value:"28.1.1 \u6a21\u5757\u5316\u5f00\u53d1\u597d\u5904",id:"2811-\u6a21\u5757\u5316\u5f00\u53d1\u597d\u5904",level:3},{value:"28.2 \u6a21\u5757\u5206\u7c7b",id:"282-\u6a21\u5757\u5206\u7c7b",level:2},{value:"28.3 \u5982\u4f55\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1",id:"283-\u5982\u4f55\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1",level:2},{value:"28.3.1 \u542f\u7528\u6a21\u5757\u5316\u652f\u6301",id:"2831-\u542f\u7528\u6a21\u5757\u5316\u652f\u6301",level:3},{value:"28.3.2 \u5404\u79cd\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e\u65b9\u5f0f",id:"2832-\u5404\u79cd\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e\u65b9\u5f0f",level:3},{value:"28.4 \u6a21\u5757\u5316\u5f00\u53d1\u6ce8\u610f\u4e8b\u9879",id:"284-\u6a21\u5757\u5316\u5f00\u53d1\u6ce8\u610f\u4e8b\u9879",level:2},{value:"28.5 \u5173\u4e8e\u70ed\u63d2\u62d4\u673a\u5236",id:"285-\u5173\u4e8e\u70ed\u63d2\u62d4\u673a\u5236",level:2},{value:"28.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"286-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u7684\u6a21\u5757\u5316\u914d\u7f6e\u5fc5\u987b\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u4e0b\u914d\u7f6e\u624d\u6709\u6548\uff0c\u539f\u56e0\u662f\u542f\u52a8\u7684\u65f6\u5019 ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u5df2\u7ecf\u52a0\u8f7d\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u8fd8\u672a\u52a0\u8f7d\u3002"))),(0,i.kt)("h2",{id:"281-\u5173\u4e8e\u6a21\u5757\u5316\u5f00\u53d1"},"28.1 \u5173\u4e8e\u6a21\u5757\u5316\u5f00\u53d1"),(0,i.kt)("p",null,"\u6a21\u5757\u5316\u662f\u4ee3\u7801\u7684\u7ec4\u6210\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u6a21\u5757\u5316\u7cfb\u7edf\u5c31\u50cf\u4e50\u9ad8\u73a9\u5177\u4e00\u6837\uff0c\u4e00\u5757\u4e00\u5757\u96f6\u6563\u79ef\u6728\u5806\u79ef\u8d77\u4e00\u4e2a\u7cbe\u5f69\u7684\u4e16\u754c\u3002\u6bcf\u79cd\u79ef\u6728\u7684\u5f62\u72b6\u5404\u4e0d\u76f8\u540c\uff0c\u529f\u80fd\u5404\u4e0d\u76f8\u540c\uff0c\u79ef\u6728\u4e0e\u79ef\u6728\u76f4\u63a5\u4e92\u76f8\u4f9d\u8d56\uff0c\u4e92\u76f8\u652f\u6491\u3002"),(0,i.kt)("h3",{id:"2811-\u6a21\u5757\u5316\u5f00\u53d1\u597d\u5904"},"28.1.1 \u6a21\u5757\u5316\u5f00\u53d1\u597d\u5904"),(0,i.kt)("p",null,"\u6a21\u5757\u5316\u5f00\u53d1\u80fd\u591f\u5c06\u4e0d\u540c\u7684\u529f\u80fd\u7ec4\u88c5\u5728\u4e00\u8d77\uff0c\u5b9e\u73b0\u529f\u80fd\u7684\u7d2f\u52a0\uff0c\u8bf8\u591a\u529f\u80fd\u7ec4\u88c5\u5728\u4e00\u8d77\uff0c\u6700\u7ec8\u5f62\u6210\u9879\u76ee\u3002"),(0,i.kt)("h2",{id:"282-\u6a21\u5757\u5206\u7c7b"},"28.2 \u6a21\u5757\u5206\u7c7b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f\u6a21\u5757"),"\uff1a\u901a\u5e38\u8fd9\u7c7b\u6a21\u5757\u662f\u5b8c\u6574\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\uff0c\u6709\u81ea\u5df1\u7684\u5b9e\u4f53\u3001\u670d\u52a1\u3001API \u53ca UI \u7ec4\u4ef6\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6846\u67b6\u7ea7\u6a21\u5757"),"\uff1a\u8fd9\u7c7b\u901a\u5e38\u662f\u89e3\u51b3\u67d0\u4e2a\u4e1a\u52a1\u529f\u80fd\u8fdb\u884c\u5f00\u53d1\u7684\u6a21\u5757\uff0c\u6bd4\u5982\u4e0a\u4f20\u6587\u4ef6\u3001\u5206\u5e03\u5f0f\u7f13\u5b58\u3001\u6570\u636e\u9a8c\u8bc1\u7b49\u3002")),(0,i.kt)("h2",{id:"283-\u5982\u4f55\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1"},"28.3 \u5982\u4f55\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u8bbe\u8ba1\u4e4b\u521d\u5c31\u8003\u8651\u5230\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u6240\u4ee5\u4ece\u6700\u521d\u7248\u672c\u5c31\u5177\u5907\u6b64\u529f\u80fd\u3002\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6a21\u5757\u5316\u652f\u6301\u975e\u5e38\u7b80\u5355\u3002"),(0,i.kt)("h3",{id:"2831-\u542f\u7528\u6a21\u5757\u5316\u652f\u6301"},"28.3.1 \u542f\u7528\u6a21\u5757\u5316\u652f\u6301"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2,3,4}","{2,3,4}":!0},'{\n  "AppSettings": {\n    "EnabledReferenceAssemblyScan": true,    // \u542f\u7528\u6a21\u5757\u5316\u7a0b\u5e8f\u96c6\u626b\u63cf\n    "SupportPackageNamePrefixs": ["Module1", "Module2",...] // \u914d\u7f6e\u901a\u8fc7 Nuget \u65b9\u5f0f\u5b89\u88c5\u7684\u6a21\u5757\u5316\u5305\uff0c\u5982\u679c\u4e0d\u662f\u901a\u8fc7 Nuget \u65b9\u5f0f\u53ef\u4e0d\u914d\u7f6e\n    // "ExternalAssemblies": ["plugins/Module1.dll", "plugins/Module2.dll", ...]   // \u914d\u7f6e\u52a0\u8f7d\u7f51\u7ad9 plugins \u76ee\u5f55\u4e0b\u7684\u6a21\u5757\u7a0b\u5e8f\u96c6\uff0c\u53ef\u4e0d\u914d\u7f6e\n  }\n}\n')),(0,i.kt)("h3",{id:"2832-\u5404\u79cd\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e\u65b9\u5f0f"},"28.3.2 \u5404\u79cd\u6dfb\u52a0\u6a21\u5757\u914d\u7f6e\u65b9\u5f0f"),(0,i.kt)("p",null,"\u6dfb\u52a0\u6a21\u5757\u5230\u73b0\u6709\u7684\u5e94\u7528\u4e2d\u6709\u591a\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u901a\u8fc7\u9879\u76ee\u6dfb\u52a0\u6a21\u5757\u5316\u5f15\u7528\u6216\u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"strong"},".csproj")," \u6dfb\u52a0\u6a21\u5757"))),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u53ef\u81ea\u52a8\u52a0\u8f7d\u6a21\u5757\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"strong"},".dll")," \u65b9\u5f0f\u5f15\u7528\u6a21\u5757"))),(0,i.kt)("p",null,"\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"EnabledReferenceAssemblyScan")," \u8282\u70b9\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "AppSettings": {\n    "EnabledReferenceAssemblyScan": true\n  }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Nuget")," \u65b9\u5f0f\u5b89\u88c5\u6a21\u5757"))),(0,i.kt)("p",null,"\u5982\u679c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuget")," \u65b9\u5f0f\u5b89\u88c5\u6a21\u5757\uff0c\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"SupportPackageNamePrefixs")," \u8282\u70b9\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "AppSettings": {\n    "SupportPackageNamePrefixs": ["Nuget\u5305\u540d\u79f0", "Nuget\u5305\u540d\u79f0",...]\n  }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7\u52a8\u6001\u52a0\u8f7d ",(0,i.kt)("inlineCode",{parentName:"strong"},".dll")," \u65b9\u5f0f\u5b89\u88c5\u6a21\u5757"))),(0,i.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u662f\u5728\u7f51\u7ad9\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u653e\u5165\u6a21\u5757\u5316 ",(0,i.kt)("inlineCode",{parentName:"p"},".dll")," \u6587\u4ef6\uff0c\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u65e0\u9700\u6dfb\u52a0\u5f15\u7528\u53ef\u81ea\u52a8\u52a0\u8f7d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "AppSettings": {\n    "ExternalAssemblies": ["plugins/Module1.dll", "plugins/Module2.dll", ...]\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u975e\u751f\u4ea7\u73af\u5883\uff0c\u90a3\u4e48 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," \u6587\u4ef6\u5939\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"bin\\Debug\\net5.0\\")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"bin\\Release\\net5.0")," \u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u751f\u4ea7\u73af\u5883\uff0c\u5219\u76f4\u63a5\u653e\u5728\u6839\u76ee\u5f55\u5373\u53ef\u3002"))),(0,i.kt)("h2",{id:"284-\u6a21\u5757\u5316\u5f00\u53d1\u6ce8\u610f\u4e8b\u9879"},"28.4 \u6a21\u5757\u5316\u5f00\u53d1\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u6bcf\u4e2a\u6a21\u5757\u90fd\u6709\u72ec\u7acb\u7684\u8def\u7531\u5730\u5740\u683c\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"/\u6a21\u5757\u5316\u540d\u79f0/\u8def\u7531\u5730\u5740"),"\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1\u4e0d\u4f1a\u548c\u73b0\u6709\u7684\u7cfb\u7edf\u51fa\u73b0\u51b2\u7a81\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6a21\u5757\u5316\u662f\u5c3d\u53ef\u80fd\u8bbe\u8ba1\u4e3a\u5b8c\u5168\u72ec\u7acb\u7684\u5f15\u7528\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u5982\u679c\u9700\u8981\u5305\u542b UI \u5143\u7d20\u5982\u89c6\u56fe\u3001html/cs/javascript \u5e94\u91c7\u7528\u5d4c\u5165\u5f0f\u65b9\u5f0f"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5316\u5f00\u53d1\u5982\u679c\u9700\u8981\u6dfb\u52a0\u7b2c\u4e09\u65b9\u670d\u52a1\uff0c\u5e94\u914d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"AppStartup")," \u7684\u6d3e\u751f\u7c7b\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5316\u7684\u6240\u5728\u7a0b\u5e8f\u96c6\u7684\u6ce8\u91ca\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},".xml")," \u9700\u653e\u5728\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},".dll")," \u540c\u7ea7\u76ee\u5f55")),(0,i.kt)("h2",{id:"285-\u5173\u4e8e\u70ed\u63d2\u62d4\u673a\u5236"},"28.5 \u5173\u4e8e\u70ed\u63d2\u62d4\u673a\u5236"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion v2.4.0 +")," \u7248\u672c\u4e4b\u540e\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u6846\u67b6\u79fb\u9664\u4e86\u70ed\u52a0\u8f7d\u548c\u70ed\u5378\u8f7d\u6a21\u5757\u7684\u529f\u80fd"),"\uff0c\u539f\u56e0\u662f\u76ee\u524d\u5fae\u8f6f\u63d0\u4f9b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AssemblyLoadContext + \u6587\u4ef6\u5939\u76d1\u542c")," \u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},".dll")," \u8fd0\u884c\u65f6\u70ed\u62d4\u63d2\u673a\u5236\u8fd8\u672a\u6210\u719f\uff0c\u6b64\u529f\u80fd\u5c06\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".NET6")," \u7248\u672c\u5f97\u5230\u6539\u5584\u3002"),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\uff0c\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.4.0+")," \u7248\u672c\u4e4b\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u53ea\u63d0\u4f9b\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u6a21\u5757\uff0c\u4e0d\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u4efb\u4f55\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"286-\u53cd\u9988\u4e0e\u5efa\u8bae"},"28.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}c.isMDXComponent=!0}}]);