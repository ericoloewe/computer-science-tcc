(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[10],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(1),r=a.n(n),i=a(2),c=a(13),o=(a(103),a(0)),s=a.n(o),l=a(113),u=a(114),m=a(229),d=a(118),p=a(15),f=a(7);function g(e){var t=e.eventType,a=Object(o.useState)(""),n=Object(c.a)(a,2),g=n[0],b=n[1],x=Object(p.c)().save;function v(){return(v=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t,f.a.toKebabCase(a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.createElement(l.a,{className:"add-option-event-component"},s.a.createElement(u.a,{container:!0,spacing:1},s.a.createElement(u.a,{container:!0,item:!0,md:9},s.a.createElement(m.a,{label:"Novo item",onChange:function(e){return b(e.target.value)},value:g,fullWidth:!0})),s.a.createElement(u.a,{container:!0,item:!0,md:3},s.a.createElement(d.a,{variant:"contained",color:"secondary",onClick:function(){return function(e){return v.apply(this,arguments)}(g)},fullWidth:!0},"Salvar"))))}},103:function(e,t,a){},113:function(e,t,a){"use strict";var n=a(5),r=a(85),i=a(98),c=a(0),o=(a(21),a(86)),s=a(88),l=a(91),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,m=e.disableGutters,d=void 0!==m&&m,p=e.fixed,f=void 0!==p&&p,g=e.maxWidth,b=void 0===g?"lg":g,x=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(n.a)({className:Object(o.a)(a.root,i,f&&a.fixed,d&&a.disableGutters,!1!==b&&a["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},x))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},114:function(e,t,a){"use strict";var n=a(85),r=a(5),i=a(0),c=(a(21),a(86)),o=a(88),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=i.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,f=e.container,g=void 0!==f&&f,b=e.direction,x=void 0===b?"row":b,v=e.item,h=void 0!==v&&v,E=e.justify,O=void 0===E?"flex-start":E,j=e.lg,y=void 0!==j&&j,w=e.md,k=void 0!==w&&w,C=e.sm,S=void 0!==C&&C,W=e.spacing,N=void 0===W?0:W,I=e.wrap,G=void 0===I?"wrap":I,L=e.xl,M=void 0!==L&&L,T=e.xs,z=void 0!==T&&T,B=e.zeroMinWidth,D=void 0!==B&&B,R=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(c.a)(u.root,m,g&&[u.container,0!==N&&u["spacing-xs-".concat(String(N))]],h&&u.item,D&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==G&&u["wrap-xs-".concat(String(G))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==O&&u["justify-xs-".concat(String(O))],!1!==z&&u["grid-xs-".concat(String(z))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==k&&u["grid-md-".concat(String(k))],!1!==y&&u["grid-lg-".concat(String(y))],!1!==M&&u["grid-xl-".concat(String(M))]);return i.createElement(p,Object(r.a)({className:A,ref:t},R))})),d=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=d},157:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(104),r=a(1),i=a.n(r),c=a(2),o=a(22),s=a(13),l=(a(157),a(0)),u=a.n(l),m=a(118),d=a(16),p=a(102),f=a(96),g=a(93),b=a(3),x=a(4),v=function(){function e(){Object(b.a)(this,e)}return Object(x.a)(e,null,[{key:"getPosition",value:function(){return new Promise((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e(t)}),(function(e){console.error(e),t("Unable to retrieve your location")})):t("Geolocation is not supported by your browser")}))}}]),e}(),h=a(15),E=a(49);t.default=function(){var e=Object(d.g)(),t=Object(E.b)().search,a=Object(h.c)().save,r=Object(l.useState)([]),b=Object(s.a)(r,2),x=b[0],O=b[1],j=Object(l.useState)({}),y=Object(s.a)(j,2),w=y[0],k=y[1];function C(e){var t=e.map((function(e){return Object(o.a)({},e,{selected:null!=w[e.id]})}));O(t)}function S(){return(S=Object(c.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getPosition();case 2:t=e.sent,n=JSON.stringify({lat:t.coords.latitude,lng:t.coords.latitude}),a(h.a.LOAD_LOCATION,n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(c.a)(i.a.mark((function e(a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a);case 2:r=e.sent,c=r.map((function(e){return{id:e.id,title:e.name}})),O(Object(n.a)(c)),C(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(c.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x.filter((function(e){return e.selected})).map((function(e){return e.id})).join(";"),t.next=3,a(h.a.CHOOSE_LOCATION,n);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){C(x)}),[w]),Object(l.useEffect)((function(){!function(){S.apply(this,arguments)}(),function(e){W.apply(this,arguments)}("")}),[]),u.a.createElement(g.a,{className:"playlist-location-page",pageTitle:"Onde voc\xea esta?",hideDrawerButton:!0},u.a.createElement(p.a,{eventType:h.a.CHOOSE_LOCATION}),u.a.createElement(f.a,{items:x,onChoose:function(e){null!=w[e.id]?delete w[e.id]:w[e.id]=e,k(Object(o.a)({},w))}}),u.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return N.apply(this,arguments)}},"Salvar"))}},92:function(e,t,a){},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n=a(13),r=a(0),i=a.n(r),c=(a(92),a(212)),o=a(213),s=a(194),l=a(147),u=a(214),m=a(234),d=a(187),p=a(191),f=a(204),g=a(238),b=a(192),x=a(205),v=a(206),h=a(207),E=a(208),O=a(209),j=a(210),y=a(24),w=a(19);function k(e){var t=e.isOpen,a=e.onClose,n=Object(w.b)().profile,r=n.avatarSrc,c=n.email,o=n.name,s=n.link;return i.a.createElement(m.a,{anchor:"left",open:t,onClose:a},i.a.createElement(d.a,{component:"nav","aria-label":"main mailbox folders"},i.a.createElement(p.a,Object.assign({button:!0},{component:function(e){return i.a.createElement("a",e)},href:s,target:"_blank"}),i.a.createElement(f.a,null,i.a.createElement(g.a,{src:r,alt:"User avatar"})),i.a.createElement(b.a,{primary:o,secondary:c})),i.a.createElement(x.a,null),i.a.createElement(p.a,Object.assign({button:!0},{component:y.b,to:"/"}),i.a.createElement(v.a,null,i.a.createElement(h.a,null)),i.a.createElement(b.a,{primary:"Home"})),i.a.createElement(p.a,Object.assign({button:!0},{component:y.b,to:"/new-context/artists"}),i.a.createElement(v.a,null,i.a.createElement(E.a,null)),i.a.createElement(b.a,{primary:"Artistas preferidos"})),i.a.createElement(p.a,Object.assign({button:!0},{component:y.b,to:"/new-context/gender"}),i.a.createElement(v.a,null,i.a.createElement(O.a,null)),i.a.createElement(b.a,{primary:"Generos preferidos"})),i.a.createElement(p.a,Object.assign({button:!0},{component:y.b,to:"/logout"}),i.a.createElement(v.a,null,i.a.createElement(j.a,null)),i.a.createElement(b.a,{primary:"Sair"}))))}var C=a(22),S=a(159),W=a(211);function N(e){var t=e.menuItems,a=Object(r.useState)(null),c=Object(n.a)(a,2),o=c[0],l=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return l(e.currentTarget)}},i.a.createElement(W.a,null)),i.a.createElement(S.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return l(null)}},i.a.Children.map(t,(function(e){return i.a.cloneElement(e,Object(C.a)({},e.props,{onClick:function(t){var a=e.props.onClick;l(null),a&&a(t)}}))}))))}function I(e){var t=e.className,a=e.children,m=e.hideDrawerButton,d=e.menuItems,p=e.pageTitle,f=Object(r.useState)(!1),g=Object(n.a)(f,2),b=g[0],x=g[1];return i.a.createElement("div",{className:"root-layout"},i.a.createElement("header",{className:"header"},i.a.createElement(c.a,{position:"static"},i.a.createElement(o.a,null,!m&&i.a.createElement(s.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return x(!0)}},i.a.createElement(u.a,null)),i.a.createElement(l.a,{variant:"h6",className:"title"},p),i.a.createElement("div",{style:{flexGrow:1}}),!!d&&i.a.createElement(N,{menuItems:d})))),i.a.createElement("article",{className:t},a),i.a.createElement(k,{isOpen:b,onClose:function(){return x(!1)}}))}},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(97);var n=a(0),r=a.n(n),i=a(229),c=a(201),o=a(187),s=a(191),l=a(204),u=a(238),m=a(192),d=a(147);function p(e){var t=e.items,a=e.searchLabel,n=e.onChoose,p=e.onChangeSearch,f=e.searchValue;return r.a.createElement("div",{className:"choose-component"},!!a&&r.a.createElement(i.a,{label:a,onChange:function(e){return p&&p(e.target.value)},value:f}),!a||f?r.a.createElement(c.a,{className:"paper"},r.a.createElement(o.a,{className:"list",dense:!1},t.map((function(e){var t;return r.a.createElement(s.a,{key:e.id,selected:e.selected,onClick:function(){return n&&n(e)},button:!0},e.image&&r.a.createElement(l.a,null,r.a.createElement(u.a,{src:null===(t=e.image)||void 0===t?void 0:t.src,alt:e.image.alt})),r.a.createElement(m.a,{primary:e.title,secondary:e.description}))})))):r.a.createElement(d.a,{paragraph:!0},"Digite um termo a ser procurado"))}},97:function(e,t,a){}}]);
//# sourceMappingURL=10.0638eb09.chunk.js.map