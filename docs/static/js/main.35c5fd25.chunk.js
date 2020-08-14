(this["webpackJsonpplugin-app"]=this["webpackJsonpplugin-app"]||[]).push([[3],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n(4),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"createSpotifyAuthUrl",value:function(){var t=new URL("https://accounts.spotify.com/authorize");return t.searchParams.set("client_id","8624027c702d49b08f2da1c2dd348fab"),t.searchParams.set("response_type","token"),t.searchParams.set("redirect_uri",e.getSpotifyRedirectUrl()),t.searchParams.set("scope",this.SCOPES.join(" ")),t.toString()}},{key:"createPlayer",value:function(e){return new Promise((function(t,n){window.onSpotifyWebPlaybackSDKReady=function(){var r=new Spotify.Player({name:"Spotify plugin",getOAuthToken:function(t){t(e)}});r.addListener("initialization_error",(function(e){var t=e.message;return n(t)})),r.addListener("authentication_error",(function(e){var t=e.message;return n(t)})),r.addListener("account_error",(function(e){var t=e.message;return n(t)})),r.addListener("playback_error",(function(e){var t=e.message;return n(t)})),r.addListener("not_ready",(function(e){var t=e.device_id;return n("Device ID has gone offline ".concat(t))})),r.addListener("ready",(function(e){var n=e.device_id;return t({device_id:n,original:r})})),r.connect()}}))}},{key:"getApiUrl",value:function(){return"https://api.spotify.com/v1"}},{key:"getTokenAndInfoFromRedirectUrl",value:function(e){var t=new URL(e);t.search=t.hash.slice(1,t.hash.length);var n=t.searchParams.get("access_token"),r=Number(t.searchParams.get("expires_in")),a=t.searchParams.get("token_type");if(!n||!r||!a)throw new Error("Invalid redirect parameter");return{accessToken:n,expiresInSeconds:r,tokenType:a}}},{key:"getSpotifyRedirectUrl",value:function(){var e=new URL("http://localhost:3000/");return e.pathname="/login-redirect-spotify",e.toString()}}]),e}();c.SCOPES=["playlist-modify-private","playlist-modify-public","playlist-read-private","streaming","user-library-read","user-read-email","user-read-playback-state","user-read-private","user-read-recently-played","user-top-read"]},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return _}));var r,a=n(1),c=n.n(a),u=n(2),i=n(0),o=n.n(i),s=n(6),l=n(19),p=n(22),f=n(3),d=n(4),v=new(function(){function e(){Object(f.a)(this,e)}return Object(d.a)(e,[{key:"sendEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!1;try{(n=!!dataLayer.push(Object(p.a)({event:e},t)))&&console.log("There is no gtm tags for the event: ",e)}catch(r){console.log("There was a problem to send the gtm event ",r)}return n}}]),e}());!function(e){e.CHANGE_MUSIC_TIME="CHANGE_MUSIC_TIME",e.CHANGE_MUSIC="CHANGE_MUSIC",e.RESTART_MUSIC="RESTART_MUSIC",e.CHOOSE_ACTIVITY="CHOOSE_ACTIVITY",e.CHOOSE_FEELING="CHOOSE_FEELING",e.CHOOSE_LOCATION="CHOOSE_LOCATION",e.HIDE_DETAILS="HIDE_DETAILS",e.LIKED_ARTIST="LIKED_ARTIST",e.LIKED_GENRE="LIKED_GENRE",e.LIKED_MUSIC="LIKED_MUSIC",e.LOAD_LOCATION="LOAD_LOCATION",e.PAUSE_MUSIC="PAUSE_MUSIC",e.PLAY_MUSIC="PLAY_MUSIC",e.SHOW_DETAILS="SHOW_DETAILS"}(r||(r={}));var h="".concat("https://localhost:44301/api","/UserEvents"),m=Object(i.createContext)({}),b=[];function O(e){var t=Object(l.b)().profile.uri;function n(){return(n=Object(u.a)(c.a.mark((function e(n,r){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u={type:n,value:r,spotifyUserUri:t},!a(n)){e.next=8;break}0,v.sendEvent("USER_ACTION",u),e.next=8;break;case 6:return e.next=8,s.b.post({url:h,data:u});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(e){var t=b[b.length-1];return b.push(e),!(e===t&&(e===r.PAUSE_MUSIC||e===r.PLAY_MUSIC))}return o.a.createElement(m.Provider,Object.assign({value:{save:function(e,t){return n.apply(this,arguments)}}},e))}var _=function(){return Object(i.useContext)(m)}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h}));var r=n(1),a=n.n(r),c=n(2),u=n(13),i=n(0),o=n.n(i),s=n(9),l=n(10),p=Object(i.createContext)({}),f="".concat(l.a.getApiUrl(),"/me"),d="".concat("https://localhost:44301/api","/user");function v(e){var t=Object(s.b)(),n=t.isAuthenticated,r=t.requestService,l=Object(i.useState)({}),v=Object(u.a)(l,2),h=v[0],m=v[1];function b(){return(b=Object(c.a)(a.a.mark((function e(){var t,n,c,u,i,o,s,l,p,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get(f);case 2:n=e.sent,c=n.data,u=c.id,i=c.email,o=c.display_name,s=c.external_urls.spotify,l=c.images,p=c.uri,d=null===(t=l[0])||void 0===t?void 0:t.url,m({id:u,email:i,name:o,link:s,avatarSrc:d,uri:p}),_({avatarSrc:d,spotifyUri:p,name:o});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(f,"/player/devices"),e.next=3,r.get(t);case 3:return n=e.sent,c=n.data,e.abrupt("return",c.devices);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.post({url:d,data:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){n?function(){b.apply(this,arguments)}():m({})}),[n]),o.a.createElement(p.Provider,Object.assign({value:{getAvailableDevices:function(){return O.apply(this,arguments)},profile:h}},e))}var h=function(){return Object(i.useContext)(p)}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),a=n(4),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"toCustom",value:function(e,t){var n;return{alt:e,src:null===(n=t[0])||void 0===n?void 0:n.url}}}]),e}(),u=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"toMusicTrack",value:function(e){var t=e.name,n=e.album,r=e.uri;return{id:r,image:c.toCustom(t,n.images),name:t,album:{id:n.uri,name:n.name,image:c.toCustom(n.name,n.images)},uri:r}}},{key:"toMusic",value:function(e){var t=e.id,n=e.name,r=e.album,a=e.uri;return{id:t,image:c.toCustom(n,r.images),name:n,album:{id:r.id,name:r.name,image:c.toCustom(r.name,r.images)},uri:a}}},{key:"toAlbum",value:function(e){var t=e.id,n=e.name,r=e.images;return{id:t,name:n,image:c.toCustom(n,r)}}}]),e}()},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n.n(r),c=n(2),u=n(3),i=n(4),o=function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,null,[{key:"debounce",value:function(e,t){var n;return function(){for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];null!=n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(void 0,a)}),t)}}},{key:"wait",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout((function(){return e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return T}));var r=n(1),a=n.n(r),c=n(2),u=n(13),i=n(0),o=n.n(i),s=n(9),l=n(10),p=n(20),f=n(26),d=n(3),v=n(4),h=n(15),m=[],b=function(){function e(){Object(d.a)(this,e)}return Object(v.a)(e,null,[{key:"stateToEvent",value:function(e){var t=(null===e||void 0===e?void 0:e.track_window).current_track,n=m[m.length-1],r=t.uri,a=h.a.PLAY_MUSIC;if(null==r)throw new Error("Invalid current track");return e.paused?a=h.a.PAUSE_MUSIC:null!=n&&(n!==r?a=h.a.CHANGE_MUSIC:0===(null===e||void 0===e?void 0:e.position)&&(a=h.a.RESTART_MUSIC)),n!==r&&m.push(r),{type:a,value:r}}}]),e}(),O=Object(i.createContext)({}),_="".concat(l.a.getApiUrl(),"/me"),y=f.a.debounce((function(e,t){var n=b.stateToEvent(e);t(n.type,n.value)}),1e3);function E(e){var t=Object(s.b)(),n=t.accessToken,r=t.isAuthenticated,d=t.requestService,v=Object(i.useState)(null),m=Object(u.a)(v,2),b=m[0],E=m[1],T=Object(i.useState)(null),A=Object(u.a)(T,2),P=A[0],S=A[1],g=Object(i.useState)(null),w=Object(u.a)(g,2),j=w[0],C=w[1],k=Object(i.useState)(),x=Object(u.a)(k,2),I=x[0],R=x[1],U=Object(h.c)().save;function L(){return D.apply(this,arguments)}function D(){return(D=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.createPlayer(n);case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return e.next=4,K();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return H.apply(this,arguments)}function H(){return(H=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("".concat(_,"/player"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return Y.apply(this,arguments)}function Y(){return(Y=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n=e.sent,S((null!=(null===n||void 0===n?void 0:n.device)&&(null===b||void 0===b?void 0:b.device_id))===(null===n||void 0===n||null===(t=n.device)||void 0===t?void 0:t.id));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=b){e.next=2;break}throw new Error("You have to login first!");case 2:return e.next=4,b.original.nextTrack();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=b){e.next=2;break}throw new Error("You have to login first!");case 2:return e.next=4,b.original.previousTrack();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=b){e.next=2;break}throw new Error("You have to login first!");case 2:return e.next=4,b.original.togglePlay();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(_,"/player"),e.next=3,d.put({url:t,data:{device_ids:[null===b||void 0===b?void 0:b.device_id]}});case 3:return e.next=5,f.a.wait(500);case 5:return e.next=7,K();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){r&&function(){N.apply(this,arguments)}()}),[n,r]),Object(i.useEffect)((function(){C(null!=b),null!=b&&b.original.addListener("player_state_changed",(function(e){var t=e.position,n=e.duration,r=e.paused,a=e.track_window.current_track;y(e,U),R({currentTrack:p.a.toMusicTrack(a),duration:n,position:t,paused:r})}))}),[b]),o.a.createElement(O.Provider,Object.assign({value:{isPlayerReady:j,isPluginPlayerActive:P,nextTrack:function(){return z.apply(this,arguments)},playingMusicInfo:I,previousTrack:function(){return F.apply(this,arguments)},togglePlay:function(){return G.apply(this,arguments)},transferUserPlaybackToPlugin:function(){return W.apply(this,arguments)}}},e))}var T=function(){return Object(i.useContext)(O)}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(60);var r=n(0),a=n.n(r);function c(){return a.a.createElement("div",{className:"loader-component"},"Loading...")}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(1),a=n.n(r),c=n(2),u=n(0),i=n.n(u),o=n(3),s=n(4),l=n(20),p=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"toArtist",value:function(e){var t,n=e.uri,r=e.name;return{id:n,name:r,image:{alt:r,src:null===(t=e.images[0])||void 0===t?void 0:t.url}}}},{key:"toMusic",value:function(e){return l.a.toMusic(e)}}]),e}(),f=n(10),d=n(9),v=Object(u.createContext)({}),h="".concat(f.a.getApiUrl(),"/search");function m(e){var t=Object(d.b)().requestService;function n(e,t){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(a.a.mark((function e(n,r){var c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get({url:h,params:{q:n,type:r}});case 2:return c=e.sent,u=c.data,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(c.a)(a.a.mark((function e(t){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t,"artist");case 2:if(r=e.sent,c=r.artists){e.next=6;break}throw new Error("Invalid response");case 6:return e.abrupt("return",c.items.map(p.toArtist));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(c.a)(a.a.mark((function e(t){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t,"track");case 2:if(r=e.sent,c=r.tracks){e.next=6;break}throw new Error("Invalid response");case 6:return e.abrupt("return",c.items.map(p.toMusic));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(v.Provider,Object.assign({value:{searchArtists:function(e){return u.apply(this,arguments)},searchMusic:function(e){return o.apply(this,arguments)}}},e))}var b=function(){return Object(u.useContext)(v)}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(1),a=n.n(r),c=n(2),u=n(0),i=n.n(u),o=n(6),s=n(7),l="true"===Object({NODE_ENV:"production",PUBLIC_URL:"/computer-science-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_HOST:"https://localhost:44301/api",REACT_APP_COOKIE_NAME:"SpotifyToken",REACT_APP_HOST_URL:"http://localhost:3000/",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1",REACT_APP_SPOTIFY_AUTH_URL:"https://accounts.spotify.com/authorize",REACT_APP_SPOTIFY_CLIENT_ID:"8624027c702d49b08f2da1c2dd348fab",REACT_APP_SPOTIFY_CLIENT_SECRET:"5d68e848006f4d2dbcc96b26dbc94a34",REACT_APP_USE_GTM:"true"}).REACT_APP_USE_API_TO_LOAD_ACTIVITY,p="".concat("https://localhost:44301/api","/activities"),f=Object(u.createContext)({});function d(e){function t(){return(t=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l?u(t):n(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get("/activities.json");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.filter((function(e){return!t||e.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{id:s.a.toKebabCase(e),name:e}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get({url:p,params:{text:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(f.Provider,Object.assign({value:{search:function(e){return t.apply(this,arguments)}}},e))}var v=function(){return Object(u.useContext)(f)}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(1),a=n.n(r),c=n(2),u=n(0),i=n.n(u),o=n(6),s=n(7),l="true"===Object({NODE_ENV:"production",PUBLIC_URL:"/computer-science-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_HOST:"https://localhost:44301/api",REACT_APP_COOKIE_NAME:"SpotifyToken",REACT_APP_HOST_URL:"http://localhost:3000/",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1",REACT_APP_SPOTIFY_AUTH_URL:"https://accounts.spotify.com/authorize",REACT_APP_SPOTIFY_CLIENT_ID:"8624027c702d49b08f2da1c2dd348fab",REACT_APP_SPOTIFY_CLIENT_SECRET:"5d68e848006f4d2dbcc96b26dbc94a34",REACT_APP_USE_GTM:"true"}).REACT_APP_USE_API_TO_LOAD_FEELINGS,p="".concat("https://localhost:44301/api","/feelings"),f=Object(u.createContext)({});function d(e){function t(){return(t=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l?u(t):n(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get("/feelings.json");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.filter((function(e){return!t||e.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{id:s.a.toKebabCase(e),name:e}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get({url:p,params:{text:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(f.Provider,Object.assign({value:{search:function(e){return t.apply(this,arguments)}}},e))}var v=function(){return Object(u.useContext)(f)}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(1),a=n.n(r),c=n(2),u=n(0),i=n.n(u),o=n(6),s=n(7),l="".concat("https://localhost:44301/api","/locations"),p="true"===Object({NODE_ENV:"production",PUBLIC_URL:"/computer-science-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_HOST:"https://localhost:44301/api",REACT_APP_COOKIE_NAME:"SpotifyToken",REACT_APP_HOST_URL:"http://localhost:3000/",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1",REACT_APP_SPOTIFY_AUTH_URL:"https://accounts.spotify.com/authorize",REACT_APP_SPOTIFY_CLIENT_ID:"8624027c702d49b08f2da1c2dd348fab",REACT_APP_SPOTIFY_CLIENT_SECRET:"5d68e848006f4d2dbcc96b26dbc94a34",REACT_APP_USE_GTM:"true"}).REACT_APP_USE_API_TO_LOAD_LOCATION,f=Object(u.createContext)({});function d(e){function t(){return(t=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p?u(t):n(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get("/locations.json");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.filter((function(e){return!t||e.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{id:s.a.toKebabCase(e),name:e}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.get({url:l,params:{text:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(f.Provider,Object.assign({value:{search:function(e){return t.apply(this,arguments)}}},e))}var v=function(){return Object(u.useContext)(f)}},54:function(e,t,n){e.exports=n(84)},59:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(18),a=n(52),c=n(51),u=n(53),i=n(22),o=n(1),s=n.n(o),l=n(2),p=n(3),f=n(4),d=n(23),v=n.n(d),h=n(7),m=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,[{key:"get",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.parseRequest(t),e.next=3,v()(n);case 3:return r=e.sent,e.abrupt("return",this.mapAxiosToResponse(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.parseRequest(t),e.next=3,v()(Object(i.a)({},n,{method:"post"}));case 3:return r=e.sent,e.abrupt("return",this.mapAxiosToResponse(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.parseRequest(t),e.next=3,v()(Object(i.a)({},n,{method:"put"}));case 3:return r=e.sent,e.abrupt("return",this.mapAxiosToResponse(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseRequest",value:function(e){var t=e;return h.a.isString(e)&&(t={url:e}),t}},{key:"mapAxiosToResponse",value:function(e){return{data:e.data,headers:e.headers,status:e.status}}}]),e}(),b=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this)).accessToken=void 0,r.accessToken=e,r}return Object(f.a)(n,[{key:"parseRequest",value:function(e){var t=Object(a.a)(Object(r.a)(n.prototype),"parseRequest",this).call(this,e);if(null==this.accessToken)throw new Error("No access token, you must login!");return t.headers={Authorization:"Bearer ".concat(this.accessToken)},t}}]),n}(m),O=new m},60:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n(4),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"isEmpty",value:function(e){return null==e||"string"===typeof e&&0===e.trim().length}},{key:"isString",value:function(e){return"string"===typeof e}},{key:"sliceIfNeed",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?"".concat(e.slice(0,t),"..."):e}},{key:"toKebabCase",value:function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^-\w ]/g,"").replace(/-+/g," ").trim().replace(/ +/g,"-").toLowerCase()}},{key:"toString",value:function(e){if(!e)throw new Error("Invalid str");return e.toString()}},{key:"toStringOrDefault",value:function(e,t){return e?e.toString():t}}]),e}()},84:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),u=n.n(c);n(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(24),o=n(16),s=n(34),l=n(30),p=n(9);function f(e){var t=e.children,n=Object(l.a)(e,["children"]),r=Object(p.b)().isAuthenticated;return a.a.createElement(o.b,Object.assign({},n,{render:function(e){var n=e.location;return r?t:a.a.createElement(o.a,{to:{pathname:"/welcome",state:{from:n}}})}}))}function d(e){var t=e.children,n=Object(l.a)(e,["children"]),r=Object(p.b)().isAuthenticated;return a.a.createElement(o.b,Object.assign({},n,{render:function(e){var n=e.location;return r?a.a.createElement(o.a,{to:{pathname:"/",state:{from:n}}}):t}}))}var v=n(47),h=n(15),m=n(48),b=n(49),O=n(33),_=n(1),y=n.n(_),E=n(2),T=n(10),A=n(3),P=n(4),S=n(7),g=n(20),w=function(){function e(){Object(A.a)(this,e)}return Object(P.a)(e,null,[{key:"toPlaylist",value:function(e){var t,n=e.id,r=e.name,a=e.description,c=e.images,u=e.tracks;return{id:n,title:r,description:S.a.sliceIfNeed(a),image:{alt:r,src:null===(t=c[0])||void 0===t?void 0:t.url},musics:u.items.map((function(e){return g.a.toMusic(e.track)}))}}},{key:"toBasicPlaylist",value:function(e){var t,n=e.id,r=e.name,a=e.images,c=e.description;return{id:n,title:r,description:S.a.sliceIfNeed(c),image:{alt:r,src:null===(t=a[0])||void 0===t?void 0:t.url}}}}]),e}(),j=n(19),C=Object(r.createContext)({}),k="".concat(T.a.getApiUrl(),"/me/playlists"),x="".concat(T.a.getApiUrl(),"/playlists");function I(e){var t=Object(j.b)().profile.id,n=Object(p.b)().requestService;function r(){return(r=Object(E.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.post({url:"".concat(x,"/").concat(t,"/tracks"),data:{uris:r}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(E.a)(y.a.mark((function e(){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.post({url:"".concat(T.a.getApiUrl(),"/users/").concat(t,"/playlists"),data:{name:"Nova playlist"}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a.id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(E.a)(y.a.mark((function e(){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get({url:k});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.items.map(w.toBasicPlaylist));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(E.a)(y.a.mark((function e(t){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get({url:"".concat(x,"/").concat(t)});case 2:return r=e.sent,a=r.data,e.abrupt("return",w.toPlaylist(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(E.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.put({url:"".concat(x,"/").concat(t),data:{name:r}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(C.Provider,Object.assign({value:{addMusics:function(e,t){return r.apply(this,arguments)},create:function(){return c.apply(this,arguments)},load:function(e){return i.apply(this,arguments)},loadAll:function(){return u.apply(this,arguments)},rename:function(e,t){return o.apply(this,arguments)}}},e))}var R=n(35);function U(e){var t=e.children;return a.a.createElement(p.a,null,a.a.createElement(j.a,null,a.a.createElement(h.b,null,a.a.createElement(I,null,a.a.createElement(O.a,null,a.a.createElement(m.a,null,a.a.createElement(v.a,null,a.a.createElement(b.a,null,a.a.createElement(R.a,null,t)))))))))}var L=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(13)]).then(n.bind(null,231))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,221))})),N=a.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,222))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,223))})),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,224))})),K=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,225))})),Y=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9)]).then(n.bind(null,235))})),z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8)]).then(n.bind(null,226))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,227))})),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,236))})),W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,228))}));u.a.render(a.a.createElement(r.StrictMode,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(s.a,null)},a.a.createElement(U,null,a.a.createElement(i.a,null,a.a.createElement(o.d,null,a.a.createElement(f,{path:"/new-context/activity"},a.a.createElement(F,null)),a.a.createElement(f,{path:"/new-context/feeling"},a.a.createElement(z,null)),a.a.createElement(f,{path:"/new-context/music-search"},a.a.createElement(W,null)),a.a.createElement(f,{path:"/new-context/gender"},a.a.createElement(Y,null)),a.a.createElement(f,{path:"/new-context/artists"},a.a.createElement(K,null)),a.a.createElement(f,{path:"/new-context/location"},a.a.createElement(G,null)),a.a.createElement(d,{path:"/login"},a.a.createElement(N,null)),a.a.createElement(d,{path:"/login-redirect-spotify"},a.a.createElement(M,null)),a.a.createElement(f,{path:"/logout"},a.a.createElement(H,null)),a.a.createElement(d,{path:"/welcome"},a.a.createElement(D,null)),a.a.createElement(f,{path:"/"},a.a.createElement(L,null))))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n(13),a=n(0),c=n.n(a),u=n(3),i=n(4),o=new(function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,[{key:"delete",value:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},{key:"get",value:function(e){var t=document.cookie,n="";if(t.includes(e)){var r=t.indexOf(e);n=t.substring(r).split(";",1)[0].split("=")[1]}return decodeURIComponent(n)}},{key:"save",value:function(e,t,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+1e3*n),r="; expires="+a.toUTCString()}document.cookie="".concat(e,"=").concat(t).concat(r,"; path=/")}}]),e}()),s=n(10),l=n(7),p=n(6),f=Object(a.createContext)({isAuthenticated:!1});function d(e){var t=Object(a.useState)(o.get("SpotifyToken")),n=Object(r.a)(t,2),u=n[0],i=n[1],d=Object(a.useState)(new p.a(u)),v=Object(r.a)(d,2),h=v[0],m=v[1],b=Object(a.useState)(!1),O=Object(r.a)(b,2),_=O[0],y=O[1];return Object(a.useEffect)((function(){y(!l.a.isEmpty(u)),m(new p.a(u))}),[u]),c.a.createElement(f.Provider,Object.assign({value:{logout:function(){i(null),o.delete("SpotifyToken")},saveToken:function(e){var t=s.a.getTokenAndInfoFromRedirectUrl(e),n=t.accessToken,r=t.expiresInSeconds;o.save("SpotifyToken",n,r),i(n)},isAuthenticated:_,accessToken:u,requestService:h}},e))}var v=function(){return c.a.useContext(f)}}},[[54,4,5]]]);
//# sourceMappingURL=main.35c5fd25.chunk.js.map