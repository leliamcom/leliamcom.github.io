import{S as t,i as a,s,e,t as n,c as r,b as l,d as o,f as h,h as c,l as f,m as g,C as i,a as u,g as d,n as m,J as p}from"./index.0f7267ba.js";function b(t,a,s){const e=t.slice();return e[2]=a[s],e}function v(t){let a,s,u,d,m=t[2].name+"";return{c(){a=e("a"),s=n(m),this.h()},l(t){a=r(t,"A",{href:!0,class:!0,"data-badge":!0});var e=l(a);s=o(e,m),e.forEach(h),this.h()},h(){c(a,"href",u="tag/"+t[2].key),c(a,"class","button badge has-badge-rounded svelte-4tp3fs"),c(a,"data-badge",d=t[2].num)},m(t,e){f(t,a,e),g(a,s)},p(t,e){1&e&&m!==(m=t[2].name+"")&&i(s,m),1&e&&u!==(u="tag/"+t[2].key)&&c(a,"href",u),1&e&&d!==(d=t[2].num)&&c(a,"data-badge",d)},d(t){t&&h(a)}}}function T(t){let a,s,i,T,x,E,j,k,y,A=t[0],q=[];for(let a=0;a<A.length;a+=1)q[a]=v(b(t,A,a));return{c(){a=e("meta"),i=u(),T=e("div"),x=e("br"),E=u(),j=e("h1"),k=n("Tags"),y=u();for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){a=r(t,"META",{name:!0,content:!0}),i=d(t),T=r(t,"DIV",{class:!0});var s=l(T);x=r(s,"BR",{}),E=d(s),j=r(s,"H1",{class:!0});var e=l(j);k=o(e,"Tags"),e.forEach(h),y=d(s);for(let t=0;t<q.length;t+=1)q[t].l(s);s.forEach(h),this.h()},h(){document.title="Tags",c(a,"name","description"),c(a,"content",s="Tags of "+t[1]),c(j,"class","title"),c(T,"class","container is-fluid")},m(t,s){g(document.head,a),f(t,i,s),f(t,T,s),g(T,x),g(T,E),g(T,j),g(j,k),g(T,y);for(let t=0;t<q.length;t+=1)q[t].m(T,null)},p(t,[a]){if(1&a){let s;for(A=t[0],s=0;s<A.length;s+=1){const e=b(t,A,s);q[s]?q[s].p(e,a):(q[s]=v(e),q[s].c(),q[s].m(T,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=A.length}},i:m,o:m,d(t){h(a),t&&h(i),t&&h(T),p(q,t)}}}function x({params:t,query:a}){return this.fetch("tags.json").then(t=>t.json()).then(t=>({tags:t}))}function E(t,a,s){let{tags:e}=a;const n=[];for(const t of e){if(n.length>10){n.push("etc");break}n.push(t.name)}return t.$set=(t=>{"tags"in t&&s(0,e=t.tags)}),[e,n]}export default class extends t{constructor(t){super(),a(this,t,E,T,s,{tags:0})}}export{x as preload};
