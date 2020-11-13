(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(9),l=(a(0),a(187)),b={id:"follow",title:"Follow",sidebar_label:"Follow"},o={id:"version-5.1.1/web/follow",title:"Follow",description:"Follow",source:"@site/versioned_docs/version-5.1.1/web/follow.md",permalink:"/SpotifyAPI-NET/docs/web/follow",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/follow.md",version:"5.1.1",lastUpdatedBy:"GaryNg",lastUpdatedAt:1605304616,sidebar_label:"Follow",sidebar:"version-5.1.1/someSidebar",previous:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/web/browse"},next:{title:"Library",permalink:"/SpotifyAPI-NET/docs/web/library"}},i=[{value:"Follow",id:"follow",children:[]},{value:"Unfollow",id:"unfollow",children:[]},{value:"IsFollowing",id:"isfollowing",children:[]},{value:"FollowPlaylist",id:"followplaylist",children:[]},{value:"UnfollowPlaylist",id:"unfollowplaylist",children:[]},{value:"IsFollowingPlaylist",id:"isfollowingplaylist",children:[]}],p={rightToc:i};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"follow"},"Follow"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add the current user as a follower of one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"followType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID type: either artist or user."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids or id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.Follow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Follow(FollowType.User, "1122095781");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"unfollow"},"Unfollow"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove the current user as a follower of one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"followType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID type: either artist or user."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids or id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.Unfollow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Unfollow(FollowType.User, "1122095781");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"isfollowing"},"IsFollowing"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Check to see if the current user is following one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"followType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID type: either artist or user."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids or id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",Object(l.b)("inlineCode",{parentName:"p"},"List<Boolean> List")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'//Are you one of my Followers? :P\nListResponse<Boolean> response = _spotify.IsFollowing(FollowType.User, "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"followplaylist"},"FollowPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add the current user as a follower of a playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ownerId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[showPublic]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true the playlist will be included in user's public playlists, if false it will remain  private."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.FollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"unfollowplaylist"},"UnfollowPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove the current user as a follower of a playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ownerId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID of the playlist that is to be no longer followed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.UnfollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"isfollowingplaylist"},"IsFollowingPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Check to see if one or more Spotify users are following a specified playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ownerId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID of the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids or id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",Object(l.b)("inlineCode",{parentName:"p"},"List<Boolean> List")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'//Am I following the playlist?\nListResponse<Boolean> response = _spotify.IsFollowing("maxloermans", "3SIp2VAsKI03mReF0dFBmI", "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),Object(l.b)("hr",null))}c.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(a),j=n,m=s["".concat(b,".").concat(j)]||s[j]||O[j]||l;return a?r.a.createElement(m,o({ref:t},p,{components:a})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);