(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,l({ref:t},p,{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(151)),i={id:"example_blazor_wasm",title:"Blazor WASM"},l={id:"example_blazor_wasm",title:"Blazor WASM",description:"Description",source:"@site/docs/example_blazor_wasm.md",permalink:"/docs/next/example_blazor_wasm",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_blazor_wasm.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1591277053,sidebar:"docs",previous:{title:"ASP.NET",permalink:"/docs/next/example_asp"},next:{title:"Blazor ServerSide",permalink:"/docs/next/example_blazor"}},c=[{value:"Description",id:"description",children:[]},{value:"Run it",id:"run-it",children:[]}],p={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This small cross-platform web app runs on ",Object(o.b)("inlineCode",{parentName:"p"},"Blazor WebAssembly"),", which was released on 19. May 2020. It allows to run C# code in any browser which supports WebAssembly. This allows to create .NET full-stack web projects without writing any JavaScript. Find more about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://devblogs.microsoft.com/aspnet/blazor-webassembly-3-2-0-now-available/"}),"Blazor WebAssembly here")),Object(o.b)("p",null,"Since this library is compatible with ",Object(o.b)("inlineCode",{parentName:"p"},".NET Standard 2.1"),", you can use all features of ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web")," in your blazor wasm app. The example logs the user in via ",Object(o.b)("inlineCode",{parentName:"p"},"Implicit Grant")," and does 2 user-related API requests from the browser. You can observe the requests from your browsers network tools."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/blazorwasm_homepage.png",alt:"BlazorWASM Spotify Example"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/blazorwasm_network_tools.png",alt:"BlazorWASM Spotify Example - network tools"}))),Object(o.b)("h2",{id:"run-it"},"Run it"),Object(o.b)("p",null,"Before running it, make sure you created an app in your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/dashboard/"}),"spotify dashboard")," and ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:5001")," is a redirect uri of it."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.BlazorWASM\ndotnet restore\n\necho "{ \\"SPOTIFY_CLIENT_ID\\": \\"YourSpotifyClientId\\" }" > wwwroot/appsettings.json\ndotnet run\n\n# Visit https://localhost:5001\n')))}s.isMDXComponent=!0}}]);