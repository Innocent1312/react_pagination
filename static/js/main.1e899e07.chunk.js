(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(258)},137:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(24),c=n.n(l),r=n(29),i=n(30),m=n(31),u=n(33),s=n(34),b=n(265),g=(n(137),n(263)),p=function(e){for(var t=e.page,n=e.totalAmountOfPages,a=e.perPage,l=e.onPageChange,c=[],r=1;r<=Math.ceil(n/a);r+=1)c.push(r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"button-list"},o.a.createElement("li",{className:function(e){var t="";return e<=1&&(t="disabled"),t}(t)},o.a.createElement(g.a,{basic:!0,color:"blue",size:"mini",content:"Previous",onClick:function(){return l(t-1)}})),c.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(g.a,{basic:!0,color:"yellow",size:"mini",content:e,onClick:function(){return l(e)}}))}),o.a.createElement("li",{className:function(e){var t="";return e===c.length&&(t="disabled"),t}(t)},o.a.createElement(g.a,{basic:!0,color:"blue",size:"mini",content:"Next",onClick:function(){return l(t+1)}}))))};p.defaultProps={onPageChange:function(){}};var f=p,E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"},{title:"Tab 4",content:"Some text 4"},{title:"Tab 5",content:"Some text 5"},{title:"Tab 6",content:"Some text 6"},{title:"Tab 7",content:"Some text 7"},{title:"Tab 8",content:"Some text 8"},{title:"Tab 9",content:"Some text 9"},{title:"Tab 10",content:"Some text 10"},{title:"Tab 11",content:"Some text 11"},{title:"Tab 12",content:"Some text 12"},{title:"Tab 13",content:"Some text 13"},{title:"Tab 14",content:"Some text 14"},{title:"Tab 15",content:"Some text 15"},{title:"Tab 16",content:"Some text 16"},{title:"Tab 17",content:"Some text 17"},{title:"Tab 18",content:"Some text 18"},{title:"Tab 19",content:"Some text 19"},{title:"Tab 20",content:"Some text 20"}],page:1,perPage:5},n.onPageChange=function(e){n.setState({page:e})},n.onAmountOfItemsPerPageChange=function(e){n.setState({page:1,perPage:e.target.value})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,n=e.page,a=e.perPage,l=n*a,c=l-a,r=t.slice(c,l);return o.a.createElement("div",{className:"App"},o.a.createElement(b.a,{as:"h2"},o.a.createElement(b.a.Content,null,"Page number:",n,o.a.createElement(b.a.Subheader,null,"Items per page: \xa0",o.a.createElement("select",{onChange:this.onAmountOfItemsPerPageChange},o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"15"},"15"))))),o.a.createElement("table",null,o.a.createElement("tbody",null,r.map(function(e){return o.a.createElement("tr",{key:e.title},o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.content))}))),o.a.createElement(f,{page:n,totalAmountOfPages:t.length,perPage:+a,onPageChange:this.onPageChange}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.1e899e07.chunk.js.map