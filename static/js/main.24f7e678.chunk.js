(this.webpackJsonpcooking=this.webpackJsonpcooking||[]).push([[0],{64:function(e,c,t){},66:function(e,c,t){},94:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(23),i=t.n(s),j=(t(64),t(50)),r=t(51),a=t(58),b=t(57),d=(t(65),t(66),t(97)),l=t(96),o=t(33),O=t(1),x=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(l.a,{className:"nav",children:[Object(O.jsx)(l.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(l.a.Link,{href:"/#/recipes",children:"Recipes"}),Object(O.jsx)(l.a.Link,{href:"/#/about",children:"About"}),Object(O.jsx)(l.a.Link,{href:"/#/addrecipe",children:"Add recipe"})]})})})})},h=function(){return Object(O.jsxs)("header",{children:[Object(O.jsxs)("h1",{children:["Lovely recipes  ",Object(O.jsx)("i",{className:"fas fa-hamburger"})]}),Object(O.jsx)(x,{})]})},u=function(){return Object(O.jsxs)("footer",{children:[Object(O.jsx)("div",{children:"copyright Heli Haavisto 2021"}),Object(O.jsx)("div",{children:"Icon by Font Awesome"})]})},p=function(){return Object(O.jsx)("div",{className:"home",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h1",{children:"Home page"}),Object(O.jsx)("p",{children:"Welcome to find your perfect recipes"})]})})},m=t(13),f=t(21),g=t.n(f),v=t(17),N=function(e){return console.log(e),Object(O.jsx)("div",{className:"recipesList",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:"".concat(e.image),alt:e.name}),Object(O.jsx)("p",{children:e.description}),Object(O.jsx)("br",{}),Object(O.jsx)(v.b,{to:"/recipes/".concat(e.link),children:"Read more"})]})},e.id)},k=t(6),C=function(){var e=Object(n.useState)(),c=Object(m.a)(e,2),t=c[0],s=c[1],i=Object(k.g)().id,j=Object(k.f)();console.log("id on, "+i),Object(n.useEffect)((function(){t||g.a.get("https://intense-journey-32788.herokuapp.com/recipe/find/"+i).then((function(e){return s(e.data)}))}));var r=void 0;return t||(r=Object(O.jsx)("h1",{children:"Loading..."})),t&&(r=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h1",{children:t.name}),Object(O.jsx)("img",{src:"".concat(t.image),alt:t.name}),Object(O.jsx)("p",{children:t.description}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Ingredients"}),Object(O.jsx)("ul",{children:t.recipeIngredient.map((function(e){return Object(O.jsxs)("li",{children:[e.amount," ",e.name]},e.id)}))}),Object(O.jsx)("h3",{children:"Instructions"}),Object(O.jsx)("ul",{children:t.recipeInstructions.map((function(e){return Object(O.jsxs)("li",{children:[" ",e.name,Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:e.text})})]},e.id)}))})]},t.id),Object(O.jsx)("button",{onClick:function(){return j.goBack()},children:"Back to recipes"})]})),Object(O.jsx)("div",{children:r})},y=t(27),I=t(31),w=t(20),L=function(){var e=Object(n.useState)({name:"",description:"",recipeIngredient:[],recipeInstructions:[]}),c=Object(m.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)([{id:1,name:"",text:""}]),j=Object(m.a)(i,2),r=j[0],a=j[1],b=Object(n.useState)([{id:1,amount:"",name:""}]),d=Object(m.a)(b,2),l=d[0],o=d[1],x=function(e){s(Object(w.a)(Object(w.a)({},t),{},Object(I.a)({},e.target.name,e.target.value)))},h=function(e,c){var n=e.target,i=n.name,j=n.value,b=Object(y.a)(r);b[c][i]=j,a(b),s(Object(w.a)(Object(w.a)({},t),{},{recipeInstructions:r}))},u=function(e,c){var n=e.target,i=n.name,j=n.value,r=Object(y.a)(l);r[c][i]=j,o(r),s(Object(w.a)(Object(w.a)({},t),{},{recipeIngredient:l}))},p=l.map((function(e,c){return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"",children:"Amount"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"amount",onChange:function(e){return u(e,c)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"",children:"Ingredient"}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"name",cols:"20",rows:"5",maxLength:"100",onChange:function(e){return u(e,c)},required:!0}),Object(O.jsx)("br",{})]})})),f=r.map((function(e,c){return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"",children:"Instruction step"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",onChange:function(e){return h(e,c)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"",children:"Instruction "}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"text",cols:"20",rows:"10",maxLength:"500",onChange:function(e){return h(e,c)},required:!0}),Object(O.jsx)("br",{})]})}));return Object(O.jsx)("div",{className:"addRecipe",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h1",{children:"Add your own recipe"}),Object(O.jsxs)("form",{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),g.a.post("https://intense-journey-32788.herokuapp.com/recipe/add",t),e.target.reset()},children:[Object(O.jsx)("label",{htmlFor:"name",children:"Recipe name"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",onChange:x,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"description",children:"Recipe description"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"description",onChange:x,required:!0}),Object(O.jsx)("br",{}),p,Object(O.jsx)("button",{onClick:function(e,c){e.preventDefault();var t={id:r.length+1,amount:"",name:""};o([].concat(Object(y.a)(l),[t]))},children:"add new ingredient row"}),Object(O.jsx)("br",{}),f,Object(O.jsx)("button",{onClick:function(e,c){e.preventDefault();var t={id:r.length+1,name:"",text:""};a([].concat(Object(y.a)(r),[t]))},children:"add new instruction row"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"SEND"})]})]})})},S=function(e){var c=e.search;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"searchBox",onChange:c,placeholder:"Search recipes"})})},F=function(){var e=Object(n.useState)([]),c=Object(m.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(""),j=Object(m.a)(i,2),r=j[0],a=j[1];Object(n.useEffect)((function(){g.a.get("https://intense-journey-32788.herokuapp.com/recipe/all").then((function(e){return s(e.data)}))}),[]);var b=t.filter((function(e){return e.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())})).map((function(e){return Object(O.jsx)(N,{name:e.name,image:e.image,description:e.description,recipeIngredient:e.recipeIngredient,recipeInstructions:e.recipeInstructions,link:e.id},e.id)}));return Object(O.jsx)("div",{className:"recipes",children:Object(O.jsxs)(k.c,{children:[Object(O.jsxs)(k.a,{path:"/:recipes",exact:!0,children:[Object(O.jsxs)("div",{className:"card2",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h1",{children:"Recipe page"}),Object(O.jsx)(S,{search:function(e){a(e.target.value)}})]}),Object(O.jsx)("div",{children:b})]}),Object(O.jsx)(k.a,{path:"/recipes/:id",children:Object(O.jsx)(C,{})})]})})},R=t(56),A=t(26),B=function(){return Object(O.jsx)("div",{className:"about",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("section",{id:"pins",children:[Object(O.jsx)("div",{className:"pin"}),Object(O.jsx)("div",{className:"pin"})]}),Object(O.jsx)("h1",{children:"About page"}),Object(O.jsx)("p",{children:'This has been a cool school project in Helsinki Business College. You can either look for recipes or add you own in "add recipe" page'}),Object(O.jsxs)(A.a,{children:[Object(O.jsxs)(R.a,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"../assets/Carousel1.PNG",alt:"First page"}),Object(O.jsx)(A.a.Caption,{className:"text-black",children:Object(O.jsx)("h3",{children:"Landing page"})})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"../assets/Carousel2.PNG",alt:"Second page"}),Object(O.jsx)(A.a.Caption,{className:"text-black",children:Object(O.jsx)("h3",{children:"Recipe page"})})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"../assets/Carousel3.PNG",alt:"Third page"}),Object(O.jsx)(A.a.Caption,{className:"text-black",children:Object(O.jsx)("h3",{children:"Recipe adding page"})})]})]})]})})},H=function(){return Object(O.jsx)("div",{id:"main",children:Object(O.jsxs)(k.c,{children:[Object(O.jsx)(k.a,{path:"/",exact:!0,component:p}),Object(O.jsx)(k.a,{path:"/recipes",component:F}),Object(O.jsx)(k.a,{path:"/about",component:B}),Object(O.jsx)(k.a,{path:"/addrecipe",component:L})]})})},q=function(e){Object(a.a)(t,e);var c=Object(b.a)(t);function t(){return Object(j.a)(this,t),c.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(H,{}),Object(O.jsx)(u,{})]})})}}]),t}(n.Component);i.a.render(Object(O.jsx)(q,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.24f7e678.chunk.js.map