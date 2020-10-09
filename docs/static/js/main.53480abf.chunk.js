(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a),t.d(a,"heroes",(function(){return r}));var r=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}]},24:function(e,a,t){e.exports=t(46)},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(21),l=t.n(c),s=t(8),o=(0,t(0).createContext)(),i=t(9),m="[auth] login",u="[auth] logout",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(i.a)(Object(i.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},p=t(3),d=t(1),v=function(e){var a=e.history,t=Object(r.useContext)(o).dispatch,c=localStorage.getItem("lastPath")||"/";return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){t({type:m,payload:{name:"FranCoder"}}),a.replace(c)}},"Login"))},b=t(14).heroes,E=function(e){var a=e.id,t=e.superhero,r=e.alter_ego,c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card ms-3",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"./heroes-app/assest/heroes/".concat(a,".jpg"),alt:t,className:"card-img"})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t),n.a.createElement("p",{className:"card-text"},r),r!==l&&n.a.createElement("p",{className:"card-text"},l),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},c)),n.a.createElement(p.b,{to:"./heroe/".concat(a)},"M\xe1s...")))))},f=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher: "'.concat(e,'" no es correcto'));return b.filter((function(a){return a.publisher===e}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},t.map((function(e){return n.a.createElement(E,Object.assign({key:e.id},e))})))},g=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Dc Screen"),n.a.createElement("hr",null),n.a.createElement(f,{publisher:"DC Comics"}))},C=t(14).heroes,_=function(e){var a=e.history,t=Object(d.i)().heroeId,c=Object(r.useMemo)((function(){return e=t,C.find((function(a){return a.id===e}));var e}),[t]);if(!c)return n.a.createElement(d.a,{to:"/"});var l=c.superhero,s=c.publisher,o=c.alter_ego,i=c.first_appearance,m=c.characters;return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-sm-12 col-md-4"},n.a.createElement("img",{src:"../assets/heroes/".concat(t,".jpg"),alt:l,className:"img-thumbnail animate__animated animate__fadeInLeft"})),n.a.createElement("div",{className:"col-sm-12 col-md-8 animate__animated animate__fadeIn"},n.a.createElement("h3",{className:"text-center"},l),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Alter ego: "),o),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Publisher: "),s),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"First appearance: "),i)),n.a.createElement("h5",{className:"mt-3 text-center"},"Characters"),n.a.createElement("p",{className:"text-center"},m),n.a.createElement("button",{className:"btn btn-outline-info m-3",onClick:function(){a.length<=2?a.push("/"):a.goBack()}},"Return")))},N=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Marvel Screen"),n.a.createElement("hr",null),n.a.createElement(f,{publisher:"Marvel Comics"}))},y=t(23),k=t.n(y),S=t(11),M=t(14).heroes,O=function(e){var a=e.history,t=Object(d.h)(),c=k.a.parse(t.search).q,l=void 0===c?"":c,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(s.a)(a,2),n=t[0],c=t[1],l=function(){c(e)},o=function(e){var a=e.target;c(Object(i.a)(Object(i.a)({},n),{},Object(S.a)({},a.name,a.value)))};return[n,o,l]}({searchText:l}),m=Object(s.a)(o,2),u=m[0],h=m[1],p=u.searchText,v=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),M.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(l)}),[l]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search Screen"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search Form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(p))}},n.a.createElement("input",{type:"text",placeholder:"Find you hero",name:"searchText",value:p,className:"form-control",autoComplete:"off",onChange:h}),n.a.createElement("button",{type:"submit",className:"btn mt-1 btn-block btn-outline-primary"},"Search..."))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Results"),n.a.createElement("hr",null),""===l&&n.a.createElement("div",{className:"alert alert-info"},"Search a hero"),""!==l&&0===v.length&&n.a.createElement("div",{className:"alert alert-danger"},"There is not a hero with ",l),v.map((function(e){return n.a.createElement(E,Object.assign({key:e.id},e))})))))},D=function(){var e=Object(r.useContext)(o),a=e.user.name,t=e.dispatch,c=Object(d.g)();return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(p.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},a),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){c.replace("/login"),t({type:u})}},"Logout"))))},j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,null),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/marvel",component:N}),n.a.createElement(d.b,{exact:!0,path:"/heroe/:heroeId",component:_}),n.a.createElement(d.b,{exact:!0,path:"/dc",component:g}),n.a.createElement(d.b,{exact:!0,path:"/search",component:O}),n.a.createElement(d.a,{to:"/marvel"}))))},x=t(12),w=function(e){var a=e.isAuth,t=e.component,r=Object(x.a)(e,["isAuth","component"]);return localStorage.setItem("lastPath",r.location.pathname),n.a.createElement(d.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(t,e):n.a.createElement(d.a,{to:"/login"})}}))},A=function(e){var a=e.isAuth,t=e.component,r=Object(x.a)(e,["isAuth","component"]);return n.a.createElement(d.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(d.a,{to:"/"}):n.a.createElement(t,e)}}))},B=function(){var e=Object(r.useContext)(o).user;return n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement(d.d,null,n.a.createElement(A,{exact:!0,path:"/login",component:v,isAuth:e.logged}),n.a.createElement(w,{path:"/",isAuth:e.logged,component:j}))))},J=function(){var e=Object(r.useReducer)(h,{},(function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}})),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),n.a.createElement(o.Provider,{value:{user:t,dispatch:c}},n.a.createElement(B,null))};l.a.render(n.a.createElement(J,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.53480abf.chunk.js.map