(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[15],{129:function(e,a,t){},130:function(e,a,t){"use strict";t.d(a,"a",(function(){return B}));var n=t(12),l=t(0),r=t.n(l),c=(t(129),t(231)),o=t(232),u=t(215),m=t(213),i=t(233),s=t(253),p=t(208),E=t(211),b=t(225),f=t(257),g=t(212),d=t(226),h=t(227),v=t(228),O=t(229),j=t(39),k=t(18);function C(e){var a=e.isOpen,t=e.onClose,n=Object(k.b)().profile,l=n.avatarSrc,c=n.email,o=n.name,u=n.link;return r.a.createElement(s.a,{anchor:"left",open:a,onClose:t},r.a.createElement(p.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(E.a,Object.assign({button:!0},{component:function(e){return r.a.createElement("a",e)},href:u,target:"_blank"}),r.a.createElement(b.a,null,r.a.createElement(f.a,{src:l,alt:"User avatar"})),r.a.createElement(g.a,{primary:o,secondary:c})),r.a.createElement(d.a,null),r.a.createElement(E.a,Object.assign({button:!0},{component:j.b,to:"/"}),r.a.createElement(h.a,null,r.a.createElement(v.a,null)),r.a.createElement(g.a,{primary:"Home"})),r.a.createElement(E.a,Object.assign({button:!0},{component:j.b,to:"/logout"}),r.a.createElement(h.a,null,r.a.createElement(O.a,null)),r.a.createElement(g.a,{primary:"Sair"}))))}var N=t(26),y=t(182),w=t(230);function S(e){var a=e.menuItems,t=Object(l.useState)(null),c=Object(n.a)(t,2),o=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return m(e.currentTarget)}},r.a.createElement(w.a,null)),r.a.createElement(y.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){return m(null)}},r.a.Children.map(a,(function(e){return r.a.cloneElement(e,Object(N.a)({},e.props,{onClick:function(a){var t=e.props.onClick;m(null),t&&t(a)}}))}))))}function B(e){var a=e.className,t=e.children,s=e.hideDrawerButton,p=e.menuItems,E=e.pageTitle,b=Object(l.useState)(!1),f=Object(n.a)(b,2),g=f[0],d=f[1];return r.a.createElement("div",{className:"root-layout"},r.a.createElement("header",{className:"header"},r.a.createElement(c.a,{position:"static"},r.a.createElement(o.a,null,!s&&r.a.createElement(u.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return d(!0)}},r.a.createElement(i.a,null)),r.a.createElement(m.a,{variant:"h6",className:"title"},E),r.a.createElement("div",{style:{flexGrow:1}}),!!p&&r.a.createElement(S,{menuItems:p})))),r.a.createElement("article",{className:a},t),r.a.createElement(C,{isOpen:g,onClose:function(){return d(!1)}}))}},175:function(e,a,t){},243:function(e,a,t){"use strict";t.r(a);t(175);var n=t(0),l=t.n(n),r=t(213),c=t(21),o=t(51),u=t(130),m=t(6);a.default=function(){var e=Object(m.b)().logout,a=Object(c.g)();return Object(n.useEffect)((function(){e(),a.push("/login")})),l.a.createElement(u.a,{className:"logout-page",pageTitle:"Logout",hideDrawerButton:!0},l.a.createElement(o.a,null),l.a.createElement(r.a,{paragraph:!0},"Saindo do app..."))}}}]);
//# sourceMappingURL=15.b9324db5.chunk.js.map