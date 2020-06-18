function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{IyiM:function(n,t,o){"use strict";o.r(t),o.d(t,"CategoryListPageModule",(function(){return v}));var e=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),c=o("tyNb"),a=o("mrSG"),s=o("/0UB"),l=o("fXoL"),b=o("S3Px"),u=o("kVqo"),d=o("I/3d");function f(n,t){if(1&n&&(l.Pb(0,"h1"),l.kc(1),l.Ob()),2&n){var o=l.Zb();l.Ab(1),l.lc(o.category.name)}}function p(n,t){if(1&n&&(l.Pb(0,"h2"),l.kc(1),l.Ob()),2&n){var o=l.Zb();l.Ab(1),l.lc(o.category.description)}}function g(n,t){if(1&n){var o=l.Qb();l.Pb(0,"ion-card",17),l.Pb(1,"ion-item",18),l.Pb(2,"ion-button",19),l.kc(3),l.Ob(),l.Ob(),l.Lb(4,"img",20),l.Pb(5,"h4",21),l.kc(6),l.Ob(),l.Pb(7,"ion-item",22),l.Pb(8,"ion-text"),l.kc(9),l.Ob(),l.Ob(),l.Pb(10,"ion-item",23),l.Pb(11,"ion-label"),l.Pb(12,"ion-button",24),l.Xb("click",(function(){l.gc(o);var n=t.$implicit;return l.Zb().clickOnOrderNow(n)})),l.kc(13,"Order Now"),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&n){var e=t.$implicit;l.Ab(3),l.mc("$",e.price,""),l.Ab(1),l.cc("src",e.image,l.hc),l.Ab(2),l.lc(e.name),l.Ab(3),l.mc(" ",e.description," ")}}var h,m,O,P=[{path:"",component:(h=function(){function n(t,o,e,r,i){var c=this;_classCallCheck(this,n),this.modalController=t,this.prodServ=o,this.order=e,this.db=r,this.activatedRoute=i;var a=this.activatedRoute.snapshot.paramMap.get("myid");r.doc("categories/"+a).valueChanges().subscribe((function(n){c.category=n})),this.prodServ.fetchProductsByCategory(a).subscribe((function(n){c.products=n}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"clickOnOrderNow",value:function(n){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:s.a,componentProps:{product:n}});case 2:return o=t.sent,t.next=5,o.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"clickOnCart",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.order.goToCart());case 1:case"end":return n.stop()}}),n,this)})))}}]),n}(),h.\u0275fac=function(n){return new(n||h)(l.Kb(i.P),l.Kb(b.a),l.Kb(u.a),l.Kb(d.a),l.Kb(c.a))},h.\u0275cmp=l.Eb({type:h,selectors:[["app-category-list"]],decls:24,vars:7,consts:[["color","dark",1,"ion-no-border",3,"translucent"],["slot","start","id","banner"],["slot","start",1,"ion-margin-top"],["fill","solid","color","danger",1,"round"],["color","light","slot","icon-only","name","menu-outline"],["alt","logo","id","header_logo","src","assets/logo_off_the_menu.png"],["slot","end",1,"ion-margin-top"],["fill","solid","color","success",1,"round"],["color","light","slot","icon-only","name","call-outline"],[3,"fullscreen"],["pager","false"],[4,"ngIf"],["class","ion-text-center ion-padding-top",4,"ngFor","ngForOf"],["slot","fixed","horizontal","end","vertical","bottom"],["color","light",3,"click"],["name","basket-outline"],[3,"color"],[1,"ion-text-center","ion-padding-top"],["lines","none"],["slot","start","size","medium","color","theme",1,"price"],[3,"src"],["color","dark"],["lines","none",1,"ion-padding-start","ion-padding-end","ion-text-center"],["lines","none",1,"ion-text-center"],["fill","outline","color","dark",3,"click"]],template:function(n,t){1&n&&(l.Pb(0,"ion-header",0),l.Pb(1,"ion-toolbar"),l.Lb(2,"div",1),l.Pb(3,"ion-buttons",2),l.Pb(4,"ion-menu-button"),l.Pb(5,"ion-button",3),l.Lb(6,"ion-icon",4),l.Ob(),l.Ob(),l.Ob(),l.Lb(7,"ion-img",5),l.Pb(8,"ion-buttons",6),l.Pb(9,"ion-button",7),l.Lb(10,"ion-icon",8),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(11,"ion-content",9),l.Pb(12,"ion-slides",10),l.Pb(13,"ion-slide"),l.Pb(14,"ion-text"),l.jc(15,f,2,1,"h1",11),l.Lb(16,"br"),l.jc(17,p,2,1,"h2",11),l.Ob(),l.Ob(),l.Ob(),l.jc(18,g,14,4,"ion-card",12),l.Pb(19,"ion-fab",13),l.Pb(20,"ion-fab-button",14),l.Xb("click",(function(){return t.clickOnCart()})),l.Lb(21,"ion-icon",15),l.Pb(22,"ion-badge",16),l.kc(23),l.Ob(),l.Ob(),l.Ob(),l.Ob()),2&n&&(l.cc("translucent",!0),l.Ab(11),l.cc("fullscreen",!0),l.Ab(4),l.cc("ngIf",t.category),l.Ab(2),l.cc("ngIf",t.category),l.Ab(1),l.cc("ngForOf",t.products),l.Ab(4),l.cc("color",0==t.order.cart.items.length?"dark":"success"),l.Ab(1),l.lc(t.order.cart.items.length))},directives:[i.q,i.L,i.g,i.A,i.f,i.r,i.s,i.l,i.H,i.G,i.J,e.i,e.h,i.m,i.n,i.e,i.h,i.u,i.w],styles:["ion-slides[_ngcontent-%COMP%]{height:50%}ion-slides[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--ion-color-dark)}ion-slides[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px!important;font-weight:500!important;line-height:30px!important}ion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--ion-color-dark)}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}.price[_ngcontent-%COMP%]{font-weight:800}"]}),h)}],k=((O=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:O}),O.\u0275inj=l.Hb({factory:function(n){return new(n||O)},imports:[[c.i.forChild(P)],c.i]}),O),v=((m=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:m}),m.\u0275inj=l.Hb({factory:function(n){return new(n||m)},imports:[[e.b,r.a,i.M,k]]}),m)}}]);