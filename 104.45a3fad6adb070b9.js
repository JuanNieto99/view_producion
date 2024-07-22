"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[104],{3104:(ut,u,r)=>{r.r(u),r.d(u,{InventoryModule:()=>mt});var g=r(6814),l=r(95),h=r(9664),A=r(6068),c=r(707),f=r(4480),E=r(4104),U=r(6340),J=r(6022),I=r(3714),b=r(6218),y=r(2160),N=r(1865),q=r(354),_=r(7213),x=r(9862),w=r(8712),M=r(5722),v=r(8672),P=r(1712),C=r(228),m=r(2791),Q=r(3519),d=r.n(Q),t=r(4946),Y=r(5619),S=r(4444);let Z=(()=>{class n{constructor(e){this.httpClient=e,this.dataSubject=new Y.X([]),this.data=this.dataSubject.asObservable(),this.baseUrl=S.D.url,this.endpointInventoryCreate="/inventarioCrear",this.endpointListar="/inventarioListar",this.endpointInventoryGet="/inventarioEditar/",this.endpointInventoryUpdate="/inventarioActualizar",this.endpointDelete="/inventarioEliminar"}getAll(e,o="",i=1){return this.httpClient.post(`${this.baseUrl+this.endpointListar}?per_page=${e}&page=${i}&search=${o}`,{})}getInventory(e){return this.httpClient.get(`${this.baseUrl+this.endpointInventoryGet+e}`)}createInventory(e){return this.httpClient.post(`${this.baseUrl+this.endpointInventoryCreate}`,e)}updateInventory(e){return this.httpClient.post(`${this.baseUrl+this.endpointInventoryUpdate}`,e)}deleteInventory(e){return this.httpClient.post(`${this.baseUrl+this.endpointDelete}`,e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(x.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var F=r(5219);function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openModal())}),t.qZA()}}function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",33),t._UZ(1,"span"),t.TgZ(2,"span",34)(3,"form",35)(4,"div",36)(5,"input",37),t.NdJ("keyup.enter",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.buscarPorTecla(i))})("input",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchInput())}),t.qZA(),t.TgZ(6,"button",38),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.search())}),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.formSearch)}}function R(n,a){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Hotel"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Descripci\xf3n"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()())}function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",42),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.editInventory(i.id))}),t.qZA()}}function D(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",43),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.confirmDelete(i.id))}),t.qZA()}}function G(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",39),t.YNc(8,z,1,0,"p-button",40),t._UZ(9,"p-confirmDialog"),t.YNc(10,D,1,0,"p-button",41),t.qZA()()),2&n){const e=a.$implicit,o=t.oxw();t.xp6(2),t.Oqu(e.hotel?e.hotel.nombre:""),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.descripcion),t.xp6(2),t.Q6J("ngIf",o.permisoActualizar),t.xp6(2),t.Q6J("ngIf",o.permisoEliminar)}}function k(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function H(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,k,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formCreateInventory.get("hotel_id").hasError("required"))}}function $(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function j(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"M\xe1ximo 50 caracteres"),t.qZA())}function K(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,$,2,0,"div",44),t.YNc(2,j,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formCreateInventory.get("nombre").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formCreateInventory.get("nombre").hasError("maxlength"))}}function O(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function V(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"M\xe1ximo 500 caracteres"),t.qZA())}function X(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,O,2,0,"div",44),t.YNc(2,V,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formCreateInventory.get("descripcion").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formCreateInventory.get("descripcion").hasError("maxlength"))}}function W(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function tt(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,W,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formEditInventory.get("hotel_id").hasError("required"))}}function et(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function nt(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"M\xe1ximo 50 caracteres"),t.qZA())}function it(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,et,2,0,"div",44),t.YNc(2,nt,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formEditInventory.get("nombre").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formEditInventory.get("nombre").hasError("maxlength"))}}function ot(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"Campo requerido"),t.qZA())}function rt(n,a){1&n&&(t.TgZ(0,"div",45),t._uU(1,"M\xe1ximo 500 caracteres"),t.qZA())}function at(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,ot,2,0,"div",44),t.YNc(2,rt,2,0,"div",44),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.formEditInventory.get("descripcion").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.formEditInventory.get("descripcion").hasError("maxlength"))}}const st=function(){return{"min-width":"50rem"}},lt=function(){return["nombre","medida","precio","cantidad","inventario","acciones"]},T=function(){return{width:"95vw"}};let dt=(()=>{class n{ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalInventory=!1}constructor(e,o,i){this.InventoryService=e,this.FB=o,this.spinner=i,this.permisoCrear=m.e.hasPermission(["gestionInventario.inventario.crear"]),this.permisoActualizar=m.e.hasPermission(["gestionInventario.inventario.actualizar"]),this.permisoEliminar=m.e.hasPermission(["gestionInventario.inventario.eliminar"]),this.visibleModalInventory=!0,this.loadingTable=!1,this.visibleModalInventarioEditar=!1,this.idEditando=0,this.pageCount=10,this.pageActual=1,this.ultimaPage=1,this.registrosContar=0,this.disablePageLeft=!1,this.disablePageRight=!1,this.first=0,this.rows=8}onPage(e){this.pageCount=e.rows,this.getIndex("",this.pageCount)}getIndex(e="",o=this.pageCount,i=1){this.spinner.show(),this.loadingTable=!0,this.InventoryService.getAll(o,e,i).subscribe(s=>{this.loadingTable=!1,this.inventoryData=s.data,this.ultimaPage=s.last_page,this.registrosContar=s.total,this.ultimaPage=s.last_page,s.total>o&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},s=>{console.log("Error: ",s)})}openModal(){this.onCreate()}onCreate(){this.formCreateInventory.reset(),this.InventoryService.getInventory(0).subscribe(e=>{this.hotel=e.hotel,this.descripcion=e.descripcion,this.nombre=e.nombre,this.visibleModalInventory=!0},e=>{console.log("Error: ",e)})}submitCreate(){this.formCreateInventory.valid?this.newInventory():this.formCreateInventory.markAllAsTouched()}newInventory(){this.visibleModalInventory=!0,this.spinner.show();let e=this.formCreateInventory.value;e.hotel_id=e.hotel_id.id,e.estado=1,this.InventoryService.createInventory(e).subscribe(o=>{this.spinner.hide(),this.visibleModalInventory=!1,"success"==o.code?(d().fire({title:"Exito",text:"Inventario creado exitosamente.",icon:"success"}),this.getIndex()):d().fire({title:"Error",text:"Error al crear el inventario.",icon:"error"})},o=>{console.log("Error: ",o)})}editInventory(e){this.idEditando=e,this.spinner.show(),this.InventoryService.getInventory(e).subscribe(o=>{this.spinner.hide(),this.hotel=o.hotel,this.nombre=o.inventario.nombre,this.descripcion=o.inventario.descripcion,this.formEditInventory.setValue({hotel_id:this.hotel,nombre:this.nombre,descripcion:this.descripcion}),setTimeout(()=>{this.visibleModalInventarioEditar=!0},1)},o=>{console.log("Error: ",o)})}updateInventory(){this.spinner.show();let e=this.formEditInventory.value;e.hotel_id&&(e.hotel_id=e.hotel_id.id),e.tipo&&(e.tipo=e.tipo.id),e.pisos&&(e.piso=e.pisos),e.id=this.idEditando,e.estado=1,this.InventoryService.updateInventory(e).subscribe(o=>{this.spinner.hide(),this.visibleModalInventarioEditar=!1,"success"==o.code?(d().fire({title:"\xc9xito",text:"Inventario actualizado exitosamente.",icon:"success"}),this.getIndex()):d().fire({title:"Error",text:"Error al actualizar el inventario.",icon:"error"})},o=>{console.log("Error: ",o)})}submitUpdate(){this.formEditInventory.valid&&this.updateInventory()}confirmDelete(e){d().fire({title:"\xbfEstas seguro que deseas eliminar este inventario?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&(this.spinner.show(),this.InventoryService.deleteInventory({id:e}).subscribe(i=>{this.spinner.hide(),"success"==i.code?(d().fire({title:"Exito",text:"Inventario eliminada exitosamente.",icon:"success"}),this.getIndex()):d().fire({title:"Error",text:"Error al eliminar el inventario.",icon:"error"})},i=>{console.log("Error: ",i)}))})}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateInventory=this.FB.group({nombre:["",[l.kI.required,l.kI.maxLength(50)]],descripcion:["",[l.kI.maxLength(500)]],hotel_id:["",l.kI.required]}),this.formEditInventory=this.FB.group({nombre:["",[l.kI.required,l.kI.maxLength(50)]],descripcion:["",[l.kI.maxLength(500)]],hotel_id:["",l.kI.required]})}searchInput(){let e=this.formSearch.get("search").value;this.pageActual=1,""==e&&this.getIndex(e)}search(){let e=this.formSearch.get("search").value;this.getIndex(e)}onPageChange(e){this.first=e.first,this.rows=e.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}buscarPorTecla(e){"Enter"==e.code&&this.search()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(Z),t.Y36(l.qu),t.Y36(v.t2))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-inventory"]],decls:66,vars:38,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2","icon","",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear Inventario",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],[4,"ngIf"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["formControlName","descripcion","pInputTextarea","","rows","3","cols","20"],["pButton","","pRipple","","label","Crear Inventario","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Producto",3,"visible","modal","draggable","resizable","visibleChange"],["pButton","","pRipple","","label","Editar Producto","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["style","color: red;",4,"ngIf"],[2,"color","red"]],template:function(o,i){1&o&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5,"Bodega"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"div",5),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,B,1,0,"button",7),t.qZA()()(),t.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"p-table",11),t.NdJ("onPage",function(p){return i.onPage(p)}),t.YNc(14,L,7,1,"ng-template",12),t.YNc(15,R,9,0,"ng-template",13),t.YNc(16,G,11,5,"ng-template",14),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"div",15)(19,"span",16)(20,"button",17),t.NdJ("click",function(){return i.leftTable()}),t.qZA(),t._UZ(21,"button",18),t.TgZ(22,"button",19),t.NdJ("click",function(){return i.rightTable()}),t.qZA()()()()()(),t.TgZ(23,"p-dialog",20),t.NdJ("visibleChange",function(p){return i.visibleModalInventory=p}),t.TgZ(24,"div",9)(25,"form",21),t.NdJ("ngSubmit",function(){return i.submitCreate()}),t.TgZ(26,"div",22)(27,"div",23)(28,"label"),t._uU(29,"Hotel"),t.qZA(),t._UZ(30,"p-dropdown",24),t.YNc(31,H,2,1,"div",25),t.qZA(),t.TgZ(32,"div",23)(33,"label"),t._uU(34,"Nombre de inventario"),t.qZA(),t._UZ(35,"input",26),t.YNc(36,K,3,2,"div",25),t.qZA(),t.TgZ(37,"div",27)(38,"label"),t._uU(39,"Descripci\xf3n"),t.qZA(),t._UZ(40,"textarea",28),t.YNc(41,X,3,2,"div",25),t.qZA(),t.TgZ(42,"div",27),t._UZ(43,"button",29),t.qZA()()()()(),t.TgZ(44,"p-dialog",30),t.NdJ("visibleChange",function(p){return i.visibleModalInventarioEditar=p}),t.TgZ(45,"div",9)(46,"form",21),t.NdJ("ngSubmit",function(){return i.submitUpdate()}),t.TgZ(47,"div",22)(48,"div",23)(49,"label"),t._uU(50,"Hotel"),t.qZA(),t._UZ(51,"p-dropdown",24),t.YNc(52,tt,2,1,"div",25),t.qZA(),t.TgZ(53,"div",23)(54,"label"),t._uU(55,"Nombre de inventario"),t.qZA(),t._UZ(56,"input",26),t.YNc(57,it,3,2,"div",25),t.qZA(),t.TgZ(58,"div",27)(59,"label"),t._uU(60,"Descripci\xf3n"),t.qZA(),t._UZ(61,"textarea",28),t.YNc(62,at,3,2,"div",25),t.qZA(),t.TgZ(63,"div",27),t._UZ(64,"button",31),t.qZA()(),t._UZ(65,"br"),t.qZA()()()),2&o&&(t.xp6(9),t.Q6J("ngIf",i.permisoCrear),t.xp6(4),t.Q6J("value",i.inventoryData)("tableStyle",t.DdM(34,st))("loading",i.loadingTable)("rows",8)("globalFilterFields",t.DdM(35,lt))("rowHover",!0),t.xp6(7),t.Q6J("disabled",!i.disablePageLeft),t.xp6(1),t.Q6J("label",i.pageActual),t.xp6(1),t.Q6J("disabled",!i.disablePageRight),t.xp6(1),t.Akn(t.DdM(36,T)),t.Q6J("visible",i.visibleModalInventory)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",i.formCreateInventory),t.xp6(5),t.Q6J("options",i.hotel),t.xp6(1),t.Q6J("ngIf",i.formCreateInventory.get("hotel_id").invalid&&(i.formCreateInventory.get("hotel_id").dirty||i.formCreateInventory.get("hotel_id").touched)),t.xp6(5),t.Q6J("ngIf",i.formCreateInventory.get("nombre").invalid&&(i.formCreateInventory.get("nombre").dirty||i.formCreateInventory.get("nombre").touched)),t.xp6(5),t.Q6J("ngIf",i.formCreateInventory.get("descripcion").invalid&&(i.formCreateInventory.get("descripcion").dirty||i.formCreateInventory.get("descripcion").touched)),t.xp6(2),t.Q6J("disabled",i.formCreateInventory.invalid),t.xp6(1),t.Akn(t.DdM(37,T)),t.Q6J("visible",i.visibleModalInventarioEditar)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",i.formEditInventory),t.xp6(5),t.Q6J("options",i.hotel),t.xp6(1),t.Q6J("ngIf",i.formEditInventory.get("hotel_id").invalid&&(i.formEditInventory.get("hotel_id").dirty||i.formEditInventory.get("hotel_id").touched)),t.xp6(5),t.Q6J("ngIf",i.formEditInventory.get("nombre").invalid&&(i.formEditInventory.get("nombre").dirty||i.formEditInventory.get("nombre").touched)),t.xp6(5),t.Q6J("ngIf",i.formEditInventory.get("descripcion").invalid&&(i.formEditInventory.get("descripcion").dirty||i.formEditInventory.get("descripcion").touched)),t.xp6(2),t.Q6J("disabled",i.formEditInventory.invalid))},dependencies:[g.O5,h.iA,F.jx,c.Hq,c.zx,l._Y,l.Fj,l.JJ,l.JL,f.H,I.o,b.g,y.Lt,_.V,l.sg,l.u,v.Ro],encapsulation:2})}return n})();var pt=r(2506);let ct=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[C.Bz.forChild([{path:"",component:dt,canActivate:[pt.a],data:{permissions:["gestionInventario.inventario"]}}]),C.Bz]})}return n})();var vt=r(1455);let mt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({providers:[{provide:x.TP,useClass:w.n,multi:!0},Z,vt.s],imports:[g.ez,ct,h.U$,A.O,l.u5,c.hJ,f.T,E.EV,U.V,J.Xt,I.j,b.A,y.kW,N.cc,q.L$,_.S,M.ii.forRoot(),l.UX,v.ef,P.U]})}return n})()}}]);