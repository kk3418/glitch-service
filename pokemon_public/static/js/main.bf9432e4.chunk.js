(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/ball-icon.f3a75f76.png"},28:function(e,t,n){e.exports=n(38)},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(19),c=n(10),o=n(20),i=n(16),u=n(21),m=n(12);function s(){var e=Object(u.a)(["\n  query pokemons($first: Int!) {\n    pokemons(first: $first){\n      classification\n      id\n      name\n      image\n      maxHP\n      maxCP\n      types\n      attacks {\n        special {\n          name\n          damage\n          type\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var p=n.n(m)()(s());function f(e){var t=e.pokemon,n=e.focus,a=t.attacks.special,l=t.types.map((function(e,t){var n="1.5rem";return 0===t&&(n="0.75rem"),r.a.createElement("span",{key:e+String(t),style:{paddingLeft:n}},e)})),c=n;return r.a.createElement("div",{className:"container"},r.a.createElement("button",{id:c},t.name),r.a.createElement("p",null,"HP: ".concat(t.maxHP),r.a.createElement("span",{style:{paddingLeft:"1rem"}},"CP : ".concat(t.maxCP))),r.a.createElement("p",null,r.a.createElement("span",null,"TYPES :"),l),r.a.createElement("img",{className:"image",src:t.image,alt:"ops"}),r.a.createElement("br",null),r.a.createElement("div",{className:"attacks"},a.map((function(e){return r.a.createElement("div",{className:"special-attack",key:"".concat(t.name,"-").concat(e.name)},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.damage))}))))}function v(){return r.a.createElement("div",{className:"icon-button"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36",viewBox:"0 0 24 24",width:"36"},r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}var d=n(22),E=n.n(d);function g(e){var t=e.find,n=e.setFind,l=e.page,u=Object(i.a)(p,{variables:{first:151}}).data,m=(u=void 0===u?{}:u).pokemons,s=void 0===m?[]:m,d="all"===l?151:parseInt(l),g=Object(a.useState)(!0),h=Object(c.a)(g,2),b=h[0],y=h[1];return Object(a.useEffect)((function(){document.getElementById("select-display").disabled=""!==t,y(!0),setTimeout((function(){return y(!1)}),1e3)}),[t,l]),Object(a.useEffect)((function(){var e=document.getElementById("need-focus");null!==e&&(console.trace("focus"),e.focus({preventScroll:!1}))})),Object(a.useEffect)((function(){0===s.length?y(!0):y(!1)}),[s]),r.a.createElement(r.a.Fragment,null,b?r.a.createElement("img",{id:"loading",src:E.a,alt:"loading QQ"}):""!==t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:"back-button",onClick:function(){return n("")}},r.a.createElement(v,null)),r.a.createElement("div",{className:"nothing-text-box"},function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=Object(o.a)(s);try{for(a.s();!(e=a.n()).done;){var l=e.value;if(l.name===n)return r.a.createElement(f,{pokemon:l})}}catch(c){a.e(c)}finally{a.f()}return r.a.createElement("p",{id:"nothing-text"},"Ops nothing found~~")}(t))):s.slice(0,d).map((function(e,t){return r.a.createElement(f,{key:e.id,pokemon:e,focus:t===d-1?"need-focus":null})})))}function h(e){var t=e.trans,n=t.setFind,l=t.setPage,o=t.expand,i=Object(a.useState)(""),u=Object(c.a)(i,2),m=u[0],s=u[1],p=o?"toggler":null;return r.a.createElement("div",{className:"search-box",id:p},r.a.createElement("input",{id:"insert",name:"findPokemon",value:m,type:"text",onChange:function(e){return s(e.target.value)},placeholder:"type pokemon"}),r.a.createElement("button",{id:"click",onClick:function(){n(m)}},"search"),r.a.createElement("select",{id:"select-display",onChange:function(e){return l(e.target.value)}},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"70"},"70"),r.a.createElement("option",{value:"90"},"90"),r.a.createElement("option",{value:"110"},"110"),r.a.createElement("option",{value:"130"},"130"),r.a.createElement("option",{value:"all"},"all")))}n(36);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),k=r.a.createElement("path",{d:"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"}),j=function(e){var t=e.svgRef,n=e.title,a=y(e,["svgRef","title"]);return r.a.createElement("svg",b({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),n?r.a.createElement("title",null,n):null,O,k)},x=r.a.forwardRef((function(e,t){return r.a.createElement(j,b({svgRef:t},e))}));n.p;var w=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)("5"),i=Object(c.a)(o,2),u=i[0],m=i[1],s=Object(a.useState)(!0),p=Object(c.a)(s,2),f=p[0],v=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-toggle"},r.a.createElement("button",{onClick:function(){return v(!f)}},r.a.createElement(x,null))),r.a.createElement(h,{trans:{setFind:l,setPage:m,expand:f}})),r.a.createElement("main",{style:{justifyContent:""!==n?"center":"space-around"}},r.a.createElement(g,{find:n,page:u,setFind:l})))},P=n(27),S=n(7),C=new P.a({uri:"https://graphql-pokemon.now.sh"});Object(l.render)(r.a.createElement(S.a,{client:C},r.a.createElement(w,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bf9432e4.chunk.js.map