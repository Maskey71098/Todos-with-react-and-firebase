(this.webpackJsonptodoapp_firebase=this.webpackJsonptodoapp_firebase||[]).push([[0],{70:function(t,e,o){},71:function(t,e,o){},84:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),a=o(18),r=o.n(a),i=(o(70),o(28)),d=(o(71),o(109)),s=o(112),l=o(113),u=o(110),p=(o(53),o(111)),j=o(107),b=o(108),f=o(114),O=o(44),h=O.a.initializeApp({apiKey:"AIzaSyAser42jaNVpwv8vCtdOKMV9Dy8Ac4emoQ",authDomain:"todo-app-cp-b726f.firebaseapp.com",projectId:"todo-app-cp-b726f",storageBucket:"todo-app-cp-b726f.appspot.com",messagingSenderId:"38652377537",appId:"1:38652377537:web:1cf63ff260e5238f2d1740",measurementId:"G-HC2VNMB716"}).firestore(),m=o(60),x=o.n(m),g=o(104),v=o(59),y=o.n(v),C=o(8);function S(){return Math.round(20*Math.random())-10}function k(){var t=50+S(),e=50+S();return{top:"".concat(t,"%"),left:"".concat(e,"%"),transform:"translate(-".concat(t,"%, -").concat(e,"%)")}}var A=Object(g.a)((function(t){return{paper:{position:"absolute",backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}));var E=function(t){var e=A(),o=c.a.useState(k),a=Object(i.a)(o,1)[0],r=Object(n.useState)(!1),d=Object(i.a)(r,2),s=d[0],l=d[1],u=Object(n.useState)(),O=Object(i.a)(u,2),m=O[0],g=O[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(p.a,{open:s,onClose:function(t){return l(!1)},children:Object(C.jsxs)("div",{style:a,className:e.paper,children:[Object(C.jsx)("h1",{children:"Edit your todo!"}),Object(C.jsx)("input",{placeholder:t.todo.todo,value:m,onChange:function(t){return g(t.target.value)}}),Object(C.jsx)("button",{onClick:function(){h.collection("todos").doc(t.todo.id).set({todo:m},{merge:!0}),l(!1)},children:"Edit Todo"})]})}),Object(C.jsx)("list",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(b.a,{}),Object(C.jsx)(f.a,{primary:t.todo.todo,secondary:"Dummy deadline"}),Object(C.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(t){return l(!0)},children:"Edit"}),Object(C.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(e){return h.collection("todos").doc(t.todo.id).delete()},children:"DELETE"})]})})]})};var T=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),o=e[0],c=e[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),p=r[0],j=r[1];return console.log(p),Object(n.useEffect)((function(){h.collection("todos").orderBy("timestamp","desc").onSnapshot((function(t){c(t.docs.map((function(t){return{id:t.id,todo:t.data().todo}})))}))}),[]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"A fully functional TODO App!"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)(d.a,{children:[Object(C.jsx)(s.a,{children:"Write a Todo"}),Object(C.jsx)(l.a,{value:p,onChange:function(t){return j(t.target.value)}})]}),Object(C.jsx)(u.a,{disabled:!p,type:"submit",onClick:function(t){t.preventDefault(),h.collection("todos").add({todo:p,timestamp:O.a.firestore.FieldValue.serverTimestamp()}),console.log("im working"),j("")},Button:!0,variant:"contained",color:"primary",children:"Add Todo"})]}),Object(C.jsx)("ul",{children:o.map((function(t){return Object(C.jsx)(E,{todo:t})}))})]})},w=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,116)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;o(t),n(t),c(t),a(t),r(t)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),w()}},[[84,1,2]]]);
//# sourceMappingURL=main.7ff80d85.chunk.js.map