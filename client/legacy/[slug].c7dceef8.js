import{a as t,b as n,c as a,d as e,i as s,s as o,e as r,S as c,q as i,f as l,u,g as h,k as p,l as f,j as m,h as d,v as g,m as v,o as b,t as E,r as A,I as x,n as y,Q as D}from"./index.d1f462d0.js";import{_ as I}from"./slicedToArray.f13a096f.js";import{_ as j,a as M}from"./asyncToGenerator.eec0292a.js";import{a as T}from"./app.05ed3784.js";function V(t){var n,a,e,s,o,r,c,d,g,v,b,E,A,x,y;return document.title=n=t[0].title,{c:function(){a=i(),e=l("meta"),o=i(),r=l("meta"),c=i(),d=l("meta"),v=i(),b=l("meta"),A=i(),x=l("meta"),this.h()},l:function(t){a=u(t),e=h(t,"META",{name:!0,content:!0}),o=u(t),r=h(t,"META",{name:!0,content:!0}),c=u(t),d=h(t,"META",{name:!0,content:!0}),v=u(t),b=h(t,"META",{name:!0,content:!0}),A=u(t),x=h(t,"META",{name:!0,content:!0}),this.h()},h:function(){p(e,"name","description"),p(e,"content",s="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription),p(r,"name","og:type"),p(r,"content","article"),p(d,"name","og:url"),p(d,"content",g="https://leliam.com/blogposts/"+t[0].slug),p(b,"name","og:title"),p(b,"content",E=t[0].title),p(x,"name","og:description"),p(x,"content",y=t[0].metaDescription)},m:function(t,n){f(t,a,n),f(t,e,n),f(t,o,n),f(t,r,n),f(t,c,n),f(t,d,n),f(t,v,n),f(t,b,n),f(t,A,n),f(t,x,n)},p:function(t,a){1&a&&n!==(n=t[0].title)&&(document.title=n),1&a&&s!==(s="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription)&&p(e,"content",s),1&a&&g!==(g="https://leliam.com/blogposts/"+t[0].slug)&&p(d,"content",g),1&a&&E!==(E=t[0].title)&&p(b,"content",E),1&a&&y!==(y=t[0].metaDescription)&&p(x,"content",y)},d:function(t){t&&m(a),t&&m(e),t&&m(o),t&&m(r),t&&m(c),t&&m(d),t&&m(v),t&&m(b),t&&m(A),t&&m(x)}}}function k(t){var n,a,e;return{c:function(){n=l("div"),a=l("img"),this.h()},l:function(t){n=h(t,"DIV",{style:!0});var e=d(n);a=h(e,"IMG",{loading:!0,style:!0,src:!0,alt:!0}),e.forEach(m),this.h()},h:function(){p(a,"loading","lazy"),g(a,"margin","0 auto"),g(a,"display","block"),a.src!==(e=t[0].banner)&&p(a,"src",e),p(a,"alt","blogpost banner"),g(n,"margin","0 0 25px")},m:function(t,e){f(t,n,e),v(n,a)},p:function(t,n){1&n&&a.src!==(e=t[0].banner)&&p(a,"src",e)},d:function(t){t&&m(n)}}}function w(t){var n,a,e,s,o,r,c,D,j,M,T,w,G,H,q,z,F,L,N,P,R,$=t[0].author.name+"",_=t[0].postedAt+"",Q=t[0].title+"",S=t[0].data+"",U=t[0]&&V(t),B=t[0].banner&&k(t);return{c:function(){U&&U.c(),n=b(),a=i(),e=l("div"),s=l("div"),o=l("div"),r=l("figure"),c=l("img"),j=i(),M=l("div"),T=l("p"),w=E($),G=i(),H=l("p"),q=E(_),z=i(),B&&B.c(),F=i(),L=l("h3"),N=E(Q),P=i(),R=l("div"),this.h()},l:function(t){U&&U.l(t),n=b(),a=u(t),e=h(t,"DIV",{class:!0});var i=d(e);s=h(i,"DIV",{class:!0,style:!0});var l=d(s);o=h(l,"DIV",{class:!0});var p=d(o);r=h(p,"FIGURE",{class:!0});var f=d(r);c=h(f,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),f.forEach(m),p.forEach(m),j=u(l),M=h(l,"DIV",{class:!0});var g=d(M);T=h(g,"P",{class:!0});var v=d(T);w=A(v,$),v.forEach(m),G=u(g),H=h(g,"P",{class:!0});var E=d(H);q=A(E,_),E.forEach(m),g.forEach(m),l.forEach(m),z=u(i),B&&B.l(i),F=u(i),L=h(i,"H3",{class:!0});var x=d(L);N=A(x,Q),x.forEach(m),P=u(i),R=h(i,"DIV",{class:!0}),d(R).forEach(m),i.forEach(m),this.h()},h:function(){p(c,"loading","lazy"),p(c,"class","is-rounded"),c.src!==(D=t[0].author.avatar)&&p(c,"src",D),p(c,"alt","Author avatar"),p(r,"class","image is-48x48"),p(o,"class","media-left"),p(T,"class","title is-4"),p(H,"class","subtitle is-6"),p(M,"class","media-content"),p(s,"class","media"),g(s,"margin","25px 0"),p(L,"class","title"),p(R,"class","content svelte-nn94v0"),p(e,"class","container is-fluid")},m:function(t,i){U&&U.m(document.head,null),v(document.head,n),f(t,a,i),f(t,e,i),v(e,s),v(s,o),v(o,r),v(r,c),v(s,j),v(s,M),v(M,T),v(T,w),v(M,G),v(M,H),v(H,q),v(e,z),B&&B.m(e,null),v(e,F),v(e,L),v(L,N),v(e,P),v(e,R),R.innerHTML=S},p:function(t,a){var s=I(a,1)[0];t[0]?U?U.p(t,s):((U=V(t)).c(),U.m(n.parentNode,n)):U&&(U.d(1),U=null),1&s&&c.src!==(D=t[0].author.avatar)&&p(c,"src",D),1&s&&$!==($=t[0].author.name+"")&&x(w,$),1&s&&_!==(_=t[0].postedAt+"")&&x(q,_),t[0].banner?B?B.p(t,s):((B=k(t)).c(),B.m(e,F)):B&&(B.d(1),B=null),1&s&&Q!==(Q=t[0].title+"")&&x(N,Q),1&s&&S!==(S=t[0].data+"")&&(R.innerHTML=S)},i:y,o:y,d:function(t){U&&U.d(t),m(n),t&&m(a),t&&m(e),B&&B.d()}}}function G(t){return H.apply(this,arguments)}function H(){return(H=j(M.mark(function t(n){var a,e,s,o;return M.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.path,n.params,n.query,1!==(e=a.split("-@")).length){t.next=4;break}return t.abrupt("return",this.error(404,"Not Found"));case 4:return t.next=6,this.fetch("/blogposts/shortener-".concat(e[e.length-1],".json"));case 6:if(200!==(s=t.sent).status){t.next=14;break}return t.next=10,s.json();case 10:return o=t.sent,t.abrupt("return",{post:o});case 14:this.error(s.status,data.message);case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(t,n,a){var e,s=T().page;D(t,s,function(t){return a(2,e=t)});var o,r,c=(o=e.path,r="/",o.replace(new RegExp("^"+r+"+|"+r+"+$","g"),"")).split("-@"),i=n.post;return i||c.length>1&&fetch("/blogposts/shortener-".concat(c[c.length-1],".json")).then(function(t){return t.json()}).then(function(t){window.location.replace("/".concat(t.slug))}),t.$set=function(t){"post"in t&&a(0,i=t.post)},[i,s]}export default(function(i){function l(t){var c;return n(this,l),c=a(this,e(l).call(this)),s(r(c),t,q,w,o,{post:0}),c}return t(l,c),l}());export{G as preload};
