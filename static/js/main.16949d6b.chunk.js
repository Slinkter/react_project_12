(this.webpackJsonpreact_project_12=this.webpackJsonpreact_project_12||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),u=n.n(r),o=(n(13),n(1)),l=c.a.createContext(null),i=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useContext)(l);return c.a.createElement("div",{className:"Header"},c.a.createElement("h1",{style:{color:u}},"ReactHooks"),c.a.createElement("button",{type:"button",onClick:function(){r(!n)}},n?"Dark Mode":"Light Mode"),c.a.createElement("button",{type:"button",onClick:function(){return r(!n)}},n?"Dark Mode 2":"Light Mode 2"))},s=n(7),m=n(4),f=function(e){var t=e.search,n=e.searchInput,a=e.handleSearch;return c.a.createElement("div",{className:"Search"},c.a.createElement("input",{type:"text",value:t,ref:n,onChange:a}))},p=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[e]),c},b={favorites:[]},h=function(e,t){switch(t.type){case"ADD_TO_FAVORITE":return Object(m.a)(Object(m.a)({},e),{},{favorites:[].concat(Object(s.a)(e.favorites),[t.payload])});default:return e}},d=function(){var e=Object(a.useReducer)(h,b),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),i=l[0],s=l[1],m=Object(a.useRef)(null),d=p("https://rickandmortyapi.com/api/character/"),E=Object(a.useCallback)((function(){s(m.current.value)}),[]),O=Object(a.useMemo)((function(){return d.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))}),[d,i]);return c.a.createElement("div",{className:"Characters"},n.favorites.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})),c.a.createElement(f,{search:i,searchInput:m,handleSearch:E}),O.map((function(e){return c.a.createElement("div",{className:"item",key:e.id},c.a.createElement("h2",null,e.name),c.a.createElement("button",{type:"button",onClick:function(){r({type:"ADD_TO_FAVORITE",payload:e})}},"Agregar a Favoritos"))})))};n(14);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(d,null),c.a.createElement("h1",null,"Hola Mundo"))};u.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.16949d6b.chunk.js.map