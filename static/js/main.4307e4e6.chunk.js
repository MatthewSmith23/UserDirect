(this.webpackJsonpuserdirect=this.webpackJsonpuserdirect||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),c=n.n(r),a=n(18),i=n.n(a),h=(n(32),n(33),n(24)),o=n(19),j=n(20),u=n(21),l=n(26),d=n(25),b=(n(34),n(22)),O=n.n(b);n(53);var f=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{class:"navbar navbar-dark bg-dark",children:Object(s.jsx)("div",{class:"container-fluid-center",children:Object(s.jsx)("form",{class:"d-flex",children:Object(s.jsx)("input",{name:"search",class:"form-control me-2",type:"search",placeholder:"Search",value:e.search,onChange:e.handleInputChange,containerStyle:{align:"center",justifyConttent:"center"}})})})})})},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(j.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;s.setState(Object(o.a)({},n,r))},s.state={users:[],search:"",sortDirection:0},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://randomuser.me/api/?results=25&nat=us").then((function(t){e.setState({users:t.data.results})}))}},{key:"sortByName",value:function(){this.state.sortDirection<1?(this.setState({users:this.state.users.sort((function(e,t){return e.name.first>t.name.first?1:-1}))}),this.setState({sortDirection:1})):(this.setState({users:this.state.users.sort((function(e,t){return e.name.first<t.name.first?1:-1}))}),this.setState({sortDirection:0}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(s.jsxs)("table",{class:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{onClick:function(){return e.sortByName()},children:"Name"}),Object(s.jsx)("th",{children:"Phone"}),Object(s.jsx)("th",{children:"Email"}),Object(s.jsx)("th",{children:"DOB"})]})}),Object(s.jsx)("tbody",{children:this.state.users.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.thumbnail,alt:""})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob.date})]},e.name)}))})]})]})}}]),n}(c.a.Component);n(54);var m=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"UserDirectory"}),Object(s.jsx)("p",{children:"Search button narrows down the results to find who you are looking for."})]})})};var v=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{}),Object(s.jsx)(x,{})]})};var p=function(){return Object(s.jsx)(h.a,{basename:"/UserDirect",children:Object(s.jsx)("div",{children:Object(s.jsx)(v,{})})})};n(60);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.4307e4e6.chunk.js.map