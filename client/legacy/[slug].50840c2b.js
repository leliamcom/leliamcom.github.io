import{a as t,b as n,c as a,d as s,i as e,s as o,e as r,S as c,y as i,f as l,A as u,g as f,k as h,l as m,j as p,z as d,h as v,B as g,C as b,m as E,H as A,o as y,n as D}from"./index.fe2f9ae8.js";import{_ as x}from"./slicedToArray.f13a096f.js";import{_ as I,a as M}from"./asyncToGenerator.fb5fcb6b.js";function T(t){var n,a,s,e,o,r,c,d,v,g,b,E,A,y,D;return document.title=n=t[0].title,{c:function(){a=i(),s=l("meta"),o=i(),r=l("meta"),c=i(),d=l("meta"),g=i(),b=l("meta"),A=i(),y=l("meta"),this.h()},l:function(t){a=u(t),s=f(t,"META",{name:!0,content:!0}),o=u(t),r=f(t,"META",{name:!0,content:!0}),c=u(t),d=f(t,"META",{name:!0,content:!0}),g=u(t),b=f(t,"META",{name:!0,content:!0}),A=u(t),y=f(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(s,"name","description"),h(s,"content",e="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription),h(r,"name","og:type"),h(r,"content","article"),h(d,"name","og:url"),h(d,"content",v="https://leliam.com/blogposts/"+t[0].slug),h(b,"name","og:title"),h(b,"content",E=t[0].title),h(y,"name","og:description"),h(y,"content",D=t[0].metaDescription)},m:function(t,n){m(t,a,n),m(t,s,n),m(t,o,n),m(t,r,n),m(t,c,n),m(t,d,n),m(t,g,n),m(t,b,n),m(t,A,n),m(t,y,n)},p:function(t,a){1&a&&n!==(n=t[0].title)&&(document.title=n),1&a&&e!==(e="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription)&&h(s,"content",e),1&a&&v!==(v="https://leliam.com/blogposts/"+t[0].slug)&&h(d,"content",v),1&a&&E!==(E=t[0].title)&&h(b,"content",E),1&a&&D!==(D=t[0].metaDescription)&&h(y,"content",D)},d:function(t){t&&p(a),t&&p(s),t&&p(o),t&&p(r),t&&p(c),t&&p(d),t&&p(g),t&&p(b),t&&p(A),t&&p(y)}}}function j(t){var n,a,s,e,o,r,c,y,D,x,I,M,T,j,k,G,H,z,N=t[0].author.name+"",w=t[0].postedAt+"",F=t[0].title+"",L=t[0].data+"",P=t[0].banner&&V(t);return{c:function(){n=l("div"),a=l("div"),s=l("figure"),e=l("img"),r=i(),c=l("div"),y=l("p"),D=d(N),x=i(),I=l("p"),M=d(w),T=i(),P&&P.c(),j=i(),k=l("h3"),G=d(F),H=i(),z=l("div"),this.h()},l:function(t){n=f(t,"DIV",{class:!0,style:!0});var o=v(n);a=f(o,"DIV",{class:!0});var i=v(a);s=f(i,"FIGURE",{class:!0});var l=v(s);e=f(l,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),l.forEach(p),i.forEach(p),r=u(o),c=f(o,"DIV",{class:!0});var h=v(c);y=f(h,"P",{class:!0});var m=v(y);D=g(m,N),m.forEach(p),x=u(h),I=f(h,"P",{class:!0});var d=v(I);M=g(d,w),d.forEach(p),h.forEach(p),o.forEach(p),T=u(t),P&&P.l(t),j=u(t),k=f(t,"H3",{class:!0});var b=v(k);G=g(b,F),b.forEach(p),H=u(t),z=f(t,"DIV",{class:!0}),v(z).forEach(p),this.h()},h:function(){h(e,"loading","lazy"),h(e,"class","is-rounded"),e.src!==(o=t[0].author.avatar)&&h(e,"src",o),h(e,"alt","Author avatar"),h(s,"class","image is-48x48"),h(a,"class","media-left"),h(y,"class","title is-4"),h(I,"class","subtitle is-6"),h(c,"class","media-content"),h(n,"class","media"),b(n,"margin","25px 0"),h(k,"class","title"),h(z,"class","content svelte-nn94v0")},m:function(t,o){m(t,n,o),E(n,a),E(a,s),E(s,e),E(n,r),E(n,c),E(c,y),E(y,D),E(c,x),E(c,I),E(I,M),m(t,T,o),P&&P.m(t,o),m(t,j,o),m(t,k,o),E(k,G),m(t,H,o),m(t,z,o),z.innerHTML=L},p:function(t,n){1&n&&e.src!==(o=t[0].author.avatar)&&h(e,"src",o),1&n&&N!==(N=t[0].author.name+"")&&A(D,N),1&n&&w!==(w=t[0].postedAt+"")&&A(M,w),t[0].banner?P?P.p(t,n):((P=V(t)).c(),P.m(j.parentNode,j)):P&&(P.d(1),P=null),1&n&&F!==(F=t[0].title+"")&&A(G,F),1&n&&L!==(L=t[0].data+"")&&(z.innerHTML=L)},d:function(t){t&&p(n),t&&p(T),P&&P.d(t),t&&p(j),t&&p(k),t&&p(H),t&&p(z)}}}function V(t){var n,a,s;return{c:function(){n=l("div"),a=l("img"),this.h()},l:function(t){n=f(t,"DIV",{style:!0});var s=v(n);a=f(s,"IMG",{loading:!0,style:!0,src:!0,alt:!0}),s.forEach(p),this.h()},h:function(){h(a,"loading","lazy"),b(a,"margin","0 auto"),b(a,"display","block"),a.src!==(s=t[0].banner)&&h(a,"src",s),h(a,"alt","blogpost banner"),b(n,"margin","0 0 25px")},m:function(t,s){m(t,n,s),E(n,a)},p:function(t,n){1&n&&a.src!==(s=t[0].banner)&&h(a,"src",s)},d:function(t){t&&p(n)}}}function k(t){var n,a,s,e=t[0]&&T(t),o=t[0]&&j(t);return{c:function(){e&&e.c(),n=y(),a=i(),s=l("div"),o&&o.c(),this.h()},l:function(t){e&&e.l(t),n=y(),a=u(t),s=f(t,"DIV",{class:!0});var r=v(s);o&&o.l(r),r.forEach(p),this.h()},h:function(){h(s,"class","container is-fluid")},m:function(t,r){e&&e.m(document.head,null),E(document.head,n),m(t,a,r),m(t,s,r),o&&o.m(s,null)},p:function(t,a){var r=x(a,1)[0];t[0]?e?e.p(t,r):((e=T(t)).c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null),t[0]?o?o.p(t,r):((o=j(t)).c(),o.m(s,null)):o&&(o.d(1),o=null)},i:D,o:D,d:function(t){e&&e.d(t),p(n),t&&p(a),t&&p(s),o&&o.d()}}}function G(t){return H.apply(this,arguments)}function H(){return(H=I(M.mark(function t(n){var a,s,e,o;return M.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.path,n.params,n.query,1!==(s=a.split("-@")).length){t.next=4;break}return t.abrupt("return",this.error(404,"Not Found"));case 4:return t.next=6,this.fetch("/blogposts/shortener-".concat(s[s.length-1],".json"));case 6:return e=t.sent,t.next=9,e.json();case 9:if(o=t.sent,200!==e.status){t.next=14;break}return t.abrupt("return",{post:o});case 14:this.error(e.status,o.message);case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function z(t,n,a){var s=n.post;return t.$set=function(t){"post"in t&&a(0,s=t.post)},[s]}export default(function(i){function l(t){var c;return n(this,l),c=a(this,s(l).call(this)),e(r(c),t,z,k,o,{post:0}),c}return t(l,c),l}());export{G as preload};
