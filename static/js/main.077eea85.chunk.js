(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a,s=c(9),n=c.n(s),l=c(5),r=c(2),d=c(3),i=c.n(d),o=c(1),j=(c(16),c(17),c(8)),b=c.n(j),u=c(0),h=function(e){var t=e.todos,c=e.selectedTodoId,a=e.setSelectedTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,l=t===c;return Object(u.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":l}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),n?Object(u.jsx)("td",{className:"is-vcentered",children:Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}):Object(u.jsx)("td",{className:"is-vcentered"}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:b()("has-text-success",{"has-text-danger":!n}),children:s})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:l?"far fa-eye-slash":"far fa-eye"})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=function(e){var t=e.query,c=e.setQuery,s=e.setTodoStatus;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case"all":s(a.ALL);break;case"active":s(a.ACTIVE);break;case"completed":s(a.COMPLETED)}},children:Object.values(a).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},O=(c(19),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.todo,c=e.handleCloseModal,a=Object(o.useState)(null),s=Object(r.a)(a,2),n=s[0],d=s[1],j=Object(o.useState)(!1),b=Object(r.a)(j,2),h=b[0],m=b[1],f=Object(o.useCallback)(Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a=(null===t||void 0===t?void 0:t.userId)||0,x("/users/".concat(a));case 3:c=e.sent,d(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(!0);case 10:case"end":return e.stop()}var a}),e,null,[[0,7]])}))),[]);return Object(o.useEffect)((function(){f()}),[]),h?Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),Object(u.jsx)("div",{className:"modal-card",children:Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-danger","data-cy":"modal-header",children:"An error occurred when loading the details"}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]})})]}):Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(u.jsx)(O,{})]})},v=c(10),p=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)(!1),d=Object(r.a)(n,2),j=d[0],b=d[1],p=Object(o.useState)(0),N=Object(r.a)(p,2),y=N[0],g=N[1],k=Object(o.useState)(""),C=Object(r.a)(k,2),w=C[0],T=C[1],L=Object(o.useState)(a.ALL),S=Object(r.a)(L,2),E=S[0],I=S[1],A=Object(o.useState)(!1),M=Object(r.a)(A,2),P=M[0],_=M[1],D=Object(o.useCallback)(Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,x("/todos");case 4:t=e.sent,s(t),b(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),_(!0),b(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]);Object(o.useEffect)((function(){D()}),[]);var B=function(e,t,c){var s=Object(v.a)(e);switch(t){case a.ACTIVE:s=s.filter((function(e){return!e.completed}));break;case a.COMPLETED:s=s.filter((function(e){return e.completed}));case a.ALL:}if(c){var n=c.split(" ").map((function(e){return e.trim().toLowerCase()})).join(" ");s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))}return s}(c,E,w),V=B.find((function(e){return e.id===y}))||null;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"box",children:P?Object(u.jsx)("p",{className:"has-text-danger",children:"An error occurred when loading data"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{query:w,setQuery:T,setTodoStatus:I})}),Object(u.jsx)("div",{className:"block",children:j?Object(u.jsx)(O,{}):Object(u.jsx)(h,{todos:B,selectedTodoId:y,setSelectedTodoId:g})})]})})})}),V&&Object(u.jsx)(f,{todo:V,handleCloseModal:function(){g(0)}})]})};n.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.077eea85.chunk.js.map