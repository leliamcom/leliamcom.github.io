import{a as t,b as n,c as a,d as s,i as r,s as e,e as o,S as i,q as c,r as f,t as u,u as l,v as h,w as m,f as g,y as v,z as p,g as d,A as b,h as $,B as j,j as x,k as B,m as D,l as y,H as E,E as w,P as k,D as A}from"./index.fe2f9ae8.js";import{_ as P}from"./slicedToArray.f13a096f.js";import{_ as T,a as q}from"./asyncToGenerator.fb5fcb6b.js";import{B as H}from"./BlogpostCard.18ea8320.js";function I(t,n,a){var s=t.slice();return s[1]=n[a],s}function V(t){var n,a=new H({props:{blogpost:t[1]}});return{c:function(){c(a.$$.fragment)},l:function(t){f(a.$$.fragment,t)},m:function(t,s){u(a,t,s),n=!0},p:function(t,n){var s={};1&n&&(s.blogpost=t[1]),a.$set(s)},i:function(t){n||(l(a.$$.fragment,t),n=!0)},o:function(t){h(a.$$.fragment,t),n=!1},d:function(t){m(a,t)}}}function _(t){var n,a,s,r,e,o,i,c,f,u,m,T,q,H=t[0].name+"";document.title=n="Discover the stories about "+t[0].name;for(var _=t[0].blogposts,z=[],C=0;C<_.length;C+=1)z[C]=V(I(t,_,C));var G=function(t){return h(z[t],1,1,function(){z[t]=null})};return{c:function(){a=g("meta"),r=v(),e=g("div"),o=g("br"),i=v(),c=g("h3"),f=p("Blog Posts - "),u=p(H),m=v(),T=g("div");for(var t=0;t<z.length;t+=1)z[t].c();this.h()},l:function(t){a=d(t,"META",{name:!0,content:!0}),r=b(t),e=d(t,"DIV",{class:!0});var n=$(e);o=d(n,"BR",{}),i=b(n),c=d(n,"H3",{class:!0});var s=$(c);f=j(s,"Blog Posts - "),u=j(s,H),s.forEach(x),m=b(n),T=d(n,"DIV",{class:!0});for(var l=$(T),h=0;h<z.length;h+=1)z[h].l(l);l.forEach(x),n.forEach(x),this.h()},h:function(){B(a,"name","description"),B(a,"content",s="Discover the stories about "+t[0].name),B(c,"class","title"),B(T,"class","content"),B(e,"class","container is-fluid")},m:function(t,n){D(document.head,a),y(t,r,n),y(t,e,n),D(e,o),D(e,i),D(e,c),D(c,f),D(c,u),D(e,m),D(e,T);for(var s=0;s<z.length;s+=1)z[s].m(T,null);q=!0},p:function(t,r){var e=P(r,1)[0];if((!q||1&e)&&n!==(n="Discover the stories about "+t[0].name)&&(document.title=n),(!q||1&e&&s!==(s="Discover the stories about "+t[0].name))&&B(a,"content",s),(!q||1&e)&&H!==(H=t[0].name+"")&&E(u,H),1&e){var o;for(_=t[0].blogposts,o=0;o<_.length;o+=1){var i=I(t,_,o);z[o]?(z[o].p(i,e),l(z[o],1)):(z[o]=V(i),z[o].c(),l(z[o],1),z[o].m(T,null))}for(A(),o=_.length;o<z.length;o+=1)G(o);w()}},i:function(t){if(!q){for(var n=0;n<_.length;n+=1)l(z[n]);q=!0}},o:function(t){z=z.filter(Boolean);for(var n=0;n<z.length;n+=1)h(z[n]);q=!1},d:function(t){x(a),t&&x(r),t&&x(e),k(z,t)}}}function z(t){return C.apply(this,arguments)}function C(){return(C=T(q.mark(function t(n){var a,s,r;return q.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,n.query,t.next=3,this.fetch("tag/".concat(a.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(r=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{tag:r});case 11:this.error(s.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function G(t,n,a){var s=n.tag;return t.$set=function(t){"tag"in t&&a(0,s=t.tag)},[s]}export default(function(c){function f(t){var i;return n(this,f),i=a(this,s(f).call(this)),r(o(i),t,G,_,e,{tag:0}),i}return t(f,i),f}());export{z as preload};
