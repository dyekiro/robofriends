(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(3),o=n.n(i),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,i=a.getLCP,o=a.getTTFB;n(e),t(e),r(e),i(e),o(e)}))}),c=(n(13),n(4)),m=n(5),l=n(7),d=n(6),h=n(0),b=function(e){var a=e.name,n=e.email,t=e.id;return Object(h.jsxs)("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:a}),Object(h.jsx)("p",{children:n})]})]})},u=function(e){var a=e.robots;return Object(h.jsx)("div",{children:a.map((function(e,n){return Object(h.jsx)(b,{id:a[n].id,name:a[n].name,email:a[n].email},n)}))})},j=function(e){e.searchfield;var a=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:a})})},g=[{id:1,name:"Leonard Hofstadter",username:"Lenny",email:"lenlen@gmail.com"},{id:2,name:"Sheldon Cooper",username:"Sheldor",email:"sheldon@gmail.com"},{id:3,name:"Raj Koothrapalli",username:"Rajesh",email:"raj@gmail.com"},{id:4,name:"Howard Wolowits",username:"Wolowizard",email:"howie@gmail.com"},{id:5,name:"Penny Something",username:"Painy",email:"penpen@gmail.com"},{id:6,name:"Amy Fowler",username:"Amywamy",email:"fowler@gmail.com"},{id:7,name:"Bernadeth Rostenkowski",username:"Bernie",email:"bernie@gmail.com"},{id:8,name:"Stuart Moot",username:"Stewie",email:"stew@gmail.com"},{id:9,name:"Bert Sanders",username:"Rocky",email:"bert@gmail.com"},{id:10,name:"Prof Gablehowser",username:"Gabe",email:"gabe@gmail.com"}],f=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:g,searchfield:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"tc",children:"RoboFriends"}),Object(h.jsx)(j,{searchChange:this.onSearchChange}),Object(h.jsx)(u,{robots:a})]})}}]),n}(r.a.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),s()}},[[15,1,2]]]);
//# sourceMappingURL=main.f2ebe965.chunk.js.map