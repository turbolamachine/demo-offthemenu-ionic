function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,o,i){return o&&_defineProperties(n.prototype,o),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"19mU":function(n,o,i){"use strict";i.r(o),i.d(o,"MenuPageModule",(function(){return P}));var e=i("ofXK"),t=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),b=i("fXoL"),l=i("S3Px");function s(n,o){if(1&n&&(b.Pb(0,"ion-button",22),b.mc(1),b.Ob()),2&n){var i=b.Zb().$implicit;b.Ab(1),b.oc("$",i.price,"")}}function a(n,o){if(1&n&&(b.Pb(0,"ion-button",22),b.mc(1),b.ac(2,"number"),b.Ob()),2&n){var i=b.Zb().$implicit;b.Ab(1),b.oc("$",b.bc(2,1,i.price,"1.2-2"),"")}}function u(n,o){if(1&n&&(b.Pb(0,"ion-item",13),b.Pb(1,"ion-grid"),b.Pb(2,"ion-row",15),b.Pb(3,"ion-col",16),b.Lb(4,"ion-img",17),b.Ob(),b.Pb(5,"ion-col",18),b.lc(6,s,2,1,"ion-button",19),b.lc(7,a,3,4,"ion-button",19),b.Ob(),b.Ob(),b.Pb(8,"ion-row"),b.Pb(9,"ion-col",20),b.Pb(10,"h2",21),b.mc(11),b.Ob(),b.Ob(),b.Ob(),b.Pb(12,"ion-row"),b.Pb(13,"ion-col"),b.Pb(14,"ion-text"),b.mc(15),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&n){var i=o.$implicit;b.Ab(4),b.ec("src",i.image),b.Ab(2),b.ec("ngIf",i.price%1==0),b.Ab(1),b.ec("ngIf",i.price%1>0),b.Ab(4),b.nc(i.name),b.Ab(4),b.nc(i.description)}}function f(n,o){if(1&n&&(b.Pb(0,"ion-list",12),b.Pb(1,"ion-item",13),b.Pb(2,"ion-label"),b.Pb(3,"h1"),b.mc(4),b.Ob(),b.Ob(),b.Ob(),b.lc(5,u,16,5,"ion-item",14),b.Ob()),2&n){var i=o.$implicit,e=b.Zb();b.Ab(4),b.nc(i.name),b.Ab(1),b.ec("ngForOf",e.products[i.id])}}var g,d,p,m=[{path:"",component:(g=function(){function n(o){var i=this;_classCallCheck(this,n),this.prodServ=o,this.categories=[],this.products=[],this.prodServ.fetchAllCategories().subscribe((function(n){i.categories=n;var o=function(n){var o=i.categories[n];i.prodServ.fetchProductsByCategory(o.id).subscribe((function(n){i.products[o.id]=n}))};for(var e in i.categories)o(e);console.log(i.products)}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getKeys",value:function(n){return Array.from(n.keys())}}]),n}(),g.\u0275fac=function(n){return new(n||g)(b.Kb(l.a))},g.\u0275cmp=b.Eb({type:g,selectors:[["app-menu"]],decls:18,vars:3,consts:[["color","dark",1,"ion-no-border",3,"translucent"],["slot","start","id","banner"],["slot","start",1,"ion-margin-top"],["fill","solid","color","danger",1,"round"],["color","light","slot","icon-only","name","menu-outline"],["alt","logo","id","header_logo","src","assets/logo.png"],["slot","end",1,"ion-margin-top"],["fill","solid","color","success",1,"round"],["color","light","slot","icon-only","name","call-outline"],[3,"fullscreen"],["pager","false",1,"ion-margin-top","title-banner"],["class","ion-margin-vertical",4,"ngFor","ngForOf"],[1,"ion-margin-vertical"],["lines","none"],["lines","none",4,"ngFor","ngForOf"],[1,"ion-align-items-center"],["size","3"],[3,"src"],["size","9",1,"ion-text-right"],["size","small","color","theme",4,"ngIf"],[1,"row-border"],["color","dark",1,"ion-no-margin"],["size","small","color","theme"]],template:function(n,o){1&n&&(b.Pb(0,"ion-header",0),b.Pb(1,"ion-toolbar"),b.Lb(2,"div",1),b.Pb(3,"ion-buttons",2),b.Pb(4,"ion-menu-button"),b.Pb(5,"ion-button",3),b.Lb(6,"ion-icon",4),b.Ob(),b.Ob(),b.Ob(),b.Lb(7,"ion-img",5),b.Pb(8,"ion-buttons",6),b.Pb(9,"ion-button",7),b.Lb(10,"ion-icon",8),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(11,"ion-content",9),b.Pb(12,"ion-slides",10),b.Pb(13,"ion-slide"),b.Pb(14,"ion-label"),b.Pb(15,"h1"),b.mc(16,"Our Menu"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.lc(17,f,6,2,"ion-list",11),b.Ob()),2&n&&(b.ec("translucent",!0),b.Ab(11),b.ec("fullscreen",!0),b.Ab(6),b.ec("ngForOf",o.categories))},directives:[r.q,r.L,r.g,r.A,r.f,r.r,r.s,r.l,r.H,r.G,r.w,e.i,r.x,r.u,r.p,r.D,r.k,e.j,r.J],pipes:[e.d],styles:["ion-slides[_ngcontent-%COMP%]{background:url(https://i.goopics.net/JEpO0.jpg)}ion-grid[_ngcontent-%COMP%]   .row-border[_ngcontent-%COMP%]{border-bottom:1px dotted #222}ion-grid[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-style:italic}"]}),g)}],O=((p=function n(){_classCallCheck(this,n)}).\u0275mod=b.Ib({type:p}),p.\u0275inj=b.Hb({factory:function(n){return new(n||p)},imports:[[c.i.forChild(m)],c.i]}),p),P=((d=function n(){_classCallCheck(this,n)}).\u0275mod=b.Ib({type:d}),d.\u0275inj=b.Hb({factory:function(n){return new(n||d)},imports:[[e.b,t.a,r.M,O]]}),d)}}]);