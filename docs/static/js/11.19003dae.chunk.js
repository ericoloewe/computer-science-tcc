(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[11],{129:function(e,a,t){},130:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var n=t(12),r=t(0),c=t.n(r),l=(t(129),t(231)),o=t(232),i=t(215),u=t(213),s=t(233),m=t(253),p=t(208),f=t(211),E=t(225),b=t(257),d=t(212),h=t(226),O=t(227),j=t(228),v=t(229),g=t(39),k=t(18);function y(e){var a=e.isOpen,t=e.onClose,n=Object(k.b)().profile,r=n.avatarSrc,l=n.email,o=n.name,i=n.link;return c.a.createElement(m.a,{anchor:"left",open:a,onClose:t},c.a.createElement(p.a,{component:"nav","aria-label":"main mailbox folders"},c.a.createElement(f.a,Object.assign({button:!0},{component:function(e){return c.a.createElement("a",e)},href:i,target:"_blank"}),c.a.createElement(E.a,null,c.a.createElement(b.a,{src:r,alt:"User avatar"})),c.a.createElement(d.a,{primary:o,secondary:l})),c.a.createElement(h.a,null),c.a.createElement(f.a,Object.assign({button:!0},{component:g.b,to:"/"}),c.a.createElement(O.a,null,c.a.createElement(j.a,null)),c.a.createElement(d.a,{primary:"Home"})),c.a.createElement(f.a,Object.assign({button:!0},{component:g.b,to:"/logout"}),c.a.createElement(O.a,null,c.a.createElement(v.a,null)),c.a.createElement(d.a,{primary:"Sair"}))))}var C=t(26),N=t(182),S=t(230);function w(e){var a=e.menuItems,t=Object(r.useState)(null),l=Object(n.a)(t,2),o=l[0],u=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return u(e.currentTarget)}},c.a.createElement(S.a,null)),c.a.createElement(N.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return u(null)}},c.a.Children.map(a,(function(e){return c.a.cloneElement(e,Object(C.a)({},e.props,{onClick:function(a){var t=e.props.onClick;u(null),t&&t(a)}}))}))))}function x(e){var a=e.className,t=e.children,m=e.hideDrawerButton,p=e.menuItems,f=e.pageTitle,E=Object(r.useState)(!1),b=Object(n.a)(E,2),d=b[0],h=b[1];return c.a.createElement("div",{className:"root-layout"},c.a.createElement("header",{className:"header"},c.a.createElement(l.a,{position:"static"},c.a.createElement(o.a,null,!m&&c.a.createElement(i.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return h(!0)}},c.a.createElement(s.a,null)),c.a.createElement(u.a,{variant:"h6",className:"title"},f),c.a.createElement("div",{style:{flexGrow:1}}),!!p&&c.a.createElement(w,{menuItems:p})))),c.a.createElement("article",{className:a},t),c.a.createElement(y,{isOpen:d,onClose:function(){return h(!1)}}))}},133:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));t(134);var n=t(0),r=t.n(n),c=t(248),l=t(222),o=t(208),i=t(211),u=t(225),s=t(257),m=t(212),p=t(213);function f(e){var a=e.items,t=e.searchLabel,n=e.onChoose,f=e.onChangeSearch,E=e.searchValue;return r.a.createElement("div",{className:"choose-component"},!!t&&r.a.createElement(c.a,{label:t,onChange:function(e){return f&&f(e.target.value)},value:E}),!t||E?r.a.createElement(l.a,{className:"paper"},r.a.createElement(o.a,{className:"list",dense:!1},a.map((function(e){var a;return r.a.createElement(i.a,{key:e.id,selected:e.selected,onClick:function(){return n&&n(e)},button:!0},e.image&&r.a.createElement(u.a,null,r.a.createElement(s.a,{src:null===(a=e.image)||void 0===a?void 0:a.src,alt:e.image.alt})),r.a.createElement(m.a,{primary:e.title,secondary:e.description}))})))):r.a.createElement(p.a,{paragraph:!0},"Digite um termo a ser procurado"))}},134:function(e,a,t){},176:function(e,a,t){},244:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(139),l=t(2),o=t(26),i=t(12),u=(t(176),t(0)),s=t.n(u),m=t(151),p=t(21),f=t(133),E=t(130),b=t(8),d=t(41),h=t(52),O=t(15),j=d.a.debounce((function(e,a){return a(e)}),1200);a.default=function(){var e=Object(p.g)(),a=Object(O.c)().save,t=Object(h.b)().searchArtists,n=Object(u.useState)(""),d=Object(i.a)(n,2),v=d[0],g=d[1],k=Object(u.useState)([]),y=Object(i.a)(k,2),C=y[0],N=y[1],S=Object(u.useState)({}),w=Object(i.a)(S,2),x=w[0],I=w[1];function T(e){var a=e.map((function(e){return Object(o.a)({},e,{selected:null!=x[e.id]})}));N(a)}function B(e){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(r.a.mark((function e(a){var n,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],b.a.isEmpty(v)){e.next=8;break}return e.next=4,t(a);case 4:l=e.sent,n=l.map((function(e){return Object(o.a)({},e,{title:e.name})})),N(Object(c.a)(n)),T(n);case 8:N(Object(c.a)(n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(l.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.keys(x).map((function(e){return x[e].id})).join(";"),t.next=3,a(O.a.LIKED_ARTIST,n);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.useEffect)((function(){T(C)}),[x]),Object(u.useEffect)((function(){j(v,B)}),[v]),s.a.createElement(E.a,{className:"artists-page",pageTitle:"Artistas preferidos",hideDrawerButton:!0},s.a.createElement(f.a,{items:C,onChangeSearch:function(e){return g(e)},onChoose:function(e){null!=x[e.id]?delete x[e.id]:x[e.id]=e,I(Object(o.a)({},x))},searchLabel:"Nome do artista",searchValue:v}),s.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return A.apply(this,arguments)}},"Proximo"))}}}]);
//# sourceMappingURL=11.19003dae.chunk.js.map