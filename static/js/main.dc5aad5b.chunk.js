(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(51),i=c.n(n),l=(c(64),c(4)),r=c(26),o=c(12),m=(c(65),c(17)),b=c.p+"static/media/navigate.890aefd2.mp3",d=c.p+"static/media/select.34cfe8c1.mp3",j=c(0),u=function(e){var t=e.keyName,c=e.description;return Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(j.jsx)("div",{className:"keycap-box tw-flex tw-justify-center",children:Object(j.jsxs)("span",{children:[t,"\xa0"]})}),Object(j.jsx)("span",{className:"tw-text-xl tw-pl-2 tw-pr-6",children:c})]})},x=function(){var e=Object(m.a)(b,{volume:1}),t=Object(l.a)(e,1)[0],c=Object(m.a)(d,{volume:1}),s=Object(l.a)(c,1)[0],n=Object(a.useState)("Fullscreen mode will give you a better experience");Object(l.a)(n,1)[0];Object(a.useEffect)((function(){document.title="Ace Combat 7 PSM Multiplayer Pilots Database"}));return Object(j.jsx)("div",{className:"tw-h-screen tw-w-screen tw-flex tw-flex-row tw-justify-center",children:Object(j.jsxs)("div",{className:"main-home-page-container tw-flex tw-flex-col tw-w-9/12 tw-p-4",children:[Object(j.jsx)("h1",{className:"tw-text-3xl lg:tw-text-5xl tw-py-20",children:"Ace Combat 7 PSM Multiplayer Pilots Database"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(j.jsx)(r.b,{to:"/pilots",onMouseEnter:t,onClick:s,children:"Pilots"})}),Object(j.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(j.jsx)(r.b,{to:"/settings",onMouseEnter:t,onClick:s,children:"Settings"})}),Object(j.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(j.jsx)(r.b,{to:"/about",onMouseEnter:t,onClick:s,children:"About"})})]}),Object(j.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(j.jsx)(r.b,{to:"/changelog",onMouseEnter:t,onClick:s,children:"Changelog"})})}),Object(j.jsx)("div",{className:"tw-flex tw-flex-row tw-justify-end tw-py-16",children:Object(j.jsxs)("p",{className:"tw-text-xl tw-text-right",children:["Fullscreen mode will give you a better experience.",Object(j.jsx)("br",{}),"Close fullscreen to exit."]})}),Object(j.jsxs)("div",{className:"sm:tw-flex tw-flex-row tw-hidden",children:[Object(j.jsx)(u,{keyName:"F11",description:"Fullscreen"}),Object(j.jsx)(u,{keyName:"F7",description:"Previous Song"}),Object(j.jsx)(u,{keyName:"F8",description:"Play/Pause BGM",onClick:function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"F8"}))}}),Object(j.jsx)(u,{keyName:"F9",description:"Next Song"})]})]})})},f=c(8),w=c(27),O=c.n(w),h=c(40),p=c.p+"static/media/cancel.454edab0.mp3",v=function(e){var t,c,a=e.iconSrc,s=e.secondLevel,n=e.thirdLevel;s&&(t=Object(j.jsxs)("p",{className:"tw-text-sm",children:["> > ",s]})),n&&(c=Object(j.jsxs)("p",{className:"tw-text-sm",children:["> > > ",n]}));var i=Object(m.a)(p,{volume:1}),o=Object(l.a)(i,1)[0];return Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-8",children:[Object(j.jsx)("div",{className:"breadcumb-logo",children:Object(j.jsx)("img",{src:a,height:"59",width:"59",alt:"ico"})}),Object(j.jsxs)("div",{className:"tw-flex-column tw-px-8",children:[Object(j.jsx)("p",{className:"tw-text-sm",children:Object(j.jsx)(r.b,{to:"/",onClick:o,children:Object(j.jsx)("span",{children:"> Click to Return"})})}),t,c]})]})},g=function(e){var t=e.text;return Object(j.jsx)("label",{className:"tw-text-sm",children:t})},y=function(e){var t=e.text;return Object(j.jsx)("h3",{className:"tw-text-2xl md:tw-text-3xl tw-pb-3",children:t})},N=c(20),k=c(39);N.e.register(N.p,N.m,N.j,N.g,N.s,N.h,N.d,N.k,N.b,N.r);var C=function(e){var t=e.statistics,c=e.average,s=Object(a.useState)({labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{data:[0,0,0,0,0]}]}),n=Object(l.a)(s,2),i=n[0],r=n[1],o=Object(a.useState)({labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{data:[0,0,0,0]}]}),m=Object(l.a)(o,2),b=m[0],d=m[1],u=Object(a.useState)({labels:["","ACCURACY","USE RATE"],datasets:[{data:[0,0,0]}]}),x=Object(l.a)(u,2),f=x[0],w=x[1];Object(a.useEffect)((function(){if(t){var e="";e=c>97?"rgba(0, 176, 240, 0.5)":97>=c&&c>80?"rgba(0, 176, 80, 0.5)":80>=c&&c>60?"rgba(146, 208, 80, 0.5)":60>=c&&c>40?"rgba(255, 192, 0, 0.5)":40>=c?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)";var a={labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{label:"",data:[t.boost,t.drift,t.consistency,t.bkf,t.strategy],backgroundColor:e,fill:!0,borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,pointBackgroundColor:"rgb(0, 176, 240)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(0, 176, 240)",pointRadius:3}]},s={labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{label:"",data:[100,t.mslAcc,t.mslCurving,t.mslLooping],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mslAcc),O(t.mslCurving),O(t.mslLooping)]}]},n={labels:["","ACCURACY","USE RATE"],datasets:[{label:"",data:[100,t.mgAcc,t.mgRate],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mgAcc),O(t.mgRate)]}]};r(a),d(s),w(n)}}),[t,c]);var O=function(e){return e>97?"rgba(0, 176, 240, 0.6)":97>=e&&e>80?"rgba(0, 176, 80, 0.6)":80>=e&&e>60?"rgba(146, 208, 80, 0.6)":60>=e&&e>40?"rgba(255, 192, 0, 0.6)":40>=e?"rgba(255, 0, 0, 0.6)":"rgba(0, 0, 0, 0.6)"},h={y:{stacked:!0,beginAtZero:!0,grid:{color:"gray",offset:!0},pointLabels:{color:"white"},suggestedMin:0,min:0,suggestedMax:10,max:10,ticks:{stepSize:1,color:"white"}}},p={display:!1},v={indexAxis:"y",mantainAspectRatio:false,scales:h,responsive:true,plugins:{legend:p,title:{display:!0,text:"MISSILE CONTROL",color:"white"}}},g={indexAxis:"y",mantainAspectRatio:false,scales:h,responsive:true,plugins:{legend:p,title:{display:!0,text:"MACHINE GUN CONTROL",color:"white"}}};return Object(j.jsxs)("div",{className:"tw-flex lg:tw-flex-row tw-flex-col tw-justify-center",children:[Object(j.jsxs)("div",{className:"bar-container",children:[Object(j.jsx)(k.a,{options:v,data:b}),Object(j.jsx)("div",{className:"tw-my-4"}),Object(j.jsx)(k.a,{options:g,data:f})]}),Object(j.jsx)("div",{className:"radar-container tw-pl-2",children:Object(j.jsx)(k.b,{data:i,options:{title:{display:!0},scales:{r:{angleLines:{display:!0,color:"gray"},grid:{color:"gray"},pointLabels:{color:"white"},suggestedMin:0,suggestedMax:100,ticks:{showLabelBackdrop:!1,stepSize:20}}},elements:{line:{borderWidth:3}},plugins:{title:{display:!0,text:"MANEOUVERS",color:"white"},legend:{display:!1}}}})})]})},A=c(45),S=c(22),E=c(52),L=c.n(E),M=function(e){var t,c,s,n=e.player,i=Object(a.useState)("--"),r=Object(l.a)(i,2),o=r[0],m=r[1],b=Object(a.useState)(null),d=Object(l.a)(b,2),u=d[0],x=d[1],f=Object(a.useState)(null),w=Object(l.a)(f,2),O=w[0],h=w[1],p=Object(a.useState)("--"),v=Object(l.a)(p,2),N=v[0],k=v[1];Object(a.useEffect)((function(){if(n.statistics){var e="--",t=E(n.statistics.mslAcc,n.statistics.mslCurving,n.statistics.mslLooping,n.statistics.mgAcc,n.statistics.mgRate,n.statistics.boost,n.statistics.consistency,n.statistics.strategy,n.statistics.drift,n.statistics.bkf);e=t>97?"SS":97>=t&&t>92?"S1":92>=t&&t>86?"S2":86>=t&&t>80?"S3":80>=t&&t>74?"A1":74>=t&&t>67?"A2":67>=t&&t>60?"A3":60>=t&&t>54?"B1":54>=t&&t>47?"B2":47>=t&&t>40?"B3":40>=t?"C":"ER",m(t.toFixed(1)),k(e)}n.country&&(x(Object(j.jsx)(A.a,{countryCode:n.country.code,style:{fontSize:"2em"},"aria-label":n.country.name})),h(Object(j.jsx)(y,{text:n.country.name})))}),[n]);var E=function(e,t,c,a,s,n,i,l,r,o){return 100*(.2*n+.2*i+.15*(.7*e+.2*t+.1*c)+.15*l+.15*(.85*a+.15*s)+.1*r+.05*o)/100};return Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-overflow-auto lg:tw-overflow-visible tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:[Object(j.jsxs)("div",{className:"pilot-data tw-flex md:tw-flex-row tw-flex-col",children:[Object(j.jsx)("div",{className:"pilot-picture tw-pb-2",children:Object(j.jsx)("img",{src:""+"".concat(n.picture),alt:"profile",width:"453",height:"255"})}),Object(j.jsxs)("div",{className:"md:tw-pl-4 tw-flex-grow",children:[Object(j.jsx)(g,{text:"[NAME]"}),Object(j.jsx)(y,{text:n.active?n.name:n.name+" (LEGACY PROFILE)"}),Object(j.jsx)(g,{text:"[CALLSIGN]"}),Object(j.jsx)(y,{text:n.callsign}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(j.jsxs)("div",{className:"tw-flex-grow",children:[Object(j.jsx)(g,{text:"[MAIN PLANE]"}),Object(j.jsx)(y,{text:n.mainPlane})]}),Object(j.jsxs)("div",{className:"tw-flex-grow",children:[Object(j.jsx)(g,{text:"[MAIN SPECIAL WEAPON]"}),Object(j.jsx)(y,{text:n.mainSpW})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{text:"[COUNTRY]"}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(j.jsx)("div",{className:"tw-pt-2 tw-pr-2",children:u}),O]})]})]})]}),Object(j.jsxs)("div",{className:"tw-pb-4",children:[Object(j.jsx)(g,{text:"[UNIT]"}),Object(j.jsx)(y,{text:n.unit})]}),Object(j.jsxs)("div",{className:"pilot-data tw-flex xl:tw-flex-row tw-flex-col",children:[Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-items-center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"images/badges/".concat(N,".png"),alt:N,height:"64",width:"64"})}),Object(j.jsxs)("h1",{className:"tw-text-4xl md:tw-text-5xl tw-pb-6",children:["RANK ",N]}),Object(j.jsx)(L.a,{action:function(){alert("Hey, you typed the Konami Code! => "+o)},timeout:"3000",children:o}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(j.jsx)("div",{className:"player-list-item-name active-player-list-item tw-px-1",children:Object(j.jsx)(S.g,{className:"".concat((null===(t=n.platforms)||void 0===t?void 0:t.indexOf("PC"))>-1?"tw-text-3xl":"tw-hidden")})}),Object(j.jsx)("div",{className:"player-list-item-name active-player-list-item tw-px-1",children:Object(j.jsx)(S.f,{className:"".concat((null===(c=n.platforms)||void 0===c?void 0:c.indexOf("PSN"))>-1?"tw-text-3xl":"tw-hidden")})}),Object(j.jsx)("div",{className:"player-list-item-name active-player-list-item tw-px-1",children:Object(j.jsx)(S.i,{className:"".concat((null===(s=n.platforms)||void 0===s?void 0:s.indexOf("XBOX"))>-1?"tw-text-3xl":"tw-hidden")})})]})]}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-flex-grow xl:tw-pl-8",children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{children:"[STATISTICS]"})}),Object(j.jsx)(C,{statistics:n.statistics,average:o})]})]})]})},R=(c(70),function(e){var t=e.player,c=e.onSelect,a=e.index,s=Object(m.a)(b,{volume:1}),n=Object(l.a)(s,1)[0];return Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-1 tw-items-center",children:[Object(j.jsx)("div",{className:"".concat(t.selected?"active-caret":"inactive-caret")}),Object(j.jsx)("div",{className:"player-list-item-name tw-pl-4",onClick:function(){return c(t)},onMouseEnter:n,children:Object(j.jsxs)("p",{className:"tw-text-2xl ".concat(t.selected?"active-player-list-item":"inactive-player-list-item"),children:[Object(j.jsxs)("span",{className:"".concat(-1===a?"tw-hidden":""),children:[a,". "]}),t.name]})})]})}),I=function(e){var t=e.selectFilter,c=e.filter,a=Object(m.a)(b,{volume:1}),s=Object(l.a)(a,1)[0],n=Object(m.a)(d,{volume:1}),i=Object(l.a)(n,1)[0],r=function(e){t(e),i()};return Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(j.jsx)("div",{onClick:function(){return r("all")},className:"player-list-item-name ".concat("all"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:"ALL"}),Object(j.jsxs)("div",{onClick:function(){return r("PC")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("PC"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(j.jsx)(S.g,{}),Object(j.jsx)("span",{className:"tw-pl-2",children:"STEAM"})]}),Object(j.jsxs)("div",{onClick:function(){return r("PSN")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("PSN"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(j.jsx)(S.f,{}),Object(j.jsx)("span",{className:"tw-pl-2",children:"PSN"})]}),Object(j.jsxs)("div",{onClick:function(){return r("XBOX")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("XBOX"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(j.jsx)(S.i,{}),Object(j.jsx)("span",{className:"tw-pl-2",children:"XBOX"})]})]})},T=function(e){var t=e.vctPlayers,c=e.onSelectPilot,s=(e.showForMobile,e.showHiddenPlayers),n=Object(a.useState)("tw-scrollbar-thumb-blue-700"),i=Object(l.a)(n,2),r=i[0],o=i[1],u=Object(a.useState)("tw-scrollbar-track-blue-300"),x=Object(l.a)(u,2),w=x[0],O=x[1],h=Object(m.a)(b,{volume:1}),p=Object(l.a)(h,1)[0],v=Object(m.a)(d,{volume:1}),g=Object(l.a)(v,1)[0],y=Object(a.useState)("Name"),N=Object(l.a)(y,2),k=N[0],C=N[1],E=Object(a.useState)("ascending"),L=Object(l.a)(E,2),M=L[0],T=L[1],P=Object(a.useState)("all"),F=Object(l.a)(P,2),B=F[0],U=F[1],H=Object(a.useState)([]),D=Object(l.a)(H,2),z=D[0],G=D[1],Z=Object(a.useState)("all"),Y=Object(l.a)(Z,2),J=Y[0],W=Y[1],q=Object(a.useState)(!0),X=Object(l.a)(q,2),K=X[0],V=X[1],_=Object(a.useState)(t),Q=Object(l.a)(_,2),$=Q[0],ee=Q[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("theme"));e&&"7"!==e?"Z"===e?(o("tw-scrollbar-thumb-red-700"),O("tw-scrollbar-track-red-300")):"5"===e&&(o("tw-scrollbar-thumb-green-700"),O("tw-scrollbar-track-green-300")):(o("tw-scrollbar-thumb-blue-700"),O("tw-scrollbar-track-blue-300")),te(B,K),t&&t.length>0&&ie(B,J,k,M,K)}),[t]);var te=function(e,c){var a=[],s=[],n=[];if(c)n=t.slice();else{var i,l=Object(f.a)(t);try{for(l.s();!(i=l.n()).done;){var r=i.value;r.active&&n.push(r)}}catch(d){l.e(d)}finally{l.f()}}if("all"===e)s=n.slice();else{var o,m=Object(f.a)(n);try{for(m.s();!(o=m.n()).done;){var b=o.value;b.platforms.indexOf(e)>-1&&s.push(b)}}catch(d){m.e(d)}finally{m.f()}}s.forEach((function(e){for(var t=!1,c=0;c<a.length;c++){var s=a[c];if(s.code===e.country.code){s.cant=s.cant+1,t=!0;break}}t||a.push({code:e.country.code,cant:1})})),a.sort((function(e,t){return e.cant>t.cant?-1:e.cant<t.cant?1:0})),G(a)},ce=function(e){C(e),g(),ie(B,J,e,M,K)},ae=function(e){T(e),g(),ie(B,J,k,e,K)},se=function(e){W(e),g(),ie(B,e,k,M,K)},ne=function(e){V(e),g(),te(B,e),ie(B,J,k,M,e)},ie=function(e,c,a,n,i){if(t){var l=[],r=[];if(i)l=t.slice();else{var o,m=Object(f.a)(t);try{for(m.s();!(o=m.n()).done;){var b=o.value;b.active&&l.push(b)}}catch(N){m.e(N)}finally{m.f()}}if("all"===e)r=l.slice();else{var d,j=Object(f.a)(l);try{for(j.s();!(d=j.n()).done;){var u=d.value;u.platforms.indexOf(e)>-1&&r.push(u)}}catch(N){j.e(N)}finally{j.f()}}var x=[];if("all"===c)x=r.slice();else{var w,O=Object(f.a)(r);try{for(O.s();!(w=O.n()).done;){var h=w.value;h.country.code.indexOf(c)>-1&&x.push(h)}}catch(N){O.e(N)}finally{O.f()}}"Name"===a?x.sort((function(e,t){var c=e.name,a=t.name;return"ascending"===n?c<a?-1:c>a?1:0:c>a?-1:c<a?1:0})):"Rank"===a&&x.sort((function(e,t){return"ascending"===n?e.rankAverage>t.rankAverage?-1:e.rankAverage<t.rankAverage?1:0:e.rankAverage<t.rankAverage?-1:e.rankAverage>t.rankAverage?1:0}));var p=[];if(s)p=x.slice();else{var v,g=Object(f.a)(x);try{for(g.s();!(v=g.n()).done;){var y=v.value;y.hidden||p.push(y)}}catch(N){g.e(N)}finally{g.f()}}ee(p)}};return Object(j.jsxs)("div",{className:"pilot-list-container tw-flex tw-flex-col tw-flex-grow tw-px-4 tw-pt-12 tw-pb-24 tw-h-screen",children:[Object(j.jsx)("div",{children:"Platform:"}),Object(j.jsx)(I,{selectFilter:function(e){U(e),te(e,K),ie(e,J,k,M,K)},filter:B}),Object(j.jsx)("div",{children:"Country:"}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2 tw-items-center",children:[Object(j.jsx)("div",{onClick:function(){return se("all")},className:"player-list-item-name ".concat("all"===J?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:p,children:"ALL"}),Object(j.jsx)("div",{className:"country-filter tw-flex tw-flex-row tw-overflow-visible tw-overflow-x-auto tw-scrollbar-thin ".concat(r," ").concat(w),children:z.map((function(e){return Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center tw-px-2",onClick:function(){return se(e.code)},children:[Object(j.jsx)(A.a,{countryCode:e.code,style:{fontSize:"2em"},"aria-label":e.code}),Object(j.jsx)("h3",{className:"tw-pl-1 ".concat(J===e.code?"active-player-list-item":"inactive-player-list-item"),children:e.cant})]})}))})]}),Object(j.jsx)("div",{children:"Sort by:"}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(j.jsx)("div",{onClick:function(){return ce("Name")},className:"player-list-item-name ".concat("Name"===k?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:p,children:"Name"}),Object(j.jsx)("div",{onClick:function(){return ce("Rank")},className:"player-list-item-name ".concat("Rank"===k?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:p,children:"Rank"}),Object(j.jsx)("div",{onClick:function(){return ae("descending")},className:"player-list-item-name ".concat("ascending"===M?"":"tw-hidden"),onMouseEnter:p,children:Object(j.jsx)(S.b,{})}),Object(j.jsx)("div",{onClick:function(){return ae("ascending")},className:"player-list-item-name ".concat("descending"===M?"":"tw-hidden"),onMouseEnter:p,children:Object(j.jsx)(S.a,{})})]}),Object(j.jsx)("div",{className:"tw-overflow-visible tw-overflow-y-auto tw-scrollbar-thin ".concat(r," ").concat(w),children:$.map((function(e,t){return Object(j.jsx)(R,{player:e,onSelect:c,index:"Rank"===k?"ascending"===M?t+1:$.length-t:-1},e.id)}))}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(j.jsx)("span",{children:"Include Legacy Pilots:"}),Object(j.jsx)("span",{onClick:function(){return ne(!0)},className:"player-list-item-name ".concat(K?"active-player-list-item":"inactive-player-list-item"),children:"YES"}),Object(j.jsx)("span",{onClick:function(){return ne(!1)},className:"player-list-item-name ".concat(K?"inactive-player-list-item":"active-player-list-item"),children:"NO"})]})]})},P=function(e){var t=e.onMouseEnterAction,c=e.onClickAction;return Object(j.jsx)("div",{className:"tw-flex tw-flex-row",children:Object(j.jsx)("p",{className:"inactive-player-list-item tw-text-base",onMouseEnter:t,onClick:c,children:"[INFORMATION]"})})},F=c.p+"static/media/pilot.2b4c3f80.svg",B=function(){Object(a.useEffect)((function(){document.title="Pilots - AC7 PSM MP Pilots DB"}));var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1],u=Object(a.useState)(!1),x=Object(l.a)(u,2),w=x[0],g=x[1],y=Object(a.useState)(""),N=Object(l.a)(y,2),k=N[0],C=N[1],A=Object(a.useState)(!0),E=Object(l.a)(A,2),L=E[0],R=E[1];Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,s(t),t.length,R(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1024&&g(!1)}))}));var I=function(){var e=Object(h.a)(O.a.mark((function e(){var t,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/database/pilotList.json",e.next=3,fetch("/database/pilotList.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,(a=c.pilots?c.pilots:c).sort((function(e,t){var c=e.name.toUpperCase(),a=t.name.toUpperCase();return c<a?-1:c>a?1:0})),a.forEach((function(e){e.rankAverage=J(e.statistics.mslAcc,e.statistics.mslCurving,e.statistics.mslLooping,e.statistics.mgAcc,e.statistics.mgRate,e.statistics.boost,e.statistics.consistency,e.statistics.strategy,e.statistics.drift,e.statistics.bkf)})),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=Object(m.a)(d,{volume:1}),U=Object(l.a)(B,1)[0],H=Object(m.a)(b,{volume:1}),D=Object(l.a)(H,1)[0],z=Object(m.a)(p,{volume:1}),G=Object(l.a)(z,1)[0],Z=function(){var e=Object(h.a)(O.a.mark((function e(t){var a,n,i,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.selected=!0,a=c,n=Object(f.a)(a);try{for(n.s();!(i=n.n()).done;)(l=i.value).id===t.id?l.selected=!0:l.selected=!1}catch(r){n.e(r)}finally{n.f()}s(a),o(t),g(!1),C(t.name),U();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){g(!w),console.log(w)},J=function(e,t,c,a,s,n,i,l,r,o){return 100*(.2*n+.2*i+.15*(.7*e+.2*t+.1*c)+.15*l+.15*(.85*a+.15*s)+.1*r+.05*o)/100};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tw-flex-row tw-h-screen tw-w-screen tw-justify-center tw-items-center ".concat(L?"tw-flex":"tw-hidden"),children:Object(j.jsx)("h2",{children:"Loading..."})}),Object(j.jsxs)("div",{className:"tw-flex-row tw-h-screen tw-w-screen tw-justify-center ".concat(L?"tw-hidden":"tw-flex"),children:[Object(j.jsx)("div",{id:"modal-information",className:"tw-absolute tw-flex tw-flex-col lg:tw-p-4 tw-overflow-auto",children:Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-my-auto tw-justify-center tw-p-8 tw-h-auto",children:[Object(j.jsxs)("p",{className:"tw-text-3xl lg:tw-text-4xl",children:["Ranking and Status information:",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"tw-flex tw-flex-col lg:tw-flex-row",children:Object(j.jsx)("div",{className:"tw-flex tw-flex-col lg:tw-w-8/12 lg:tw-pr-10 tw-items-end",children:Object(j.jsxs)("p",{className:"tw-text-base lg:tw-text-lg tw-text-justify",children:[Object(j.jsx)("span",{className:"tw-text-2xl",children:"Strategy"})," - The ability of a pilot to use critical decision making, adaptive styles, disciplined maneuvering sequences, and energy fighting to maximize their efficiency in a dogfight",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"tw-text-2xl",children:"Boost"})," - The skill to control the second phase or psm called the boost (grip) phase  to gain angles in a dogfight",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"tw-text-2xl",children:"Drift"})," - The ability to use the first phase of psm (drifting) to create angles for the boost phase or use as a transition to other psm sequences",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"tw-text-2xl",children:"Backward Flying"})," - The skillset of inducing backwards flight with rechained psms to create angles for attack and defense in a psm fights",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"tw-text-2xl",children:"Consistency"})," - being able to use all your skills and strategies to achieve positive results against opponents throughout a session of dogfights. It is also the ability to force your flying style and strategy to work outside of ones comfort zone. This can be fighting across different platforms, different rules, and against unfamiliar flying styles"]})})}),Object(j.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}),Object(j.jsx)("span",{className:"tw-text-lg",onClick:function(){document.getElementById("modal-information").style.display="none",G()},children:"[OK]"})]})}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-col 2xl:tw-w-3/5 lg:tw-w-9/12 tw-w-screen tw-p-4",children:[Object(j.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(j.jsx)(v,{secondLevel:"Pilots",thirdLevel:k,iconSrc:F}),Object(j.jsx)("span",{className:"tw-flex tw-mx-auto"}),Object(j.jsx)("span",{className:"tw-text-xl lg:tw-hidden",onClick:Y,children:Object(j.jsx)(S.c,{})})]}),Object(j.jsx)("div",{className:"".concat(r.rankAverage?"tw-hidden":""," tw-flex tw-flex-row tw-items-center"),children:Object(j.jsx)("h2",{children:"Select a pilot from the list"})}),Object(j.jsx)(M,{player:r}),Object(j.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(j.jsx)(P,{onMouseEnterAction:D,onClickAction:function(){document.getElementById("modal-information").style.display="block",U()}})]}),Object(j.jsxs)("div",{className:"2xl:tw-w-1/5 lg:tw-w-3/12 tw-w-screen ".concat(w?"tw-flex tw-fixed":"lg:tw-flex tw-hidden"),children:[Object(j.jsx)("div",{className:"tw-w-screen tw-p-4 tw-flex tw-justify-end ".concat(w?"tw-absolute":"lg:tw-hidden"),children:Object(j.jsx)("span",{className:"tw-text-xl",onClick:Y,children:Object(j.jsx)(S.h,{})})}),Object(j.jsx)(T,{vctPlayers:c,onSelectPilot:Z})]})]})]})},U=(c(71),c.p+"static/media/cog.765fcc82.svg"),H=function(){var e=Object(a.useState)("7"),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("7"),i=Object(l.a)(n,2),r=i[0],o=i[1],u=Object(m.a)(b,{volume:1}),x=Object(l.a)(u,1)[0],f=Object(m.a)(d,{volume:1}),w=Object(l.a)(f,1)[0];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("font")),t=JSON.parse(localStorage.getItem("theme"));e&&s(e),t&&o(t)}));var O=function(e){var t=document.getElementsByTagName("body")[0];switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04";break;case"5":t.style.fontFamily="AC5-Neue";break;case"0":t.style.fontFamily="ACZ-Envy"}localStorage.setItem("font",JSON.stringify(e)),s(e),w()},h=function(e){console.log(e);document.getElementsByTagName("body")[0];"7"===e?(document.body.classList.add("ac7-theme"),document.body.classList.remove("acz-theme"),document.body.classList.remove("ac5-theme")):"Z"===e?(document.body.classList.add("acz-theme"),document.body.classList.remove("ac7-theme"),document.body.classList.remove("ac5-theme")):"5"===e&&(document.body.classList.add("ac5-theme"),document.body.classList.remove("ac7-theme"),document.body.classList.remove("acz-theme")),localStorage.setItem("theme",JSON.stringify(e)),o(e),w()};return Object(j.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(j.jsx)(v,{secondLevel:"Settings",iconSrc:U}),Object(j.jsxs)("p",{className:"tw-text-2xl tw-text-left",children:["Platform Font:",Object(j.jsx)("br",{})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"tw-text-2xl ac7-font-item ".concat("7"===c?"active-list-item":"inactive-list-item"),onClick:function(){return O("7")},onMouseEnter:x,children:"> Ace Combat 7 - Skies Unknown"}),Object(j.jsx)("li",{className:"tw-text-2xl ac6-font-item ".concat("6"===c?"active-list-item":"inactive-list-item"),onClick:function(){return O("6")},onMouseEnter:x,children:"> Ace Combat 6 - Fires of Liberation (OCR-A Regular)"}),Object(j.jsx)("li",{className:"tw-text-2xl ac4-font-item ".concat("4"===c?"active-list-item":"inactive-list-item"),onClick:function(){return O("4")},onMouseEnter:x,children:"> Ace Combat 4 - Shattered Skies"}),Object(j.jsxs)("li",{className:"tw-text-2xl ac5-font-item ".concat("5"===c?"active-list-item":"inactive-list-item"),onClick:function(){return O("5")},onMouseEnter:x,children:["> Ace Combat 5 (Neue Pixel Sans by ",Object(j.jsx)("a",{href:"https://www.dafont.com/es/daymarius.d7345",children:"Daymarius"}),")"]}),Object(j.jsx)("li",{className:"tw-text-2xl acz-font-item ".concat("0"===c?"active-list-item":"inactive-list-item"),onClick:function(){return O("0")},onMouseEnter:x,children:"> Ace Combat Zero (Envy Code R)"})]}),Object(j.jsxs)("p",{className:"tw-text-2xl tw-text-left",children:[Object(j.jsx)("br",{}),"Theme:",Object(j.jsx)("br",{})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"tw-text-2xl ".concat("7"===r?"active-list-item":"inactive-list-item"),onClick:function(){return h("7")},onMouseEnter:x,children:"> Ace Combat 7 - Skies Unknown"}),Object(j.jsx)("li",{className:"tw-text-2xl ".concat("Z"===r?"active-list-item":"inactive-list-item"),onClick:function(){return h("Z")},onMouseEnter:x,children:"> Ace Combat Zero - The Belkan War"}),Object(j.jsx)("li",{className:"tw-text-2xl ".concat("5"===r?"active-list-item":"inactive-list-item"),onClick:function(){return h("5")},onMouseEnter:x,children:"> Ace Combat 5 - The Unsung War"})]})]})})},D=c.p+"static/media/about-icon.fedacfe8.svg",z=function(){return Object(a.useEffect)((function(){document.title="About - AC7 PSM MP Pilots DB"})),Object(j.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-8/12 tw-p-4",children:[Object(j.jsx)(v,{secondLevel:"About",iconSrc:D}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:[Object(j.jsxs)("p",{className:"tw-text-2xl tw-text-center",children:["MOTIVATION ",Object(j.jsx)("br",{}),"Giquo was bored and decided to learn how to program with ReactJS.",Object(j.jsx)("br",{}),"Thank you, I hope you enjoy. ",Object(j.jsx)("br",{}),"God bless you."]}),Object(j.jsxs)("p",{className:"tw-pt-12 tw-text-2xl tw-text-center",children:["DISCLAIMER: ",Object(j.jsx)("br",{}),"The rank and statistics determination was made based on fighting ",Object(j.jsx)("br",{}),"experiences from me and other people in the community. ",Object(j.jsx)("br",{}),"Is not the purpose to upset anybody, but to keep the fun and competitivity."]}),Object(j.jsxs)("p",{className:"tw-pt-12 tw-text-lg tw-text-center",children:["SPECIAL THANKS: ",Object(j.jsx)("br",{}),"John Smith, Fluffy Marsmallows, Talisman, Syncs, Darkskryll ",Object(j.jsx)("br",{}),"I'm grateful for your feedback to make this the most great ",Object(j.jsx)("br",{}),"User experience possible (and surprise) for everybody.",Object(j.jsx)("br",{}),":)"]}),Object(j.jsxs)("p",{className:"tw-pt-12 tw-text-lg tw-text-center",children:["JUDGES COUNCIL: ",Object(j.jsx)("br",{}),"Fluffy Marsmallows, Darkskryll, VENOMxRaptor, VENOMxBadger, Caselas, Starrii, Giquo"]})]})]})})},G=(c(72),c.p+"static/media/AC7-title.6b9340a9.wav"),Z=c.p+"static/media/AC2-Hanger.6dd52828.mp3",Y=c.p+"static/media/AC2-Invoke.6aaaa6a9.mp3",J=c.p+"static/media/AC2-Lode Stone.2c6f40a5.mp3",W=c.p+"static/media/AC3-briefing.99f44a3c.mp3",q=c.p+"static/media/AC3-linkage.8c4c59af.mp3",X=c.p+"static/media/AC4-Scramble.dab83b58.mp3",K=c.p+"static/media/AC4-The Hangar.5e43c1fe.mp3",V=c.p+"static/media/AC5-Hangar1.14acf584.mp3",_=c.p+"static/media/AC5-menu.aba952fc.mp3",Q=c.p+"static/media/AC5-Tutorial Main.3f5ca6cb.mp3",$=c.p+"static/media/AC6-menu.12ffa573.mp3",ee=c.p+"static/media/AC7-444th-Base.93df04ec.mp3",te=c.p+"static/media/ACAH-hangar2.90bd293c.mp3",ce=c.p+"static/media/ACAH-refrain.c095446c.mp3",ae=c.p+"static/media/ACX-aircraft_select.aea90cff.mp3",se=c.p+"static/media/ACZ-Briefing1.8c3c64cb.mp3",ne=c.p+"static/media/ACZ-Hangar.6f496d41.mp3",ie=c.p+"static/media/ACZ-Sortie1.83b84d0d.mp3",le=c.p+"static/media/AC6-Sortie3.f6e4f07b.mp3",re=c.p+"static/media/AC6-menu2.7b9a30da.mp3",oe=function(e){var t=e.musicState,c=Object(m.a)(b,{volume:1}),s=Object(l.a)(c,1)[0],n=Object(m.a)(d,{volume:1}),i=Object(l.a)(n,1)[0],r=Object(a.useState)(!1),o=Object(l.a)(r,2),u=o[0],x=o[1],f=Object(a.useState)("--"),w=Object(l.a)(f,2),O=w[0],h=w[1],p=Object(a.useState)("--"),v=Object(l.a)(p,2),g=v[0],y=v[1],N=Object(a.useState)("--"),k=Object(l.a)(N,2),C=k[0],A=k[1],E=Object(a.useState)(!0),L=Object(l.a)(E,2),M=L[0],R=L[1],I=Object(a.useState)(!1),T=Object(l.a)(I,2),P=T[0],F=T[1],B="Ace Combat Zero: The Belkan War",U="acz.jpg",H="Ace Combat 2",D="ac2.png",z="Ace Combat 3: Electrosphere",oe="ac3.jpg",me="Ace Combat 4: Shattered Skies",be="ac4.jpg",de="Ace Combat 5: The Unsung War",je="ac5.jpg",ue="Ace Combat 6: Fires of Liberation",xe="ac6.png",fe="Ace Combat 7: Skies Unknown",we="ac7.webp",Oe="Ace Combat Assault Horizon",he="acah.jpg",pe=[{track:G,name:"Skies Unknown",album:fe,thumbnail:we},{track:Z,name:"Hangar",album:H,thumbnail:D},{track:Y,name:"Invoke",album:H,thumbnail:D},{track:J,name:"Lode Stone",album:H,thumbnail:D},{track:W,name:"Briefing",album:z,thumbnail:oe},{track:q,name:"Linkage",album:z,thumbnail:oe},{track:X,name:"Scramble",album:me,thumbnail:be},{track:K,name:"The Hangar",album:me,thumbnail:be},{track:V,name:"Hangar 1",album:de,thumbnail:je},{track:_,name:"Menu",album:de,thumbnail:je},{track:Q,name:"Tutorial Main",album:de,thumbnail:je},{track:$,name:"Menu",album:ue,thumbnail:xe},{track:ee,name:"444 Base",album:fe,thumbnail:we},{track:te,name:"Hangar 2",album:Oe,thumbnail:he},{track:ce,name:"Refrain",album:Oe,thumbnail:he},{track:ae,name:"Aircraft Select",album:"Ace Combat X: Skies of Deception",thumbnail:"acx.jpg"},{track:se,name:"Briefing 1",album:B,thumbnail:U},{track:ne,name:"Hangar",album:B,thumbnail:U},{track:ie,name:"Sortie 1",album:B,thumbnail:U},{track:le,name:"Sortie 3",album:ue,thumbnail:xe},{track:re,name:"Menu 2",album:ue,thumbnail:xe}],ve=0;!function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var a=[e[t],e[c]];e[c]=a[0],e[t]=a[1]}}(pe);var ge=new Audio(pe[ve].track);ge.volume=.4,Object(a.useEffect)((function(){h(pe[ve].name),y(pe[ve].album),A(pe[ve].thumbnail),document.addEventListener("keydown",ye),ge.addEventListener("ended",Ce),F(!0)}),[t]);var ye=function(e){118===e.keyCode?(e.preventDefault(),ke()):119===e.keyCode?(e.preventDefault(),Ne()):120===e.keyCode&&(e.preventDefault(),Ce())},Ne=function(){(t=!t)?ge.play():ge.pause(),x(t),console.log(t)},ke=function(){ge.pause(),ve>0?ve-=1:0===ve&&(ve=19),h(pe[ve].name),y(pe[ve].album),A(pe[ve].thumbnail),ge.src=pe[ve].track,ge.play()},Ce=function(){ge.pause(),ve<20?ve+=1:20===ve&&(ve=0),h(pe[ve].name),y(pe[ve].album),A(pe[ve].thumbnail),ge.src=pe[ve].track,ge.play()},Ae=function(){R(!M),i()};return Object(j.jsxs)("div",{className:"music-player ".concat(P?"":"tw-hidden"," ").concat(M?"":"music-player-fab"),onKeyPress:ye,children:[Object(j.jsx)("span",{className:"music-player-icon tw-text-2xl ".concat(M?"tw-hidden":""),onClick:function(){return Ae()},onMouseEnter:s,children:Object(j.jsx)(S.e,{})}),Object(j.jsxs)("div",{className:"music-player-track tw-flex tw-flex-row tw-items-center tw-px-3 tw-py-1 ".concat(M?"":"tw-hidden"),children:[Object(j.jsx)("div",{className:"tw-px-2",children:Object(j.jsx)("img",{src:""+"/albumart/".concat(C),alt:"thumbnail",height:"56",width:"56"})}),Object(j.jsxs)("div",{className:"tw-flex tw-flex-col tw-px-2",children:[Object(j.jsx)("h6",{className:"".concat(u?"":"tw-hidden"),children:"Now Playing:"}),Object(j.jsx)("h6",{className:"".concat(u?"tw-hidden":""),children:"Paused:"}),Object(j.jsx)("h3",{children:O}),Object(j.jsx)("h5",{children:g})]}),Object(j.jsx)("div",{className:"tw-px-2",children:Object(j.jsx)("span",{className:"music-player-icon tw-text-2xl",onClick:Ae,onMouseEnter:s,children:Object(j.jsx)(S.d,{})})})]})]})},me=c.p+"static/media/load_complete.65de8f15.mp3",be=c.p+"static/media/select_load.3752672e.mp3",de=c(53),je=(c(73),c.p+"static/media/changelog.03a611fe.md"),ue=c(88),xe=c(58),fe=c.p+"static/media/log.3c95a0cb.svg",we=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch(je).then((function(e){return e.text()})).then((function(e){return s(e)}))})),Object(j.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-justify-center",children:Object(j.jsxs)("div",{className:"changelog-container tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(j.jsx)(v,{secondLevel:"Changelog",iconSrc:fe}),Object(j.jsx)("div",{className:"changelog-container",children:Object(j.jsx)(ue.a,{children:c,remarkPlugins:[xe.a]})})]})})};var Oe=function(){var e=Object(m.a)(me,{volume:1}),t=Object(l.a)(e,1)[0],c=Object(m.a)(be,{volume:1}),s=Object(l.a)(c,1)[0],n=Object(a.useState)(!1),i=Object(l.a)(n,1)[0];Object(a.useEffect)((function(){"/"!==window.location.pathname&&window.location.replace("/"),new Promise((function(e){return setTimeout(e,1e3)})).then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(s(),e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))}));var b=function(e,t){console.log(e),e?"7"===e?(document.body.classList.toggle("ac7-theme"),document.body.classList.remove("acz-theme"),document.body.classList.remove("ac5-theme")):"Z"===e?(document.body.classList.toggle("acz-theme"),document.body.classList.remove("ac7-theme"),document.body.classList.remove("ac5-theme")):"5"===e&&(document.body.classList.toggle("ac5-theme"),document.body.classList.remove("ac7-theme"),document.body.classList.remove("acz-theme")):(document.body.classList.toggle("ac7-theme"),document.body.classList.remove("acz-theme"))},d=function(e,t){if(e)switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04";break;case"5":t.style.fontFamily="AC5-Neue";break;case"0":t.style.fontFamily="ACZ-Envy"}else t.style.fontFamily="AC7-Regular"};return Object(j.jsxs)(r.a,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{id:"modal-begin",className:"tw-w-screen tw-h-screen tw-absolute tw-flex tw-flex-col tw-p-4",children:Object(j.jsx)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:Object(j.jsx)("p",{className:"tw-text-2xl tw-text-center",onClick:function(e){var c=document.getElementById("modal-begin");if(function(){var e=JSON.parse(localStorage.getItem("font")),t=JSON.parse(localStorage.getItem("theme")),c=document.getElementsByTagName("body")[0];b(t,c),d(e,c)}(),c){c.classList.add("available"),c.outerHTML="";var a=new Event("keydown");a.which=119,a.keyCode=119,document.dispatchEvent(a);var s=document.documentElement;s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen(),t()}},children:"Click Here to begin"})})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"/pilots",element:Object(j.jsx)(B,{})}),Object(j.jsx)(o.a,{path:"/settings",element:Object(j.jsx)(H,{})}),Object(j.jsx)(o.a,{path:"/about",element:Object(j.jsx)(z,{})}),Object(j.jsx)(o.a,{path:"/changelog",element:Object(j.jsx)(we,{})})]})]}),Object(j.jsx)(de.a,{type:"cobweb",color:"#A0A0A0",config:{num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"fixed",color:["random","#AAA"],cross:"dead",random:15},bg:{width:"100%",height:"100%",position:"fixed",zIndex:-1,top:"0px",left:"0px"}}),Object(j.jsx)(oe,{musicState:i})]})},he=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,90)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[76,1,2]]]);
//# sourceMappingURL=main.dc5aad5b.chunk.js.map