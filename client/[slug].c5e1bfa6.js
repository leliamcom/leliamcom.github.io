import{S as t,i as a,s,k as e,e as n,m as o,c as r,b as c,f as l,d as i,a as h,o as m,g as p,h as d,t as u,l as g,D as f,n as v,L as E}from"./index.782a6ae6.js";import{a as b}from"./app.cb0df2a4.js";function D(t){let a,s,h,m,p,d,u,g,f,v,E,b,D,A,y;return document.title=a=t[0].title,{c(){s=e(),h=n("meta"),p=e(),d=n("meta"),u=e(),g=n("meta"),v=e(),E=n("meta"),D=e(),A=n("meta"),this.h()},l(t){s=o(t),h=r(t,"META",{name:!0,content:!0}),p=o(t),d=r(t,"META",{name:!0,content:!0}),u=o(t),g=r(t,"META",{name:!0,content:!0}),v=o(t),E=r(t,"META",{name:!0,content:!0}),D=o(t),A=r(t,"META",{name:!0,content:!0}),this.h()},h(){c(h,"name","description"),c(h,"content",m="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription),c(d,"name","og:type"),c(d,"content","article"),c(g,"name","og:url"),c(g,"content",f="https://leliam.com/blogposts/"+t[0].slug),c(E,"name","og:title"),c(E,"content",b=t[0].title),c(A,"name","og:description"),c(A,"content",y=t[0].metaDescription)},m(t,a){l(t,s,a),l(t,h,a),l(t,p,a),l(t,d,a),l(t,u,a),l(t,g,a),l(t,v,a),l(t,E,a),l(t,D,a),l(t,A,a)},p(t,s){1&s&&a!==(a=t[0].title)&&(document.title=a),1&s&&m!==(m="Author: "+t[0].author.name+", Date: "+t[0].postedAt+"\\n "+t[0].metaDescription)&&c(h,"content",m),1&s&&f!==(f="https://leliam.com/blogposts/"+t[0].slug)&&c(g,"content",f),1&s&&b!==(b=t[0].title)&&c(E,"content",b),1&s&&y!==(y=t[0].metaDescription)&&c(A,"content",y)},d(t){t&&i(s),t&&i(h),t&&i(p),t&&i(d),t&&i(u),t&&i(g),t&&i(v),t&&i(E),t&&i(D),t&&i(A)}}}function A(t){let a,s,e;return{c(){a=n("div"),s=n("img"),this.h()},l(t){a=r(t,"DIV",{style:!0});var e=h(a);s=r(e,"IMG",{loading:!0,style:!0,src:!0,alt:!0}),e.forEach(i),this.h()},h(){c(s,"loading","lazy"),m(s,"margin","0 auto"),m(s,"display","block"),s.src!==(e=t[0].banner)&&c(s,"src",e),c(s,"alt","blogpost banner"),m(a,"margin","0 0 25px")},m(t,e){l(t,a,e),p(a,s)},p(t,a){1&a&&s.src!==(e=t[0].banner)&&c(s,"src",e)},d(t){t&&i(a)}}}function y(t){let a,s,E,b,y,I,M,x,T,j,V,w,$,G,H,L,k,z,F,N,P,R=t[0].author.name+"",q=t[0].postedAt+"",S=t[0].title+"",U=t[0].data+"",B=t[0]&&D(t),C=t[0].banner&&A(t);return{c(){B&&B.c(),a=d(),s=e(),E=n("div"),b=n("div"),y=n("div"),I=n("figure"),M=n("img"),T=e(),j=n("div"),V=n("p"),w=u(R),$=e(),G=n("p"),H=u(q),L=e(),C&&C.c(),k=e(),z=n("h3"),F=u(S),N=e(),P=n("div"),this.h()},l(t){B&&B.l(t),a=d(),s=o(t),E=r(t,"DIV",{class:!0});var e=h(E);b=r(e,"DIV",{class:!0,style:!0});var n=h(b);y=r(n,"DIV",{class:!0});var c=h(y);I=r(c,"FIGURE",{class:!0});var l=h(I);M=r(l,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),l.forEach(i),c.forEach(i),T=o(n),j=r(n,"DIV",{class:!0});var m=h(j);V=r(m,"P",{class:!0});var p=h(V);w=g(p,R),p.forEach(i),$=o(m),G=r(m,"P",{class:!0});var u=h(G);H=g(u,q),u.forEach(i),m.forEach(i),n.forEach(i),L=o(e),C&&C.l(e),k=o(e),z=r(e,"H3",{class:!0});var f=h(z);F=g(f,S),f.forEach(i),N=o(e),P=r(e,"DIV",{class:!0}),h(P).forEach(i),e.forEach(i),this.h()},h(){c(M,"loading","lazy"),c(M,"class","is-rounded"),M.src!==(x=t[0].author.avatar)&&c(M,"src",x),c(M,"alt","Author avatar"),c(I,"class","image is-48x48"),c(y,"class","media-left"),c(V,"class","title is-4"),c(G,"class","subtitle is-6"),c(j,"class","media-content"),c(b,"class","media"),m(b,"margin","25px 0"),c(z,"class","title"),c(P,"class","content svelte-nn94v0"),c(E,"class","container is-fluid")},m(t,e){B&&B.m(document.head,null),p(document.head,a),l(t,s,e),l(t,E,e),p(E,b),p(b,y),p(y,I),p(I,M),p(b,T),p(b,j),p(j,V),p(V,w),p(j,$),p(j,G),p(G,H),p(E,L),C&&C.m(E,null),p(E,k),p(E,z),p(z,F),p(E,N),p(E,P),P.innerHTML=U},p(t,[s]){t[0]?B?B.p(t,s):((B=D(t)).c(),B.m(a.parentNode,a)):B&&(B.d(1),B=null),1&s&&M.src!==(x=t[0].author.avatar)&&c(M,"src",x),1&s&&R!==(R=t[0].author.name+"")&&f(w,R),1&s&&q!==(q=t[0].postedAt+"")&&f(H,q),t[0].banner?C?C.p(t,s):((C=A(t)).c(),C.m(E,k)):C&&(C.d(1),C=null),1&s&&S!==(S=t[0].title+"")&&f(F,S),1&s&&U!==(U=t[0].data+"")&&(P.innerHTML=U)},i:v,o:v,d(t){B&&B.d(t),i(a),t&&i(s),t&&i(E),C&&C.d()}}}async function I({path:t,params:a,query:s}){let e=t.split("-@");if(1===e.length)return this.error(404,"Not Found");const n=await this.fetch(`/blogposts/shortener-${e[e.length-1]}.json`);if(200===n.status){return{post:await n.json()}}this.error(n.status,data.message)}function M(t,a,s){let e;const{page:n}=b();E(t,n,t=>s(2,e=t));let o=(r=e.path,c="/",r.replace(new RegExp("^"+c+"+|"+c+"+$","g"),"")).split("-@");var r,c;let{post:l}=a;return l||o.length>1&&fetch(`/blogposts/shortener-${o[o.length-1]}.json`).then(t=>t.json()).then(t=>{window.location.replace(`/${t.slug}`)}),t.$set=(t=>{"post"in t&&s(0,l=t.post)}),[l,n]}export default class extends t{constructor(t){super(),a(this,t,M,y,s,{post:0})}}export{I as preload};
