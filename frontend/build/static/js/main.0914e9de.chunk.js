(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){e.exports={Name:"Pokemon_Name__r3Ajr",Text:"Pokemon_Text__ArNV8",ID:"Pokemon_ID__wmyJ1",ImageStyling:"Pokemon_ImageStyling__PGLvI",Favorite:"Pokemon_Favorite__2w4RU",ImageDiv:"Pokemon_ImageDiv__1Y-1_"}},16:function(e,t,a){e.exports={InfoDiv:"FeaturedPokedex_InfoDiv__1zK3d",GenButtons:"FeaturedPokedex_GenButtons__1V8Bv",GenDisplayText:"FeaturedPokedex_GenDisplayText__2I-xq"}},18:function(e,t,a){e.exports={MainDiv:"Auth_MainDiv__1tLSH",MinorDiv:"Auth_MinorDiv__2IKom",Label:"Auth_Label__28cOI",Input:"Auth_Input__32lp6",LabelDiv:"Auth_LabelDiv__2dA3C"}},19:function(e,t){e.exports=function(e){return e.children}},20:function(e,t,a){e.exports={Link:"About_Link__ctH55",ThirdDiv:"About_ThirdDiv__3t5Ow",FourthDiv:"About_FourthDiv__3Htmg",FifthDiv:"About_FifthDiv__LS2oT",SecondDiv:"About_SecondDiv__2sxJ4",Img:"About_Img__21lBG"}},22:function(e,t,a){e.exports={Content:"Layout_Content__dyUXG",Navbar:"Layout_Navbar__1WIC2",Info:"Layout_Info__1Nz4b"}},24:function(e,t,a){e.exports={Encase:"PokemonList_Encase__3WSwD",Divencase:"PokemonList_Divencase__Qqi_u",Name:"PokemonList_Name__3mA2i",ImageStyling:"PokemonList_ImageStyling__eBaBu"}},30:function(e,t,a){e.exports={Modal:"Modal_Modal__KtEB3",Button:"Modal_Button__ROWLA"}},45:function(e,t,a){e.exports={FavoriteDisplayText:"UserPage_FavoriteDisplayText__3mU6C"}},46:function(e,t,a){e.exports=a(76)},5:function(e,t,a){e.exports={MainDiv:"Register_MainDiv__1VN0y",MinorDiv:"Register_MinorDiv__3hwmH",Label:"Register_Label__2KkWk",Input:"Register_Input__1Rea4",LabelDiv:"Register_LabelDiv__fCEYk"}},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),s=a.n(o),i=(a(51),a(1)),c=a.n(i),l=a(2),u=a(6),m=a(7),p=a(9),d=a(8),h=a(17),g=a(3),f=a(12),v=a.n(f),k=a(42),b=a.n(k),E=a(25),N=a(18),_=a.n(N),I=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault(),n.setState(Object(E.a)({},e.target.name,e.target.value))},n.onSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.a.post("/api/login",{usernameOrEmail:n.state.usernameOrEmail,password:n.state.password}).catch((function(e){return console.error(e)}));case 3:e.sent&&(n.props.checkSession(),n.setState({redirect:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={usernameOrEmail:"",password:"",redirect:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:"/pokedex"}):r.a.createElement("div",{className:_.a.MainDiv},r.a.createElement("h3",null,"Sign In!"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:_.a.MinorDiv},r.a.createElement("div",{className:_.a.LabelDiv},r.a.createElement("label",{className:_.a.Label,for:"usernameOrEmail"},"Username or Email:"),r.a.createElement("input",{className:_.a.Input,type:"text",onChange:this.onChange,name:"usernameOrEmail",value:this.state.username})),r.a.createElement("div",{className:_.a.LabelDiv},r.a.createElement("label",{className:_.a.Label,for:"password"},"Password:"),r.a.createElement("input",{className:_.a.Input,type:"password",onChange:this.onChange,name:"password",value:this.state.password}))),r.a.createElement("input",{type:"submit",name:"Submit",value:"Sign in"})))}}]),a}(n.Component),x=a(19),y=a.n(x),w=a(44),S=a.n(w),C={getAll:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,v.a.get("/api/pokemon?page=".concat(t)).catch((function(e){return console.error(e)}));case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",a.data.pokemon);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPokemonById:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/getPokemonById?pokemonId=".concat(t)).catch((function(e){return console.error(e)}));case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",a.data.pokemon);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=a(24),O=a.n(D),j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).nameElipses=function(e){return e.slice(0,7).concat("...")},n.pokemonFilter=function(e){return e.id>=n.props.idStart&&e.id<=n.props.idEnd},n.renderPokemonSummary=function(e){return r.a.createElement("div",{className:O.a.Divencase,onClick:function(){return n.props.onClickHandler(e)}},e.sprites[0]?r.a.createElement("img",{className:O.a.ImageStyling,src:e.sprites[0].front_default}):r.a.createElement("p",null,"no image found"),r.a.createElement("p",null,"#",e.id),e.name.length<=10?r.a.createElement("p",{className:O.a.Name},e.name):r.a.createElement("p",{className:O.a.Name},n.nameElipses(e.name)))},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:O.a.Encase},this.props.pokemon.filter(this.pokemonFilter).map(this.renderPokemonSummary))}}]),a}(n.Component),P=a(30),L=a.n(P),F=function(e){return r.a.createElement(y.a,null,r.a.createElement("div",{className:L.a.Modal},r.a.createElement("button",{className:L.a.Button,onClick:e.onClose},"X"),r.a.createElement("div",null,e.children)))},M={getAll:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/getFavorites").catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t.data.favoritePokemonIds||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postFavorite:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/postFavorites",{pokemonId:t._id}).catch((function(e){return console.error(e)}));case 2:return a=e.sent,e.abrupt("return",a.data.favoritePokemonIds);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteFavorite:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/api/Favorite/".concat(t._id)).catch((function(e){return console.error(e)}));case 2:return a=e.sent,e.abrupt("return",a.data.favoritePokemonIds);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=a(10),A=a.n(G),B=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).isFavorite=function(e){return e.filter((function(e){return n.props.pokemon._id===e})).length>0},n.onClickFavorite=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.postFavorite(n.props.pokemon);case 2:t=e.sent,n.setState({favoritedPokemonIds:t});case 4:case"end":return e.stop()}}),e)}))),n.onClickFavorited=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.deleteFavorite(n.props.pokemon);case 2:t=e.sent,n.setState({favoritedPokemonIds:t});case 4:case"end":return e.stop()}}),e)}))),n.state={favoritedPokemonIds:[]},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.loggedIn){e.next=5;break}return e.next=3,M.getAll();case 3:t=e.sent,this.setState({favoritedPokemonIds:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.isFavorite(this.state.favoritedPokemonIds);return r.a.createElement("div",null,this.props.loggedIn?e?r.a.createElement("button",{className:A.a.Favorite,onClick:this.onClickFavorited},"Favorited"):r.a.createElement("button",{className:A.a.Favorite,onClick:this.onClickFavorite},"Favorite"):r.a.createElement("p",null,"Log In to Favorite"),r.a.createElement("p",{className:A.a.ID},"ID Number: ",this.props.pokemon.id),r.a.createElement("p",{className:A.a.Name},"Name: ",this.props.pokemon.name),r.a.createElement("div",{className:A.a.ImageDiv},r.a.createElement("p",null,"Default Appearances:"),r.a.createElement("img",{className:A.a.ImageStyling,src:this.props.pokemon.sprites[0].front_default}),r.a.createElement("img",{className:A.a.ImageStyling,src:this.props.pokemon.sprites[0].back_default})),r.a.createElement("div",{className:A.a.ImageDiv},r.a.createElement("p",null,"Shiny Appearances:"),r.a.createElement("img",{className:A.a.ImageStyling,src:this.props.pokemon.sprites[0].front_shiny}),r.a.createElement("img",{className:A.a.ImageStyling,src:this.props.pokemon.sprites[0].back_shiny})),r.a.createElement("p",{className:A.a.Text},"Height: ",Math.round(.328084*Number(this.props.pokemon.height)),"' ",Math.round(12*(.328084*Number(this.props.pokemon.height)-Math.floor(.328084*Number(this.props.pokemon.height)))),'"'),r.a.createElement("p",{className:A.a.Text},"Weight: ",Math.round(.220462*Number(this.props.pokemon.weight)*100)/100," Pounds"),this.props.pokemon.types.length>1?r.a.createElement("p",{className:A.a.Name},"Types: ",this.props.pokemon.types[0].type.name," & ",this.props.pokemon.types[1].type.name):r.a.createElement("p",{className:A.a.Name},"Type: ",this.props.pokemon.types[0].type.name),this.props.pokemon.game_indices.length>0?r.a.createElement("p",{className:A.a.Name},"First game appearance: ",this.props.pokemon.game_indices[0].version.name," & ",this.props.pokemon.game_indices[1].version.name):null)}}]),a}(n.Component),T=function(e){return r.a.createElement(F,{onClose:e.onCloseClick},r.a.createElement(B,{pokemon:e.pokemon,loggedIn:e.loggedIn}))},H=a(16),R=a.n(H),W=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onClickHandler=function(e){n.setState({selected:e})},n.onCloseClick=function(){n.setState({selected:null})},n.getNext60Pokemon=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll(n.state.page);case 2:t=e.sent,n.setState({pokemon:n.state.pokemon.concat(t),page:n.state.page+1,hasMore:60===t.length});case 4:case"end":return e.stop()}}),e)}))),n.generationSelection=function(){var e=Object(l.a)(c.a.mark((function e(t,a,r,o,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.generationWipe();case 2:n.setState({page:s,generationNumber:t,generationName:a,idStart:r,idEnd:o,hasMore:!0});case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o){return e.apply(this,arguments)}}(),n.generationWipe=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({pokemon:[],page:null,generationNumber:null,generationName:"National",idStart:0,idEnd:0,hasMore:!1});case 1:case"end":return e.stop()}}),e)}))),n.state={pokemon:[],selected:null,page:0,generationNumber:null,generationName:"National",idStart:1,idEnd:999,hasMore:!0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{pageStart:this.state.page,loadMore:this.getNext60Pokemon,hasMore:this.state.hasMore,loader:r.a.createElement("div",{className:"loader",key:0})},r.a.createElement(y.a,null,r.a.createElement("div",{className:R.a.InfoDiv},r.a.createElement("h3",null,"Display Pokemon Added In Each Generation"),"National"===this.state.generationName?null:r.a.createElement("div",null,r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(1,"National",1,999,0)}},"National Pokedex")),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(1,"Kanto",1,151,0)}},"Gen 1"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(2,"Johto",152,251,2)}},"Gen 2"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(3,"Hoenn",252,386,4)}},"Gen 3"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(4,"Sinnoh",387,493,6)}},"Gen 4"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(5,"Unova",494,649,8)}},"Gen 5"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(6,"Kalos",650,721,10)}},"Gen 6"),r.a.createElement("button",{className:R.a.GenButtons,onClick:function(){return e.generationSelection(7,"Alola",722,809,12)}},"Gen 7")),"National"===this.state.generationName?r.a.createElement("div",{className:R.a.GenDisplayText},r.a.createElement("h4",null,"You are viewing the ",this.state.generationName," Pokedex")):r.a.createElement("div",{className:R.a.GenDisplayText},r.a.createElement("h4",null,"Your are viewing Pokemon added in the ",this.state.generationName," region")),this.state.pokemon.length>0?r.a.createElement(j,{pokemon:this.state.pokemon,onClickHandler:this.onClickHandler,getNext60Pokemon:this.getNext60Pokemon,page:this.state.page,generationNumber:this.state.generationNumber,generationName:this.state.generationName,idStart:this.state.idStart,idEnd:this.state.idEnd}):r.a.createElement("p",null,"Loading pokemon..."),this.state.selected?r.a.createElement(T,{onCloseClick:this.onCloseClick,pokemon:this.state.selected,loggedIn:this.props.loggedIn}):null))}}]),a}(n.Component),U=a(22),K=a.n(U),q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:K.a.Navbar},this.props.loggedIn?r.a.createElement("p",{className:K.a.Info,onClick:function(){return e.props.logout()}},"Signout"):r.a.createElement(h.b,{to:"/auth",className:K.a.Info},"Sign In"),r.a.createElement(h.b,{to:"/pokedex",className:K.a.Info},"Home"),this.props.loggedIn?r.a.createElement(h.b,{to:"/userPage",className:K.a.Info},"User Page"):r.a.createElement(h.b,{to:"/register",className:K.a.Info},"Register"))}}]),a}(n.Component),J=a(5),Y=a.n(J),V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault(),n.setState(Object(E.a)({},e.target.name,e.target.value))},n.onSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.a.post("/api/register",{username:n.state.username,email:n.state.email,firstName:n.state.firstName,lastName:n.state.lastName,password:n.state.password}).catch((function(e){return console.error(e)}));case 3:n.setState({redirect:!0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={username:"",email:"",firstName:"",lastName:"",password:"",redirect:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:"/auth"}):r.a.createElement("div",{className:Y.a.MainDiv},r.a.createElement("h3",null,"Sign Up!"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:Y.a.MinorDiv},r.a.createElement("div",{className:Y.a.LabelDiv},r.a.createElement("label",{className:Y.a.Label,for:"username"},"Username:"),r.a.createElement("input",{className:Y.a.Input,type:"text",onChange:this.onChange,name:"username",value:this.state.username})),r.a.createElement("div",{className:Y.a.LabelDiv},r.a.createElement("label",{className:Y.a.Label,for:"email"},"Email:"),r.a.createElement("input",{className:Y.a.Input,type:"text",onChange:this.onChange,name:"email",value:this.state.email})),r.a.createElement("div",{className:Y.a.LabelDiv},r.a.createElement("label",{className:Y.a.Label,for:"firstName"},"First Name:"),r.a.createElement("input",{className:Y.a.Input,type:"text",onChange:this.onChange,name:"firstName",value:this.state.firstName})),r.a.createElement("div",{className:Y.a.LabelDiv},r.a.createElement("label",{className:Y.a.Label,for:"lastName"},"Last Name:"),r.a.createElement("input",{className:Y.a.Input,type:"text",onChange:this.onChange,name:"lastName",value:this.state.lastName})),r.a.createElement("div",{className:Y.a.LabelDiv},r.a.createElement("label",{className:Y.a.Label,for:"password"},"Password:"),r.a.createElement("input",{className:Y.a.Input,type:"password",onChange:this.onChange,name:"password",value:this.state.password}))),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",name:"Submit",value:"Sign up"}))))}}]),a}(n.Component),Q=a(45),z=a.n(Q),X=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).quickSortFavorites=function(e){if(e.length<2)return e;for(var t=e[0],a=[],r=[],o=1;o<e.length;o++)e[o].id>t.id?r.push(e[o]):a.push(e[o]);return n.quickSortFavorites(a).concat(t,n.quickSortFavorites(r))},n.gettingPokemonById=function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return C.getPokemonById(e)})));case 2:return a=e.sent,e.abrupt("return",n.quickSortFavorites(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onClickHandler=function(e){n.setState({selected:e})},n.onCloseClick=function(){n.setState({selected:null})},n.state={pokemon:[],favoritePokemonIds:[],selected:null,page:0,generationNumber:0,generationName:"Favorites",idStart:1,idEnd:999},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll();case 2:return t=e.sent,e.t0=this,e.next=6,this.gettingPokemonById(t);case 6:e.t1=e.sent,e.t2=t,e.t3={pokemon:e.t1,favoritePokemonIds:e.t2},e.t0.setState.call(e.t0,e.t3);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement("div",{className:z.a.FavoriteDisplayText},r.a.createElement("h3",null,"Your Favorited Pokemon")),this.state.pokemon?r.a.createElement(j,{pokemon:this.state.pokemon,onClickHandler:this.onClickHandler,page:this.state.page,generationNumber:this.state.generationNumber,generationName:this.state.generationName,idStart:this.state.idStart,idEnd:this.state.idEnd}):r.a.createElement("p",null,"Loading pokemon..."),this.state.selected?r.a.createElement(T,{onCloseClick:this.onCloseClick,pokemon:this.state.selected,loggedIn:this.props.loggedIn}):null)}}]),a}(n.Component),Z=a(20),$=a.n(Z),ee=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:$.a.SecondDiv},r.a.createElement("img",{src:"https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9",className:$.a.Img})),r.a.createElement("div",{className:$.a.ThirdDiv},r.a.createElement("div",{className:$.a.FourthDiv},r.a.createElement("div",{className:$.a.FifthDiv},r.a.createElement("h4",null,"Welcome!"),r.a.createElement("p",null,"To the React Pokedex"),r.a.createElement("p",null,"To test my skills with front end and back end frameworks I created a pokedex listing out all the critters from each game."),r.a.createElement("p",null,"You can Register as a new user in the upper right of the pokedex and sign-in/ sign-out in the upper left."),r.a.createElement("p",null,"You can click on a pokemon and see info about it or select pokemon that appeared in certain generations of the games."),r.a.createElement("p",null,"When signed in the top right of the pokedex will allow you to go to your personal page, when here you can view all the pokemon you've favorited."),r.a.createElement("p",null,"To favorite a pokemon sign in and click on a pokemon in the pokedex, you will see a button in the top left allowing you to favorite a pokemon."),r.a.createElement("p",null,"Hope you enjoy the app and finding all your favorites!"),r.a.createElement(h.b,{to:"/pokedex"},"React-Pokedex"),r.a.createElement("p",null,"Joseph LaMothe"),r.a.createElement("a",{href:"https://www.linkedin.com/in/joseph-lamothe-b72661121/",className:$.a.Link},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/JLaMothe55/React-Pokedex",className:$.a.Link},"GitHub")))))},te=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).checkSession=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/sessioninfo").catch((function(e){return console.log(e)}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:n.setState({username:t.data.username,firstName:t.data.firstName,lastName:t.data.lastName,loggedIn:!0});case 6:case"end":return e.stop()}}),e)}))),n.logout=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.remove("PokeSesh"),n.setState({username:null,firstName:null,lastName:null,loggedIn:!1});case 2:case"end":return e.stop()}}),e)}))),n.state={sessionInfo:{username:null,firstName:null,lastName:null,loggedIn:!1}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.checkSession()}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(h.a,null,r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(ee,null)),r.a.createElement("div",{style:{marginTop:"80px"}},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/pokedex"},r.a.createElement(W,{loggedIn:this.state.loggedIn}),r.a.createElement(q,{loggedIn:this.state.loggedIn,logout:this.logout})),r.a.createElement(g.b,{path:"/auth"},r.a.createElement(I,{checkSession:this.checkSession}),r.a.createElement(q,{loggedIn:this.state.loggedIn,logout:this.logout})),r.a.createElement(g.b,{path:"/register"},r.a.createElement(V,null),r.a.createElement(q,{loggedIn:this.state.loggedIn,logout:this.logout})),r.a.createElement(g.b,{path:"/userPage"},r.a.createElement(X,{loggedIn:this.state.loggedIn}),r.a.createElement(q,{loggedIn:this.state.loggedIn,logout:this.logout}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.0914e9de.chunk.js.map