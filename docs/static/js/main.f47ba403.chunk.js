(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.categories,n=e.setCategories,a=Object(r.useState)(""),c=Object(i.a)(a,2),o=c[0],j=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.trim().length>2&&!t.find((function(e){return e===o}))?(n((function(e){return[o.trim()].concat(Object(s.a)(e))})),j("")):console.warn("ingresaste menos de 2 caracteres o repetiste alguno de las series ya existentes")},children:Object(u.jsx)("input",{type:"text",placeholder:"ingrese una serie",value:o,onChange:function(e){j(e.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=3ud8sAhry8JKjmbAiYYCeRZvRuC8Gks4&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__bounceIn",children:[" ",t," "]}),c?Object(u.jsx)("p",{children:"Cargando..."}):Object(u.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(r.useState)(["one punch"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{categories:n,setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(m,{category:e},e)}))})]})};n(17),n(18);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f47ba403.chunk.js.map