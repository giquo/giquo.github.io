(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(50),i=a.n(n),l=(a(64),a(5)),r=a(26),o=a(12),b=(a(65),a(20)),j=a.p+"static/media/navigate.890aefd2.mp3",m=a.p+"static/media/select.34cfe8c1.mp3",d=a(0),u=function(e){var t=e.keyName,a=e.description;return Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(d.jsx)("div",{className:"keycap-box tw-flex tw-justify-center",children:Object(d.jsxs)("span",{children:[t,"\xa0"]})}),Object(d.jsx)("span",{className:"tw-text-xl tw-pl-2 tw-pr-6",children:a})]})},x=function(){var e=Object(b.a)(j,{volume:1}),t=Object(l.a)(e,1)[0],a=Object(b.a)(m,{volume:1}),s=Object(l.a)(a,1)[0],n=Object(c.useState)("Fullscreen mode will give you a better experience");Object(l.a)(n,1)[0];Object(c.useEffect)((function(){document.title="Ace Combat 7 PSM Multiplayer Pilots Database"}));return Object(d.jsx)("div",{className:"tw-h-screen tw-w-screen tw-flex tw-flex-row tw-justify-center",children:Object(d.jsxs)("div",{className:"main-home-page-container tw-flex tw-flex-col tw-w-9/12 tw-p-4",children:[Object(d.jsx)("h1",{className:"tw-text-3xl lg:tw-text-5xl tw-py-20",children:"Ace Combat 7 PSM Multiplayer Pilots Database"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(d.jsx)(r.b,{to:"/pilots",onMouseEnter:t,onClick:s,children:"Pilots"})}),Object(d.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(d.jsx)(r.b,{to:"/settings",onMouseEnter:t,onClick:s,children:"Settings"})}),Object(d.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(d.jsx)(r.b,{to:"/about",onMouseEnter:t,onClick:s,children:"About"})})]}),Object(d.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(d.jsx)("ul",{children:Object(d.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(d.jsx)(r.b,{to:"/changelog",onMouseEnter:t,onClick:s,children:"Changelog"})})}),Object(d.jsx)("div",{className:"tw-flex tw-flex-row tw-justify-end tw-py-16",children:Object(d.jsxs)("p",{className:"tw-text-xl tw-text-right",children:["Fullscreen mode will give you a better experience.",Object(d.jsx)("br",{}),"Close fullscreen to exit."]})}),Object(d.jsxs)("div",{className:"sm:tw-flex tw-flex-row tw-hidden",children:[Object(d.jsx)(u,{keyName:"F11",description:"Fullscreen"}),Object(d.jsx)(u,{keyName:"F7",description:"Previous Song"}),Object(d.jsx)(u,{keyName:"F8",description:"Play/Pause BGM",onClick:function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"F8"}))}}),Object(d.jsx)(u,{keyName:"F9",description:"Next Song"})]})]})})},w=a(10),f=a(27),O=a.n(f),p=a(40),h=a.p+"static/media/cancel.454edab0.mp3",g=function(e){var t,a,c=e.iconSrc,s=e.secondLevel,n=e.thirdLevel;s&&(t=Object(d.jsxs)("p",{className:"tw-text-sm",children:["> > ",s]})),n&&(a=Object(d.jsxs)("p",{className:"tw-text-sm",children:["> > > ",n]}));var i=Object(b.a)(h,{volume:1}),o=Object(l.a)(i,1)[0];return Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-8",children:[Object(d.jsx)("div",{className:"breadcumb-logo",children:Object(d.jsx)("img",{src:c,height:"59",width:"59",alt:"ico"})}),Object(d.jsxs)("div",{className:"tw-flex-column tw-px-8",children:[Object(d.jsx)("p",{className:"tw-text-sm",children:Object(d.jsx)(r.b,{to:"/",onClick:o,children:Object(d.jsx)("span",{children:"> Click to Return"})})}),t,a]})]})},v=function(e){var t=e.text;return Object(d.jsx)("label",{className:"tw-text-sm",children:t})},y=function(e){var t=e.text;return Object(d.jsx)("h3",{className:"tw-text-2xl md:tw-text-3xl tw-pb-3",children:t})},N=a(19),C=a(39);N.e.register(N.p,N.m,N.j,N.g,N.s,N.h,N.d,N.k,N.b,N.r);var k=function(e){var t=e.statistics,a=e.average,s=Object(c.useState)({labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{data:[0,0,0,0,0]}]}),n=Object(l.a)(s,2),i=n[0],r=n[1],o=Object(c.useState)({labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{data:[0,0,0,0]}]}),b=Object(l.a)(o,2),j=b[0],m=b[1],u=Object(c.useState)({labels:["","ACCURACY","USE RATE"],datasets:[{data:[0,0,0]}]}),x=Object(l.a)(u,2),w=x[0],f=x[1];Object(c.useEffect)((function(){if(t){var e="";e=a>97?"rgba(0, 176, 240, 0.5)":97>=a&&a>80?"rgba(0, 176, 80, 0.5)":80>=a&&a>60?"rgba(146, 208, 80, 0.5)":60>=a&&a>40?"rgba(255, 192, 0, 0.5)":40>=a?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)";var c={labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{label:"",data:[t.boost,t.drift,t.consistency,t.bkf,t.strategy],backgroundColor:e,fill:!0,borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,pointBackgroundColor:"rgb(0, 176, 240)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(0, 176, 240)",pointRadius:3}]},s={labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{label:"",data:[100,t.mslAcc,t.mslCurving,t.mslLooping],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mslAcc),O(t.mslCurving),O(t.mslLooping)]}]},n={labels:["","ACCURACY","USE RATE"],datasets:[{label:"",data:[100,t.mgAcc,t.mgRate],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mgAcc),O(t.mgRate)]}]};r(c),m(s),f(n)}}),[t,a]);var O=function(e){return e>97?"rgba(0, 176, 240, 0.6)":97>=e&&e>80?"rgba(0, 176, 80, 0.6)":80>=e&&e>60?"rgba(146, 208, 80, 0.6)":60>=e&&e>40?"rgba(255, 192, 0, 0.6)":40>=e?"rgba(255, 0, 0, 0.6)":"rgba(0, 0, 0, 0.6)"},p={y:{stacked:!0,beginAtZero:!0,grid:{color:"gray",offset:!0},pointLabels:{color:"white"},suggestedMin:0,min:0,suggestedMax:10,max:10,ticks:{stepSize:1,color:"white"}}},h={display:!1},g={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:h,title:{display:!0,text:"MISSILE CONTROL",color:"white"}}},v={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:h,title:{display:!0,text:"MACHINE GUN CONTROL",color:"white"}}};return Object(d.jsxs)("div",{className:"tw-flex lg:tw-flex-row tw-flex-col tw-justify-center",children:[Object(d.jsxs)("div",{className:"bar-container",children:[Object(d.jsx)(C.a,{options:g,data:j}),Object(d.jsx)("div",{className:"tw-my-4"}),Object(d.jsx)(C.a,{options:v,data:w})]}),Object(d.jsx)("div",{className:"radar-container tw-pl-2",children:Object(d.jsx)(C.b,{data:i,options:{title:{display:!0},scales:{r:{angleLines:{display:!0,color:"gray"},grid:{color:"gray"},pointLabels:{color:"white"},suggestedMin:0,suggestedMax:100,ticks:{showLabelBackdrop:!1,stepSize:20}}},elements:{line:{borderWidth:3}},plugins:{title:{display:!0,text:"MANEOUVERS",color:"white"},legend:{display:!1}}}})})]})},A=a(51),S=a(52),E=a.n(S),M=function(e){var t=e.player,a=Object(c.useState)("--"),s=Object(l.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),b=o[0],j=o[1],m=Object(c.useState)(null),u=Object(l.a)(m,2),x=u[0],w=u[1],f=Object(c.useState)("--"),O=Object(l.a)(f,2),p=O[0],h=O[1];Object(c.useEffect)((function(){if(t.statistics){var e="--",a=g(t.statistics.mslAcc,t.statistics.mslCurving,t.statistics.mslLooping,t.statistics.mgAcc,t.statistics.mgRate,t.statistics.boost,t.statistics.consistency,t.statistics.strategy,t.statistics.drift,t.statistics.bkf);e=a>97?"SS":97>=a&&a>92?"S1":92>=a&&a>86?"S2":86>=a&&a>80?"S3":80>=a&&a>74?"A1":74>=a&&a>67?"A2":67>=a&&a>60?"A3":60>=a&&a>54?"B1":54>=a&&a>47?"B2":47>=a&&a>40?"B3":40>=a?"C":"ER",i(a.toFixed(1)),h(e)}t.country&&(j(Object(d.jsx)(A.a,{countryCode:t.country.code,style:{fontSize:"2em"},"aria-label":t.country.name})),w(Object(d.jsx)(y,{text:t.country.name})))}),[t]);var g=function(e,t,a,c,s,n,i,l,r,o){return 100*(.2*n+.2*i+.15*(.7*e+.2*t+.1*a)+.15*l+.15*(.85*c+.15*s)+.1*r+.05*o)/100};return Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-overflow-auto lg:tw-overflow-visible tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:[Object(d.jsxs)("div",{className:"pilot-data tw-flex md:tw-flex-row tw-flex-col",children:[Object(d.jsx)("div",{className:"pilot-picture tw-pb-2",children:Object(d.jsx)("img",{src:""+"".concat(t.picture),alt:"profile",width:"453",height:"255"})}),Object(d.jsxs)("div",{className:"md:tw-pl-4 tw-flex-grow",children:[Object(d.jsx)(v,{text:"[NAME]"}),Object(d.jsx)(y,{text:t.name}),Object(d.jsx)(v,{text:"[CALLSIGN]"}),Object(d.jsx)(y,{text:t.callsign}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(d.jsxs)("div",{className:"tw-flex-grow",children:[Object(d.jsx)(v,{text:"[MAIN PLANE]"}),Object(d.jsx)(y,{text:t.mainPlane})]}),Object(d.jsxs)("div",{className:"tw-flex-grow",children:[Object(d.jsx)(v,{text:"[MAIN SPECIAL WEAPON]"}),Object(d.jsx)(y,{text:t.mainSpW})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{text:"[COUNTRY]"}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(d.jsx)("div",{className:"tw-pt-2 tw-pr-2",children:b}),x]})]})]})]}),Object(d.jsxs)("div",{className:"tw-pb-4",children:[Object(d.jsx)(v,{text:"[UNIT]"}),Object(d.jsx)(y,{text:t.unit})]}),Object(d.jsxs)("div",{className:"pilot-data tw-flex xl:tw-flex-row tw-flex-col",children:[Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"images/badges/".concat(p,".png"),alt:p,height:"64",width:"64"})}),Object(d.jsxs)("h1",{className:"tw-text-4xl md:tw-text-5xl tw-pb-6",children:["RANK ",p]}),Object(d.jsx)(E.a,{action:function(){alert("Hey, you typed the Konami Code! => "+n)},timeout:"3000",children:n})]}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-flex-grow xl:tw-pl-8",children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:"[STATISTICS]"})}),Object(d.jsx)(k,{statistics:t.statistics,average:n})]})]})]})},T=(a(70),function(e){var t=e.player,a=e.onSelect,c=Object(b.a)(j,{volume:1}),s=Object(l.a)(c,1)[0];return Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-1 tw-items-center",children:[Object(d.jsx)("div",{className:"".concat(t.selected?"active-caret":"inactive-caret")}),Object(d.jsx)("div",{className:"player-list-item-name tw-pl-4",onClick:function(){return a(t)},onMouseEnter:s,children:Object(d.jsx)("p",{className:"tw-text-2xl ".concat(t.selected?"active-player-list-item":"inactive-player-list-item"),children:t.name})})]})}),L=a(24),I=function(e){var t=e.selectFilter,a=e.filter,c=Object(b.a)(j,{volume:1}),s=Object(l.a)(c,1)[0],n=Object(b.a)(m,{volume:1}),i=Object(l.a)(n,1)[0],r=function(e){t(e),i()};return Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(d.jsx)("div",{onClick:function(){return r("all")},className:"player-list-item-name ".concat("all"===a?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:"ALL"}),Object(d.jsxs)("div",{onClick:function(){return r("PC")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("PC"===a?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(d.jsx)(L.e,{}),Object(d.jsx)("span",{className:"tw-pl-2",children:"STEAM"})]}),Object(d.jsxs)("div",{onClick:function(){return r("PSN")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("PSN"===a?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(d.jsx)(L.d,{}),Object(d.jsx)("span",{className:"tw-pl-2",children:"PSN"})]}),Object(d.jsxs)("div",{onClick:function(){return r("XBOX")},className:"tw-flex tw-flex-row tw-items-center player-list-item-name ".concat("XBOX"===a?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:s,children:[Object(d.jsx)(L.g,{}),Object(d.jsx)("span",{className:"tw-pl-2",children:"XBOX"})]})]})},R=function(e){var t=e.vctPlayers,a=e.onSelectPilot;e.showForMobile;Object(c.useEffect)((function(){t&&t.length>0&&u("all")}),[t]);var s=Object(c.useState)(t),n=Object(l.a)(s,2),i=n[0],r=n[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),j=b[0],m=b[1],u=function(e){if(m(e),t){var a=[];if("all"===e)a=t.slice();else{var c,s=Object(w.a)(t);try{for(s.s();!(c=s.n()).done;){var n=c.value;n.platforms.indexOf(e)>-1&&a.push(n)}}catch(i){s.e(i)}finally{s.f()}}r(a)}};return Object(d.jsxs)("div",{className:"pilot-list-container tw-flex tw-flex-col tw-flex-grow tw-px-4 tw-py-32 tw-h-screen",children:[Object(d.jsx)(I,{selectFilter:u,filter:j}),Object(d.jsx)("div",{className:"tw-overflow-visible tw-overflow-y-auto tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:i.map((function(e){return Object(d.jsx)(T,{player:e,onSelect:a},e.id)}))})]})},F=function(e){var t=e.onMouseEnterAction,a=e.onClickAction;return Object(d.jsx)("div",{className:"tw-flex tw-flex-row",children:Object(d.jsx)("p",{className:"inactive-player-list-item tw-text-base",onMouseEnter:t,onClick:a,children:"[INFORMATION]"})})},P=a.p+"static/media/pilot.2b4c3f80.svg",B=function(){Object(c.useEffect)((function(){document.title="Pilots - AC7 PSM MP Pilots DB"}));var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1],u=Object(c.useState)(!1),x=Object(l.a)(u,2),f=x[0],v=x[1],y=Object(c.useState)(""),N=Object(l.a)(y,2),C=N[0],k=N[1];Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(c.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1024&&v(!1)}))}));var A=function(){var e=Object(p.a)(O.a.mark((function e(t){var a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/database/"+t+".json",e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(O.a.mark((function e(){var t,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/database/pilotList.json",e.next=3,fetch("/database/pilotList.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,(c=a.pilots?a.pilots:a).sort((function(e,t){var a=e.name.toUpperCase(),c=t.name.toUpperCase();return a<c?-1:a>c?1:0})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=Object(b.a)(m,{volume:1}),T=Object(l.a)(E,1)[0],I=Object(b.a)(j,{volume:1}),B=Object(l.a)(I,1)[0],U=Object(b.a)(h,{volume:1}),H=Object(l.a)(U,1)[0],D=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,n,i,l,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t.id);case 2:c=e.sent,t.selected=!0,n=a,i=Object(w.a)(n);try{for(i.s();!(l=i.n()).done;)(r=l.value).id===t.id?r.selected=!0:r.selected=!1}catch(b){i.e(b)}finally{i.f()}s(n),o(c),v(!1),k(t.name),T();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){v(!f),console.log(f)};return Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:[Object(d.jsx)("div",{id:"modal-information",className:"tw-absolute tw-flex tw-flex-col lg:tw-p-4 tw-overflow-auto",children:Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-my-auto tw-justify-center tw-p-8 tw-h-auto",children:[Object(d.jsxs)("p",{className:"tw-text-3xl lg:tw-text-4xl",children:["Ranking and Status information:",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"tw-flex tw-flex-col lg:tw-flex-row",children:Object(d.jsx)("div",{className:"tw-flex tw-flex-col lg:tw-w-8/12 lg:tw-pr-10 tw-items-end",children:Object(d.jsxs)("p",{className:"tw-text-base lg:tw-text-lg tw-text-justify",children:[Object(d.jsx)("span",{className:"tw-text-2xl",children:"Strategy"})," - The ability of a pilot to use critical decision making, adaptive styles, disciplined maneuvering sequences, and energy fighting to maximize their efficiency in a dogfight",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"tw-text-2xl",children:"Boost"})," - The skill to control the second phase or psm called the boost (grip) phase  to gain angles in a dogfight",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"tw-text-2xl",children:"Drift"})," - The ability to use the first phase of psm (drifting) to create angles for the boost phase or use as a transition to other psm sequences",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"tw-text-2xl",children:"Backward Flying"})," - The skillset of inducing backwards flight with rechained psms to create angles for attack and defense in a psm fights",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"tw-text-2xl",children:"Consistency"})," - being able to use all your skills and strategies to achieve positive results against opponents throughout a session of dogfights. It is also the ability to force your flying style and strategy to work outside of ones comfort zone. This can be fighting across different platforms, different rules, and against unfamiliar flying styles"]})})}),Object(d.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})}),Object(d.jsx)("span",{className:"tw-text-lg",onClick:function(){document.getElementById("modal-information").style.display="none",H()},children:"[OK]"})]})}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-col 2xl:tw-w-3/5 lg:tw-w-9/12 tw-w-screen tw-p-4",children:[Object(d.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(d.jsx)(g,{secondLevel:"Pilots",thirdLevel:C,iconSrc:P}),Object(d.jsx)("span",{className:"tw-flex tw-mx-auto"}),Object(d.jsx)("span",{className:"tw-text-xl lg:tw-hidden",onClick:G,children:Object(d.jsx)(L.a,{})})]}),Object(d.jsx)(M,{player:r}),Object(d.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(d.jsx)(F,{onMouseEnterAction:B,onClickAction:function(){document.getElementById("modal-information").style.display="block",T()}})]}),Object(d.jsxs)("div",{className:"2xl:tw-w-1/5 lg:tw-w-3/12 tw-w-screen ".concat(f?"tw-flex tw-fixed":"lg:tw-flex tw-hidden"),children:[Object(d.jsx)("div",{className:"tw-w-screen tw-p-4 tw-flex tw-justify-end ".concat(f?"tw-absolute":"lg:tw-hidden"),children:Object(d.jsx)("span",{className:"tw-text-xl",onClick:G,children:Object(d.jsx)(L.f,{})})}),Object(d.jsx)(R,{vctPlayers:a,onSelectPilot:D})]})]})},U=(a(71),a.p+"static/media/cog.765fcc82.svg"),H=function(){var e=Object(c.useState)("7"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(b.a)(j,{volume:1}),i=Object(l.a)(n,1)[0],r=Object(b.a)(m,{volume:1}),o=Object(l.a)(r,1)[0];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("font"));e&&s(e)}));var u=function(e){var t=document.getElementsByTagName("body")[0];switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04"}localStorage.setItem("font",JSON.stringify(e)),s(e),o()};return Object(d.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(d.jsx)(g,{secondLevel:"Settings",iconSrc:U}),Object(d.jsxs)("p",{className:"tw-text-2xl tw-text-left",children:["Plaform Font:",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"tw-text-2xl ac7-font-item ac7-font-item ".concat("7"===a?"active-list-item":"inactive-list-item"),onClick:function(){return u("7")},onMouseEnter:i,children:"> Ace Combat 7 - Skies Unknown"}),Object(d.jsx)("li",{className:"tw-text-2xl ac7-font-item ac6-font-item ".concat("6"===a?"active-list-item":"inactive-list-item"),onClick:function(){return u("6")},onMouseEnter:i,children:"> Ace Combat 6 - Fires of Liberation (OCR-A Regular)"}),Object(d.jsx)("li",{className:"tw-text-2xl ac7-font-item ac4-font-item ".concat("4"===a?"active-list-item":"inactive-list-item"),onClick:function(){return u("4")},onMouseEnter:i,children:"> Ace Combat 4 - Shattered Skies"})]})]})})},D=a.p+"static/media/about-icon.fedacfe8.svg",G=function(){return Object(c.useEffect)((function(){document.title="About - AC7 PSM MP Pilots DB"})),Object(d.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-8/12 tw-p-4",children:[Object(d.jsx)(g,{secondLevel:"About",iconSrc:D}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:[Object(d.jsxs)("p",{className:"tw-text-2xl tw-text-center",children:["MOTIVATION ",Object(d.jsx)("br",{}),"Giquo was bored and decided to learn how to program with ReactJS.",Object(d.jsx)("br",{}),"Thank you, I hope you enjoy. ",Object(d.jsx)("br",{}),"God bless you."]}),Object(d.jsxs)("p",{className:"tw-pt-12 tw-text-2xl tw-text-center",children:["DISCLAIMER: ",Object(d.jsx)("br",{}),"The rank and statistics determination was made based on fighting ",Object(d.jsx)("br",{}),"experiences from me and other people in the community. ",Object(d.jsx)("br",{}),"Is not the purpose to upset anybody, but to keep the fun and competitivity."]}),Object(d.jsxs)("p",{className:"tw-pt-12 tw-text-lg tw-text-center",children:["SPECIAL THANKS: ",Object(d.jsx)("br",{}),"John Smith, Fluffy Marsmallows, Talisman, Syncs, Darkskryll ",Object(d.jsx)("br",{}),"I'm grateful for your feedback to make this the most great ",Object(d.jsx)("br",{}),"User experience possible (and surprise) for everybody.",Object(d.jsx)("br",{}),":)"]}),Object(d.jsxs)("p",{className:"tw-pt-12 tw-text-lg tw-text-center",children:["JUDGES COUNCIL: ",Object(d.jsx)("br",{}),"Fluffy Marsmallows, Darkskryll, VENOMxRaptor, VENOMxBadger, Caselas, Starrii, Giquo"]})]})]})})},W=(a(72),a.p+"static/media/AC7-title.6b9340a9.wav"),z=a.p+"static/media/AC2-Hanger.6dd52828.mp3",Y=a.p+"static/media/AC2-Invoke.6aaaa6a9.mp3",q=a.p+"static/media/AC2-Lode Stone.2c6f40a5.mp3",J=a.p+"static/media/AC3-briefing.99f44a3c.mp3",K=a.p+"static/media/AC3-linkage.8c4c59af.mp3",X=a.p+"static/media/AC4-Scramble.dab83b58.mp3",Z=a.p+"static/media/AC4-The Hangar.5e43c1fe.mp3",V=a.p+"static/media/AC5-Hangar1.14acf584.mp3",_=a.p+"static/media/AC5-menu.aba952fc.mp3",Q=a.p+"static/media/AC5-Tutorial Main.3f5ca6cb.mp3",$=a.p+"static/media/AC6-menu.12ffa573.mp3",ee=a.p+"static/media/AC7-444th-Base.93df04ec.mp3",te=a.p+"static/media/ACAH-hangar2.90bd293c.mp3",ae=a.p+"static/media/ACAH-refrain.c095446c.mp3",ce=a.p+"static/media/ACX-aircraft_select.aea90cff.mp3",se=a.p+"static/media/ACZ-Briefing1.8c3c64cb.mp3",ne=a.p+"static/media/ACZ-Hangar.6f496d41.mp3",ie=a.p+"static/media/ACZ-Sortie1.83b84d0d.mp3",le=a.p+"static/media/AC6-Sortie3.f6e4f07b.mp3",re=a.p+"static/media/AC6-menu2.7b9a30da.mp3",oe=function(e){var t=e.musicState,a=Object(b.a)(j,{volume:1}),s=Object(l.a)(a,1)[0],n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],m=Object(c.useState)("--"),u=Object(l.a)(m,2),x=u[0],w=u[1],f=Object(c.useState)("--"),O=Object(l.a)(f,2),p=O[0],h=O[1],g=Object(c.useState)("--"),v=Object(l.a)(g,2),y=v[0],N=v[1],C=Object(c.useState)(!0),k=Object(l.a)(C,2),A=k[0],S=k[1],E=Object(c.useState)(!1),M=Object(l.a)(E,2),T=M[0],I=M[1],R=[{track:W,name:"Skies Unknown",album:"Ace Combat 7: Skies Unknown",thumbnail:"ac7.webp"},{track:z,name:"Hangar",album:"Ace Combat 2",thumbnail:"ac2.png"},{track:Y,name:"Invoke",album:"Ace Combat 2",thumbnail:"ac2.png"},{track:q,name:"Lode Stone",album:"Ace Combat 2",thumbnail:"ac2.png"},{track:J,name:"Briefing",album:"Ace Combat 3: Electrosphere",thumbnail:"ac3.jpg"},{track:K,name:"Linkage",album:"Ace Combat 3: Electrosphere",thumbnail:"ac3.jpg"},{track:X,name:"Scramble",album:"Ace Combat 4: Shattered Skies",thumbnail:"ac4.jpg"},{track:Z,name:"The Hangar",album:"Ace Combat 4: Shattered Skies",thumbnail:"ac4.jpg"},{track:V,name:"Hangar 1",album:"Ace Combat 5: The Unsung War",thumbnail:"ac5.jpg"},{track:_,name:"Menu",album:"Ace Combat 5: The Unsung War",thumbnail:"ac5.jpg"},{track:Q,name:"Tutorial Main",album:"Ace Combat 5: The Unsung War",thumbnail:"ac5.jpg"},{track:$,name:"Menu",album:"Ace Combat 6: Fires of Liberation",thumbnail:"ac6.png"},{track:ee,name:"444 Base",album:"Ace Combat 7: Skies Unknown",thumbnail:"ac7.webp"},{track:te,name:"Hangar 2",album:"Ace Combat Assault Horizon",thumbnail:"acah.jpg"},{track:ae,name:"Refrain",album:"Ace Combat Assault Horizon",thumbnail:"acah.jpg"},{track:ce,name:"Aircraft Select",album:"Ace Combat X",thumbnail:"acx.jpg"},{track:se,name:"Briefing 1",album:"Ace Combat Zero: The Belkan War",thumbnail:"acz.jpg"},{track:ne,name:"Hangar",album:"Ace Combat Zero: The Belkan War",thumbnail:"acz.jpg"},{track:ie,name:"Sortie 1",album:"Ace Combat Zero: The Belkan War",thumbnail:"acz.jpg"},{track:le,name:"Sortie 3",album:"Ace Combat 6: Fires of Liberation",thumbnail:"ac6.png"},{track:re,name:"Menu 2",album:"Ace Combat 6: Fires of Liberation",thumbnail:"ac6.png"}],F=0;!function(e){for(var t,a=e.length;0!==a;){t=Math.floor(Math.random()*a),a--;var c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}}(R);var P=new Audio(R[F].track);P.volume=.4,Object(c.useEffect)((function(){w(R[F].name),h(R[F].album),N(R[F].thumbnail),document.addEventListener("keydown",B),P.addEventListener("ended",D),I(!0)}),[t]);var B=function(e){118===e.keyCode?(e.preventDefault(),H()):119===e.keyCode?(e.preventDefault(),U()):120===e.keyCode&&(e.preventDefault(),D())},U=function(){(t=!t)?P.play():P.pause(),o(t),console.log(t)},H=function(){P.pause(),F>0?F-=1:0===F&&(F=19),w(R[F].name),h(R[F].album),N(R[F].thumbnail),P.src=R[F].track,P.play()},D=function(){P.pause(),F<20?F+=1:20===F&&(F=0),w(R[F].name),h(R[F].album),N(R[F].thumbnail),P.src=R[F].track,P.play()},G=function(){S(!A)};return Object(d.jsxs)("div",{className:"music-player ".concat(T?"":"tw-hidden"),onKeyPress:B,children:[Object(d.jsx)("span",{className:"music-player-icon tw-text-2xl ".concat(A?"tw-hidden":""),onClick:function(){return G()},onMouseEnter:s,children:Object(d.jsx)(L.c,{})}),Object(d.jsxs)("div",{className:"music-player-track tw-flex tw-flex-row tw-items-center tw-px-3 tw-py-1 ".concat(A?"":"tw-hidden"),children:[Object(d.jsx)("div",{className:"tw-px-2",children:Object(d.jsx)("img",{src:""+"/albumart/".concat(y),alt:"thumbnail",height:"56",width:"56"})}),Object(d.jsxs)("div",{className:"tw-flex tw-flex-col tw-px-2",children:[Object(d.jsx)("h6",{className:"".concat(r?"":"tw-hidden"),children:"Now Playing:"}),Object(d.jsx)("h6",{className:"".concat(r?"tw-hidden":""),children:"Paused:"}),Object(d.jsx)("h3",{children:x}),Object(d.jsx)("h5",{children:p})]}),Object(d.jsx)("div",{className:"tw-px-2",children:Object(d.jsx)("span",{className:"music-player-icon tw-text-2xl",onClick:G,onMouseEnter:s,children:Object(d.jsx)(L.b,{})})})]})]})},be=a.p+"static/media/load_complete.65de8f15.mp3",je=a.p+"static/media/select_load.3752672e.mp3",me=a(53),de=(a(73),a.p+"static/media/changelog.55244c32.md"),ue=a(88),xe=a(58),we=a.p+"static/media/log.3c95a0cb.svg",fe=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){fetch(de).then((function(e){return e.text()})).then((function(e){return s(e)}))})),Object(d.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-justify-center",children:Object(d.jsxs)("div",{className:"changelog-container tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(d.jsx)(g,{secondLevel:"Changelog",iconSrc:we}),Object(d.jsx)("div",{className:"changelog-container",children:Object(d.jsx)(ue.a,{children:a,remarkPlugins:[xe.a]})})]})})};var Oe=function(){var e=Object(b.a)(be,{volume:1}),t=Object(l.a)(e,1)[0],a=Object(b.a)(je,{volume:1}),s=Object(l.a)(a,1)[0],n=Object(c.useState)(!1),i=Object(l.a)(n,1)[0];return Object(c.useEffect)((function(){"/"!==window.location.pathname&&window.location.replace("/"),new Promise((function(e){return setTimeout(e,1e3)})).then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(s(),e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))})),Object(d.jsxs)(r.a,{children:[Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{id:"modal-begin",className:"tw-w-screen tw-h-screen tw-absolute tw-flex tw-flex-col tw-p-4",children:Object(d.jsx)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:Object(d.jsx)("p",{className:"tw-text-2xl tw-text-center",onClick:function(e){var a=document.getElementById("modal-begin");if(function(){var e=JSON.parse(localStorage.getItem("font")),t=document.getElementsByTagName("body")[0];if(e)switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04"}else t.style.fontFamily="AC7-Regular"}(),a){a.classList.add("available"),a.outerHTML="";var c=new Event("keydown");c.which=119,c.keyCode=119,document.dispatchEvent(c);var s=document.documentElement;s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen(),t()}},children:"Click Here to begin"})})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/pilots",element:Object(d.jsx)(B,{})}),Object(d.jsx)(o.a,{path:"/settings",element:Object(d.jsx)(H,{})}),Object(d.jsx)(o.a,{path:"/about",element:Object(d.jsx)(G,{})}),Object(d.jsx)(o.a,{path:"/changelog",element:Object(d.jsx)(fe,{})})]})]}),Object(d.jsx)(me.a,{type:"cobweb",color:"#A0A0A0",config:{num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"fixed",color:["random","#AAA"],cross:"dead",random:15},bg:{width:"100%",height:"100%",position:"fixed",zIndex:-1,top:"0px",left:"0px"}}),Object(d.jsx)(oe,{musicState:i})]})},pe=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,90)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(Oe,{})}),document.getElementById("root")),pe()}},[[76,1,2]]]);
//# sourceMappingURL=main.e6f6e0f9.chunk.js.map