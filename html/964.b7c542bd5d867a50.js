"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[964],{964:(ae,f,n)=>{n.r(f),n.d(f,{UsersModule:()=>te});var b=n(6814),r=n(95),v=n(86),_=n(5861),p=n(5219),Z=n(9862),I=n(3519),U=n.n(I),c=n(2791),e=n(4946),w=n(8672),m=n(4104),g=n(7213),x=n(5817),N=n(2656),h=n(9664),d=n(707),S=n(979),T=n(4480),C=n(3714),A=n(2160);function y(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openNew())}),e.qZA()}}function J(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",36)(1,"h5",37),e._uU(2,"Lista de Usuarios"),e.qZA(),e.TgZ(3,"span",38)(4,"form",39)(5,"div",40)(6,"input",41),e.NdJ("input",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.searchInput())}),e.qZA(),e.TgZ(7,"button",42),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.search(i.dt))}),e.qZA()()()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.formSearch)}}function P(o,l){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Usuario"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Correo"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Estado"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Rol"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Acciones"),e.qZA()())}function q(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"p-button",46),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.getAUser(i.id))}),e.qZA()}}function D(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"p-button",47),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.confirmDelete(i.id))}),e.qZA()}}function E(o,l){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",43),e.YNc(10,q,1,0,"p-button",44),e.YNc(11,D,1,0,"p-button",45),e._UZ(12,"p-confirmDialog"),e.qZA()()),2&o){const t=l.$implicit,s=e.oxw();e.xp6(2),e.Oqu(t.usuario),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(1==t.estado?"Activo":"Inactivo"),e.xp6(2),e.Oqu(s.getRolName(t.rol_id)),e.xp6(2),e.Q6J("ngIf",s.permisoActualizar),e.xp6(1),e.Q6J("ngIf",s.permisoEliminar)}}function R(o,l){if(1&o&&e._UZ(0,"input",48),2&o){const t=e.oxw();e.Q6J("value",t.userData.id)}}function Q(o,l){if(1&o&&e._UZ(0,"input",49),2&o){const t=e.oxw();e.s9C("placeholder",t.userData.usuario)}}function Y(o,l){if(1&o&&e._UZ(0,"input",50),2&o){const t=e.oxw();e.s9C("placeholder",t.userData.email)}}const B=function(){return{"min-width":"50rem"}},F=function(){return["nombre","medida","precio","cantidad","inventario","acciones"]},M=function(){return{width:"50vw"}},z=function(){return{width:"500px"}};let k=(()=>{class o{constructor(t,s,i,a,u,ie,oe,se,re,ne){this.confirmationService=t,this.spinner=s,this.toastModule=i,this.dialogModule=a,this.messageService=u,this.usersService=ie,this.breadcrumbService=oe,this.tableModule=se,this.buttonModule=re,this.rolesService=ne,this.permisoCrear=c.e.hasPermission(["administracion.usuario.crear"]),this.permisoActualizar=c.e.hasPermission(["administracion.usuario.actualizar"]),this.permisoEliminar=c.e.hasPermission(["administracion.usuario.eliminar"]),this.visible=!1,this.visibleDialog1=!1,this.selectedState=null,this.selectedUserIndex=-1,this.pageCount=10,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.loadingTable=!1,this.first=0,this.rows=8,this.opciones=[{nombre:"Si",value:1},{nombre:"No",value:0}],this.formSearch=new r.cw({search:new r.NI("",[])}),this.formNuser=new r.cw({usuario:new r.NI("",r.kI.required),email:new r.NI("",[r.kI.required,r.kI.email]),rol_id:new r.NI("",r.kI.required),superadmin:new r.NI("",r.kI.required),password:new r.NI("",r.kI.required)}),this.formEuser=new r.cw({usuario:new r.NI("",r.kI.required),email:new r.NI("",[r.kI.required,r.kI.email]),rol_id:new r.NI("",r.kI.required),superadmin:new r.NI("",r.kI.required),id:new r.NI("",r.kI.required)})}ngOnInit(){this.getIndex(),this.usersService.data.subscribe(t=>{this.users=t}),this.breadcrumbService.currentBreadcrumbs.subscribe(t=>this.breadcrumbs=t),this.rolesService.getRoles(999,"",1).subscribe(t=>{this.roles=t.data})}onQuitItem(t){this.breadcrumbService.quitItem(t)}getIndex(t="",s=this.pageCount,i=1){this.spinner.show(),this.loadingTable=!0,this.usersService.getAll(s,t,i).subscribe(a=>{this.loadingTable=!1,this.users=a.data,this.ultimaPage=a.last_page,this.totalUsers=a.total,this.ultimaPage=a.last_page,a.total>s&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},a=>{console.log("Error: ",a)})}getAUser(t){this.usersService.getById(t).subscribe(s=>{this.userData=s,this.userData.id=t,this.visibleDialog1=!0})}getRolName(t){return 1===t?"Super Administrador":2===t?"Administrador":3===t?"Gestor":"Rol no identificado"}openNew(){this.visible=!0}newUser(){var t=this;return(0,_.Z)(function*(){t.usersService.insertData(t.formNuser.value).subscribe(i=>{t.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Usuario creado.",sticky:!0,life:200}),t.visible=!1,t.usersService.refreshUsersData()},i=>{console.log("Error:",i)})})()}updateUser(){this.formEuser.get("id").setValue(this.userData.id),this.usersService.updateUser(this.formEuser.value).subscribe(s=>{this.visibleDialog1=!1,this.messageService.add({severity:"info",summary:"Confirmaci\xf3n Exitosa",detail:"Hotel actualizado.",sticky:!0,life:200}),this.usersService.refreshUsersData()},s=>{console.log("Error:",s)})}deleteUser(t){const s={headers:new Z.WM({"Content-Type":"application/x-www-form-urlencoded"}),body:`id=${t}`};this.usersService.deleteUser(s).subscribe(i=>{this.usersService.refreshUsersData()},i=>{console.log("Error:",i)})}confirmDelete(t){U().fire({title:"\xbfEstas Seguro que deseas eliminar el usuario?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(s=>{s.isConfirmed&&(this.deleteUser(t),U().fire({title:"Confirmaci\xf3n",text:"El usuario ha sido eliminado.",icon:"success"}))})}searchInput(){let t=this.formSearch.get("search").value;""==t&&this.getIndex(t)}search(t){let s=this.formSearch.get("search").value;this.getIndex(s)}onPage(t){this.pageCount=t.rows,this.getIndex("",this.pageCount)}onPageChange(t){this.first=t.first,this.rows=t.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(p.YP),e.Y36(w.t2),e.Y36(m.EV),e.Y36(g.S),e.Y36(p.ez),e.Y36(x.f),e.Y36(N.p),e.Y36(h.U$),e.Y36(d.hJ),e.Y36(S.f))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([p.YP,p.ez])],decls:70,vars:38,consts:[[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Nuevo Usuario",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["type","text","placeholder","Usuario","pInputText","","formControlName","usuario",1,"w-full","mb-3","border-round-3xl"],["id","email1","type","email","placeholder","Correo Electr\xf3nico","pInputText","","formControlName","email",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-3"],["htmlFor","state"],["optionLabel","nombre","formControlName","rol_id","optionValue","id","placeholder","Seleccione una opci\xf3n",3,"options","virtualScrollItemSize"],["optionLabel","nombre","formControlName","superadmin","optionValue","value","placeholder","Seleccione una opci\xf3n",3,"options"],["id","password","type","password","placeholder","Contrase\xf1a","pInputText","","formControlName","password",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Usuario","icon","pi pi-user","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["id","editU","header","Editar Usuario",3,"visible","modal","draggable","resizable","visibleChange","onVisibleChange"],["type","text","hidden","hidden","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","id",3,"value",4,"ngIf"],["type","text","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","usuario",3,"placeholder",4,"ngIf"],["id","email1","type","email","pInputText","","class","w-full mb-3 border-round-3xl","formControlName","email",3,"placeholder",4,"ngIf"],["pButton","","pRipple","","label","Editar Usuario","icon","pi pi-pencil","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl"],["pButton","","pRipple","","label","Crear",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["type","text","hidden","hidden","pInputText","","formControlName","id",1,"w-full","mb-3","border-round-3xl",3,"value"],["type","text","pInputText","","formControlName","usuario",1,"w-full","mb-3","border-round-3xl",3,"placeholder"],["id","email1","type","email","pInputText","","formControlName","email",1,"w-full","mb-3","border-round-3xl",3,"placeholder"]],template:function(s,i){1&s&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"div",2),e._uU(5,"Usuarios"),e.qZA()(),e.TgZ(6,"div",3),e.YNc(7,y,1,0,"button",4),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"p-table",8),e.NdJ("onPage",function(u){return i.onPage(u)}),e.YNc(12,J,8,1,"ng-template",9),e.YNc(13,P,11,0,"ng-template",10),e.YNc(14,E,13,6,"ng-template",11),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"div",12)(17,"span",13)(18,"button",14),e.NdJ("click",function(){return i.leftTable()}),e.qZA(),e._UZ(19,"button",15),e.TgZ(20,"button",16),e.NdJ("click",function(){return i.rightTable()}),e.qZA()()()()()(),e.TgZ(21,"p-dialog",17),e.NdJ("visibleChange",function(u){return i.visible=u}),e.TgZ(22,"div",6)(23,"form",18),e.NdJ("ngSubmit",function(){return i.newUser()}),e.TgZ(24,"div",19)(25,"div",20)(26,"label"),e._uU(27,"Usuario"),e.qZA(),e._UZ(28,"input",21),e.qZA(),e.TgZ(29,"div",20)(30,"label"),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",22),e.qZA(),e.TgZ(33,"div",23)(34,"label",24),e._uU(35,"Rol"),e.qZA(),e._UZ(36,"p-dropdown",25),e.qZA(),e.TgZ(37,"div",23)(38,"label",24),e._uU(39,"Super Admin"),e.qZA(),e._UZ(40,"p-dropdown",26),e.qZA(),e.TgZ(41,"div",20)(42,"label"),e._uU(43,"Contrase\xf1a"),e.qZA(),e._UZ(44,"input",27),e.qZA(),e.TgZ(45,"div",28),e._UZ(46,"button",29),e.qZA()()()()(),e.TgZ(47,"p-dialog",30),e.NdJ("visibleChange",function(u){return i.visibleDialog1=u})("onVisibleChange",function(){return i.visibleDialog1=!i.visibleDialog1}),e.TgZ(48,"form",18),e.NdJ("ngSubmit",function(){return i.updateUser()}),e.TgZ(49,"div",19)(50,"div",28),e.YNc(51,R,1,1,"input",31),e.qZA(),e.TgZ(52,"div",20)(53,"label"),e._uU(54,"Usuario"),e.qZA(),e.YNc(55,Q,1,1,"input",32),e.qZA(),e.TgZ(56,"div",20)(57,"label"),e._uU(58,"Email"),e.qZA(),e.YNc(59,Y,1,1,"input",33),e.qZA(),e.TgZ(60,"div",20)(61,"label",24),e._uU(62,"Rol"),e.qZA(),e._UZ(63,"p-dropdown",25),e.qZA(),e.TgZ(64,"div",20)(65,"label",24),e._uU(66,"Super Admin"),e.qZA(),e._UZ(67,"p-dropdown",26),e.qZA(),e.TgZ(68,"div",28),e._UZ(69,"button",34),e.qZA()()()()),2&s&&(e.xp6(7),e.Q6J("ngIf",i.permisoCrear),e.xp6(4),e.Q6J("value",i.users)("tableStyle",e.DdM(34,B))("loading",i.loadingTable)("rows",8)("globalFilterFields",e.DdM(35,F))("rowHover",!0),e.xp6(7),e.Q6J("disabled",!i.disablePageLeft),e.xp6(1),e.Q6J("label",i.pageActual),e.xp6(1),e.Q6J("disabled",!i.disablePageRight),e.xp6(1),e.Akn(e.DdM(36,M)),e.Q6J("visible",i.visible)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",i.formNuser),e.xp6(13),e.Q6J("options",i.roles)("virtualScrollItemSize",38),e.xp6(4),e.Q6J("options",i.opciones),e.xp6(6),e.Q6J("disabled",i.formNuser.invalid),e.xp6(1),e.Akn(e.DdM(37,z)),e.Q6J("visible",i.visibleDialog1)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("formGroup",i.formEuser),e.xp6(3),e.Q6J("ngIf",i.visibleDialog1),e.xp6(4),e.Q6J("ngIf",i.visibleDialog1),e.xp6(4),e.Q6J("ngIf",i.visibleDialog1),e.xp6(4),e.Q6J("options",i.roles)("virtualScrollItemSize",38),e.xp6(4),e.Q6J("options",i.opciones))},dependencies:[b.O5,h.iA,p.jx,d.Hq,d.zx,r._Y,r.Fj,r.JJ,r.JL,T.H,m.FN,C.o,A.Lt,g.V,r.sg,r.u],encapsulation:2})}return o})();var G=n(2506);let L=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[v.Bz.forChild([{path:"",component:k,canActivate:[G.a],data:{permissions:["administracion.usuario"]}}]),v.Bz]})}return o})();var H=n(6068),V=n(6340),j=n(6022),O=n(6218),$=n(1865),K=n(354),X=n(8712),W=n(5722),ee=n(1105);let te=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({providers:[{provide:Z.TP,useClass:X.n,multi:!0},x.f],imports:[b.ez,L,h.U$,H.O,r.u5,d.hJ,T.T,m.EV,V.V,j.Xt,C.j,O.A,A.kW,$.cc,K.L$,g.S,W.ii.forRoot(),r.UX,ee.RolesModule]})}return o})()}}]);