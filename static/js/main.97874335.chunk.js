(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),i=s(20),n=s.n(i),l=(s(27),s(3)),r=s(12),o=s(5),j=(s(28),s(8)),b=s.p+"static/media/navigate.890aefd2.mp3",d=s.p+"static/media/select.34cfe8c1.mp3",x=s(1),m=function(e){var t=e.keyName,s=e.description;return Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(x.jsx)("div",{className:"keycap-box tw-flex tw-justify-center",children:Object(x.jsxs)("span",{children:[t,"\xa0"]})}),Object(x.jsx)("span",{className:"tw-text-xl tw-pl-2 tw-pr-6",children:s})]})},u=function(){var e=Object(j.a)(b,{volume:1}),t=Object(l.a)(e,1)[0],s=Object(j.a)(d,{volume:1}),a=Object(l.a)(s,1)[0],i=Object(c.useState)("Fullscreen mode will give you a better experience");Object(l.a)(i,1)[0];Object(c.useEffect)((function(){document.title="Ace Combat 7 PSM Multiplayer Ranking"}));return Object(x.jsx)("div",{className:"tw-h-screen tw-w-screen tw-flex tw-flex-row tw-justify-center",children:Object(x.jsxs)("div",{className:"main-home-page-container tw-flex tw-flex-col tw-w-9/12 tw-p-4",children:[Object(x.jsx)("h1",{className:"tw-text-3xl lg:tw-text-5xl tw-py-20",children:"Ace Combat 7 PSM Multiplayer Ranking"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(x.jsx)(r.b,{to:"/pilots",onMouseEnter:t,onClick:a,children:"Pilots"})}),Object(x.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(x.jsx)(r.b,{to:"/settings",onMouseEnter:t,onClick:a,children:"Settings"})}),Object(x.jsx)("li",{className:"tw-text-2xl inactive-list-item",children:Object(x.jsx)(r.b,{to:"/about",onMouseEnter:t,onClick:a,children:"About"})})]}),Object(x.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(x.jsx)("div",{className:"tw-flex tw-flex-row tw-justify-end tw-py-16",children:Object(x.jsxs)("p",{className:"tw-text-xl tw-text-right",children:["Fullscreen mode will give you a better experience.",Object(x.jsx)("br",{}),"Close fullscreen to exit."]})}),Object(x.jsxs)("div",{className:"sm:tw-flex tw-flex-row tw-hidden",children:[Object(x.jsx)(m,{keyName:"F11",description:"Fullscreen"}),Object(x.jsx)(m,{keyName:"F7",description:"Previous Song"}),Object(x.jsx)(m,{keyName:"F8",description:"Play/Pause BGM",onClick:function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"F8"}))}}),Object(x.jsx)(m,{keyName:"F9",description:"Next Song"})]})]})})},f=s(4),w=s(11),O=s.n(w),p=s(17),h=s.p+"static/media/cancel.454edab0.mp3",v=function(e){var t,s,c=e.iconSrc,a=e.secondLevel,i=e.thirdLevel;a&&(t=Object(x.jsxs)("p",{className:"tw-text-sm",children:["> > ",a]})),i&&(s=Object(x.jsxs)("p",{className:"tw-text-sm",children:["> > > ",i]}));var n=Object(j.a)(h,{volume:1}),o=Object(l.a)(n,1)[0];return Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-8",children:[Object(x.jsx)("div",{className:"breadcumb-logo",children:Object(x.jsx)("img",{src:c,height:"59",width:"59",alt:"ico"})}),Object(x.jsxs)("div",{className:"tw-flex-column tw-px-8",children:[Object(x.jsx)("p",{className:"tw-text-sm",children:Object(x.jsxs)(r.b,{to:"/",onClick:o,children:[Object(x.jsx)("span",{className:"lg:tw-hidden tw-block",children:"> AC7 PSM MP Ranking"}),Object(x.jsx)("span",{className:"tw-hidden lg:tw-block",children:"> Ace Combat 7 PSM Multiplayer Ranking"})]})}),t,s]})]})},g=function(e){var t=e.text;return Object(x.jsx)("label",{className:"tw-text-sm",children:t})},y=function(e){var t=e.text;return Object(x.jsx)("h3",{className:"tw-text-2xl md:tw-text-3xl tw-pb-3",children:t})},N=s(7),C=s(16);N.e.register(N.p,N.m,N.j,N.g,N.s,N.h,N.d,N.k,N.b,N.r);var A=function(e){var t=e.statistics,s=e.average,a=Object(c.useState)({labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{data:[0,0,0,0,0]}]}),i=Object(l.a)(a,2),n=i[0],r=i[1],o=Object(c.useState)({labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{data:[0,0,0,0]}]}),j=Object(l.a)(o,2),b=j[0],d=j[1],m=Object(c.useState)({labels:["","ACCURACY","USE RATE"],datasets:[{data:[0,0,0]}]}),u=Object(l.a)(m,2),f=u[0],w=u[1];Object(c.useEffect)((function(){if(t){var e="";e=s>97?"rgba(0, 176, 240, 0.5)":97>=s&&s>80?"rgba(0, 176, 80, 0.5)":80>=s&&s>60?"rgba(146, 208, 80, 0.5)":60>=s&&s>40?"rgba(255, 192, 0, 0.5)":40>=s?"rgba(255, 0, 0, 0.5)":"rgba(0, 0, 0, 0.5)";var c={labels:["BOOST","DRIFT","CONSISTENCY","BACKWARD FLYING","STRATEGY"],datasets:[{label:"",data:[t.boost,t.drift,t.consistency,t.bkf,t.strategy],backgroundColor:e,fill:!0,borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,pointBackgroundColor:"rgb(0, 176, 240)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(0, 176, 240)",pointRadius:3}]},a={labels:["","ACCURACY","CURVING","LOOPING"],datasets:[{label:"",data:[100,t.mslAcc,t.mslCurving,t.mslLooping],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mslAcc),O(t.mslCurving),O(t.mslLooping)]}]},i={labels:["","ACCURACY","USE RATE"],datasets:[{label:"",data:[100,t.mgAcc,t.mgRate],backgroundColor:["rgba(0, 0, 0, 0.0)",O(t.mgAcc),O(t.mgRate)]}]};r(c),d(a),w(i)}}),[t,s]);var O=function(e){return e>97?"rgba(0, 176, 240, 0.6)":97>=e&&e>80?"rgba(0, 176, 80, 0.6)":80>=e&&e>60?"rgba(146, 208, 80, 0.6)":60>=e&&e>40?"rgba(255, 192, 0, 0.6)":40>=e?"rgba(255, 0, 0, 0.6)":"rgba(0, 0, 0, 0.6)"},p={y:{stacked:!0,beginAtZero:!0,grid:{color:"gray",offset:!0},pointLabels:{color:"white"},suggestedMin:0,min:0,suggestedMax:10,max:10,ticks:{stepSize:1,color:"white"}}},h={display:!1},v={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:h,title:{display:!0,text:"MISSILE CONTROL",color:"white"}}},g={indexAxis:"y",mantainAspectRatio:false,scales:p,responsive:true,plugins:{legend:h,title:{display:!0,text:"MACHINE GUN CONTROL",color:"white"}}};return Object(x.jsxs)("div",{className:"tw-flex lg:tw-flex-row tw-flex-col tw-justify-center",children:[Object(x.jsxs)("div",{className:"bar-container",children:[Object(x.jsx)(C.a,{options:v,data:b}),Object(x.jsx)("div",{className:"tw-my-4"}),Object(x.jsx)(C.a,{options:g,data:f})]}),Object(x.jsx)("div",{className:"radar-container tw-pl-2",children:Object(x.jsx)(C.b,{data:n,options:{title:{display:!0},scales:{r:{angleLines:{display:!0,color:"gray"},grid:{color:"gray"},pointLabels:{color:"white"},suggestedMin:0,suggestedMax:100,ticks:{showLabelBackdrop:!1,stepSize:20}}},elements:{line:{borderWidth:3}},plugins:{title:{display:!0,text:"MANEOUVERS",color:"white"},legend:{display:!1}}}})})]})},S=s(21),k=function(e){var t=e.player,s=Object(c.useState)("--"),a=Object(l.a)(s,2),i=a[0],n=a[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),j=o[0],b=o[1],d=Object(c.useState)(null),m=Object(l.a)(d,2),u=m[0],f=m[1],w=Object(c.useState)("--"),O=Object(l.a)(w,2),p=O[0],h=O[1];Object(c.useEffect)((function(){if(t.statistics){var e="--",s=v(t.statistics.mslAcc,t.statistics.mslCurving,t.statistics.mslLooping,t.statistics.mgAcc,t.statistics.mgRate,t.statistics.boost,t.statistics.consistency,t.statistics.strategy,t.statistics.drift,t.statistics.bkf);e=s>97?"SS":97>=s&&s>92?"S1":92>=s&&s>86?"S2":86>=s&&s>80?"S3":80>=s&&s>74?"A1":74>=s&&s>67?"A2":67>=s&&s>60?"A3":60>=s&&s>54?"B1":54>=s&&s>47?"B2":47>=s&&s>40?"B3":40>=s?"C":"ER",n(s.toFixed(1)),h(e)}t.country&&(b(Object(x.jsx)(S.a,{countryCode:t.country.code,style:{fontSize:"2em"},"aria-label":t.country.name})),f(Object(x.jsx)(y,{text:t.country.name})))}),[t]);var v=function(e,t,s,c,a,i,n,l,r,o){return 100*(.2*i+.2*n+.15*(.7*e+.2*t+.1*s)+.15*l+.15*(.85*c+.15*a)+.1*r+.05*o)/100};return Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-overflow-auto lg:tw-overflow-visible tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:[Object(x.jsxs)("div",{className:"pilot-data tw-flex md:tw-flex-row tw-flex-col",children:[Object(x.jsx)("div",{className:"pilot-picture tw-pb-2",children:Object(x.jsx)("img",{src:""+"".concat(t.picture),alt:"profile",width:"453",height:"255"})}),Object(x.jsxs)("div",{className:"md:tw-pl-4 tw-flex-grow",children:[Object(x.jsx)(g,{text:"[NAME]"}),Object(x.jsx)(y,{text:t.name}),Object(x.jsx)(g,{text:"[CALLSIGN]"}),Object(x.jsx)(y,{text:t.callsign}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(x.jsxs)("div",{className:"tw-flex-grow",children:[Object(x.jsx)(g,{text:"[MAIN PLANE]"}),Object(x.jsx)(y,{text:t.mainPlane})]}),Object(x.jsxs)("div",{className:"tw-flex-grow",children:[Object(x.jsx)(g,{text:"[MAIN SPECIAL WEAPON]"}),Object(x.jsx)(y,{text:t.mainSpW})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{text:"[COUNTRY]"}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-row",children:[Object(x.jsx)("div",{className:"tw-pt-2 tw-pr-2",children:j}),u]})]})]})]}),Object(x.jsxs)("div",{className:"tw-pb-4",children:[Object(x.jsx)(g,{text:"[UNIT]"}),Object(x.jsx)(y,{text:t.unit})]}),Object(x.jsxs)("div",{className:"pilot-data tw-flex xl:tw-flex-row tw-flex-col",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{text:"[AVERAGE:".concat(i,"]")}),Object(x.jsxs)("h1",{className:"tw-text-4xl md:tw-text-5xl tw-pb-6",children:["RANK ",p]})]}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-flex-grow xl:tw-pl-8",children:[Object(x.jsx)("div",{children:Object(x.jsx)("label",{children:"[STATISTICS]"})}),Object(x.jsx)(A,{statistics:t.statistics,average:i})]})]})]})},E=(s(31),function(e){var t=e.player,s=e.onSelect,c=Object(j.a)(b,{volume:1}),a=Object(l.a)(c,1)[0];return Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-py-1 tw-items-center",children:[Object(x.jsx)("div",{className:"".concat(t.selected?"active-caret":"inactive-caret")}),Object(x.jsx)("div",{className:"player-list-item-name tw-pl-4",onClick:function(){return s(t)},onMouseEnter:a,children:Object(x.jsx)("p",{className:"tw-text-2xl ".concat(t.selected?"active-player-list-item":"inactive-player-list-item"),children:t.name})})]})}),M=function(e){var t=e.selectFilter,s=e.filter,c=Object(j.a)(b,{volume:1}),a=Object(l.a)(c,1)[0],i=Object(j.a)(d,{volume:1}),n=Object(l.a)(i,1)[0],r=function(e){t(e),n()};return Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-justify-around tw-py-2",children:[Object(x.jsx)("div",{onClick:function(){return r("all")},className:"player-list-item-name ".concat("all"===s?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"ALL"}),Object(x.jsx)("div",{onClick:function(){return r("PC")},className:"player-list-item-name ".concat("PC"===s?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"STEAM"}),Object(x.jsx)("div",{onClick:function(){return r("PSN")},className:"player-list-item-name ".concat("PSN"===s?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"PSN"}),Object(x.jsx)("div",{onClick:function(){return r("XBOX")},className:"player-list-item-name ".concat("XBOX"===s?"active-player-list-item":"inactive-player-list-item"),onMouseEnter:a,children:"XBOX"})]})},R=function(e){var t=e.vctPlayers,s=e.onSelectPilot;e.showForMobile;Object(c.useEffect)((function(){t&&t.length>0&&m("all")}),[t]);var a=Object(c.useState)(t),i=Object(l.a)(a,2),n=i[0],r=i[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),b=j[0],d=j[1],m=function(e){if(d(e),t){var s=[];if("all"===e)s=t.slice();else{var c,a=Object(f.a)(t);try{for(a.s();!(c=a.n()).done;){var i=c.value;i.platforms.indexOf(e)>-1&&s.push(i)}}catch(n){a.e(n)}finally{a.f()}}r(s)}};return Object(x.jsxs)("div",{className:"pilot-list-container tw-flex tw-flex-col tw-flex-grow tw-px-4 tw-py-32 tw-h-screen",children:[Object(x.jsx)(M,{selectFilter:m,filter:b}),Object(x.jsx)("div",{className:"tw-overflow-visible tw-overflow-y-auto tw-scrollbar-thin tw-scrollbar-thumb-blue-700 tw-scrollbar-track-blue-300",children:n.map((function(e){return Object(x.jsx)(E,{player:e,onSelect:s},e.id)}))})]})},T=function(e){var t=e.onMouseEnterAction,s=e.onClickAction;return Object(x.jsx)("div",{className:"tw-flex tw-flex-row",children:Object(x.jsx)("p",{className:"inactive-player-list-item tw-text-base",onMouseEnter:t,onClick:s,children:"[INFORMATION]"})})},I=s.p+"static/media/pilot.2b4c3f80.svg",L=s(19),F=function(){Object(c.useEffect)((function(){document.title="Pilots - AC7 PSM MP Ranking"}));var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)([]),n=Object(l.a)(i,2),r=n[0],o=n[1],m=Object(c.useState)(!1),u=Object(l.a)(m,2),w=u[0],g=u[1],y=Object(c.useState)(""),N=Object(l.a)(y,2),C=N[0],A=N[1];Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(c.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>1024&&g(!1)}))}));var S=function(){var e=Object(p.a)(O.a.mark((function e(t){var s,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/database/"+t+".json",e.next=3,fetch(s);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(O.a.mark((function e(){var t,s,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/database/pilotList.json",e.next=3,fetch("/database/pilotList.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return s=e.sent,(c=s.pilots?s.pilots:s).sort((function(e,t){var s=e.name.toUpperCase(),c=t.name.toUpperCase();return s<c?-1:s>c?1:0})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=Object(j.a)(d,{volume:1}),F=Object(l.a)(M,1)[0],P=Object(j.a)(b,{volume:1}),B=Object(l.a)(P,1)[0],U=Object(j.a)(h,{volume:1}),G=Object(l.a)(U,1)[0],H=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,i,n,l,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.id);case 2:c=e.sent,t.selected=!0,i=s,n=Object(f.a)(i);try{for(n.s();!(l=n.n()).done;)(r=l.value).id===t.id?r.selected=!0:r.selected=!1}catch(j){n.e(j)}finally{n.f()}a(i),o(c),g(!1),A(t.name),F();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){g(!w),console.log(w)};return Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:[Object(x.jsx)("div",{id:"modal-information",className:"tw-absolute tw-flex tw-flex-col lg:tw-p-4 tw-overflow-auto",children:Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-my-auto tw-justify-center tw-p-8 tw-h-auto",children:[Object(x.jsxs)("p",{className:"tw-text-3xl lg:tw-text-4xl",children:["Ranking and Status information:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-col lg:tw-flex-row",children:[Object(x.jsx)("div",{className:"tw-flex tw-flex-col lg:tw-w-8/12 lg:tw-pr-10 tw-items-end",children:Object(x.jsxs)("p",{className:"tw-text-base lg:tw-text-lg tw-text-justify",children:[Object(x.jsx)("span",{className:"tw-text-2xl",children:"Strategy"})," - The ability of a pilot to use critical decision making, adaptive styles, disciplined maneuvering sequences, and energy fighting to maximize their efficiency in a dogfight",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"tw-text-2xl",children:"Boost"})," - The skill to control the second phase or psm called the boost (grip) phase  to gain angles in a dogfight",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"tw-text-2xl",children:"Drift"})," - The ability to use the first phase of psm (drifting) to create angles for the boost phase or use as a transition to other psm sequences",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"tw-text-2xl",children:"Backward Flying"})," - The skillset of inducing backwards flight with rechained psms to create angles for attack and defense in a psm fights",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"tw-text-2xl",children:"Consistency"})," - being able to use all your skills and strategies to achieve positive results against opponents throughout a session of dogfights. It is also the ability to force your flying style and strategy to work outside of ones comfort zone. This can be fighting across different platforms, different rules, and against unfamiliar flying styles"]})}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-col lg:tw-w-4/12 tw-justify-end tw-items-end",children:[Object(x.jsxs)("p",{className:"tw-text-lg tw-text-right",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"The ranking system is measured with points from 0 to 100 ",Object(x.jsx)("br",{}),"Following the next determination:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"SS - from 100 to 98"}),Object(x.jsx)("li",{children:"S  - from 98 to 80"}),Object(x.jsx)("li",{children:"A  - from 80 to 60"}),Object(x.jsx)("li",{children:"B  - from 60 to 40"}),Object(x.jsx)("li",{children:"C  - from 40 to 0"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})]}),Object(x.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}),Object(x.jsx)("span",{className:"tw-text-lg",onClick:function(){document.getElementById("modal-information").style.display="none",G()},children:"[OK]"})]})}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-col 2xl:tw-w-3/5 lg:tw-w-9/12 tw-w-screen tw-p-4",children:[Object(x.jsxs)("div",{className:"tw-flex tw-flex-row tw-items-center",children:[Object(x.jsx)(v,{secondLevel:"Pilots",thirdLevel:C,iconSrc:I}),Object(x.jsx)("span",{className:"tw-flex tw-mx-auto"}),Object(x.jsx)("span",{className:"tw-text-xl lg:tw-hidden",onClick:D,children:Object(x.jsx)(L.a,{})})]}),Object(x.jsx)(k,{player:r}),Object(x.jsx)("div",{className:"tw-flex tw-my-auto"}),Object(x.jsx)(T,{onMouseEnterAction:B,onClickAction:function(){document.getElementById("modal-information").style.display="block",F()}})]}),Object(x.jsxs)("div",{className:"2xl:tw-w-1/5 lg:tw-w-3/12 tw-w-screen ".concat(w?"tw-flex tw-fixed":"lg:tw-flex tw-hidden"),children:[Object(x.jsx)("div",{className:"tw-w-screen tw-p-4 tw-flex tw-justify-end ".concat(w?"tw-absolute":"lg:tw-hidden"),children:Object(x.jsx)("span",{className:"tw-text-xl",onClick:D,children:Object(x.jsx)(L.b,{})})}),Object(x.jsx)(R,{vctPlayers:s,onSelectPilot:H})]})]})},P=(s(32),s.p+"static/media/cog.765fcc82.svg"),B=function(){var e=Object(c.useState)("7"),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(j.a)(b,{volume:1}),n=Object(l.a)(i,1)[0],r=Object(j.a)(d,{volume:1}),o=Object(l.a)(r,1)[0];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("font"));e&&a(e)}));var m=function(e){var t=document.getElementsByTagName("body")[0];switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04"}localStorage.setItem("font",JSON.stringify(e)),a(e),o()};return Object(x.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-3/5 tw-p-4",children:[Object(x.jsx)(v,{secondLevel:"Settings",iconSrc:P}),Object(x.jsxs)("p",{className:"tw-text-2xl tw-text-left",children:["Plaform Font:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{className:"tw-text-2xl ac7-font-item ac7-font-item ".concat("7"===s?"active-list-item":"inactive-list-item"),onClick:function(){return m("7")},onMouseEnter:n,children:"> Ace Combat 7 - Skies Unknown"}),Object(x.jsx)("li",{className:"tw-text-2xl ac7-font-item ac6-font-item ".concat("6"===s?"active-list-item":"inactive-list-item"),onClick:function(){return m("6")},onMouseEnter:n,children:"> Ace Combat 6 - Fires of Liberation (OCR-A Regular)"}),Object(x.jsx)("li",{className:"tw-text-2xl ac7-font-item ac4-font-item ".concat("4"===s?"active-list-item":"inactive-list-item"),onClick:function(){return m("4")},onMouseEnter:n,children:"> Ace Combat 4 - Shattered Skies"})]})]})})},U=s.p+"static/media/about-icon.fedacfe8.svg",G=function(){return Object(c.useEffect)((function(){document.title="About - AC7 PSM MP Ranking"})),Object(x.jsx)("div",{className:"tw-flex tw-flex-row tw-h-screen tw-w-screen tw-justify-center",children:Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-w-8/12 tw-p-4",children:[Object(x.jsx)(v,{secondLevel:"About",iconSrc:U}),Object(x.jsxs)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:[Object(x.jsxs)("p",{className:"tw-text-2xl tw-text-center",children:["MOTIVATION ",Object(x.jsx)("br",{}),"Giquo was bored and decided to learn how to program with ReactJS.",Object(x.jsx)("br",{}),"Thank you, I hope you enjoy. ",Object(x.jsx)("br",{}),"God bless you."]}),Object(x.jsxs)("p",{className:"tw-pt-12 tw-text-2xl tw-text-center",children:["DISCLAIMER: ",Object(x.jsx)("br",{}),"The rank and statistics determination was made based on fighting ",Object(x.jsx)("br",{}),"experiences from me and other people in the community. ",Object(x.jsx)("br",{}),"Is not the purpose to upset anybody, but to keep the fun and competitivity."]}),Object(x.jsxs)("p",{className:"tw-pt-12 tw-text-lg tw-text-center",children:["THANKS: ",Object(x.jsx)("br",{}),"John Smith, Fluffy Marsmallows, Talisman, Syncs, Darkskryll ",Object(x.jsx)("br",{}),"I'm grateful for your feedback to make this the most great ",Object(x.jsx)("br",{}),"User experience possible (and surprise) for everybody.",Object(x.jsx)("br",{}),":)"]})]})]})})},H=s.p+"static/media/AC2-Hanger.6dd52828.mp3",D=s.p+"static/media/AC2-Invoke.6aaaa6a9.mp3",Y=s.p+"static/media/AC2-Lode Stone.2c6f40a5.mp3",q=s.p+"static/media/AC3-briefing.99f44a3c.mp3",z=s.p+"static/media/AC3-linkage.8c4c59af.mp3",J=s.p+"static/media/AC4-Scramble.dab83b58.mp3",K=s.p+"static/media/AC4-The Hangar.5e43c1fe.mp3",W=s.p+"static/media/AC5-Hangar1.14acf584.mp3",X=s.p+"static/media/AC5-menu.aba952fc.mp3",V=s.p+"static/media/AC5-Tutorial Main.3f5ca6cb.mp3",Z=s.p+"static/media/AC6-menu.12ffa573.mp3",_=s.p+"static/media/AC7-444th-Base.93df04ec.mp3",Q=s.p+"static/media/ACAH-hangar2.90bd293c.mp3",$=s.p+"static/media/ACAH-refrain.c095446c.mp3",ee=s.p+"static/media/ACX-aircraft_select.aea90cff.mp3",te=s.p+"static/media/ACZ-Briefing1.8c3c64cb.mp3",se=s.p+"static/media/ACZ-Hangar.6f496d41.mp3",ce=s.p+"static/media/ACZ-Sortie1.83b84d0d.mp3",ae=s.p+"static/media/AC6-Sortie3.f6e4f07b.mp3",ie=s.p+"static/media/AC6-menu2.7b9a30da.mp3",ne=function(e){var t=e.musicState,s=[H,D,Y,q,z,J,K,W,X,V,Z,_,Q,$,ee,te,se,ce,ae,ie],a=0;!function(e){for(var t,s=e.length;0!==s;){t=Math.floor(Math.random()*s),s--;var c=[e[t],e[s]];e[s]=c[0],e[t]=c[1]}}(s);var i=new Audio(s[0]);i.volume=.4,Object(c.useEffect)((function(){document.addEventListener("keydown",n),i.addEventListener("ended",o)}),[t]);var n=function(e){118===e.keyCode?(e.preventDefault(),r()):119===e.keyCode?(e.preventDefault(),l()):120===e.keyCode&&(e.preventDefault(),o())},l=function(){(t=!t)?i.play():i.pause()},r=function(){a>0?a-=1:0===a&&(a=19),i.src=s[a],i.play()},o=function(){a<20?a+=1:20===a&&(a=0),i.src=s[a],i.play()};return Object(x.jsx)("div",{onKeyPress:n})},le=s.p+"static/media/load_complete.65de8f15.mp3",re=s.p+"static/media/select_load.3752672e.mp3",oe=s(22);var je=function(){var e=Object(j.a)(le,{volume:1}),t=Object(l.a)(e,1)[0],s=Object(j.a)(re,{volume:1}),a=Object(l.a)(s,1)[0],i=Object(c.useState)(!1),n=Object(l.a)(i,1)[0];return Object(c.useEffect)((function(){"/"!==window.location.pathname&&window.location.replace("/"),new Promise((function(e){return setTimeout(e,1e3)})).then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(a(),e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))})),Object(x.jsxs)(r.a,{children:[Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{id:"modal-begin",className:"tw-w-screen tw-h-screen tw-absolute tw-flex tw-flex-col tw-p-4",children:Object(x.jsx)("div",{className:"tw-flex tw-flex-col tw-mx-auto tw-my-auto tw-justify-center",children:Object(x.jsx)("p",{className:"tw-text-2xl tw-text-center",onClick:function(e){var s=document.getElementById("modal-begin");if(function(){var e=JSON.parse(localStorage.getItem("font")),t=document.getElementsByTagName("body")[0];if(e)switch(e){case"7":t.style.fontFamily="AC7-Regular";break;case"6":t.style.fontFamily="OCR-A";break;case"4":t.style.fontFamily="ACES04"}else t.style.fontFamily="AC7-Regular"}(),s){s.classList.add("available"),s.outerHTML="";var c=new Event("keydown");c.which=119,c.keyCode=119,document.dispatchEvent(c);var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen(),t()}},children:"Click Here to begin"})})}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",element:Object(x.jsx)(u,{})}),Object(x.jsx)(o.a,{path:"/pilots",element:Object(x.jsx)(F,{})}),Object(x.jsx)(o.a,{path:"/settings",element:Object(x.jsx)(B,{})}),Object(x.jsx)(o.a,{path:"/about",element:Object(x.jsx)(G,{})})]})]}),Object(x.jsx)(oe.a,{type:"cobweb",color:"#A0A0A0",config:{num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"fixed",color:["random","#AAA"],cross:"dead",random:15},bg:{width:"100%",height:"100%",position:"fixed",zIndex:-1,top:"0px",left:"0px"}}),Object(x.jsx)(ne,{musicState:n})]})},be=function(e){e&&e instanceof Function&&s.e(4).then(s.bind(null,36)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(je,{})}),document.getElementById("root")),be()}},[[33,1,2]]]);
//# sourceMappingURL=main.97874335.chunk.js.map