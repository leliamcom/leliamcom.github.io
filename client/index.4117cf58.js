import{S as t,i as s,s as e,e as o,u as n,c as l,a,w as r,d as c,b as h,f as i,g as f,C as u,r as p,v as g,n as d,K as m}from"./index.6201f84b.js";function v(t,s,e){const o=t.slice();return o[1]=s[e],o}function b(t){let s,e,p,g,d,m,v=t[1].title+"",b=t[1].postedAt+"";return{c(){s=o("li"),e=o("a"),p=n(v),d=n(" - "),m=n(b),this.h()},l(t){s=l(t,"LI",{});var o=a(s);e=l(o,"A",{href:!0});var n=a(e);p=r(n,v),n.forEach(c),d=r(o," - "),m=r(o,b),o.forEach(c),this.h()},h(){h(e,"href",g="/blogposts/"+t[1].slug)},m(t,o){i(t,s,o),f(s,e),f(e,p),f(s,d),f(s,m)},p(t,s){1&s&&v!==(v=t[1].title+"")&&u(p,v),1&s&&g!==(g="/blogposts/"+t[1].slug)&&h(e,"href",g),1&s&&b!==(b=t[1].postedAt+"")&&u(m,b)},d(t){t&&c(s)}}}function E(t){let s,e,u,E,x,A,j,R,B,D=t[0],I=[];for(let s=0;s<D.length;s+=1)I[s]=b(v(t,D,s));return{c(){s=o("meta"),e=p(),u=o("div"),E=o("br"),x=p(),A=o("h2"),j=n("Recent posts"),R=p(),B=o("ul");for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){s=l(t,"META",{name:!0,content:!0}),e=g(t),u=l(t,"DIV",{class:!0});var o=a(u);E=l(o,"BR",{}),x=g(o),A=l(o,"H2",{class:!0});var n=a(A);j=r(n,"Recent posts"),n.forEach(c),R=g(o),B=l(o,"UL",{class:!0});var h=a(B);for(let t=0;t<I.length;t+=1)I[t].l(h);h.forEach(c),o.forEach(c),this.h()},h(){document.title="Blogposts",h(s,"name","description"),h(s,"content","Discover all the stories"),h(A,"class","title is-2"),h(B,"class","svelte-1frg2tf"),h(u,"class","container is-fluid")},m(t,o){f(document.head,s),i(t,e,o),i(t,u,o),f(u,E),f(u,x),f(u,A),f(A,j),f(u,R),f(u,B);for(let t=0;t<I.length;t+=1)I[t].m(B,null)},p(t,[s]){if(1&s){let e;for(D=t[0],e=0;e<D.length;e+=1){const o=v(t,D,e);I[e]?I[e].p(o,s):(I[e]=b(o),I[e].c(),I[e].m(B,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=D.length}},i:d,o:d,d(t){c(s),t&&c(e),t&&c(u),m(I,t)}}}function x({params:t,query:s}){return this.fetch("blogposts.json").then(t=>t.json()).then(t=>({posts:t}))}function A(t,s,e){let{posts:o}=s;return t.$set=(t=>{"posts"in t&&e(0,o=t.posts)}),[o]}export default class extends t{constructor(t){super(),s(this,t,A,E,e,{posts:0})}}export{x as preload};
