(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{32:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i(0),n=i.n(c),s=i(18),r=i.n(s),o="66b4b207972af13e9722f237764e36a0",d=i(14),l=i.n(d),j=i(19),b=i(11),h=function(e){var t=Object(c.useState)(),i=Object(b.a)(t,2),a=i[0],n=i[1];return Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function t(){var i,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return i=t.sent,t.next=5,i.json();case 5:a=t.sent,c=a.results,n(c);case 8:case"end":return t.stop()}}),t)})))()}),[e]),a},p=i(10),m=i(2),v=i(7),x={hidden:{y:100,opacity:0},visible:{y:0,opacity:1}},u=function(e){var t=e.movies,i=Object(c.useState)(null),n=Object(b.a)(i,2),s=n[0],r=n[1],o=Object(m.f)().id;return Object(c.useEffect)((function(){t&&r(t.find((function(e){return e.id==o})))}),[o,t]),s?Object(a.jsx)("div",{className:"backdrop",children:Object(a.jsxs)(v.b.div,{variants:x,initial:"hidden",animate:"visible",className:"movie__card",children:[Object(a.jsxs)(v.b.div,{initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.5},className:"movie__title-section",children:[Object(a.jsx)("h1",{children:s.title}),Object(a.jsx)("div",{className:"release-date",children:new Date(s.release_date).toLocaleDateString()})]}),Object(a.jsxs)("div",{className:"movie__description",children:[Object(a.jsx)(v.b.p,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.7},children:s.overview}),Object(a.jsx)(v.b.img,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{delay:1},className:"movie__poster",src:"https://image.tmdb.org/t/p/w200".concat(s.poster_path),alt:"",srcset:""})]})]})}):null},O={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},f={hidden:{opacity:0,y:50},whileHover:{scale:1.2},show:{opacity:1,y:0}},y=function(e){var t=e.movies;return Object(a.jsxs)("main",{children:[Object(a.jsx)("h1",{children:"Movies"}),Object(a.jsx)(v.b.section,{variants:O,initial:"hidden",animate:"show",className:"grid",children:t&&t.map((function(e){var t=e.id,i=(e.title,e.poster_path);return Object(a.jsx)(v.b.div,{whileHover:{scale:1.1},variants:f,className:"card",children:Object(a.jsx)(p.b,{className:"link",to:"movies/".concat(t),children:Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(i),alt:""})})})}))})]})};i(32);var w=function(){var e=h("https://api.themoviedb.org/3/movie/popular?api_key=".concat(o));return Object(a.jsx)(p.a,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/",children:Object(a.jsx)(v.a,{exitBeforeEnter:!0,children:Object(a.jsx)(y,{movies:e})})}),Object(a.jsx)(m.a,{path:"/movies/:id",children:Object(a.jsx)(v.a,{exitBeforeEnter:!0,children:Object(a.jsx)(u,{movies:e})})})]})})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7ae40c4e.chunk.js.map