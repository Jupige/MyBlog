webpackJsonp([7],{"2Lmt":function(n,t,o){"use strict";var r=o("MzU9");o.d(t,"a",(function(){return r.a}))},"5xMp":function(n,t){n.exports='<h1>\n  {{title}}\n</h1>\n<ul>\n  <li><a [routerLink]="[\'/home/\']">Home</a></li>\n  <li><a [routerLink]="[\'/about/\']">About</a></li>\n</ul>\n<router-outlet>\n  \x3c!--<img src="assets/ikmages/vs_image.png">--\x3e\n</router-outlet>'},CwhJ:function(n,t,o){"use strict";var r=o("Sxla");o.d(t,"a",(function(){return u}));var e=[{path:"home",loadChildren:function(){return o.e(2).then(o.bind(null,"RobO")).then((function(n){return n.HomeModule}))}},{path:"archives",loadChildren:function(){return o.e(3).then(o.bind(null,"Nx1u")).then((function(n){return n.ArchivesModule}))}},{path:"tags",loadChildren:function(){return o.e(0).then(o.bind(null,"D4G/")).then((function(n){return n.TagsModule}))}},{path:"about",loadChildren:function(){return o.e(4).then(o.bind(null,"fYFX")).then((function(n){return n.AboutModule}))}},{path:"notfound",loadChildren:function(){return o.e(1).then(o.bind(null,"INdo")).then((function(n){return n.NotFoundModule}))}},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"notfound"}],u=r.a.forRoot(function(){return e}())},Iksp:function(n,t,o){"use strict";var r=o("QcKQ"),e=o("4GrM"),u=o("ODjo"),i=o("Nh2/"),a=o("le9S"),c=o("YWx4"),s=o("CwhJ"),l=o("2Lmt");o.d(t,"a",(function(){return f}));var f=(function(){function n(n){}return n})();f=r.a([o.i(u.x)({declarations:[c.a],imports:[e.b,i.a,a.a,s.a],providers:[l.a],bootstrap:[c.a]}),r.b("design:paramtypes",[l.a])],f)},MOVZ:function(n,t){function o(n){throw new Error("Cannot find module '"+n+"'.")}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id="MOVZ"},MzU9:function(n,t,o){"use strict";var r=o("QcKQ"),e=o("ODjo");o.d(t,"a",(function(){return u}));var u=(function(){function n(){console.log("================================")}return n.prototype.ngOnDestroy=function(){console.log("============ngOnDestroy====================")},n})();u=r.a([o.i(e.d)(),r.b("design:paramtypes",[])],u)},"S/3E":function(n,t,o){"use strict";var r=o("4GrM"),e=o("ODjo");o.d(t,"a",(function(){return a}));var u=[],i=function(n){return n};o.i(e.a)(),i=function(n){return o.i(r.a)(),n},u=u.slice();var a=i;u.slice()},YWx4:function(n,t,o){"use strict";var r=o("QcKQ"),e=o("ODjo");o.d(t,"a",(function(){return u}));var u=(function(){function n(){this.title="app works!"}return n})();u=r.a([o.i(e.Y)({selector:"app-root",template:o("5xMp"),styles:[o("okgc")],encapsulation:e.m.None})],u)},bEfp:function(n,t,o){t=n.exports=o("L3LH")(void 0),t.push([n.i,"",""])},fYOR:function(n,t,o){"use strict";function r(){return o.i(e.a)().bootstrapModule(i.a).then(u.a).catch((function(n){return console.error(n)}))}Object.defineProperty(t,"__esModule",{value:!0});var e=o("gbw1"),u=o("S/3E"),i=o("Iksp");t.main=r,r()},okgc:function(n,t,o){var r=o("bEfp");n.exports="string"==typeof r?r:r.toString()}},["fYOR"]);