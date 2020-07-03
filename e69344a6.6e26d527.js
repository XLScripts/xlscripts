(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(131)),i={id:"assets",title:"Creating Assets Directory",sidebar_label:"Creating Assets Directory"},s={id:"themes/assets",isDocsHomePage:!1,title:"Creating Assets Directory",description:"XL Scripts Framework requires you to follow a Pre-defined Structure for your themes. We want to make sure that the Code Quality is clean &amp; Easy for anyone to understand. This will make your themes:",source:"@site/docs\\themes\\assets.md",permalink:"/docs/themes/assets",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/themes/assets.md",sidebar_label:"Creating Assets Directory",sidebar:"someSidebar",previous:{title:"Creating your Theme Templates",permalink:"/docs/themes/templates"},next:{title:"Functions available inside Templates",permalink:"/docs/themes/reference"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XL Scripts Framework requires you to follow a ",Object(o.b)("strong",{parentName:"p"},"Pre-defined Structure")," for your themes. We want to make sure that the Code Quality is clean ","&"," Easy for anyone to understand. This will make your themes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Organized."),Object(o.b)("li",{parentName:"ul"},"Encapsulated."),Object(o.b)("li",{parentName:"ul"},"Easily Customizable."),Object(o.b)("li",{parentName:"ul"},"Easily Distributable.")),Object(o.b)("p",null,"To achieve this, We recommend using the following Structure for your Theme directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u251c\u2500\u2500 img\n\u2502   \u2514\u2500\u2500 js\n\u251c\u2500\u2500 includes\n\u2502   \u251c\u2500\u2500 file_to_include_1.php\n\u2502   \u251c\u2500\u2500 header.php\n\u2502   \u2514\u2500\u2500 example.php\n\u251c\u2500\u2500 top_level_view.php\n\u251c\u2500\u2500 main.php\n\u251c\u2500\u2500 example.php\n\u2514\u2500\u2500 manifest.json\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you look at the ",Object(o.b)("strong",{parentName:"p"},"Default")," theme inside any XL Scripts Product, you will see this structure being followed."),Object(o.b)("p",{parentName:"div"},"We recommend using the ",Object(o.b)("strong",{parentName:"p"},"Default")," theme as a guideline for theme development."))))}p.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);