(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),i=(n(16),n(1)),u=n(2),r=n(4),s=n(3),h=n(5),d=(o.a.Component,n(7)),p=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("ul",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"---",o.a.createElement("button",{onClick:function(e){return t.props.del(n,e)}},"\u5220\u9664"))})))}}]),e}(a.Component);p.defaultProps={todo:[1,2,3,4]};var m=n(10),b=n(6),f=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(r.a)(this,Object(s.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(b.a)(t)),t.state={a:"",b:"",c:""},t}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){console.log(this),this.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:function(e){t.a=e},name:"a",type:"text",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput}),"+",o.a.createElement("input",{name:"b",type:"text",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput}),"+",o.a.createElement("input",{name:"c",type:"text",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(e){t.inp=e},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),j=function(t){function e(){var t;Object(i.a)(this,e),(t=Object(r.a)(this,Object(s.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(d.a)(t.state.todo),[e])})},t.delItem=function(e,n){console.log(n);var a=Object(d.a)(t.state.todo);a.splice(e,1),t.setState((function(t,e){return console.log(t.todo),{todo:a}}))},t.state={todo:[1,2,3]};var n={a:100,b:[1,2,3]},a=Object.assign({},n,{c:300});return console.log(a),console.log(Object.keys(n)),Object.keys(n).forEach((function(t){console.log(n[t])})),t}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{add:this.addItem}),o.a.createElement(p,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);l.a.render(o.a.createElement(j,null),document.getElementById("root")),document.getElementById("root").className="active"}},[[11,1,2]]]);
//# sourceMappingURL=main.77404d8a.chunk.js.map