webpackJsonp([1],{246:function(n,l,u){"use strict";function t(n){return e._21(0,[(n()(),e.Z(0,0,null,null,3,"ion-spinner",[["class","col"],["col-12",""],["ion-col",""]],[[2,"spinner-paused",null]],null,null,P.b,P.a)),e.Y(1,16384,null,0,Z.a,[],null,null),e.Y(2,114688,null,0,w.a,[z.a,e.j,e.z],null,null),(n()(),e._19(-1,null,["\n      "]))],function(n,l){n(l,2,0)},function(n,l){n(l,0,0,e._13(l,2)._paused)})}function a(n){return e._21(0,[(n()(),e.Z(0,0,null,null,2,"ship-card",[["class","col"],["col-12",""],["col-lg-4",""],["col-md-6",""],["col-xl-3",""],["ion-col",""]],null,null,null,H.b,H.a)),e.Y(1,114688,null,0,j.a,[M.a,I.a,o.d],{ship:[0,"ship"]},null),e.Y(2,16384,null,0,Z.a,[],null,null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function i(n){return e._21(0,[(n()(),e.Z(0,0,[["head",1]],null,6,"ion-header",[],null,null,null,null,null)),e.Y(1,16384,null,0,E.a,[z.a,e.j,e.z,[2,F.a]],null,null),(n()(),e._19(-1,null,["\n  "])),(n()(),e.Z(3,0,null,null,2,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,R.b,R.a)),e.Y(4,49152,null,0,A.a,[k.a,[2,F.a],[2,I.a],z.a,e.j,e.z],null,null),(n()(),e._19(-1,3,["\n  "])),(n()(),e._19(-1,null,["\n"])),(n()(),e._19(-1,null,["\n"])),(n()(),e.Z(8,0,null,null,1,"header-component",[],null,null,null,x.b,x.a)),e.Y(9,114688,null,0,C.a,[I.a,M.a,e.u],null,null),(n()(),e._19(-1,null,["\n\n"])),(n()(),e.Z(11,0,null,null,17,"ion-content",[["no-padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,O.b,O.a)),e.Y(12,4374528,null,0,U.a,[z.a,q.a,B.a,e.j,e.z,k.a,N.a,e.u,[2,F.a],[2,I.a]],null,null),(n()(),e._19(-1,1,["\n  "])),(n()(),e.Z(14,0,null,1,13,"ion-grid",[["class","grid"]],null,null,null,null,null)),e.Y(15,16384,null,0,V.a,[],null,null),(n()(),e._19(-1,null,["\n    "])),(n()(),e.Z(17,0,null,null,9,"ion-row",[["class","row"],["myMatchHeight","ship-card"]],null,[["window","resize"]],function(n,l,u){var t=!0;if("window:resize"===l){t=!1!==e._13(n,18).onResize()&&t}return t},null,null)),e.Y(18,4210688,null,0,J.a,[e.j],{myMatchHeight:[0,"myMatchHeight"]},null),e.Y(19,16384,null,0,S.a,[],null,null),(n()(),e._19(-1,null,["\n      "])),(n()(),e.U(16777216,null,null,1,null,t)),e.Y(22,16384,null,0,T.i,[e.I,e.F],{ngIf:[0,"ngIf"]},null),(n()(),e._19(-1,null,["\n      "])),(n()(),e.U(16777216,null,null,1,null,a)),e.Y(25,802816,null,0,T.h,[e.I,e.F,e.p],{ngForOf:[0,"ngForOf"]},null),(n()(),e._19(-1,null,["\n    "])),(n()(),e._19(-1,null,["\n  "])),(n()(),e._19(-1,1,["\n\n"])),(n()(),e._19(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,9,0);n(l,18,0,"ship-card");n(l,22,0,u.loading);n(l,25,0,u.ships)},function(n,l){n(l,3,0,e._13(l,4)._hidden,e._13(l,4)._sbPadding);n(l,11,0,e._13(l,12).statusbarPadding,e._13(l,12)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var e=u(0),o=(u(5),u(23),u(44)),r=(u(205),function(){function n(n,l,u){this.navCtrl=n,this.navParams=l,this.http=u,this.ships=[],this.loading=!0,this.address=this.navParams.data.address,this.address&&this.address.length>8?this.getProfile():this.loading=!1}return n.prototype.getProfile=function(){var n=this;io.socket.get("/api/v1/ships?address="+encodeURI(this.address),function(l){n.loading=!1,console.log(l),l.length>0&&(n.ships=l)})},n}()),s=u(121),c=u(249),h=u(120),d=function(){return function(){}}(),f=u(191),_=u(192),g=u(193),p=u(194),m=u(195),v=u(196),y=u(197),b=u(198),Y=u(199),P=u(203),Z=u(45),w=u(57),z=u(1),H=u(207),j=u(80),M=u(21),I=u(13),E=u(77),F=u(4),R=u(200),A=u(24),k=u(8),x=u(201),C=u(76),O=u(202),U=u(22),q=u(3),B=u(9),N=u(28),V=u(56),J=u(250),S=u(46),T=u(10),W=u(11),X=e.X({encapsulation:2,styles:[],data:{}}),$=e.V("page-profile",r,function(n){return e._21(0,[(n()(),e.Z(0,0,null,null,1,"page-profile",[],null,null,null,i,X)),e.Y(1,49152,null,0,r,[I.a,W.a,o.d],null,null)],null,null)},{},{},[]),D=u(17),G=u(122),K=u(40);u.d(l,"ProfilePageModuleNgFactory",function(){return L});var L=e.W(d,[],function(n){return e._10([e._11(512,e.i,e.S,[[8,[f.a,_.a,g.a,p.a,m.a,v.a,y.a,b.a,Y.a,$]],[3,e.i],e.s]),e._11(4608,T.k,T.j,[e.r,[2,T.s]]),e._11(4608,D.q,D.q,[]),e._11(4608,D.d,D.d,[]),e._11(512,T.b,T.b,[]),e._11(512,D.o,D.o,[]),e._11(512,D.g,D.g,[]),e._11(512,D.n,D.n,[]),e._11(512,G.a,G.a,[]),e._11(512,h.a,h.a,[]),e._11(512,c.a,c.a,[]),e._11(512,s.a,s.a,[]),e._11(512,G.b,G.b,[]),e._11(512,d,d,[]),e._11(256,K.a,r,[])])})},249:function(n,l,u){"use strict";u(5),u(0),u(250);u.d(l,"a",function(){return t});var t=function(){return function(){}}()},250:function(n,l,u){"use strict";u.d(l,"a",function(){return t});u(5);var t=function(){function n(n){this.el=n,console.log("in match")}return n.prototype.ngAfterViewInit=function(){var n=this;setTimeout(function(){n.matchHeight(n.el.nativeElement,n.myMatchHeight)},50)},n.prototype.onResize=function(){this.matchHeight(this.el.nativeElement,this.myMatchHeight)},n.prototype.matchHeight=function(n,l){if(console.log("match",n),n){var u=n.getElementsByClassName(l);if(u){Array.from(u).forEach(function(n){n.style.height="initial"});var t=Array.from(u).map(function(n){return n.getBoundingClientRect().height}).reduce(function(n,l){return l>n?l:n},0);Array.from(u).forEach(function(n){return n.style.height=t+"px"})}}},n}()}});