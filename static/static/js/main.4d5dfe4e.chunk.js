(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(18),r=n.n(a),i=(n(23),n(3)),o=n.n(i),u=n(9),j=n(4),l=n.p+"static/media/logo.6ce24c58.svg",b=(n(25),n(7)),d=n.n(b),p=n(0);d.a.defaults.baseURL="";var h=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Loading Users..."})})},x=function(e){return e.users.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("strong",{children:e.key}),",",Object(p.jsxs)("span",{className:e.value.company,children:["Company: "," ".concat(e.value.company)]})]},e.id)}))},O=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),i=r[0],b=r[1],O=Object(c.useState)(""),f=Object(j.a)(O,2),g=f[0],m=f[1],v=Object(c.useState)(""),y=Object(j.a)(v,2),C=y[0],S=y[1],k=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,d.a.get("/api/users");case 4:t=e.sent,b(t.data.users),s(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),s(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){k()}),[]),Object(p.jsxs)("div",{className:"App",style:{display:"flex",alignItems:"center",textAlign:"center",flexDirection:"column",height:"100vh"},children:[Object(p.jsx)("img",{height:150,width:150,src:l,className:"App-logo",alt:"logo",style:{marginBottom:-50,marginTop:-50}}),Object(p.jsx)("h1",{children:"Serverless Cloud, API, DataStore + react.js:"}),Object(p.jsx)("div",{children:n?Object(p.jsx)(h,{}):Object(p.jsx)(x,{users:i})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),Object(p.jsx)("h2",{children:"Add User"}),"name: ",Object(p.jsx)("input",{type:"text",onChange:function(e){m(e.target.value)}})," ",Object(p.jsx)("br",{}),"Company: ",Object(p.jsx)("input",{type:"text",onChange:function(e){S(e.target.value)}})," ",Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/users",{name:g,data:{company:C}});case 2:return e.next=4,k();case 4:case"end":return e.stop()}}),e)}))),children:"Add User"})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.4d5dfe4e.chunk.js.map