(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[14],{151:function(e,a,t){},223:function(e,a,t){"use strict";t.r(a);t(151);var n=t(0),r=t.n(n),l=t(147),c=t(16),o=t(34),m=t(93),i=t(9);a.default=function(){var e=Object(i.b)().saveToken,a=Object(c.g)().push;return Object(n.useEffect)((function(){e(location.href),a("/")})),r.a.createElement(m.a,{className:"login-redirect-spotify-page",pageTitle:"Login \u2714",hideDrawerButton:!0},r.a.createElement(o.a,null),r.a.createElement(l.a,{paragraph:!0},"Login realizado com sucesso!"),r.a.createElement(l.a,{paragraph:!0},"Redirecionando para home..."))}},92:function(e,a,t){},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return T}));var n=t(13),r=t(0),l=t.n(r),c=(t(92),t(212)),o=t(213),m=t(194),i=t(147),u=t(214),s=t(234),p=t(187),E=t(191),b=t(204),f=t(238),d=t(192),g=t(205),h=t(206),O=t(207),v=t(208),j=t(209),k=t(210),y=t(24),C=t(19);function w(e){var a=e.isOpen,t=e.onClose,n=Object(C.b)().profile,r=n.avatarSrc,c=n.email,o=n.name,m=n.link;return l.a.createElement(s.a,{anchor:"left",open:a,onClose:t},l.a.createElement(p.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(E.a,Object.assign({button:!0},{component:function(e){return l.a.createElement("a",e)},href:m,target:"_blank"}),l.a.createElement(b.a,null,l.a.createElement(f.a,{src:r,alt:"User avatar"})),l.a.createElement(d.a,{primary:o,secondary:c})),l.a.createElement(g.a,null),l.a.createElement(E.a,Object.assign({button:!0},{component:y.b,to:"/"}),l.a.createElement(h.a,null,l.a.createElement(O.a,null)),l.a.createElement(d.a,{primary:"Home"})),l.a.createElement(E.a,Object.assign({button:!0},{component:y.b,to:"/new-context/artists"}),l.a.createElement(h.a,null,l.a.createElement(v.a,null)),l.a.createElement(d.a,{primary:"Artistas preferidos"})),l.a.createElement(E.a,Object.assign({button:!0},{component:y.b,to:"/new-context/gender"}),l.a.createElement(h.a,null,l.a.createElement(j.a,null)),l.a.createElement(d.a,{primary:"Generos preferidos"})),l.a.createElement(E.a,Object.assign({button:!0},{component:y.b,to:"/logout"}),l.a.createElement(h.a,null,l.a.createElement(k.a,null)),l.a.createElement(d.a,{primary:"Sair"}))))}var N=t(22),x=t(159),B=t(211);function S(e){var a=e.menuItems,t=Object(r.useState)(null),c=Object(n.a)(t,2),o=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return i(e.currentTarget)}},l.a.createElement(B.a,null)),l.a.createElement(x.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return i(null)}},l.a.Children.map(a,(function(e){return l.a.cloneElement(e,Object(N.a)({},e.props,{onClick:function(a){var t=e.props.onClick;i(null),t&&t(a)}}))}))))}function T(e){var a=e.className,t=e.children,s=e.hideDrawerButton,p=e.menuItems,E=e.pageTitle,b=Object(r.useState)(!1),f=Object(n.a)(b,2),d=f[0],g=f[1];return l.a.createElement("div",{className:"root-layout"},l.a.createElement("header",{className:"header"},l.a.createElement(c.a,{position:"static"},l.a.createElement(o.a,null,!s&&l.a.createElement(m.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return g(!0)}},l.a.createElement(u.a,null)),l.a.createElement(i.a,{variant:"h6",className:"title"},E),l.a.createElement("div",{style:{flexGrow:1}}),!!p&&l.a.createElement(S,{menuItems:p})))),l.a.createElement("article",{className:a},t),l.a.createElement(w,{isOpen:d,onClose:function(){return g(!1)}}))}}}]);
//# sourceMappingURL=14.c3082c3b.chunk.js.map