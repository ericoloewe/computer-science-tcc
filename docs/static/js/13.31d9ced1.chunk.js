(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[13],{117:function(e,a,t){},118:function(e,a,t){"use strict";t.d(a,"a",(function(){return S}));var n=t(13),r=t(0),c=t.n(r),l=(t(117),t(222)),i=t(223),o=t(204),s=t(160),u=t(224),m=t(244),d=t(198),p=t(201),E=t(214),f=t(248),v=t(202),b=t(215),g=t(216),k=t(217),y=t(218),h=t(219),j=t(220),O=t(35),N=t(22);function x(e){var a=e.isOpen,t=e.onClose,n=Object(N.b)().profile,r=n.avatarSrc,l=n.email,i=n.name,o=n.link;return c.a.createElement(m.a,{anchor:"left",open:a,onClose:t},c.a.createElement(d.a,{component:"nav","aria-label":"main mailbox folders"},c.a.createElement(p.a,Object.assign({button:!0},{component:function(e){return c.a.createElement("a",e)},href:o,target:"_blank"}),c.a.createElement(E.a,null,c.a.createElement(f.a,{src:r,alt:"User avatar"})),c.a.createElement(v.a,{primary:i,secondary:l})),c.a.createElement(b.a,null),c.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/"}),c.a.createElement(g.a,null,c.a.createElement(k.a,null)),c.a.createElement(v.a,{primary:"Home"})),c.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/new-context/artists"}),c.a.createElement(g.a,null,c.a.createElement(y.a,null)),c.a.createElement(v.a,{primary:"Artistas preferidos"})),c.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/new-context/gender"}),c.a.createElement(g.a,null,c.a.createElement(h.a,null)),c.a.createElement(v.a,{primary:"Generos preferidos"})),c.a.createElement(p.a,Object.assign({button:!0},{component:O.b,to:"/logout"}),c.a.createElement(g.a,null,c.a.createElement(j.a,null)),c.a.createElement(v.a,{primary:"Sair"}))))}var C=t(24),I=t(172),w=t(221);function T(e){var a=e.menuItems,t=Object(r.useState)(null),l=Object(n.a)(t,2),i=l[0],s=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{edge:"end",color:"inherit","aria-label":"more",onClick:function(e){return s(e.currentTarget)}},c.a.createElement(w.a,null)),c.a.createElement(I.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){return s(null)}},c.a.Children.map(a,(function(e){return c.a.cloneElement(e,Object(C.a)({},e.props,{onClick:function(a){var t=e.props.onClick;s(null),t&&t(a)}}))}))))}function S(e){var a=e.className,t=e.children,m=e.hideDrawerButton,d=e.menuItems,p=e.pageTitle,E=Object(r.useState)(!1),f=Object(n.a)(E,2),v=f[0],b=f[1];return c.a.createElement("div",{className:"root-layout"},c.a.createElement("header",{className:"header"},c.a.createElement(l.a,{position:"static"},c.a.createElement(i.a,null,!m&&c.a.createElement(o.a,{edge:"start",className:"classes.menuButton",color:"inherit","aria-label":"menu",onClick:function(){return b(!0)}},c.a.createElement(u.a,null)),c.a.createElement(s.a,{variant:"h6",className:"title"},p),c.a.createElement("div",{style:{flexGrow:1}}),!!d&&c.a.createElement(T,{menuItems:d})))),c.a.createElement("article",{className:a},t),c.a.createElement(x,{isOpen:v,onClose:function(){return b(!1)}}))}},143:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(4),r=t(5),c=new(function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"alert",value:function(e){window.alert(e)}}]),e}())},146:function(e,a,t){},161:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(2),l=t(13),i=(t(146),t(0)),o=t.n(i),s=t(230),u=t(198),m=t(201),d=t(202),p=t(139);function E(e){var a=e.devices,t=e.onAccept;return o.a.createElement("section",{className:"device-list"},o.a.createElement(u.a,null,a.map((function(e){return o.a.createElement(m.a,{key:e.id,selected:e.is_active},o.a.createElement(d.a,{primary:e.name,secondary:e.type}))}))),o.a.createElement(p.a,{className:"button",color:"primary",variant:"contained",onClick:t},"Usar plugin para tocar musicas"))}var f=t(203),v=t(247),b=t(133),g=t(210),k=t(212),y=t(160),h=t(213),j=t(43),O=(t(161),t(204)),N=t(205),x=t(207),C=t(208),I=t(209),w=Object(f.a)((function(){return Object(v.a)({playIcon:{height:38,width:38}})}));function T(e){var a=e.className,t=w(),n=Object(j.b)(),r=n.playingMusicInfo,c=n.nextTrack,l=n.previousTrack,i=n.togglePlay;return o.a.createElement("div",{className:"music-controls ".concat(a)},o.a.createElement(O.a,{"aria-label":"previous",onClick:l},o.a.createElement(N.a,null)),o.a.createElement(O.a,{"aria-label":"play/pause",onClick:i},(null===r||void 0===r?void 0:r.paused)?o.a.createElement(x.a,{className:t.playIcon}):o.a.createElement(C.a,{className:t.playIcon})),o.a.createElement(O.a,{"aria-label":"next",onClick:c},o.a.createElement(I.a,null)))}var S=Object(f.a)((function(e){return Object(v.a)({root:{display:"flex",justifyContent:"space-between"},details:{display:"flex",flexDirection:"column",zIndex:2},content:{flex:"1 0 auto",zIndex:2},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}})}));function M(e){var a=e.onBackgroundClick,t=S(),n=Object(j.b)().playingMusicInfo;return o.a.createElement(b.a,{className:"music-control"},o.a.createElement(g.a,{className:"".concat(t.root," music-control-card")},o.a.createElement("div",{className:"background",onClick:a}),o.a.createElement("div",{className:t.details},o.a.createElement(k.a,{className:t.content},o.a.createElement(y.a,{component:"h5",variant:"h5"},null===n||void 0===n?void 0:n.currentTrack.name),o.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},null===n||void 0===n?void 0:n.currentTrack.album.name)),o.a.createElement(T,{className:t.controls})),o.a.createElement(h.a,{className:t.cover,image:null===n||void 0===n?void 0:n.currentTrack.image.src,title:null===n||void 0===n?void 0:n.currentTrack.image.alt})))}var A=t(118),B=t(35),D=t(225),P=t(226),U=t(219),z=t(134);function G(){return o.a.createElement(b.a,{className:"list-of-contexts"},o.a.createElement(z.a,{container:!0,spacing:1},o.a.createElement(z.a,{container:!0,item:!0,md:12},o.a.createElement(y.a,{variant:"h4",component:"h4"},"Informa\xe7\xf5es para ajudar na recomenda\xe7\xe3o")),o.a.createElement(z.a,{container:!0,item:!0,md:4},o.a.createElement(_,{to:"/music-search",title:"Musica",icon:o.a.createElement(D.a,null)})),o.a.createElement(z.a,{container:!0,item:!0,md:4},o.a.createElement(_,{to:"/artists",title:"Artistas",icon:o.a.createElement(P.a,null)})),o.a.createElement(z.a,{container:!0,item:!0,md:4},o.a.createElement(_,{to:"/gender",title:"Generos",icon:o.a.createElement(U.a,null)}))))}function _(e){var a=e.title,t=e.icon,n=e.to;return o.a.createElement(g.a,{className:"context-card"},o.a.createElement(B.b,{to:n},o.a.createElement(k.a,{className:"content-card-content"},t,o.a.createElement(y.a,{className:"title",component:"h5",variant:"h5"},a))))}var L,R=t(46),F=t(214),H=t(248),J=t(249),K=t(227);function q(e){var a=e.onExpandClick,t=Object(j.b)().playingMusicInfo;return o.a.createElement("section",{className:"music-details-component"},o.a.createElement(O.a,{className:"expand-more","aria-label":"expand",onClick:a},o.a.createElement(K.a,null)),o.a.createElement("div",{className:"album"},o.a.createElement("img",{className:"image",src:null===t||void 0===t?void 0:t.currentTrack.album.image.src,alt:null===t||void 0===t?void 0:t.currentTrack.album.image.alt})),o.a.createElement("div",{className:"title-and-description"},o.a.createElement(m.a,null,o.a.createElement(F.a,null,o.a.createElement(H.a,{src:null===t||void 0===t?void 0:t.currentTrack.image.src,alt:null===t||void 0===t?void 0:t.currentTrack.image.alt})),o.a.createElement(d.a,{primary:null===t||void 0===t?void 0:t.currentTrack.name,secondary:null===t||void 0===t?void 0:t.currentTrack.album.name}))),t&&o.a.createElement(Q,t),o.a.createElement(T,{className:"custom-controls-details"}))}function Q(e){var a=e.position,t=e.paused,n=e.duration,r=Object(i.useState)(0),c=Object(l.a)(r,2),s=c[0],u=c[1];return t||(clearTimeout(L),L=setTimeout((function(){u(s+1)}),1e3)),Object(i.useEffect)((function(){u(a/1e3)}),[a]),o.a.createElement("div",{className:"slider"},o.a.createElement(J.a,{value:s,max:n/1e3,"aria-labelledby":"slider",valueLabelDisplay:"off"}))}var V=t(22),W=t(228),X=t(229),Y=t(18),Z=t(143),$=t(16);function ee(){var e=Object(j.b)().playingMusicInfo,a=Object($.c)().save,t=Object(Y.g)();function n(){return(n=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a($.a.LIKED_MUSIC,null===e||void 0===e?void 0:e.currentTrack.uri);case 2:Z.a.alert("Informa\xe7\xe3o salva!");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a($.a.HATED_MUSIC,null===e||void 0===e?void 0:e.currentTrack.uri);case 2:t.push("/music-search");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return o.a.createElement(b.a,{className:"like-or-not-like"},o.a.createElement(z.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},o.a.createElement(p.a,{color:"primary",endIcon:o.a.createElement(W.a,null,"send"),onClick:function(){return function(){return n.apply(this,arguments)}()},size:"large",variant:"contained"},"Gostei"),o.a.createElement(p.a,{color:"secondary",endIcon:o.a.createElement(X.a,null,"send"),onClick:function(){return function(){return l.apply(this,arguments)}()},size:"large",variant:"contained"},"N\xe3o gostei")))}a.default=function(){var e,a=Object(j.b)(),t=a.isPlayerReady,n=a.isPluginPlayerActive,u=a.transferUserPlaybackToPlugin,m=Object(V.b)().getAvailableDevices,d=Object(i.useState)([]),p=Object(l.a)(d,2),f=p[0],v=p[1],b=Object(i.useState)(!1),g=Object(l.a)(b,2),k=g[0],y=g[1];function h(){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:a=e.sent,v(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){t&&h()}),[t]),o.a.createElement(A.a,{className:"home-page",pageTitle:"Reprodu\xe7\xe3o de musicas",menuItems:(e=h,[o.a.createElement(s.a,{key:"refresh",onClick:function(){return e()}},"Refresh")])},t?n?k?o.a.createElement(q,{onExpandClick:function(){return y(!1)}}):o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{onBackgroundClick:function(){return y(!0)}}),o.a.createElement(ee,null),o.a.createElement(G,null)):o.a.createElement(E,{devices:f,onAccept:function(){return N.apply(this,arguments)}}):o.a.createElement(R.a,null))}}}]);
//# sourceMappingURL=13.31d9ced1.chunk.js.map