(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(19),i=c.n(n),l=(c(26),c(3)),r=c(13),o=c(5),j=(c(27),c(9)),d=c.p+"static/media/navigate.890aefd2.mp3",b=c.p+"static/media/select.34cfe8c1.mp3",u=c(2),x=function(e){var t=e.keyName,c=e.description;return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(u.jsx)("div",{className:"keycap-box tw-flex tw-justify-center",children:Object(u.jsxs)("span",{children:["[",t,"]\xa0"]})}),Object(u.jsx)("span",{className:"tw-text-xl tw-pl-2 tw-pr-6",children:c})]})},m=function(){var e=Object(j.a)(d,{volume:1}),t=Object(l.a)(e,1)[0],c=Object(j.a)(b,{volume:1}),a=Object(l.a)(c,1)[0],n=Object(s.useState)("Fullscreen mode will give you a better experience"),i=Object(l.a)(n,1)[0];Object(s.useEffect)((function(){document.title="Ace Combat 7 PSM Multiplayer Ranking"}));return Object(u.jsx)("div",{className:"tw-h-screen tw-w-screen tw-flex tw-flex-row tw-justify-center",children:Object(u.jsxs)("div",{className:"main-home-page-container tw-flex tw-flex-col tw-w-9/12 tw-p-4",children:[Object(u.jsx)("h1",{className:"tw-text-5xl tw-py-20",children:"Ace Combat 7 PSM Multiplayer Ranking"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(u.jsx)(r.b,{to:"/pilots",onMouseEnter:t,onClick:a,children:"Pilots"})}),Object(u.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(u.jsx)(r.b,{to:"/about",onMouseEnter:t,onClick:a,children:"About"})})]}),Object(u.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(u.jsx)("div",{className:"tw-flex tw-flex-row tw-justify-end tw-py-16",children:Object(u.jsx)("p",{className:"tw-text-xl",children:i})}),Object(u.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(u.jsx)(x,{keyName:"F11",description:"Fullscreen"}),Object(u.jsx)(x,{keyName:"F8",description:"Play/Pause BGM",onClick:function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"F8"}))}})]})]})})},f=c(4),w=c(11),O=c.n(w),p=c(17),v=c.p+"static/media/cancel.454edab0.mp3",h=function(e){var t,c,s=e.iconSrc,a=e.secondLevel,n=e.thirdLevel;a&&(t=Object(u.jsxs)("p",{className:"tw-text-sm",children:["> > ",a]})),n&&(c=Object(u.jsxs)("p",{className:"tw-text-sm",children:["> > > ",n]}));var i=Object(j.a)(v,{volume:1}),o=Object(l.a)(i,1)[0];return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-8",children:[Object(u.jsx)("div",{className:"breadcumb-logo",children:Object(u.jsx)("img",{src:s,height:"59",width:"59",alt:"ico"})}),Object(u.jsxs)("div",{className:"tw-flex-column tw-px-8",children:[Object(u.jsxs)("p",{className:"tw-text-sm",children:[Object(u.jsx)(r.b,{to:"/",onClick:o,children:"> Ace Combat 7 PSM Multiplayer Ranking"}),Object(u.jsx)("br",{})]}),t,c]})]})},g=function(e){var t=e.text;return Object(u.jsx)("label",{className:"tw-text-sm",children:t})},y=function(e){var t=e.text;return Object(u.jsx)("h3",{className:"tw-text-3xl tw-pb-3",children:t})},N=c(7),A=c(16);N.e.register(N.p,N.m,N.j,N.g,N.s,N.h,N.d,N.k,N.b,N.r);var C=function(e){var t=e.statistics,c=e.average,a=Object(s.useState)({labels:["BOOST","DRIFT","CONCISTENCY","AGRESSIVITY","BACKWARD FLYING","STRATEGY"],datasets:[{data:[0,0,0,0,0,0]}]}),n=Object(l.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)({labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{data:[0,0,0,0]}]}),j=Object(l.a)(o,2),d=j[0],b=j[1],x=Object(s.useState)({labels:["","ACCURACY","USE RATE"],datasets:[{data:[0,0,0]}]}),m=Object(l.a)(x,2),f=m[0],w=m[1];Object(s.useEffect)((function(){if(t){var e="";e=c>97?"rgba(0, 176, 240, 0.5)":97>=c&&c>80?"rgba(0, 176, 80, 0.5)":80>=c&&c>60?"rgba(146, 208, 80, 0.5)":60>=c&&c>40?"rgba(255, 192, 0, 0.5)":40>=c?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)";var s={labels:["BOOST","DRIFT","CHAINING","BACKWARD FLYING","STRATEGY"],datasets:[{label:"",data:[t.boost,t.drift,t.concistency,t.bkf,t.strategy],backgroundColor:e,fill:!0,borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,pointBackgroundColor:"rgb(0, 176, 240)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(0, 176, 240)",pointRadius:3}]},a={labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{label:"",data:[100,t.mslAcc,t.mslCurving,t.mslLooping],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mslAcc),O(t.mslCurving),O(t.mslLooping)]}]},n={labels:["","ACCURACY","USE RATE"],datasets:[{label:"",data:[100,t.mgAcc,t.mgRate],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mgAcc),O(t.mgRate)]}]};r(s),b(a),w(n)}}),[t,c]);var O=function(e){return e>97?"rgba(0, 176, 240, 0.6)":97>=e&&e>80?"rgba(0, 176, 80, 0.6)":80>=e&&e>60?"rgba(146, 208, 80, 0.6)":60>=e&&e>40?"rgba(255, 192, 0, 0.6)":40>=e?"rgba(255, 0, 0, 0.6)":"rgba(0, 0, 0, 0.6)"},p={y:{stacked:!0,beginAtZero:!0,grid:{color:"gray",offset:!0},pointLabels:{color:"white"},suggestedMin:0,min:0,suggestedMax:10,max:10,ticks:{stepSize:1,color:"white"}}},v={display:!1},h={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:v,title:{display:!0,text:"MISILE CONTROL",color:"white"}}},g={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:v,title:{display:!0,text:"MACHINE GUN CONTROL",color:"white"}}};return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-center",children:[Object(u.jsxs)("div",{className:"bar-container",children:[Object(u.jsx)(A.a,{options:h,data:d}),Object(u.jsx)("div",{className:"tw-my-4"}),Object(u.jsx)(A.a,{options:g,data:f})]}),Object(u.jsx)("div",{className:"radar-container tw-pl-2",children:Object(u.jsx)(A.b,{data:i,options:{title:{display:!0},scales:{r:{angleLines:{display:!0,color:"gray"},grid:{color:"gray"},pointLabels:{color:"white"},suggestedMin:0,suggestedMax:100,ticks:{showLabelBackdrop:!1,stepSize:20}}},elements:{line:{borderWidth:3}},plugins:{title:{display:!0,text:"MANEOUVERS",color:"white"},legend:{display:!1}}}})})]})},S=c(20),k=function(e){var t=e.player,c=Object(s.useState)("--"),a=Object(l.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)(null),o=Object(l.a)(r,2),j=o[0],d=o[1],b=Object(s.useState)(null),x=Object(l.a)(b,2),m=x[0],f=x[1],w=Object(s.useState)("--"),O=Object(l.a)(w,2),p=O[0],v=O[1];Object(s.useEffect)((function(){if(t.statistics){var e="--",c=h(t.statistics.mslAcc,t.statistics.mslCurving,t.statistics.mslLooping),s=N(t.statistics.mgAcc,t.statistics.mgRate),a=A(t.statistics.boost,t.statistics.concistency,c,t.statistics.strategy,s,t.statistics.drift,t.statistics.bkf);e=(a=parseFloat(a))>97?"GS":97>=a&&a>92?"S1":92>=a&&a>86?"S2":86>=a&&a>80?"S3":80>=a&&a>74?"A1":74>=a&&a>67?"A2":67>=a&&a>60?"A3":60>=a&&a>54?"B1":54>=a&&a>47?"B2":47>=a&&a>40?"B3":40>=a?"C":"ER",i(a.toFixed(1)),v(e)}t.country&&(d(Object(u.jsx)(S.a,{countryCode:t.country.code,style:{fontSize:"2em"},"aria-label":t.country.name})),f(Object(u.jsx)(y,{text:t.country.name})))}),[t]);var h=function(e,t,c){return.7*e+.2*t+.1*c},N=function(e,t){return.85*e+.15*t},A=function(e,t,c,s,a,n,i){return.2*e+.2*t+.15*c+.15*s+.15*a+.1*n+.05*i};return Object(u.jsxs)("div",{className:"tw-flex tw-flex-col",children:[Object(u.jsxs)("div",{className:"pilot-data tw-flex tw-flex-row",children:[Object(u.jsx)("div",{className:"pilot-picture",children:Object(u.jsx)("img",{src:""+"".concat(t.picture),alt:"profile",width:"453",height:"255"})}),Object(u.jsxs)("div",{className:"tw-pl-4 tw-flex-grow",children:[Object(u.jsx)(g,{text:"[NAME]"}),Object(u.jsx)(y,{text:t.name}),Object(u.jsx)(g,{text:"[CALLSIGN]"}),Object(u.jsx)(y,{text:t.callsign}),Object(u.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(u.jsxs)("div",{className:"tw-flex-grow",children:[Object(u.jsx)(g,{text:"[MAIN PLANE]"}),Object(u.jsx)(y,{text:t.mainPlane})]}),Object(u.jsxs)("div",{className:"tw-flex-grow",children:[Object(u.jsx)(g,{text:"[MAIN SPECIAL WEAPON]"}),Object(u.jsx)(y,{text:t.mainSpW})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{text:"[COUNTRY]"}),Object(u.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(u.jsx)("div",{className:"tw-pt-2 tw-pr-2",children:j}),m]})]})]})]}),Object(u.jsxs)("div",{className:"tw-pb-4",children:[Object(u.jsx)(g,{text:"[UNIT]"}),Object(u.jsx)(y,{text:t.unit})]}),Object(u.jsxs)("div",{className:"pilot-data tw-flex tw-flex-row",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{text:"[AVERAGE:".concat(n,"]")}),Object(u.jsxs)("h1",{className:"tw-text-5xl tw-pb-6",children:["RANK ",p]}),Object(u.jsx)(g,{text:"[STEAM TOP]"}),Object(u.jsx)(y,{text:t.topPc}),Object(u.jsx)(g,{text:"[PSN TOP]"}),Object(u.jsx)(y,{text:t.topPs}),Object(u.jsx)(g,{text:"[XBOX TOP]"}),Object(u.jsx)(y,{text:t.topXb})]}),Object(u.jsxs)("div",{className:"tw-flex tw-flex-col tw-flex-grow tw-pl-8",children:[Object(u.jsx)("div",{children:Object(u.jsx)("label",{children:"[STATISTICS]"})}),Object(u.jsx)(C,{statistics:t.statistics,average:n})]})]})]})},E=(c(30),function(e){var t=e.player,c=e.onSelect,s=Object(j.a)(d,{volume:1}),a=Object(l.a)(s,1)[0];return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-1 tw-items-center",children:[Object(u.jsx)("div",{className:"".concat(t.selected?"active-caret":"inactive-caret")}),Object(u.jsx)("div",{className:"player-list-item-name tw-pl-4",onClick:function(){return c(t)},onMouseEnter:a,children:Object(u.jsx)("p",{className:"tw-text-2xl ".concat(t.selected?"active-player-list-item":"inactive-player-list-item"),children:t.name})})]})}),R=function(e){var t=e.selectFilter,c=e.filter,s=Object(j.a)(d,{volume:1}),a=Object(l.a)(s,1)[0],n=Object(j.a)(b,{volume:1}),i=Object(l.a)(n,1)[0],r=function(e){t(e),i()};return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(u.jsx)("div",{onClick:function(){return r("all")},className:"player-list-item-name ".concat("all"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"ALL"}),Object(u.jsx)("div",{onClick:function(){return r("PC")},className:"player-list-item-name ".concat("PC"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"STEAM"}),Object(u.jsx)("div",{onClick:function(){return r("PSN")},className:"player-list-item-name ".concat("PSN"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"PSN"}),Object(u.jsx)("div",{onClick:function(){return r("XBOX")},className:"player-list-item-name ".concat("XBOX"===c?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"XBOX"})]})},P=function(e){var t=e.vctPlayers,c=e.onSelectPilot;Object(s.useEffect)((function(){t&&t.length>0&&x("all")}),[t]);var a=Object(s.useState)(t),n=Object(l.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),d=j[0],b=j[1],x=function(e){if(b(e),t){var c=[];if("all"===e)c=t.slice();else{var s,a=Object(f.a)(t);try{for(a.s();!(s=a.n()).done;){var n=s.value;n.platforms.indexOf(e)>-1&&c.push(n)}}catch(i){a.e(i)}finally{a.f()}}r(c)}};return Object(u.jsxs)("div",{className:"pilot-list-container tw-flex tw-flex-col tw-flex-grow tw-px-4 tw-py-32",children:[Object(u.jsx)(R,{selectFilter:x,filter:d}),Object(u.jsx)("div",{className:"tw-overflow-visible tw-overflow-y-auto tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:i.map((function(e){return Object(u.jsx)(E,{player:e,onSelect:c},e.id)}))})]})},M=c.p+"static/media/pilot.2b4c3f80.svg",L=function(){Object(s.useEffect)((function(){document.title="Pilots - AC7 PSM MP Ranking"}));var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1];Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var d=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/"+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/pilots");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(j.a)(b,{volume:1}),w=Object(l.a)(m,1)[0],v=function(){var e=Object(p.a)(O.a.mark((function e(t){var s,n,i,l,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.id);case 2:s=e.sent,t.selected=!0,n=c,i=Object(f.a)(n);try{for(i.s();!(l=i.n()).done;)(r=l.value).id===t.id?r.selected=!0:r.selected=!1}catch(j){i.e(j)}finally{i.f()}a(n),o(s),w();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:[Object(u.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(u.jsx)(h,{secondLevel:"Pilots",iconSrc:M}),Object(u.jsx)(k,{player:r})]}),Object(u.jsx)("div",{className:"tw-flex tw-w-1/5",children:Object(u.jsx)(P,{vctPlayers:c,onSelectPilot:v})})]})},T=c.p+"static/media/settings-gear.c81561cf.svg",I=function(){return Object(u.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(u.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(u.jsx)(h,{secondLevel:"Settings",iconSrc:T}),Object(u.jsx)("div",{children:"stufgsdfg"})]})})},B=c.p+"static/media/about-icon.fedacfe8.svg",F=function(){return Object(s.useEffect)((function(){document.title="About - AC7 PSM MP Ranking"})),Object(u.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(u.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-8/12 tw-p-4",children:[Object(u.jsx)(h,{secondLevel:"About",iconSrc:B}),Object(u.jsx)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:Object(u.jsxs)("p",{className:"tw-text-2xl tw-text-center",children:["Giquo was bored and decided to learn how to program with ReactJS.",Object(u.jsx)("br",{}),'Also, I wanted to make a sort of "Ranking" system for the community.',Object(u.jsx)("br",{}),"Thank you, I hope you enjoy. ",Object(u.jsx)("br",{}),"God bless you."]})})]})})},G=c.p+"static/media/AC2-Hanger.6dd52828.mp3",H=c.p+"static/media/AC2-Lode Stone.2c6f40a5.mp3",U=c.p+"static/media/AC4-Scramble.dab83b58.mp3",Y=c.p+"static/media/AC4-The Hangar.5e43c1fe.mp3",X=c.p+"static/media/AC5-Hangar 1.14acf584.mp3",q=c.p+"static/media/AC5-Tutorial Main.3f5ca6cb.mp3",D=c.p+"static/media/AC7-444th Air Base Hangar.684c6fbd.mp3",W=c.p+"static/media/ACZ-Briefing I.8c3c64cb.mp3",K=c.p+"static/media/ACZ-Hangar.6f496d41.mp3",V=c.p+"static/media/ACZ-Sortie I.83b84d0d.mp3",Z=function(e){var t=e.musicState,c=[G,H,U,Y,X,q,D,W,K,V],a=0;!function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var s=[e[t],e[c]];e[c]=s[0],e[t]=s[1]}}(c);var n=new Audio(c[0]);n.volume=.5,Object(s.useEffect)((function(){document.addEventListener("keydown",i),n.addEventListener("ended",r)}),[t]);var i=function(e){119===e.keyCode&&(e.preventDefault(),l())},l=function(){(t=!t)?n.play():n.pause()},r=function(){a<9?a+=1:9===a&&(a=0),n.src=c[a],n.play()};return Object(u.jsx)("div",{onKeyPress:i})},z=c.p+"static/media/load_complete.65de8f15.mp3",J=c(21);var _=function(){var e=Object(j.a)(z,{volume:1}),t=Object(l.a)(e,1)[0],c=Object(s.useState)(!1),a=Object(l.a)(c,1)[0];return Object(s.useEffect)((function(){"/"!==window.location.pathname&&window.location.replace("/"),new Promise((function(e){return setTimeout(e,1e3)})).then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(t(),e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))})),Object(u.jsxs)(r.a,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{id:"modal-begin",className:"tw-w-screen tw-h-screen tw-absolute tw-flex tw-flex-col tw-p-4",children:Object(u.jsx)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:Object(u.jsx)("p",{className:"tw-text-2xl tw-text-center",onClick:function(e){var t=document.getElementById("modal-begin");if(t){t.classList.add("available"),t.outerHTML="";var c=new Event("keydown");c.which=119,c.keyCode=119,document.dispatchEvent(c);var s=document.documentElement;s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen()}},children:"Click Here to begin"})})}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(m,{})}),Object(u.jsx)(o.a,{path:"/pilots",element:Object(u.jsx)(L,{})}),Object(u.jsx)(o.a,{path:"/settings",element:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{path:"/about",element:Object(u.jsx)(F,{})})]})]}),Object(u.jsx)(J.a,{type:"cobweb",color:"#A0A0A0",config:{num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"all",color:["random","#AAA"],cross:"dead",random:15},bg:!0}),Object(u.jsx)(Z,{musicState:a})]})},Q=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,34)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),Q()}},[[31,1,2]]]);
//# sourceMappingURL=main.99505779.chunk.js.map