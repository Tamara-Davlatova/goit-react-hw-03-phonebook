(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={list:"ContactList_list__BRUe8"}},2:function(t,e,n){t.exports={form:"Form_form__3dtn2",btn:"Form_btn__fj4wm",label:"Form_label__2BSiw",input:"Form_input__jUIkS"}},20:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),i=n.n(o),s=(n(20),n(14)),u=n(4),l=n(5),m=n(7),b=n(6),h=n(11),d=n.n(h),j=n(12),f=n(2),p=n.n(f),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,className:p.a.input})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange,className:p.a.input})]}),Object(a.jsx)("button",{type:"submit",className:p.a.btn,children:"Add contact"})]})}}]),n}(c.Component),v=n(9),g=n.n(v);function C(t){var e=t.id,n=t.name,c=t.number,r=t.onDelete;return Object(a.jsxs)("li",{className:g.a.item,children:[n,": ",c,Object(a.jsx)("button",{type:"button",className:g.a.btn,onClick:r,children:"delete"})]},e)}var x=n(13),_=n.n(x);function S(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)(C,{name:c,number:r,onDelete:function(){return n(e)}},e)}))})})}function y(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by Name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})}var N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.DeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return e!==t.id}))}}))},t.addContact=function(e){var n={id:d.a.generate(),name:e.name,number:e.number};t.state.contacts.map((function(t){return t.name.toLocaleLowerCase()})).includes(e.name.toLocaleLowerCase())?alert("".concat(e.name," is already in contacts!")):t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=e.filter((function(t){return t.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(y,{value:n,onChange:this.changeFilter}),Object(a.jsx)(S,{contacts:c,onDelete:this.DeleteContact})]})}}]),n}(c.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),w()},9:function(t,e,n){t.exports={item:"ContactsItem_item__3iCIi",btn:"ContactsItem_btn__3Nzv3"}}},[[29,1,2]]]);
//# sourceMappingURL=main.eadc86ae.chunk.js.map