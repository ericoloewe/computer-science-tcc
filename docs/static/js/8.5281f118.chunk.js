(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[8],{129:function(e,t,a){},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(12),r=a(0),i=a.n(r),c=(a(129),a(231)),o=a(232),s=a(215),l=a(213),u=a(233),m=a(253),d=a(208),p=a(211),f=a(225),E=a(257),g=a(212),b=a(226),v=a(227),x=a(228),h=a(229),O=a(39),_=a(18);function C(e){var t=e.isOpen,a=e.onClose,n=Object(_.b)().profile,r=n.avatarSrc,c=n.email,o=n.name,s=n.link;return i.a.createElement(m.a,{anchor:"left",open:t,onClose:a},i.a.createElement(d.a,{component:"nav","aria-label":"main mailbox folders"},i.a.createElement(p.a,Object.assign({button:!0},{component:function(e){return i.a.createElement("a",e)},href:s,target:"_blank"}),i.a.createElement(f.a,null,i.a.createElement(E.a,{src:r,alt:"User avatar"})),i.a.createElement(g.a,{primary:o,secondary:c})),i.a.createElement(b.a,null),i.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/"}),i.a.createElement(v.a,null,i.a.createElement(x.a,null)),i.a.createElement(g.a,{primary:"Home"})),i.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/logout"}),i.a.createElement(v.a,null,i.a.createElement(h.a,null)),i.a.createElement(g.a,{primary:"Sair"}))))}var j=a(26),S=a(182),T=a(230);function P(e){var t=e.menuItems,a=Object(r.useState)(null),c=Object(n.a)(a,2),o=c[0],l=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return l(e.currentTarget)}},i.a.createElement(T.a,null)),i.a.createElement(S.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return l(null)}},i.a.Children.map(t,(function(e){return i.a.cloneElement(e,Object(j.a)({},e.props,{onClick:function(t){var a=e.props.onClick;l(null),a&&a(t)}}))}))))}function y(e){var t=e.className,a=e.children,m=e.hideDrawerButton,d=e.menuItems,p=e.pageTitle,f=Object(r.useState)(!1),E=Object(n.a)(f,2),g=E[0],b=E[1];return i.a.createElement("div",{className:"root-layout"},i.a.createElement("header",{className:"header"},i.a.createElement(c.a,{position:"static"},i.a.createElement(o.a,null,!m&&i.a.createElement(s.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return b(!0)}},i.a.createElement(u.a,null)),i.a.createElement(l.a,{variant:"h6",className:"title"},p),i.a.createElement("div",{style:{flexGrow:1}}),!!d&&i.a.createElement(P,{menuItems:d})))),i.a.createElement("article",{className:t},a),i.a.createElement(C,{isOpen:g,onClose:function(){return b(!1)}}))}},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(134);var n=a(0),r=a.n(n),i=a(248),c=a(222),o=a(208),s=a(211),l=a(225),u=a(257),m=a(212),d=a(213);function p(e){var t=e.items,a=e.searchLabel,n=e.onChoose,p=e.onChangeSearch,f=e.searchValue;return r.a.createElement("div",{className:"choose-component"},!!a&&r.a.createElement(i.a,{label:a,onChange:function(e){return p&&p(e.target.value)},value:f}),!a||f?r.a.createElement(c.a,{className:"paper"},r.a.createElement(o.a,{className:"list",dense:!1},t.map((function(e){var t;return r.a.createElement(s.a,{key:e.id,selected:e.selected,onClick:function(){return n&&n(e)},button:!0},e.image&&r.a.createElement(l.a,null,r.a.createElement(u.a,{src:null===(t=e.image)||void 0===t?void 0:t.src,alt:e.image.alt})),r.a.createElement(m.a,{primary:e.title,secondary:e.description}))})))):r.a.createElement(d.a,{paragraph:!0},"Digite um termo a ser procurado"))}},134:function(e,t,a){},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(1),r=a.n(n),i=a(2),c=a(12),o=(a(138),a(0)),s=a.n(o),l=a(144),u=a(145),m=a(248),d=a(151),p=a(15),f=a(8);function E(e){var t=e.eventType,a=Object(o.useState)(""),n=Object(c.a)(a,2),E=n[0],g=n[1],b=Object(p.c)().save;function v(){return(v=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t,f.a.toKebabCase(a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.createElement(s.a.Fragment,null,"true"===Object({NODE_ENV:"production",PUBLIC_URL:"/computer-science-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_COOKIE_NAME:"SpotifyToken",REACT_APP_HOST_URL:"https://ericoloewe.github.io/computer-science-tcc",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1",REACT_APP_SPOTIFY_AUTH_URL:"https://accounts.spotify.com/authorize",REACT_APP_SPOTIFY_CLIENT_ID:"62cd1002f7cd431e92969df2d619de90",REACT_APP_SPOTIFY_CLIENT_SECRET:"2ba7386c1c7a447fb961f4de8d091009",REACT_APP_USE_GTM:"true"}).REACT_APP_ENABLE_CUSTOM_OPTION?s.a.createElement(l.a,{className:"add-option-event-component"},s.a.createElement(u.a,{container:!0,spacing:1},s.a.createElement(u.a,{container:!0,item:!0,md:9},s.a.createElement(m.a,{label:"Novo item",onChange:function(e){return g(e.target.value)},value:E,fullWidth:!0})),s.a.createElement(u.a,{container:!0,item:!0,md:3},s.a.createElement(d.a,{variant:"contained",color:"default",onClick:function(){return function(e){return v.apply(this,arguments)}(E)},fullWidth:!0},"Salvar novo item")))):null)}},138:function(e,t,a){},144:function(e,t,a){"use strict";var n=a(3),r=a(14),i=a(19),c=a(0),o=(a(22),a(124)),s=a(126),l=a(128),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,m=e.disableGutters,d=void 0!==m&&m,p=e.fixed,f=void 0!==p&&p,E=e.maxWidth,g=void 0===E?"lg":E,b=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(n.a)({className:Object(o.a)(a.root,i,f&&a.fixed,d&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(l.a)(String(g)))]),ref:t},b))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},145:function(e,t,a){"use strict";var n=a(14),r=a(3),i=a(0),c=(a(22),a(124)),o=a(126),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=i.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,f=e.container,E=void 0!==f&&f,g=e.direction,b=void 0===g?"row":g,v=e.item,x=void 0!==v&&v,h=e.justify,O=void 0===h?"flex-start":h,_=e.lg,C=void 0!==_&&_,j=e.md,S=void 0!==j&&j,T=e.sm,P=void 0!==T&&T,y=e.spacing,w=void 0===y?0:y,A=e.wrap,k=void 0===A?"wrap":A,I=e.xl,N=void 0!==I&&I,R=e.xs,W=void 0!==R&&R,L=e.zeroMinWidth,D=void 0!==L&&L,U=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(u.root,m,E&&[u.container,0!==w&&u["spacing-xs-".concat(String(w))]],x&&u.item,D&&u.zeroMinWidth,"row"!==b&&u["direction-xs-".concat(String(b))],"wrap"!==k&&u["wrap-xs-".concat(String(k))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==O&&u["justify-xs-".concat(String(O))],!1!==W&&u["grid-xs-".concat(String(W))],!1!==P&&u["grid-sm-".concat(String(P))],!1!==S&&u["grid-md-".concat(String(S))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==N&&u["grid-xl-".concat(String(N))]);return i.createElement(p,Object(r.a)({className:F,ref:t},U))})),d=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=d},178:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(139),c=a(2),o=a(26),s=a(12),l=(a(178),a(0)),u=a.n(l),m=a(151),d=a(21),p=a(137),f=a(133),E=a(130),g=a(15),b=a(71),v="true"===Object({NODE_ENV:"production",PUBLIC_URL:"/computer-science-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_COOKIE_NAME:"SpotifyToken",REACT_APP_HOST_URL:"https://ericoloewe.github.io/computer-science-tcc",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1",REACT_APP_SPOTIFY_AUTH_URL:"https://accounts.spotify.com/authorize",REACT_APP_SPOTIFY_CLIENT_ID:"62cd1002f7cd431e92969df2d619de90",REACT_APP_SPOTIFY_CLIENT_SECRET:"2ba7386c1c7a447fb961f4de8d091009",REACT_APP_USE_GTM:"true"}).REACT_APP_ENABLE_WANT_TO_FEEL_LIKE;t.default=function(e){var t=e.type,a=Object(d.g)(),n=Object(b.b)().search,x=Object(g.c)().save,h=Object(l.useState)([]),O=Object(s.a)(h,2),_=O[0],C=O[1],j=Object(l.useState)({}),S=Object(s.a)(j,2),T=S[0],P=S[1];function y(e){var t=e.map((function(e){return Object(o.a)({},e,{selected:null!=T[e.id]})}));C(t)}function w(){return(w=Object(c.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:a=e.sent,c=a.map((function(e){return{id:e.id,title:e.name}})),C(Object(i.a)(c)),y(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(c.a)(r.a.mark((function e(){var n,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.filter((function(e){return e.selected})).map((function(e){return e.id})).join(";"),i="feeling"===t?g.a.CHOOSE_FEELING:g.a.CHOOSE_FEELING_TO_BE_LIKE,c="feeling"===t&&v?"/new-context/want-to-fell-like":"/new-context/activity",e.next=5,x(i,n);case 5:a.push(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){y(_)}),[T]),Object(l.useEffect)((function(){!function(e){w.apply(this,arguments)}("")}),[]),u.a.createElement(E.a,{className:"playlist-feeling-page",pageTitle:"feeling"===t?"Como voc\xea est\xe1 se sentido nesse momento?":"Como voc\xea quer se sentir nesse momento?",hideDrawerButton:!0},u.a.createElement(p.a,{eventType:g.a.CHOOSE_FEELING}),u.a.createElement(f.a,{items:_,onChoose:function(e){null!=T[e.id]?delete T[e.id]:T[e.id]=e,P(Object(o.a)({},T))}}),u.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return A.apply(this,arguments)}},"Continuar"))}}}]);
//# sourceMappingURL=8.5281f118.chunk.js.map