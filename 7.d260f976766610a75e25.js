(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Lvs7:function(l,t){l.exports=function(l,t){(t=t||{}).listUnicodeChar=!!t.hasOwnProperty("listUnicodeChar")&&t.listUnicodeChar,t.stripListLeaders=!t.hasOwnProperty("stripListLeaders")||t.stripListLeaders,t.gfm=!t.hasOwnProperty("gfm")||t.gfm,t.useImgAltText=!t.hasOwnProperty("useImgAltText")||t.useImgAltText;var n=l||"";n=n.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{t.stripListLeaders&&(n=n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,t.listUnicodeChar?t.listUnicodeChar+" $1":"$1")),t.gfm&&(n=n.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),n=n.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,t.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(e){return console.error(e),l}return n}},YXyU:function(l,t,n){"use strict";n.r(t);var e,o=n("LoAr"),s=function(){return function(){}}(),r=n("C9Ky"),u=n("f8B5"),i=n("QIIz"),a=n("WV+C"),b=n("WT9V"),c=n("Z5FQ"),p=n("Gien"),g=n("GcYS"),h=n("0xYh"),m=n("981U"),d=n("D57K"),f=n("SeAg"),O=n("KTj7"),v=n("kh6X"),y=n("BVzC"),T=n("dqOH"),w=n("Lvs7");!function(l){l.ADMIN="5052e527-6af8-4a7f-bdc4-e6b68f48a766"}(e||(e={}));var _=function(l){return l[l.HAVE_LOGGED_OUT=1]="HAVE_LOGGED_OUT",l[l.HAD_LOGGED_OUT=2]="HAD_LOGGED_OUT",l}({});!function(l){l.LOGIN_ERROR="EL1",l.LOGIN_IDENTITY_NOT_FOUND="EL2",l.ACCOUNT_NOT_EXIST="EC1",l.NOT_LOGGED_IN="EA1",l.NOT_ENOUGH_API_PERMISSION="EA2",l.RECORD_NOT_FOUND="EC2",l.BLOGPOST_NOT_FOUND="EC3",l.PASSWORD_NOT_MATCH="EA3",l.PASSWORD_STRENGTH_NOT_ENOUGH="EP1",l.RATE_LIMIT="ER1"}(_||(_={}));var C=function(l){return l[l.NOT_FOUND=1]="NOT_FOUND",l[l.OTHER_ERROR=2]="OTHER_ERROR",l[l.OK=3]="OK",l}({}),E=n("pWPE"),S=n("GiBk"),I=n("AytR"),R=Object(f.m)("blogpost-from_server"),M=Object(f.m)("blogpost-blogpost"),x=Object(f.m)("blogpost-blogHtml"),L=Object(f.m)("blogpost-showType"),N=Object(f.m)("blogpost-userslug"),A=Object(f.m)("blogpost-postslug"),D=Object(f.m)("blogpost-shortener"),B=Object(f.m)("blogpost-errorMessage"),P=function(){function l(l,t,n,e,o,s,r,u,i,a,b,c){this.platformId=l,this.location=t,this.renderer=n,this.mditService=e,this.titleService=o,this.route=s,this.datetimeService=r,this.state=u,this.platformService=i,this.apiBlogpostService=a,this.errorService=b,this.meta=c,this.fromServer=!1,this.showType=0,this.loadingBlogpost=!1,this.errorMessage="",this.blogpost=null,this.blogHtml=null,this.blogpostHref="",this.userslug=null,this.postslug=null,this.blogpostShortener=null,this.fbCommentStat=1,this.mdit=this.mditService.mdit}return l.prototype.ngOnInit=function(){var l=this;this.fromServer=this.state.get(R,!1),this.fromServer&&(this.blogpost=this.state.get(M,null),this.blogHtml=this.state.get(x,null),this.showType=this.state.get(L,0),this.postslug=this.state.get(A,null),this.blogpostShortener=this.state.get(D,null),this.userslug=this.state.get(N,null),this.errorMessage=this.state.get(B,"")),this.route.params.subscribe(function(t){return d.b(l,void 0,void 0,function(){var l,n;return d.e(this,function(e){switch(e.label){case 0:return l=t.postslug||null,this.blogpostShortener===(n=t.blogpostShortener||null)?[3,2]:[4,this.getBlogpost(n,l)];case 1:e.sent(),e.label=2;case 2:return this.afterGetBlogpost(n,l),[2]}})})})},l.prototype.afterGetBlogpost=function(l,t){var n=this;this.showType===C.OK&&this.blogpost?(this.titleService.setTitle(this.blogpost.title),this.blogpostHref="http://www.leliam.com#blogpostId="+this.blogpost.id,this.platformService.isBrowser&&(this.blogpost.slug+"-@b"+this.blogpost.shortener!==t&&this.location.go("/"+this.blogpost.slug+"-@b"+this.blogpost.shortener),window&&window.FB?setTimeout(function(){n.initFBComments()},0):IntersectionObserver&&setTimeout(function(){n.fbCommentObserver=new IntersectionObserver(function(l,t){l.forEach(function(l){l.intersectionRatio>0&&(t.unobserve(l.target),n.initFBComments())})},{root:null,rootMargin:"30px",threshold:1}),n.fbCommentObserver.observe(n.elementRef.nativeElement)},0))):0===this.showType&&(this.showType=C.NOT_FOUND)},l.prototype.ngOnDestroy=function(){this.fbCommentObserver&&(this.fbCommentObserver=null)},l.prototype.initFBComments=function(){this.fbCommentStat=2,this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",'<div class="fb-comments" data-width="100%" data-href="'+this.blogpostHref+'" data-numposts="5"></div>'),this.tryInitXFBML()},l.prototype.tryInitXFBML=function(){var l=this;window.FB?window.FB.XFBML.parse(this.elementRef.nativeElement):setTimeout(function(){var t,n,e,o;n="facebook-jssdk",o=(t=document).getElementsByTagName("script")[0],t.getElementById(n)||((e=t.createElement("script")).id=n,e.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1678943848891569&autoLogAppEvents=1",o.parentNode.insertBefore(e,o)),l.tryInitXFBML()},1e3)},l.prototype.formatPostedAt=function(l){return this.datetimeService.dateFormat(l)},l.prototype.getBlogpost=function(l,t){return d.b(this,void 0,void 0,function(){var n,e,o,s,r,u;return d.e(this,function(i){switch(i.label){case 0:this.loadingBlogpost=!0,n=C.OTHER_ERROR,e="",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.apiBlogpostService.getBlogpost({blogpostShortener:l})];case 2:return o=i.sent(),this.blogpost=o,o=this.mdit.render(this.blogpost.data),this.blogHtml=o,this.titleService.setTitle(this.blogpost.title),s="Author: "+this.blogpost.author.name+", Date: "+this.formatPostedAt(this.blogpost.postedAt)+"\n"+w(this.blogpost.description),this.meta.updateTag({name:"description",content:s}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:url",content:I.a.siteUrl+"/blogpost/"+this.blogpost.id}),this.meta.updateTag({property:"og:title",content:this.blogpost.title}),this.meta.updateTag({property:"og:description",content:s}),n=C.OK,[3,4];case 3:return(r=i.sent())instanceof S.f?404===r.status?n=C.NOT_FOUND:(e=this.errorService.getErrorMessage(r),n=C.OTHER_ERROR):r instanceof Error?(e=this.errorService.getErrorMessage(r),n=C.OTHER_ERROR):this.errorService.logError(r),[3,4];case 4:return this.blogpost&&("string"==typeof this.blogpost.cover.url?((u=this.blogpost.cover.url).startsWith("/")&&(u=I.a.siteUrl+u),this.meta.updateTag({property:"og:image",content:u}),this.meta.updateTag({property:"og:image:url",content:u})):"string"==typeof this.blogpost.banner.url&&((u=this.blogpost.banner.url).startsWith("/")&&(u=I.a.siteUrl+u),this.meta.updateTag({property:"og:image",content:u}),this.meta.updateTag({property:"og:image:url",content:u}))),this.showType=n,this.errorMessage=e,this.platformService.isServer&&(this.state.set(R,!0),this.state.set(M,this.blogpost),this.state.set(x,this.blogHtml),this.state.set(L,this.showType),this.state.set(B,this.errorMessage),this.state.set(A,t),this.state.set(D,l)),this.loadingBlogpost=!1,[2]}})})},l.prototype.notFoundCode=function(l){return l===C.NOT_FOUND},l.prototype.otherErrorCode=function(l){return l===C.OTHER_ERROR},l.prototype.okCode=function(l){return l===C.OK},l.prototype.getAvatarStyle=function(l){return{"background-image":"url('"+l+"')","background-size":"cover"}},l}(),k=o.mb({encapsulation:0,styles:[['@import url(https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css);.blogpost-inner[_ngcontent-%COMP%]     img{max-width:100%}.container.error-container[_ngcontent-%COMP%]{word-wrap:break-word;white-space:pre-line}.banner-img[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain}.td-avatar[_ngcontent-%COMP%]{padding-right:10px}.avatar-small[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%;flex-shrink:0}a.tag[_ngcontent-%COMP%]{margin-right:5px}.banner-image-container[_ngcontent-%COMP%]{text-align:center}.banner-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:300px}  .fb-comments:before{content:"Loading Facebook Comments Plugin..."}  .fb-comments[fb-xfbml-state=rendered]:before{content:""}']],data:{}});function F(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,u.b,u.a)),o.nb(1,49152,null,0,i.d,[o.k,a.a,[2,b.c],[2,c.a],i.a],null,null)],null,function(l,t){l(t,0,0,o.wb(t,1)._noopAnimations,o.wb(t,1).diameter,o.wb(t,1).diameter)})}function j(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,4,"div",[["class","container"],["style","text-align:center"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,1,"h1",[["style","padding-top: 50px;font-size: 100px"]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["404"])),(l()(),o.ob(3,0,null,null,1,"h2",[["style","padding-top: 30px;font-size: 40px"]],null,null,null,null,null)),(l()(),o.Cb(-1,null,["We couldn\u2019t find this page."]))],null,null)}function H(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,1,"div",[["class","container error-container"]],null,null,null,null,null)),(l()(),o.Cb(1,null,[" "," "]))],null,function(l,t){l(t,1,0,t.component.errorMessage)})}function U(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,1,"div",[["class","banner-image-container"]],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,0,"img",[["alt","blogpost banner image"]],[[8,"src",4]],null,null,null,null))],null,function(l,t){l(t,1,0,t.component.blogpost.banner.url)})}function G(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,4,"a",[["class","tag"],["mat-stroked-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==o.wb(l,1)._haltDisabledEvents(n)&&e),"click"===t&&(e=!1!==o.wb(l,2).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&e),e},p.c,p.a)),o.nb(1,180224,null,0,g.a,[a.a,h.d,o.k,[2,c.a]],null,null),o.nb(2,671744,null,0,m.p,[m.n,m.a,b.g],{routerLink:[0,"routerLink"]},null),o.xb(3,2),(l()(),o.Cb(4,0,["",""]))],function(l,t){var n=l(t,3,0,"/tag",t.context.$implicit);l(t,2,0,n)},function(l,t){l(t,0,0,o.wb(t,1).disabled?-1:o.wb(t,1).tabIndex||0,o.wb(t,1).disabled||null,o.wb(t,1).disabled.toString(),"NoopAnimations"===o.wb(t,1)._animationMode,o.wb(t,2).target,o.wb(t,2).href),l(t,4,0,t.context.$implicit)})}function $(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.initFBComments()&&e),e},p.d,p.b)),o.nb(1,180224,null,0,g.b,[o.k,a.a,h.d,[2,c.a]],{color:[0,"color"]},null),(l()(),o.Cb(-1,0,["Load Comments"]))],function(l,t){l(t,1,0,"primary")},function(l,t){l(t,0,0,o.wb(t,1).disabled||null,"NoopAnimations"===o.wb(t,1)._animationMode)})}function K(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,29,"div",[],null,null,null,null,null)),(l()(),o.ob(1,0,null,null,22,"div",[["class","main-bg"],["style","padding-bottom:20px"]],null,null,null,null,null)),(l()(),o.ob(2,0,null,null,21,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.ob(4,0,null,null,11,"table",[],null,null,null,null,null)),(l()(),o.ob(5,0,null,null,10,"tbody",[],null,null,null,null,null)),(l()(),o.ob(6,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),o.ob(7,0,null,null,2,"td",[["class","td-avatar"],["rowspan","2"]],null,null,null,null,null)),(l()(),o.ob(8,0,null,null,1,"div",[["class","avatar-small"]],null,null,null,null,null)),o.nb(9,278528,null,0,b.m,[o.t,o.k,o.E],{ngStyle:[0,"ngStyle"]},null),(l()(),o.ob(10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),o.Cb(11,null,["",""])),(l()(),o.ob(12,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),o.ob(13,0,null,null,2,"td",[["style","color:rgba(0,0,0,.54)"]],null,null,null,null,null)),(l()(),o.ob(14,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),o.Cb(15,null,["",""])),(l()(),o.gb(16777216,null,null,1,null,U)),o.nb(17,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.ob(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.ob(19,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),o.Cb(20,null,[" "," "])),(l()(),o.ob(21,0,null,null,0,"div",[["class","blogpost-inner"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,G)),o.nb(23,278528,null,0,b.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.ob(24,0,null,null,5,"div",[["align","middle"],["class","container"],["style","padding:20px 0"]],null,null,null,null,null)),(l()(),o.ob(25,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o.Cb(-1,null,["Comments"])),(l()(),o.gb(16777216,null,null,1,null,$)),o.nb(28,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.ob(29,0,[[1,0],["fbComments",1]],null,0,"div",[["id","fbCommentArea"]],null,null,null,null,null))],function(l,t){var n=t.component;l(t,9,0,n.getAvatarStyle(n.blogpost.author.avatar.url)),l(t,17,0,n.blogpost.banner.url),l(t,23,0,n.blogpost.tags),l(t,28,0,1==n.fbCommentStat)},function(l,t){var n=t.component;l(t,11,0,n.blogpost.author.name),l(t,15,0,n.formatPostedAt(n.blogpost.postedAt)),l(t,20,0,n.blogpost.title),l(t,21,0,n.blogHtml)})}function W(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,K)),o.nb(2,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,2,0,t.component.blogpost)},null)}function X(l){return o.Db(0,[o.Ab(671088640,1,{elementRef:0}),(l()(),o.gb(16777216,null,null,1,null,F)),o.nb(2,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,j)),o.nb(4,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,H)),o.nb(6,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,W)),o.nb(8,16384,null,0,b.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(l,t){var n=t.component;l(t,2,0,n.loadingBlogpost),l(t,4,0,n.notFoundCode(n.showType)),l(t,6,0,n.otherErrorCode(n.showType)),l(t,8,0,n.okCode(n.showType))},null)}function z(l){return o.Db(0,[(l()(),o.ob(0,0,null,null,1,"app-blogpost",[],null,null,null,X,k)),o.nb(1,245760,null,0,P,[o.B,b.f,o.E,T.a,f.k,m.a,O.a,f.l,E.a,v.a,y.a,f.j],null,null)],function(l,t){l(t,1,0)},null)}var V=o.kb("app-blogpost",P,z,{},{},[]),Y=n("C7Lb"),q=n("LYzL"),J={title:"Blogpost",showFooter:!1},Q=function(){return function(){}}();n.d(t,"BlogpostModuleNgFactory",function(){return Z});var Z=o.lb(s,[],function(l){return o.tb([o.ub(512,o.j,o.bb,[[8,[r.a,V]],[3,o.j],o.x]),o.ub(4608,b.l,b.k,[o.u,[2,b.v]]),o.ub(1073742336,b.b,b.b,[]),o.ub(1073742336,Y.a,Y.a,[]),o.ub(1073742336,q.c,q.c,[[2,q.a],[2,f.h]]),o.ub(1073742336,a.b,a.b,[]),o.ub(1073742336,q.e,q.e,[]),o.ub(1073742336,g.c,g.c,[]),o.ub(1073742336,i.c,i.c,[]),o.ub(1073742336,m.q,m.q,[[2,m.x],[2,m.n]]),o.ub(1073742336,Q,Q,[]),o.ub(1073742336,s,s,[]),o.ub(1024,m.j,function(){return[[{path:"",component:P,data:J}]]},[])])})}}]);