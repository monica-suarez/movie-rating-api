(this["webpackJsonpmovie-rating-api"]=this["webpackJsonpmovie-rating-api"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n(18),o=n.n(a),r=(n(26),n(27),n(2)),s=n(8),l=function(e,t){return Object(c.jsxs)("form",{onSubmit:e.handleClick,children:[Object(c.jsx)("label",{id:"searchinput",children:"Find a Movie:"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:e.handleUpdate,type:"text",name:"searchinput",placeholder:"Enter A Movie Title",searchinput:t}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Submit"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})},j=n(9),u=function(e){return Object(c.jsx)("ul",{className:"result-list",children:e.movies.map((function(e,t){return console.log(e),Object(c.jsx)("li",{className:"result-list-item",children:Object(c.jsx)(j.b,{to:{pathname:"/movieDetails/".concat(e.id),movieProp:e},children:e.title})},t)}))})},b=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)([]),r=Object(s.a)(o,2),j=r[0],b=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Search/Rate Movies"}),Object(c.jsx)(l,{handleClick:function(e){e.preventDefault(),console.log("onClick AHOY");fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("0e3840abe7f2df706a9d63d319623673","&language=en-US&query=").concat(n,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){b(e.results)})),console.log(b)},handleUpdate:function(e){a(e.target.value)}}),Object(c.jsx)("ul",{children:Object(c.jsx)(u,{movies:j})})]})},d=n(15),h=n.n(d),p=n(20),O=function(e){var t=Object(i.useState)([]),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)([]),l=Object(s.a)(r,2),j=l[0],u=l[1],b=e.match.params.id;console.log(b),console.log(e.location.movieProp.original_title);var d=e.location.movieProp.original_title,O=function(){var t=Object(p.a)(h.a.mark((function t(){var n,c,i,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.match.params.id,console.log(n),"0e3840abe7f2df706a9d63d319623673",t.next=6,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat("0e3840abe7f2df706a9d63d319623673","&language=en-US"));case 6:return c=t.sent,t.next=9,c.json();case 9:i=t.sent,console.log(i.crew),o(i),a=i.crew.filter((function(e){return"Director"===e.job})),u(a[0].name),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){O()}),[]),Object(c.jsxs)("div",{moviedetails:a,children:[Object(c.jsx)("p",{children:d}),Object(c.jsx)("p",{children:b}),Object(c.jsx)("p",{children:j})]})},f=function(){return Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(r.a,{path:"/movieDetails/:id",component:O})]})};var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};n(34).config(),o.a.render(Object(c.jsx)(j.a,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),x()}},[[37,1,2]]]);
//# sourceMappingURL=main.d7df6aa6.chunk.js.map