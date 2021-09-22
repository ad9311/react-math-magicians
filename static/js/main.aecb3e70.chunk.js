(this["webpackJsonpreact-math-magicians"]=this["webpackJsonpreact-math-magicians"]||[]).push([[0],{26:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(17),o=n.n(r),i=n(10),l=n(2),s=(n(26),n(0)),u=function(){var t=[{id:1,path:"/",name:"Home"},{id:2,path:"/calculator",name:"Calculator"},{id:3,path:"/quote",name:"Quote"}].map((function(t){return Object(s.jsx)("li",{className:"link",children:Object(s.jsx)(i.b,{exact:!0,to:t.path,activeClassName:"activated",children:t.name})},t.id)}));return Object(s.jsx)("header",{className:"banner",children:Object(s.jsxs)("div",{className:"pcon-6 d-block d-flex-2 justify-between align-items-center",children:[Object(s.jsx)("h1",{children:"Math Magicians"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:t})})]})})},j=new(n(20).LoremIpsum)({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),x=function(){return Object(s.jsxs)("section",{className:"pt-2",children:[Object(s.jsx)("h2",{className:"fs-4",children:"Welcome to our page!"}),Object(s.jsx)("p",{className:"fs-2",children:j.generateParagraphs(2)}),Object(s.jsx)("p",{className:"fs-2",children:j.generateParagraphs(3)})]})},b=n(21),d=n(4),h=n(15),p=n.n(h);function m(t,e,n){var a=p()(t),c=p()(e);if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();if("\xf7"===n)try{return a.div(c).toString()}catch(r){return"Can't divide by 0."}if("%"===n)try{return a.mod(c).toString()}catch(r){return"Can't divide by 0."}throw Error("Unknown operation '".concat(n,"'"))}n(48);var O=function(t){var e=t.value,n=t.orange,a=t.event,c="key ".concat(n?"orange-bg":"gray-bg");return Object(s.jsx)("input",{className:c,type:"button",value:e,onClick:function(t){a(t.target.value)}})};O.defaultProps={value:"",orange:!1,event:function(){return""}};var f=O,g=function(){var t=Object(a.useState)({total:null,next:null,operation:null}),e=Object(b.a)(t,2),n=e[0],c=e[1],r=function(t){c((function(){return e=n,"AC"===(a=t)?{total:null,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===e.next?{}:e.operation?e.next?Object(d.a)(Object(d.a)({},e),{},{next:e.next+a}):Object(d.a)(Object(d.a)({},e),{},{next:a}):e.next?{next:e.next+a,total:null}:{next:a,total:null}:"."===a?e.next?e.next.includes(".")?Object(d.a)({},e):Object(d.a)(Object(d.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===a?e.next&&e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===a?e.next?Object(d.a)(Object(d.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(d.a)(Object(d.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||e.total?e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(d.a)(Object(d.a)({},e),{},{operation:a}):{total:m(e.total,e.next,e.operation),next:null,operation:a}:e.next?{total:e.next,next:null,operation:a}:{operation:a}:Object(d.a)(Object(d.a)({},e),{},{operation:a}):{};var e,a}))},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e===n.length-1?Object(s.jsx)(f,{value:t,orange:!0,event:r},t):Object(s.jsx)(f,{value:t,event:r},t)},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(s.jsxs)("div",{className:"row",children:[t,e]})},l=["AC","+/-","%","\xf7"],u=["7","8","9","x"],j=["4","5","6","-"],x=["1","2","3","+"],h=[".","="],p=l.map((function(t,e){return o(t,e,l)})),O=u.map((function(t,e){return o(t,e,u)})),g=j.map((function(t,e){return o(t,e,j)})),v=x.map((function(t,e){return o(t,e,x)})),N=h.map((function(t,e){return o(t,e,h)}));return Object(s.jsxs)("div",{className:"keypad align-end w-100",children:[Object(s.jsx)("div",{className:"io-container",children:Object(s.jsx)("output",{className:"d-block text-right pr-1",children:n.next||n.operation||n.total||"0"})}),i(p),i(O),i(g),i(v),i(i(o("0")),i(N))]})},v=function(){return Object(s.jsxs)("section",{className:"d-flex flex-column pt-2",children:[Object(s.jsx)("h2",{className:"fs-4",children:"Lets do some math!"}),Object(s.jsx)(g,{})]})},N=function(){return Object(s.jsxs)("section",{className:"pt-2",children:[Object(s.jsx)("h2",{className:"fs-4",children:"Quote"}),Object(s.jsx)("p",{className:"fs-2",children:"Mathematics is not about numbers, equations, computations or algorithms; it\u2019s about understanding. - William Paul Thurston."})]})},y=(n(49),function(){return Object(s.jsxs)(i.a,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(l.c,{children:Object(s.jsxs)("main",{className:"pcon-6",children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(x,{})}),Object(s.jsx)(l.a,{path:"/calculator",children:Object(s.jsx)(v,{})}),Object(s.jsx)(l.a,{path:"/quote",children:Object(s.jsx)(N,{})})]})})]})});o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.aecb3e70.chunk.js.map