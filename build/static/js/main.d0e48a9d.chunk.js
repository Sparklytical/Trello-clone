(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{60:function(e,t,n){e.exports=n(79)},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n.n(a),i=n(18),c=n.n(i),l=n(12),d=n(10),u=n(25),s=n(9),p=n(13),b=n(22),f=n.n(b),v=function(e){return function(t,n){var r=n().activeBoard,a=f()();t({type:E.ADD_LIST,payload:{title:e,boardID:r,id:a}})}},h=function(e,t,n,r,a,o){return function(i,c){var l=c().activeBoard;i({type:E.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexEnd:r,droppableIndexStart:n,draggableId:a,type:o,boardID:l}})}},m=function(e,t){var n=f()();return{type:E.ADD_CARD,payload:{text:t,listID:e,id:n}}},E={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",SET_ACTIVE_BOARD:"SET_ACTIVE_BOARD",ADD_BOARD:"ADD_BOARD"},D={"list-0":{id:"list-0",cards:["card-0"],title:"List 1",board:"board-0"}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_LIST:var n=t.payload,r=n.title,a=n.id,o={title:r,id:"list-".concat(a),cards:[]},i=Object(p.a)({},e,Object(s.a)({},"list-".concat(a),o));return i;case E.ADD_CARD:var c=t.payload,l=c.listID,d=c.id,b=e[l];return b.cards.push("card-".concat(d)),Object(p.a)({},e,Object(s.a)({},l,b));case E.DRAG_HAPPENED:var f=t.payload,v=f.droppableIdStart,h=f.droppableIdEnd,m=f.droppableIndexEnd,O=f.droppableIndexStart,g=f.type;if("list"===g)return e;if(v===h){var x,j=e[v],y=j.cards.splice(O,1);return(x=j.cards).splice.apply(x,[m,0].concat(Object(u.a)(y))),Object(p.a)({},e,Object(s.a)({},v,j))}if(v!==h){var I,A,T=e[v],w=T.cards.splice(O,1),_=e[h];return(I=_.cards).splice.apply(I,[m,0].concat(Object(u.a)(w))),Object(p.a)({},e,(A={},Object(s.a)(A,v,T),Object(s.a)(A,h,_),A))}return e;case E.DELETE_CARD:var C=t.payload,S=C.listID,k=C.id,R=e[S],L=R.cards.filter((function(e){return e!==k}));return Object(p.a)({},e,Object(s.a)({},S,Object(p.a)({},R,{cards:L})));case E.EDIT_LIST_TITLE:var B=t.payload,P=B.listID,F=B.newTitle,z=e[P];return z.title=F,Object(p.a)({},e,Object(s.a)({},P,z));case E.DELETE_LIST:var H=t.payload.listID,N=e;return delete N[H],N;default:return e}},g={"card-0":{text:"Card 1",id:"card-0",list:"list-0"}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_CARD:var n=t.payload,r=n.text,a=n.listID,o=n.id,i={text:r,id:"card-".concat(o),list:a};return Object(p.a)({},e,Object(s.a)({},"card-".concat(o),i));case E.EDIT_CARD:var c=t.payload,l=c.id,d=c.newText,u=e[l];return u.text=d,Object(p.a)({},e,Object(s.a)({},"card-".concat(l),u));case E.DELETE_CARD:var b=t.payload.id,f=e;return delete f[b],f;default:return e}},j={"board-0":{id:"board-0",lists:["list-0"],title:"Board 1"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_LIST:var n=t.payload,r=n.boardID,a=n.id,o=e[r],i="list-".concat(a),c=[].concat(Object(u.a)(o.lists),[i]);return o.lists=c,Object(p.a)({},e,Object(s.a)({},r,o));case E.DRAG_HAPPENED:var l=t.payload.boardID,d=e[l],b=d.lists,f=t.payload,v=f.droppableIndexEnd,h=f.droppableIndexStart,m=f.type;if("list"===m){var D=b.splice(h,1);return b.splice.apply(b,[v,0].concat(Object(u.a)(D))),d.lists=b,Object(p.a)({},e,Object(s.a)({},l,d))}return e;case E.DELETE_LIST:var O=t.payload,g=O.listID,x=O.boardID,y=e[x],I=y.lists,A=I.filter((function(e){return e!==g}));return y.lists=A,Object(p.a)({},e,Object(s.a)({},x,y));case E.ADD_BOARD:var T=t.payload,w=T.title,_=T.id,C="board-".concat(_),S={id:C,title:w,lists:[]};return Object(p.a)({},e,Object(s.a)({},C,S));default:return e}};console.log(f()());var I=["board-0"],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_BOARD:return[].concat(Object(u.a)(e),["board-".concat(t.payload.id)]);default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_ACTIVE_BOARD:return t.payload;default:return e}},w=Object(d.c)({lists:O,cards:x,boards:y,boardOrder:A,activeBoard:T}),_=n(49),C=n(43),S=n(50),k={key:"root",storage:n.n(S).a},R=Object(C.a)(k,w),L=n(29),B=n(30),P=n(34),F=n(32),z=n(31),H=n(27),N=n(26),G=n(100),M=n(98),V=n(97),J=n(24),W=n(3),Y=n(96),$=n(54);function q(){var e=Object(r.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return q=function(){return e},e}function K(){var e=Object(r.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return K=function(){return e},e}function Q(){var e=Object(r.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return Q=function(){return e},e}function U(){var e=Object(r.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return U=function(){return e},e}function X(){var e=Object(r.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return X=function(){return e},e}var Z=W.b.div(X()),ee=Object(W.b)(G.a)(U()),te=Object(W.b)($.a)(Q()),ne=W.b.div(K()),re=Object(W.b)(Y.a)(q()),ae=o.a.memo((function(e){var t=e.list,n=e.text,r=void 0===n?"":n,a=e.onChange,i=e.closeForm,c=e.children,l=t?"Enter list title...":"Enter a title for this card...";return o.a.createElement(Z,null,o.a.createElement(ee,null,o.a.createElement(te,{placeholder:l,autoFocus:!0,value:r,onChange:function(e){return a(e)},onBlur:i})),o.a.createElement(ne,null,c,o.a.createElement(re,{onMouseDown:i},"close")))})),oe=n(99);function ie(){var e=Object(r.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return ie=function(){return e},e}var ce=Object(W.b)(oe.a)(ie()),le=function(e){var t=e.children,n=e.onClick;return o.a.createElement(ce,{variant:"contained",onMouseDown:n},t)};function de(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return de=function(){return e},e}function ue(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(r.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return se=function(){return e},e}var pe=W.b.div(se()),be=Object(W.b)(Y.a)(ue(),pe),fe=Object(W.b)(Y.a)(de(),pe),ve=o.a.memo((function(e){var t=e.text,n=e.id,r=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(N.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(N.a)(p,2),f=b[0],v=b[1],h=function(e){s(!1)},m=function(e){v(e.target.value)},D=function(e){e.preventDefault(),c(function(e,t,n){return{type:E.EDIT_CARD,payload:{id:e,listID:t,newText:n}}}(n,r,f)),s(!1)},O=function(e){console.log(r),c(function(e,t){return{type:E.DELETE_CARD,payload:{id:e,listID:t}}}(n,r))};return u?o.a.createElement(ae,{text:f,onChange:m,closeForm:h},o.a.createElement(le,{onClick:D},"Save")):o.a.createElement(J.b,{draggableId:String(n),index:i},(function(e){return o.a.createElement(pe,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return s(!0)}}),o.a.createElement(G.a,null,o.a.createElement(be,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),o.a.createElement(fe,{fontSize:"small",onMouseDown:O},"delete"),o.a.createElement(V.a,null,o.a.createElement(M.a,null,t))))}))})),he=Object(l.b)()(ve);function me(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return me=function(){return e},e}var Ee=function(e){var t=e.list,n=e.children,r=e.onClick,a=t?1:.5,i=t?"white":"inherit",c=t?"rgba(0,0,0,.15)":"inherit",l=W.b.div(me(),a,i,c);return o.a.createElement(l,{onClick:r},o.a.createElement(Y.a,null,"add"),o.a.createElement("p",{style:{flexShrink:0}},n))};function De(){var e=Object(r.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return De=function(){return e},e}var Oe=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={formOpen:!1,text:""},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(t){e.setState({formOpen:!1})},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleAddList=function(){var t=e.props.dispatch,n=e.state.text;n&&(e.setState({text:""}),t(v(n)))},e.handleAddCard=function(){var t=e.props,n=t.dispatch,r=t.listID,a=e.state.text;a&&(e.setState({text:""}),n(m(r,a)))},e.renderOpenForm=function(){var t=e.props.list,n=t?"Add another list":"Add another card",r=t?1:.5,a=t?"white":"inherit",i=t?"rgba(0,0,0,.15)":"inherit",c=W.b.div(De(),r,a,i);return o.a.createElement(c,{onClick:e.openForm},o.a.createElement(Y.a,null,"add"),o.a.createElement("p",{style:{flexShrink:0}},n))},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?o.a.createElement(ae,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},o.a.createElement(le,{onClick:t?this.handleAddList:this.handleAddCard},t?"Add List":"Add Card")):o.a.createElement(Ee,{list:t,onClick:this.openForm},t?"Add another list":"Add another card")}}]),n}(o.a.PureComponent),ge=Object(l.b)()(Oe);function xe(){var e=Object(r.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return xe=function(){return e},e}function je(){var e=Object(r.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return je=function(){return e},e}function ye(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return ye=function(){return e},e}function Ie(){var e=Object(r.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return Ie=function(){return e},e}function Ae(){var e=Object(r.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return Ae=function(){return e},e}var Te=W.b.div(Ae()),we=W.b.input(Ie()),_e=W.b.div(ye()),Ce=Object(W.b)(Y.a)(je()),Se=W.b.h4(xe(),_e),ke=Object(l.b)()((function(e){var t=e.title,n=e.cards,r=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(N.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(N.a)(p,2),f=b[0],v=b[1],h=function(e){e.target.select()},m=function(e){e.preventDefault(),v(e.target.value)},D=function(e){s(!1),c(function(e,t){return{type:E.EDIT_LIST_TITLE,payload:{listID:e,newTitle:t}}}(r,f))},O=function(){c(function(e){return function(t,n){var r=n().activeBoard;return t({type:E.DELETE_LIST,payload:{listID:e,boardID:r}})}}(r))};return o.a.createElement(J.b,{draggableId:String(r),index:i},(function(e){return o.a.createElement(Te,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),o.a.createElement(J.c,{droppableId:String(r),type:"card"},(function(e){return o.a.createElement("div",null,o.a.createElement("div",null,u?o.a.createElement("form",{onSubmit:D},o.a.createElement(we,{type:"text",value:f,onChange:m,autoFocus:!0,onFocus:h,onBlur:D})):o.a.createElement(_e,{onClick:function(){return s(!0)}},o.a.createElement(Se,null,f),o.a.createElement(Ce,{onClick:O},"delete"))),o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map((function(e,t){return o.a.createElement(he,{key:e.id,text:e.text,id:e.id,index:t,listID:r})})),e.placeholder,o.a.createElement(ge,{listID:r})))})))}))}));function Re(){var e=Object(r.a)(["\n  color: white;\n  font-family: Roboto, sans-serif;\n"]);return Re=function(){return e},e}function Le(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Le=function(){return e},e}var Be=W.b.div(Le()),Pe=W.b.h2(Re()),Fe=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onDragEnd=function(t){var n=t.destination,r=t.source,a=t.draggableId,o=t.type;n&&e.props.dispatch(h(r.droppableId,n.droppableId,r.index,n.index,a,o))},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.boardID;this.props.dispatch((e=t,{type:E.SET_ACTIVE_BOARD,payload:e}))}},{key:"render",value:function(){var e=this.props,t=e.lists,n=e.cards,r=e.match,a=e.boards[r.params.boardID];if(!a)return o.a.createElement("p",null,"Board not found");var i=a.lists;return o.a.createElement(J.a,{onDragEnd:this.onDragEnd},o.a.createElement(z.b,{to:"/"},"Go Back"),o.a.createElement(Pe,null,a.title),o.a.createElement(J.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(e){return o.a.createElement(Be,Object.assign({},e.droppableProps,{ref:e.innerRef}),i.map((function(e,r){var a=t[e];if(a){var i=a.cards.map((function(e){return n[e]}));return o.a.createElement(ke,{listID:a.id,key:a.id,title:a.title,cards:i,index:r})}})),e.placeholder,o.a.createElement(ge,{list:!0}))})))}}]),n}(a.PureComponent),ze=Object(l.b)((function(e){return{lists:e.lists,cards:e.cards,boards:e.boards}}))(Fe);function He(){var e=Object(r.a)(["\n  color: #dae1e7;\n  text-decoration: none;\n  text-transform: capitalize;\n"]);return He=function(){return e},e}function Ne(){var e=Object(r.a)(["\n  height: 280px;\n  width: 280px;\n  background: #27496d;\n  padding: 10px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px grey;\n  border-radius: 15px;\n"]);return Ne=function(){return e},e}var Ge=W.b.div(Ne()),Me=W.b.h1(He()),Ve=function(e){var t=e.title;return console.log(t),o.a.createElement(Ge,null,o.a.createElement(Me,null,t))};function Je(){var e=Object(r.a)(["\n  width: 400px;\n  height: 80px;\n  font-size: 22px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n"]);return Je=function(){return e},e}function We(){var e=Object(r.a)(["\n  font-size: 48px;\n  color: white;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return We=function(){return e},e}function Ye(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return Ye=function(){return e},e}function $e(){var e=Object(r.a)(["\n  flex: 1;\n  height: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return $e=function(){return e},e}var qe=W.b.div($e()),Ke=W.b.div(Ye()),Qe=W.b.h3(We()),Ue=W.b.input(Je()),Xe=Object(l.b)((function(e){return{boards:e.boards,boardOrder:e.boardOrder}}))((function(e){var t=e.boards,n=e.boardOrder,r=e.dispatch,i=Object(a.useState)(""),c=Object(N.a)(i,2),l=c[0],d=c[1],u=function(e){d(e.target.value)},s=function(e){e.preventDefault(),r(function(e){var t=f()();return{type:E.ADD_BOARD,payload:{title:e,id:t}}}(l))};return o.a.createElement(Ke,null,o.a.createElement(qe,null,n.map((function(e){var n=t[e];return o.a.createElement(z.b,{key:e,to:"/".concat(n.id),style:{textDecoration:"none"}},o.a.createElement(Ve,n))}))),o.a.createElement("form",{onSubmit:s,style:{textAlign:"center"}},o.a.createElement(Qe,null,"Create a new Board"),o.a.createElement(Ue,{onChange:u,value:l,placeholder:"Your boards title...",type:"text"})))})),Ze=function(){return o.a.createElement(z.a,null,o.a.createElement("div",null,o.a.createElement(H.a,{path:"/",exact:!0,component:Xe}),o.a.createElement(H.a,{path:"/:boardID",component:ze})))},et=function(e){Object(P.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return o.a.createElement(Ze,null)}}]),n}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(78);var tt=n(56),nt=n.n(tt),rt=n(57);function at(){var e=Object(r.a)(["\n  html {\n    background-color: #142850;\n    box-sizing: border-box;\n    transition: all 0.5s ease-in;\n  }\n"]);return at=function(){return e},e}var ot=function(){var e=Object(d.e)(R,Object(d.a)(_.a));return{store:e,persistor:Object(C.b)(e)}}(),it=ot.persistor,ct=ot.store,lt=Object(W.a)(at());c.a.render(o.a.createElement(l.a,{store:ct},o.a.createElement(rt.a,{loading:null,persistor:it},o.a.createElement(lt,null),o.a.createElement(et,null))),document.getElementById("root")),nt()(document).bind("DOMNodeRemoved",(function(e){console.log("Removed: "+e.target.nodeName)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.d0e48a9d.chunk.js.map