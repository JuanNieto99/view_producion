"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[669],{7669:(ae,f,a)=>{a.r(f),a.d(f,{TypeRoomsModule:()=>ne});var d=a(6814),s=a(95),T=a(9664),A=a(6068),c=a(707),b=a(4480),U=a(4104),E=a(6340),J=a(6022),v=a(3714),I=a(6218),y=a(2160),R=a(1865),N=a(354),_=a(7213),u=a(9862),q=a(8712),P=a(5722),g=a(8672),w=a(1712),Z=a(228),h=a(2791),M=a(3519),p=a.n(M),e=a(4946),H=a(4444);let C=(()=>{class i{constructor(t){this.httpClient=t,this.baseUrl=H.D.url,this.endpointListar="/tipoHabitacionListar",this.endpointTypeRoomGet="/tipoHabitacionEditar/",this.endpointTypeRoomUpdate="/tipoHabitacionActualizar",this.endpointTypeRoomCreate="/tipoHabitacionCrear",this.endpointDelete="/tipoHabitacionEliminar/"}getTypeRoom(t){return this.httpClient.get(`${this.baseUrl+this.endpointTypeRoomGet+t}`)}getAll(t,n="",o=1){const r={headers:new u.WM({"Content-Type":"application/json"})};return this.httpClient.post(`${this.baseUrl+this.endpointListar}?per_page=${t}&page=${o}&search=${n}`,r)}createTypeRoom(t){return this.httpClient.post(`${this.baseUrl+this.endpointTypeRoomCreate}`,t)}updateTypeRoom(t){return this.httpClient.post(`${this.baseUrl+this.endpointTypeRoomUpdate}`,t)}deleteTypeRoom(t){return this.httpClient.post(`${this.baseUrl+this.endpointDelete}`,t)}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(u.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var B=a(5219);function F(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.openModal())}),e.qZA()}}function Q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",46),e._UZ(1,"span"),e.TgZ(2,"span",47)(3,"form",22)(4,"div",48)(5,"input",49),e.NdJ("keyup.enter",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.buscarPorTecla(o))})("input",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.searchInput())}),e.qZA(),e.TgZ(6,"button",50),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.search(o.dt))}),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.formSearch)}}function S(i,l){1&i&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Nombre"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Hotel"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Acciones"),e.qZA()())}function k(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"p-button",54),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw();return e.KtG(r.editTypeRoom(o.id))}),e.qZA()}}function Y(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"p-button",55),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw();return e.KtG(r.confirmDelete(o.id))}),e.qZA()}}function L(i,l){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.ALo(6,"titlecase"),e.qZA(),e.TgZ(7,"td",51),e.YNc(8,k,1,0,"p-button",52),e._UZ(9,"p-confirmDialog"),e.YNc(10,Y,1,0,"p-button",53),e.qZA()()),2&i){const t=l.$implicit,n=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,4,t.nombre)),e.xp6(3),e.Oqu(e.lcZ(6,6,t.hotel.nombre)),e.xp6(3),e.Q6J("ngIf",n.permisoActualizar),e.xp6(2),e.Q6J("ngIf",n.permisoEliminar)}}function j(i,l){1&i&&(e.TgZ(0,"tr")(1,"td",56),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function z(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}function G(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"M\xe1ximo 50 caracteres"),e.qZA())}function $(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,z,2,0,"div",28),e.YNc(2,G,2,0,"div",28),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formCreateTypeRoom.get("nombre").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formCreateTypeRoom.get("nombre").hasError("maxlength"))}}function D(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}function O(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}function K(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"M\xe1ximo 50 caracteres"),e.qZA())}function V(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,O,2,0,"div",28),e.YNc(2,K,2,0,"div",28),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.formEditTypeRoom.get("nombre").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formEditTypeRoom.get("nombre").hasError("maxlength"))}}function X(i,l){1&i&&(e.TgZ(0,"div",57),e._uU(1,"Campo requerido"),e.qZA())}const W=function(){return{"min-width":"50rem"}},ee=function(){return["nombre","Hotel","acciones"]},x=function(){return{width:"95vw"}};let te=(()=>{class i{constructor(t,n,o){this.FB=t,this.spinner=n,this.typeRoomService=o,this.permisoCrear=h.e.hasPermission(["administracion.tipoHabitacion.crear"]),this.permisoActualizar=h.e.hasPermission(["administracion.tipoHabitacion.actualizar"]),this.permisoEliminar=h.e.hasPermission(["administracion.tipoHabitacion.eliminar"]),this.loadingTable=!1,this.pageCount=10,this.visibleModalTypeRoom=!0,this.imagen=null,this.visibleModalTypeRoomEditar=!1,this.idEditando=0,this.first=0,this.rows=8,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1}ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalTypeRoom=!1}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateTypeRoom=this.FB.group({nombre:["",[s.kI.required,s.kI.maxLength(50)]],hotel_id:["",[s.kI.required]],puerta:["",[s.kI.required]]}),this.formEditTypeRoom=this.FB.group({nombre:["",[s.kI.required,s.kI.maxLength(50)]],hotel_id:["",[s.kI.required]],puerta:["",[s.kI.required]]})}openModal(){this.onCreate()}onCreate(){this.formCreateTypeRoom.reset(),this.typeRoomService.getTypeRoom(0).subscribe(t=>{this.hotel=t.hotel,this.visibleModalTypeRoom=!0},t=>{console.log("Error: ",t)})}onRemove(t){this.imagen=null}onSelect(t){this.imagen=t.currentFiles[0]}onPage(t){this.pageCount=t.rows,this.getIndex("",this.pageCount)}submitCreate(){console.log(this.formCreateTypeRoom.valid),this.formCreateTypeRoom.valid?this.newTypeRoom():this.formCreateTypeRoom.markAllAsTouched()}newTypeRoom(){this.visibleModalTypeRoom=!0,this.spinner.show();let t={puerta:this.formCreateTypeRoom.get("puerta").value},n=this.formCreateTypeRoom.value;n.hotel_id=n.hotel_id.id,n.estado=1,n.diseno_json=JSON.stringify(t),this.typeRoomService.createTypeRoom(n).subscribe(o=>{this.spinner.hide(),this.imagen=null,this.visibleModalTypeRoom=!1,"success"==o.code?(p().fire({title:"Exito",text:"Tipo de habitaci\xf3n creado exitosamente.",icon:"success"}),this.getIndex()):p().fire({title:"Error",text:"Error al crear el tipo de habitaci\xf3n.",icon:"error"})},o=>{console.log("Error: ",o)})}editTypeRoom(t){this.idEditando=t,this.spinner.show(),this.typeRoomService.getTypeRoom(t).subscribe(n=>{this.spinner.hide(),this.hotel=n.hotel,this.dataEditarInfoTypeRoom=n.typeRoom,this.formEditTypeRoom.get("nombre").setValue(n.tiposHabitaciones.nombre),this.formEditTypeRoom.get("puerta").setValue(JSON.parse(n.tiposHabitaciones.diseno_json).puerta),setTimeout(()=>{this.visibleModalTypeRoomEditar=!0},1)},n=>{console.log("Error: ",n)})}updateTypeRoom(){this.spinner.show();let t=this.formEditTypeRoom.value;t.hotel_id=t.hotel_id.id,t.id=this.idEditando,t.estado=1;let n={puerta:this.formEditTypeRoom.get("puerta").value};t.diseno_json=JSON.stringify(n),this.typeRoomService.updateTypeRoom(t).subscribe(o=>{this.spinner.hide(),this.imagen=null,this.visibleModalTypeRoomEditar=!1,"success"==o.code?(p().fire({title:"Exito",text:"Tipo de habitaci\xf3n actualizada exitosamente.",icon:"success"}),this.getIndex()):p().fire({title:"Error",text:"Error al actualizar el tipo de habitaci\xf3n.",icon:"error"})},o=>{console.log("Error: ",o)})}submitUpdate(){this.formEditTypeRoom.valid&&this.updateTypeRoom()}confirmDelete(t){p().fire({title:"\xbfEstas seguro que deseas eliminar el tipo de habitaci\xf3n?",text:"Ten cuidado esta acci\xf3n no se prodr\xe1 reversar",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed&&(this.spinner.show(),this.typeRoomService.deleteTypeRoom({id:t}).subscribe(o=>{this.spinner.hide(),"success"==o.code?(p().fire({title:"Exito",text:"Tipo de habitaci\xf3n eliminada exitosamente.",icon:"success"}),this.getIndex()):p().fire({title:"Error",text:"Error al eliminar el tipo de habitaci\xf3n.",icon:"error"})},o=>{console.log("Error: ",o)}))})}getIndex(t="",n=this.pageCount,o=1){this.spinner.show(),this.loadingTable=!0,this.typeRoomService.getAll(n,t,o).subscribe(r=>{this.loadingTable=!1,this.typeRoomData=r.data,this.countRegisters=r.total,this.ultimaPage=r.last_page,r.total>n&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},r=>{console.log("Error: ",r),this.spinner.hide()})}searchInput(){let t=this.formSearch.get("search").value;this.pageActual=1,""==t&&this.getIndex(t)}search(){let t=this.formSearch.get("search").value;this.getIndex(t)}onPageChange(t){this.first=t.first,this.rows=t.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}buscarPorTecla(t){"Enter"==t.code&&this.search()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(s.qu),e.Y36(g.t2),e.Y36(C))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-type-rooms"]],decls:96,vars:36,consts:[["type","ball-scale-multiple","size","large","bdColor","rgba(192,192,192,0.8)","template","<img src='assets/loading/cargando.gif' />"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2","icon","",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Nuevo Tipo de Habitaci\xf3n",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["type","text","pInputText","","formControlName","nombre",1,"w-full","mb-3","border-round-3xl"],[4,"ngIf"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],["style","color: red;",4,"ngIf"],[1,"grid","formgrid",2,"text-align","center"],[1,"col-12","md:col-2"],["name","puerta","value","puerta1","formControlName","puerta","id","puerta1"],["for","puerta1"],[1,"field-radiobutton"],["src","assets/puertas/puerta1.jpg","width","100%","height","80%"],["name","puerta","value","puerta2","formControlName","puerta","id","puerta2"],["for","puerta3"],["src","assets/puertas/puerta2.jpg","width","100%","height","80%"],["name","puerta","value","puerta3","formControlName","puerta","id","puerta3"],["for","puerta2"],["src","assets/puertas/puerta3.jpg","width","100%","height","80%"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Tipo de Habitaci\xf3n","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled","click"],["header","Editar Tipo de Hotel",3,"visible","modal","draggable","resizable","visibleChange"],["pButton","","pRipple","","label","Editar Tipo de Habitaci\xf3n","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled","click"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"],[2,"color","red"]],template:function(n,o){1&n&&(e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Tipos de habitaciones"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"div",5),e.qZA()(),e.TgZ(8,"div",6),e.YNc(9,F,1,0,"button",7),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"p-table",11),e.NdJ("onPage",function(m){return o.onPage(m)}),e.YNc(14,Q,7,1,"ng-template",12),e.YNc(15,S,7,0,"ng-template",13),e.YNc(16,L,11,8,"ng-template",14),e.YNc(17,j,3,0,"ng-template",15),e.qZA(),e._UZ(18,"br"),e.TgZ(19,"div",16)(20,"span",17)(21,"button",18),e.NdJ("click",function(){return o.leftTable()}),e.qZA(),e._UZ(22,"button",19),e.TgZ(23,"button",20),e.NdJ("click",function(){return o.rightTable()}),e.qZA()()()()()(),e.TgZ(24,"p-dialog",21),e.NdJ("visibleChange",function(m){return o.visibleModalTypeRoom=m}),e.TgZ(25,"div",9)(26,"form",22)(27,"div",23)(28,"div",24)(29,"label"),e._uU(30,"Nombre"),e.qZA(),e._UZ(31,"input",25),e.YNc(32,$,3,2,"div",26),e.qZA(),e.TgZ(33,"div",24)(34,"label"),e._uU(35,"Hotel"),e.qZA(),e._UZ(36,"p-dropdown",27),e.YNc(37,D,2,0,"div",28),e.qZA()(),e._UZ(38,"br"),e.TgZ(39,"div",29)(40,"div",30),e._UZ(41,"p-radioButton",31),e.TgZ(42,"label",32),e._uU(43," Puerta 1 "),e.qZA(),e.TgZ(44,"div",33),e._UZ(45,"img",34),e.qZA()(),e.TgZ(46,"div",30),e._UZ(47,"p-radioButton",35),e.TgZ(48,"label",36),e._uU(49," Puerta 2 "),e.qZA(),e.TgZ(50,"div",33),e._UZ(51,"img",37),e.qZA()(),e.TgZ(52,"div",30),e._UZ(53,"p-radioButton",38),e.TgZ(54,"label",39),e._uU(55," Puerta 3 "),e.qZA(),e.TgZ(56,"div",33),e._UZ(57,"img",40),e.qZA()()(),e.TgZ(58,"div",41)(59,"button",42),e.NdJ("click",function(){return o.submitCreate()}),e.qZA()()()()(),e.TgZ(60,"p-dialog",43),e.NdJ("visibleChange",function(m){return o.visibleModalTypeRoomEditar=m}),e.TgZ(61,"div",9)(62,"form",22)(63,"div",23)(64,"div",24)(65,"label"),e._uU(66,"Nombre"),e.qZA(),e._UZ(67,"input",25),e.YNc(68,V,3,2,"div",26),e.qZA(),e.TgZ(69,"div",24)(70,"label"),e._uU(71,"Hotel"),e.qZA(),e._UZ(72,"p-dropdown",27),e.YNc(73,X,2,0,"div",28),e.qZA()(),e._UZ(74,"br"),e.TgZ(75,"div",29)(76,"div",30),e._UZ(77,"p-radioButton",31),e.TgZ(78,"label",32),e._uU(79," Puerta 1 "),e.qZA(),e.TgZ(80,"div",33),e._UZ(81,"img",34),e.qZA()(),e.TgZ(82,"div",30),e._UZ(83,"p-radioButton",35),e.TgZ(84,"label",36),e._uU(85," Puerta 2 "),e.qZA(),e.TgZ(86,"div",33),e._UZ(87,"img",37),e.qZA()(),e.TgZ(88,"div",30),e._UZ(89,"p-radioButton",38),e.TgZ(90,"label",39),e._uU(91," Puerta 3 "),e.qZA(),e.TgZ(92,"div",33),e._UZ(93,"img",40),e.qZA()()(),e.TgZ(94,"div",41)(95,"button",44),e.NdJ("click",function(){return o.submitUpdate()}),e.qZA()()()()()),2&n&&(e.xp6(9),e.Q6J("ngIf",o.permisoCrear),e.xp6(4),e.Q6J("value",o.typeRoomData)("tableStyle",e.DdM(32,W))("loading",o.loadingTable)("rows",8)("globalFilterFields",e.DdM(33,ee))("rowHover",!0),e.xp6(8),e.Q6J("disabled",!o.disablePageLeft),e.xp6(1),e.Q6J("label",o.pageActual),e.xp6(1),e.Q6J("disabled",!o.disablePageRight),e.xp6(1),e.Akn(e.DdM(34,x)),e.Q6J("visible",o.visibleModalTypeRoom)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",o.formCreateTypeRoom),e.xp6(6),e.Q6J("ngIf",o.formCreateTypeRoom.get("nombre").invalid&&(o.formCreateTypeRoom.get("nombre").dirty||o.formCreateTypeRoom.get("nombre").touched)),e.xp6(4),e.Q6J("options",o.hotel),e.xp6(1),e.Q6J("ngIf",o.formCreateTypeRoom.get("hotel_id").hasError("required")),e.xp6(22),e.Q6J("disabled",o.formCreateTypeRoom.invalid),e.xp6(1),e.Akn(e.DdM(35,x)),e.Q6J("visible",o.visibleModalTypeRoomEditar)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",o.formEditTypeRoom),e.xp6(6),e.Q6J("ngIf",o.formEditTypeRoom.get("nombre").invalid&&(o.formEditTypeRoom.get("nombre").dirty||o.formEditTypeRoom.get("nombre").touched)),e.xp6(4),e.Q6J("options",o.hotel),e.xp6(1),e.Q6J("ngIf",o.formEditTypeRoom.get("hotel_id").hasError("required")),e.xp6(22),e.Q6J("disabled",o.formEditTypeRoom.invalid))},dependencies:[d.O5,T.iA,B.jx,c.Hq,c.zx,s._Y,s.Fj,s.JJ,s.JL,b.H,v.o,y.Lt,R.EU,_.V,s.sg,s.u,g.Ro,d.rS],styles:["svg[_ngcontent-%COMP%]{width:45%}"]})}return i})();var oe=a(2506);let ie=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[Z.Bz.forChild([{path:"",component:te,canActivate:[oe.a],data:{permissions:["administracion.tipoHabitacion"]}}]),Z.Bz]})}return i})(),ne=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({providers:[{provide:u.TP,useClass:q.n,multi:!0},C],imports:[d.ez,ie,T.U$,A.O,s.u5,c.hJ,b.T,U.EV,E.V,J.Xt,v.j,I.A,y.kW,R.cc,N.L$,_.S,P.ii.forRoot(),s.UX,g.ef,w.U]})}return i})()}}]);