"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[158],{7158:(le,h,o)=>{o.r(h),o.d(h,{WalletsModule:()=>L});var w=o(6814),t=o(95),f=o(4670),d=o(5219),x=o(3519),v=o.n(x),e=o(4946),b=o(1082),A=o(5379),Z=o(1455),u=o(4104),m=o(7213),N=o(5817),U=o(2656),p=o(8027),c=o(707),C=o(4480),W=o(3714),T=o(2352);function I(n,g){if(1&n){const l=e.EpF();e.TgZ(0,"div",30)(1,"h5",31),e._uU(2,"Lista de Cajas"),e.qZA(),e.TgZ(3,"span",32),e._UZ(4,"i",33),e.TgZ(5,"input",34),e.NdJ("input",function(a){e.CHM(l);const r=e.oxw();return e.KtG(r.onGlobalFilter(r.dt,a))}),e.qZA()()()}}function S(n,g){1&n&&(e.TgZ(0,"tr")(1,"th",35),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Base"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Descripci\xf3n"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Acciones"),e.qZA()())}function M(n,g){if(1&n){const l=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",36),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",37)(10,"p-button",38),e.NdJ("click",function(){const r=e.CHM(l).$implicit,s=e.oxw();return e.KtG(s.getWallet(r.id))}),e.qZA(),e._UZ(11,"p-confirmDialog"),e.TgZ(12,"p-button",39),e.NdJ("click",function(){const r=e.CHM(l).$implicit,s=e.oxw();return e.KtG(s.confirmDelete(r.id))}),e.qZA()()()}if(2&n){const l=g.$implicit,i=e.oxw();e.xp6(2),e.Q6J("value",i.wallets),e.xp6(2),e.Oqu(l.nombre),e.xp6(2),e.Oqu(l.base),e.xp6(2),e.Oqu(l.descripcion)}}const y=function(){return{"min-width":"50rem"}},_=function(){return["usuario","email","superadmin","estado"]},q=function(){return[10,20,30]},E=function(){return{width:"50vw"}},J=function(){return{standalone:!0}},j=function(){return{width:"500px"}};let H=(()=>{class n{constructor(l,i,a,r,s,Q,G,$,X,K,ee,te){this.walletService=l,this.permissionsService=i,this.hotelsService=a,this.confirmationService=r,this.toastModule=s,this.dialogModule=Q,this.messageService=G,this.usersService=$,this.breadcrumbService=X,this.tableModule=K,this.buttonModule=ee,this.cdRef=te,this.tipo=1,this.editarW=!1,this.crearW=!1,this.editarPermit=!1,this.crearPermit=!1,this.formNewWallet=new t.cw({nombre:new t.NI("",t.kI.required),descripcion:new t.NI("",t.kI.required),base:new t.NI("",t.kI.required),estado:new t.NI("",t.kI.required),hotel_id:new t.NI("",t.kI.required),tipo:new t.NI("",t.kI.required)}),this.formEditWallet=new t.cw({nombre:new t.NI("",t.kI.required),descripcion:new t.NI("",t.kI.required),base:new t.NI("",t.kI.required),estado:new t.NI("",t.kI.required),hotel_id:new t.NI("",t.kI.required),tipo:new t.NI("",t.kI.required),id:new t.NI("",t.kI.required)})}ngOnInit(){this.getAllHotels(),this.getAllWallets(),this.walletService.data.subscribe(l=>{this.wallets=l})}getAllHotels(){this.hotelsService.getHotels(30).subscribe(l=>{this.hotels=l.data,console.log(this.hotels)},l=>{console.log("Error: ",l)})}createWallet(){this.formNewWallet.get("hotel_id").setValue(this.selectedHotel.id),this.formNewWallet.get("tipo").setValue(this.tipo),this.walletService.CreateWallet(this.formNewWallet.value).subscribe(i=>{console.log(i),this.walletService.refresWalletsData(),this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Caja Creada.",sticky:!0,life:200}),this.crearW=!1},i=>{console.log("Error:",i)})}getAllWallets(){this.walletService.getWallets(30).subscribe(l=>{this.wallets=l.data,this.totalWallets=l.total},l=>{console.log("Error: ",l)})}getWallet(l){this.walletService.getWallteEditById(l).subscribe(i=>{let a;this.walletData=i,i.hotel.forEach(r=>{r.id==i.caja.hotel_id&&(a=r)}),console.log(a),this.formEditWallet.get("nombre").setValue(i.nombre),this.formEditWallet.get("base").setValue(i.base),this.formEditWallet.get("descripcion").setValue(i.descripcion),this.formEditWallet.get("hotel_id").setValue(a),this.editarW=!0})}updateWallet(){this.formEditWallet.get("id").setValue(this.walletData.id),this.formEditWallet.get("hotel_id").setValue(this.selectedHotel.id),this.formEditWallet.get("tipo").setValue(this.tipo);const l=this.formEditWallet.value;console.log(l),this.walletService.updateWallets(l).subscribe(i=>{console.log(i),this.editarW=!1,this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Caja actualizada.",sticky:!0,life:200}),this.walletService.refresWalletsData()},i=>{console.log("Error:",i)})}confirmDelete(l){console.log(l),v().fire({title:"\xbfEstas Seguro que deseas eliminar esta caja?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&(this.walletService.deleteWallets(l).subscribe(a=>{console.log(a),this.walletService.refresWalletsData()}),v().fire({title:"Confirmaci\xf3n",text:"La caja ha sido eliminada.",icon:"success"}))})}modalNewW(){this.crearW=!0}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(b.X),e.Y36(A.q),e.Y36(Z.s),e.Y36(d.YP),e.Y36(u.EV),e.Y36(m.S),e.Y36(d.ez),e.Y36(N.f),e.Y36(U.p),e.Y36(p.U$),e.Y36(c.hJ),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-permisssions"]],features:[e._Bn([d.YP,d.ez])],decls:66,vars:30,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"pi","pi-users","mr-2"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","icon","pi pi-user-plus",1,"p-button-outlined","mr-2",3,"click"],["pButton","","pRipple","","label","Exportar","icon","pi pi-check"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} de {totalRecords} Permisos","selectionMode","multiple","dataKey","hotel",3,"value","tableStyle","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Crear una Caja",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4"],["type","text","placeholder","Caja 1","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","Caja hotel 1","pInputText","","formControlName","descripcion",1,"w-full","mb-3","border-round-3xl"],["type","text","placeholder","200.000","pInputText","","formControlName","base",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-6"],["optionLabel","nombre",3,"options","ngModel","ngModelOptions","ngModelChange"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Permiso","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],["header","Editar Caja","modal","modal",3,"visible","visibleChange","onVisibleChange"],["optionLabel","nombre","formControlName","hotel_id",3,"options","ngModel","ngModelChange"],["pButton","","pRipple","","label","Editar Caja","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],[3,"value"],[1,"flex","gap-2"],["icon","pi pi-user-edit","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"]],template:function(i,a){1&i&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),e._uU(5,"Cajas"),e.qZA(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"i",5),e.TgZ(9,"span"),e._uU(10,"Cajas Creadas"),e.qZA()()()(),e.TgZ(11,"div",6)(12,"button",7),e.NdJ("click",function(){return a.modalNewW()}),e.qZA(),e._UZ(13,"button",8),e.qZA()()(),e.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"p-table",12),e.YNc(18,I,6,0,"ng-template",13),e.YNc(19,S,11,0,"ng-template",14),e.YNc(20,M,13,4,"ng-template",15),e.qZA()()()(),e.TgZ(21,"p-dialog",16),e.NdJ("visibleChange",function(s){return a.crearW=s}),e.TgZ(22,"div",10)(23,"h5"),e._uU(24,"Completa el formulario"),e.qZA(),e.TgZ(25,"form",17),e.NdJ("ngSubmit",function(){return a.createWallet()}),e.TgZ(26,"div",18)(27,"div",19)(28,"label"),e._uU(29,"Nombre de la Caja"),e.qZA(),e._UZ(30,"input",20),e.qZA(),e.TgZ(31,"div",19)(32,"label"),e._uU(33,"Descripcion"),e.qZA(),e._UZ(34,"input",21),e.qZA(),e.TgZ(35,"div",19)(36,"label"),e._uU(37,"Base"),e.qZA(),e._UZ(38,"input",22),e.qZA(),e.TgZ(39,"div",23)(40,"label"),e._uU(41,"Hotel"),e.qZA(),e.TgZ(42,"p-dropdown",24),e.NdJ("ngModelChange",function(s){return a.selectedHotel=s}),e.qZA()(),e.TgZ(43,"div",25),e._UZ(44,"button",26),e.qZA()()()()(),e.TgZ(45,"p-dialog",27),e.NdJ("visibleChange",function(s){return a.editarW=s})("onVisibleChange",function(){return a.editarW=!a.editarW}),e.TgZ(46,"form",17),e.NdJ("ngSubmit",function(){return a.updateWallet()}),e.TgZ(47,"div",18)(48,"div",19)(49,"label"),e._uU(50,"Nombre de la Caja"),e.qZA(),e._UZ(51,"input",20),e.qZA(),e.TgZ(52,"div",19)(53,"label"),e._uU(54,"Descripcion"),e.qZA(),e._UZ(55,"input",21),e.qZA(),e.TgZ(56,"div",19)(57,"label"),e._uU(58,"Base"),e.qZA(),e._UZ(59,"input",22),e.qZA(),e.TgZ(60,"div",23)(61,"label"),e._uU(62,"Hoteles"),e.qZA(),e.TgZ(63,"p-dropdown",28),e.NdJ("ngModelChange",function(s){return a.selectedHotel=s}),e.qZA()(),e.TgZ(64,"div",25),e._UZ(65,"button",29),e.qZA()()()()),2&i&&(e.xp6(17),e.Q6J("value",a.wallets)("tableStyle",e.DdM(24,y))("rows",10)("globalFilterFields",e.DdM(25,_))("paginator",!0)("rowsPerPageOptions",e.DdM(26,q))("showCurrentPageReport",!0)("rowHover",!0),e.xp6(4),e.Akn(e.DdM(27,E)),e.Q6J("visible",a.crearW)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(4),e.Q6J("formGroup",a.formNewWallet),e.xp6(17),e.Q6J("options",a.hotels)("ngModel",a.selectedHotel)("ngModelOptions",e.DdM(28,J)),e.xp6(3),e.Akn(e.DdM(29,j)),e.Q6J("visible",a.editarW),e.xp6(1),e.Q6J("formGroup",a.formEditWallet),e.xp6(17),e.Q6J("options",a.hotels)("ngModel",a.selectedHotel))},dependencies:[p.iA,d.jx,p.UA,p.Mo,c.Hq,c.zx,t._Y,t.Fj,t.JJ,t.JL,t.On,C.H,u.FN,W.o,T.Lt,m.V,t.sg,t.u],encapsulation:2})}return n})(),B=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#l=this.\u0275inj=e.cJS({imports:[f.Bz.forChild([{path:"",component:H}]),f.Bz]})}return n})();var Y=o(6068),D=o(6340),V=o(6022),P=o(6218),F=o(1865),O=o(354),R=o(9862),z=o(8712),k=o(5722);let L=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#l=this.\u0275inj=e.cJS({providers:[{provide:R.TP,useClass:z.n,multi:!0},Z.s,b.X],imports:[w.ez,B,p.U$,Y.O,t.u5,c.hJ,C.T,u.EV,D.V,V.Xt,W.j,P.A,T.kW,F.cc,O.L$,m.S,k.ii.forRoot(),t.UX]})}return n})()}}]);