(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[9],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));var n=a(13),r=a(0),i=a.n(r),c=(a(119),a(221)),o=a(222),s=a(205),l=a(203),u=a(223),m=a(242),d=a(198),p=a(201),f=a(215),g=a(246),b=a(202),x=a(216),v=a(217),h=a(218),j=a(219),E=a(36),O=a(23);function w(e){var t=e.isOpen,a=e.onClose,n=Object(O.b)().profile,r=n.avatarSrc,c=n.email,o=n.name,s=n.link;return i.a.createElement(m.a,{anchor:"left",open:t,onClose:a},i.a.createElement(d.a,{component:"nav","aria-label":"main mailbox folders"},i.a.createElement(p.a,Object.assign({button:!0},{component:function(e){return i.a.createElement("a",e)},href:s,target:"_blank"}),i.a.createElement(f.a,null,i.a.createElement(g.a,{src:r,alt:"User avatar"})),i.a.createElement(b.a,{primary:o,secondary:c})),i.a.createElement(x.a,null),i.a.createElement(p.a,Object.assign({button:!0},{component:E.b,to:"/"}),i.a.createElement(v.a,null,i.a.createElement(h.a,null)),i.a.createElement(b.a,{primary:"Home"})),i.a.createElement(p.a,Object.assign({button:!0},{component:E.b,to:"/logout"}),i.a.createElement(v.a,null,i.a.createElement(j.a,null)),i.a.createElement(b.a,{primary:"Sair"}))))}var y=a(25),k=a(172),C=a(220);function S(e){var t=e.menuItems,a=Object(r.useState)(null),c=Object(n.a)(a,2),o=c[0],l=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return l(e.currentTarget)}},i.a.createElement(C.a,null)),i.a.createElement(k.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return l(null)}},i.a.Children.map(t,(function(e){return i.a.cloneElement(e,Object(y.a)({},e.props,{onClick:function(t){var a=e.props.onClick;l(null),a&&a(t)}}))}))))}function W(e){var t=e.className,a=e.children,m=e.hideDrawerButton,d=e.menuItems,p=e.pageTitle,f=Object(r.useState)(!1),g=Object(n.a)(f,2),b=g[0],x=g[1];return i.a.createElement("div",{className:"root-layout"},i.a.createElement("header",{className:"header"},i.a.createElement(c.a,{position:"static"},i.a.createElement(o.a,null,!m&&i.a.createElement(s.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return x(!0)}},i.a.createElement(u.a,null)),i.a.createElement(l.a,{variant:"h6",className:"title"},p),i.a.createElement("div",{style:{flexGrow:1}}),!!d&&i.a.createElement(S,{menuItems:d})))),i.a.createElement("article",{className:t},a),i.a.createElement(w,{isOpen:b,onClose:function(){return x(!1)}}))}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(124);var n=a(0),r=a.n(n),i=a(237),c=a(212),o=a(198),s=a(201),l=a(215),u=a(246),m=a(202),d=a(203);function p(e){var t=e.items,a=e.searchLabel,n=e.onChoose,p=e.onChangeSearch,f=e.searchValue;return r.a.createElement("div",{className:"choose-component"},!!a&&r.a.createElement(i.a,{label:a,onChange:function(e){return p&&p(e.target.value)},value:f}),!a||f?r.a.createElement(c.a,{className:"paper"},r.a.createElement(o.a,{className:"list",dense:!1},t.map((function(e){var t;return r.a.createElement(s.a,{key:e.id,selected:e.selected,onClick:function(){return n&&n(e)},button:!0},e.image&&r.a.createElement(l.a,null,r.a.createElement(u.a,{src:null===(t=e.image)||void 0===t?void 0:t.src,alt:e.image.alt})),r.a.createElement(m.a,{primary:e.title,secondary:e.description}))})))):r.a.createElement(d.a,{paragraph:!0},"Digite um termo a ser procurado"))}},124:function(e,t,a){},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(1),r=a.n(n),i=a(2),c=a(13),o=(a(128),a(0)),s=a.n(o),l=a(134),u=a(135),m=a(237),d=a(141),p=a(15),f=a(8);function g(e){var t=e.eventType,a=Object(o.useState)(""),n=Object(c.a)(a,2),g=n[0],b=n[1],x=Object(p.c)().save;function v(){return(v=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t,f.a.toKebabCase(a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.createElement(l.a,{className:"add-option-event-component"},s.a.createElement(u.a,{container:!0,spacing:1},s.a.createElement(u.a,{container:!0,item:!0,md:9},s.a.createElement(m.a,{label:"Novo item",onChange:function(e){return b(e.target.value)},value:g,fullWidth:!0})),s.a.createElement(u.a,{container:!0,item:!0,md:3},s.a.createElement(d.a,{variant:"contained",color:"default",onClick:function(){return function(e){return v.apply(this,arguments)}(g)},fullWidth:!0},"Salvar novo item"))))}},128:function(e,t,a){},134:function(e,t,a){"use strict";var n=a(3),r=a(14),i=a(18),c=a(0),o=(a(20),a(114)),s=a(116),l=a(118),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,m=e.disableGutters,d=void 0!==m&&m,p=e.fixed,f=void 0!==p&&p,g=e.maxWidth,b=void 0===g?"lg":g,x=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(n.a)({className:Object(o.a)(a.root,i,f&&a.fixed,d&&a.disableGutters,!1!==b&&a["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},x))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},135:function(e,t,a){"use strict";var n=a(14),r=a(3),i=a(0),c=(a(20),a(114)),o=a(116),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=i.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,f=e.container,g=void 0!==f&&f,b=e.direction,x=void 0===b?"row":b,v=e.item,h=void 0!==v&&v,j=e.justify,E=void 0===j?"flex-start":j,O=e.lg,w=void 0!==O&&O,y=e.md,k=void 0!==y&&y,C=e.sm,S=void 0!==C&&C,W=e.spacing,N=void 0===W?0:W,G=e.wrap,I=void 0===G?"wrap":G,L=e.xl,M=void 0!==L&&L,D=e.xs,R=void 0!==D&&D,z=e.zeroMinWidth,B=void 0!==z&&z,T=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),K=Object(c.a)(u.root,m,g&&[u.container,0!==N&&u["spacing-xs-".concat(String(N))]],h&&u.item,B&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==I&&u["wrap-xs-".concat(String(I))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==E&&u["justify-xs-".concat(String(E))],!1!==R&&u["grid-xs-".concat(String(R))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==k&&u["grid-md-".concat(String(k))],!1!==w&&u["grid-lg-".concat(String(w))],!1!==M&&u["grid-xl-".concat(String(M))]);return i.createElement(p,Object(r.a)({className:K,ref:t},T))})),d=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=d},167:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(129),c=a(2),o=a(25),s=a(13),l=(a(167),a(0)),u=a.n(l),m=a(141),d=a(19),p=a(127),f=a(123),g=a(4),b=a(5),x=a(30),v=a(7),h=a(8),j=a(38),E=new(function(){function e(){Object(g.a)(this,e)}return Object(b.a)(e,[{key:"save",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("genres",t),x.a.alert("genres saved"),e.next=4,j.a.wait(1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.b.get("/genres.json");case 2:return a=e.sent,n=a.data,e.abrupt("return",n.filter((function(e){return!t||e.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{id:h.a.toKebabCase(e),title:e}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),O=a(120),w=a(15);t.default=function(){var e=Object(d.g)(),t=Object(w.c)().save,a=Object(l.useState)([]),n=Object(s.a)(a,2),g=n[0],b=n[1],x=Object(l.useState)({}),v=Object(s.a)(x,2),h=v[0],j=v[1];function y(e){var t=e.map((function(e){return Object(o.a)({},e,{selected:null!=h[e.id]})}));b(t)}function k(){return(k=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.search(t);case 2:a=e.sent,b(Object(i.a)(a)),y(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(c.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=Object.keys(h).map((function(e){return h[e].id})).join(";"),a.next=3,t(w.a.LIKED_GENRE,n);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(l.useEffect)((function(){y(g)}),[h]),Object(l.useEffect)((function(){!function(e){k.apply(this,arguments)}("")}),[]),u.a.createElement(O.a,{className:"genre-page",pageTitle:"Generos musicais preferidos",hideDrawerButton:!0},u.a.createElement(p.a,{eventType:w.a.LIKED_GENRE}),u.a.createElement(f.a,{items:g,onChoose:function(e){null!=h[e.id]?delete h[e.id]:h[e.id]=e,j(Object(o.a)({},h))}}),u.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return C.apply(this,arguments)}},"Proximo"))}}}]);
//# sourceMappingURL=9.aa948c6b.chunk.js.map