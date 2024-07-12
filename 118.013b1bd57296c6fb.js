"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[118],{1118:(Q,Z,o)=>{o.r(Z),o.d(Z,{ExternalSequenceModule:()=>be});var g=o(6814),a=o(228),c=o(95),S=o(3519),h=o.n(S),x=o(2791),e=o(4946),E=o(8672),U=o(4444),q=o(9862);let C=(()=>{class n{constructor(i){this.httpClient=i,this.baseUrl=U.D.url,this.endpointListar="/secuenciaExternaListar",this.endpointExternalSequenceGet="/secuenciaExternaEditar/",this.endpointExternalSequenceUpdate="/secuenciaExternaActualizar",this.endpointExternalSequenceCreate="/secuenciaExternaCrear",this.endpointDelete="/secuenciaExternaEliminar"}getAll(i,r="",t=1){return new q.WM({"Content-Type":"application/json"}),this.httpClient.post(`${this.baseUrl+this.endpointListar}?per_page=${i}&page=${t}&search=${r}`,{})}getExternalSequence(i){return this.httpClient.get(`${this.baseUrl+this.endpointExternalSequenceGet+i}`)}createExternalSequence(i){return this.httpClient.post(`${this.baseUrl+this.endpointExternalSequenceCreate}`,i)}updateExternalSequence(i){return this.httpClient.post(`${this.baseUrl+this.endpointExternalSequenceUpdate}`,i)}deleteExternalSequence(i){return this.httpClient.post(`${this.baseUrl+this.endpointDelete}`,i)}static#e=this.\u0275fac=function(r){return new(r||n)(e.LFG(q.eN))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var T=o(9664),M=o(5219),v=o(707),I=o(4480),A=o(1532),y=o(3714),l=o(2160),f=o(7213),d=o(7161);function _(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.openModal())}),e.qZA()}}function p(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"div",46),e._UZ(1,"span"),e.TgZ(2,"span",47)(3,"form",48)(4,"div",49)(5,"input",50),e.NdJ("keyup.enter",function(t){e.CHM(i);const u=e.oxw();return e.KtG(u.buscarPorTecla(t))})("input",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.searchInput())}),e.qZA(),e.TgZ(6,"button",51),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.search())}),e.qZA()()()()()}if(2&n){const i=e.oxw();e.xp6(3),e.Q6J("formGroup",i.formSearch)}}function J(n,s){1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Hotel"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Prefijo"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Fecha inicial"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Fecha final"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Recibo inicial"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Recibo actual"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Recibo final"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Tipo operaci\xf3n"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Acciones"),e.qZA()())}function w(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"p-button",55),e.NdJ("click",function(){e.CHM(i);const t=e.oxw().$implicit,u=e.oxw();return e.KtG(u.editExternalSequence(t.id))}),e.qZA()}}function R(n,s){if(1&n){const i=e.EpF();e.TgZ(0,"p-button",56),e.NdJ("click",function(){e.CHM(i);const t=e.oxw().$implicit,u=e.oxw();return e.KtG(u.confirmDelete(t.id))}),e.qZA()}}function P(n,s){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td",52),e.YNc(20,w,1,0,"p-button",53),e._UZ(21,"p-confirmDialog"),e.YNc(22,R,1,0,"p-button",54),e.qZA()()),2&n){const i=s.$implicit,r=e.oxw();e.xp6(2),e.Oqu(i.hotel.nombre),e.xp6(2),e.Oqu(i.prefijo),e.xp6(2),e.Oqu(e.xi3(7,10,i.fecha_inicio,"dd/MM/yyyy")),e.xp6(3),e.Oqu(e.xi3(10,13,i.fecha_final,"dd/MM/yyyy")),e.xp6(3),e.Oqu(i.secuencia_incial),e.xp6(2),e.Oqu(i.secuencia_actual),e.xp6(2),e.Oqu(i.secuencia_final),e.xp6(2),e.Oqu(null==i.tipo_operacion?null:i.tipo_operacion.nombre),e.xp6(2),e.Q6J("ngIf",r.permisoActualizar),e.xp6(2),e.Q6J("ngIf",r.permisoEliminar)}}function D(n,s){1&n&&(e.TgZ(0,"tr")(1,"td",57),e._uU(2,"Cargando informacion porfavor espere ..."),e.qZA()())}function F(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1," Campo requerido "),e.qZA())}function Y(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1," Campo requerido "),e.qZA())}function O(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function L(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function j(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function B(n,s){1&n&&e._UZ(0,"p-message",59)}function k(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function z(n,s){1&n&&e._UZ(0,"p-message",60)}function H(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function $(n,s){1&n&&e._UZ(0,"p-message",61)}function G(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function K(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function W(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1," Campo requerido "),e.qZA())}function V(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function X(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function ee(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function te(n,s){1&n&&e._UZ(0,"p-message",62)}function ie(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function ne(n,s){1&n&&e._UZ(0,"p-message",63)}function ae(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}function re(n,s){1&n&&e._UZ(0,"p-message",61)}function oe(n,s){1&n&&(e.TgZ(0,"div",58),e._uU(1,"Campo requerido"),e.qZA())}const le=function(){return{"min-width":"50rem"}},ce=function(){return["nombre","prefijo","fecha_inicio","fecha_final","secuencia_incial","secuencia_actual","secuencia_final","acciones"]},N=function(){return{width:"95vw"}};let se=(()=>{class n{constructor(i,r,t,u){this.FB=i,this.spinner=r,this.ExternalSequenceService=t,this.datePipe=u,this.permisoCrear=x.e.hasPermission(["administracion.secuenciaExterna.crear"]),this.permisoActualizar=x.e.hasPermission(["administracion.secuenciaExterna.actualizar"]),this.permisoEliminar=x.e.hasPermission(["administracion.secuenciaExterna.eliminar"]),this.loadingTable=!1,this.pageCount=10,this.visibleModalExternalSequence=!0,this.visibleModalExternalSequenceEditar=!1,this.imagen=null,this.tipoOperacion=null,this.idEditando=0,this.pageActual=1,this.ultimaPage=1,this.disablePageLeft=!1,this.disablePageRight=!1,this.first=0,this.rows=8}esMayor(i,r){return parseInt(i,10)>parseInt(r,10)}ngOnInit(){this.buildForm(),this.getIndex(),this.visibleModalExternalSequence=!1}openModal(){this.onCreate()}onCreate(){this.formCreateExternalSequence.reset(),this.ExternalSequenceService.getExternalSequence(0).subscribe(i=>{this.hotel=i.hotel,this.prefijo=i.prefijo,this.tipoOperacion=i.tipo_operacion,i.fecha_inicio&&i.fecha_final&&(this.fechaInicial=new Date(i.fecha_inicio).toISOString().split("T")[0],this.fechaFinal=new Date(i.fecha_final).toISOString().split("T")[0]),this.secuenciaInicial=i.secuencia_incial,this.secuenciaActual=i.secuencia_actual,this.secuenciaFinal=i.secuencia_final,this.visibleModalExternalSequence=!0},i=>{console.log("Error: ",i)})}onRemove(i){this.imagen=null}onSelect(i){this.imagen=i.currentFiles[0]}onPage(i){this.pageCount=i.rows,this.getIndex("",this.pageCount)}submitCreate(){if(this.formCreateExternalSequence.valid){const i=this.formatDate(this.formCreateExternalSequence.value.fecha_inicio),r=this.formatDate(this.formCreateExternalSequence.value.fecha_final);this.formCreateExternalSequence.patchValue({fecha_inicio:i,fecha_final:r}),this.newExternalSequence()}else this.formCreateExternalSequence.markAllAsTouched()}formatDate(i){const r=new Date(i),t=r?.getFullYear();return`${t}-${("0"+(r.getMonth()+1)).slice(-2)}-${("0"+r.getDate()).slice(-2)}`}newExternalSequence(){this.visibleModalExternalSequence=!0,this.spinner.show();let i=this.formCreateExternalSequence.value;i.hotel_id=i.hotel_id.id,i.tipo_operacion_id=i.tipo_operacion_id.id,i.estado=1,this.ExternalSequenceService.createExternalSequence(i).subscribe(r=>{this.spinner.hide(),this.imagen=null,this.visibleModalExternalSequence=!1,"success"==r.code?(h().fire({title:"Exito",text:"Recibo creado exitosamente.",icon:"success"}),this.getIndex()):h().fire({title:"Error",text:"Error al crear el recibo.",icon:"error"})},r=>{console.log("Error: ",r)})}editExternalSequence(i){this.idEditando=i,this.spinner.show(),this.ExternalSequenceService.getExternalSequence(i).subscribe(r=>{this.spinner.hide(),this.hotel=r.hotel;const t=r.secuencia_externa;if(this.tipoOperacion=r.tipo_operacion,t&&"prefijo"in t){let u,m;this.secuenciaInicial=t.secuencia_incial,this.secuenciaActual=t.secuencia_actual,this.secuenciaFinal=t.secuencia_final,this.fechaInicial=t.fecha_inicio,this.fechaFinal=t.fecha_final,this.prefijo=t.prefijo,r.hotel.forEach(b=>{b.id==t.hotel_id&&(u=b)}),r.tipo_operacion.forEach(b=>{b.id==t.tipo_operacion_id&&(m=b)}),this.formEditExternalSequence.patchValue({hotel_id:u,tipo_operacion_id:m,prefijo:this.prefijo,fecha_inicio:this.datePipe.transform(new Date(this.fechaInicial),"yyyy/MM/dd"),fecha_final:this.datePipe.transform(new Date(this.fechaFinal),"yyyy/MM/dd"),secuencia_incial:this.secuenciaInicial,secuencia_actual:this.secuenciaActual,secuencia_final:this.secuenciaFinal})}setTimeout(()=>{this.visibleModalExternalSequenceEditar=!0},1)},r=>{console.log("Error: ",r)})}updateExternalSequence(){this.spinner.show();let i=this.formEditExternalSequence.value;i.hotel_id=i.hotel_id.id,i.tipo_operacion_id=i.tipo_operacion_id.id,i.id=this.idEditando,i.estado=1,this.ExternalSequenceService.updateExternalSequence(i).subscribe(r=>{this.spinner.hide(),this.imagen=null,this.visibleModalExternalSequenceEditar=!1,"success"==r.code?(h().fire({title:"\xc9xito",text:"Recibo actualizado exitosamente.",icon:"success"}),this.getIndex()):h().fire({title:"Error",text:"Error al actualizar el recibo.",icon:"error"})},r=>{console.log("Error: ",r)})}submitUpdate(){if(this.formEditExternalSequence.valid){const i=this.formatDate(this.formEditExternalSequence.value.fecha_inicio),r=this.formatDate(this.formEditExternalSequence.value.fecha_final);this.formEditExternalSequence.patchValue({fecha_inicio:i,fecha_final:r}),this.updateExternalSequence()}}confirmDelete(i){h().fire({title:"\xbfEstas seguro que deseas eliminar \xe9ste recibo?",text:"Ten cuidado, esta acci\xf3n no se prodr\xe1 revertir",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&(this.spinner.show(),this.ExternalSequenceService.deleteExternalSequence({id:i}).subscribe(t=>{this.spinner.hide(),"success"==t.code?(h().fire({title:"Exito",text:"Recibo eliminado exitosamente.",icon:"success"}),this.getIndex()):h().fire({title:"Error",text:"Error al eliminar el recibo.",icon:"error"})},t=>{console.log("Error: ",t)}))})}buildForm(){this.formSearch=this.FB.group({search:["",[]]}),this.formCreateExternalSequence=this.FB.group({hotel_id:["",[c.kI.required]],prefijo:["",[c.kI.required]],fecha_inicio:["",[c.kI.required]],fecha_final:["",[c.kI.required]],secuencia_incial:["",[c.kI.required]],secuencia_actual:["",[c.kI.required]],secuencia_final:["",[c.kI.required]],tipo_operacion_id:["",[c.kI.required]]}),this.formEditExternalSequence=this.FB.group({hotel_id:["",[c.kI.required]],prefijo:["",[c.kI.required]],fecha_inicio:["",[c.kI.required]],fecha_final:["",[c.kI.required]],secuencia_incial:["",[c.kI.required]],secuencia_actual:["",[c.kI.required]],secuencia_final:["",[c.kI.required]],tipo_operacion_id:["",[c.kI.required]]})}getMaxDate1(){const i=this.formEditExternalSequence?.get("fecha_final")?.value;return i?new Date(i):null}getMaxDate2(){const i=this.formEditExternalSequence?.get("fecha_inicio")?.value;return i?new Date(i):null}getIndex(i="",r=this.pageCount,t=1){this.spinner.show(),this.loadingTable=!0,this.ExternalSequenceService.getAll(r,i,t).subscribe(u=>{this.loadingTable=!1,this.externalSequenceData=u.data,this.ultimaPage=u.last_page,this.countRegisters=u.total,this.ultimaPage=u.last_page,u.total>r&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},u=>{console.log("Error: ",u),this.spinner.hide()})}searchInput(){let i=this.formSearch.get("search").value;this.pageActual=1,""==i&&this.getIndex(i)}search(){let i=this.formSearch.get("search").value;this.getIndex(i)}onPageChange(i){this.first=i.first,this.rows=i.rows}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}buscarPorTecla(i){"Enter"==i.code&&this.search()}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(c.qu),e.Y36(E.t2),e.Y36(C),e.Y36(g.uU))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-external-sequence"]],decls:124,vars:62,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Crear","class","p-button-outlined mr-2","icon","",3,"click",4,"ngIf"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","globalFilterFields","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],["header","Crear Recibo Externo",3,"visible","modal","draggable","resizable","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["optionLabel","nombre","formControlName","hotel_id",3,"options"],["style","color: red;",4,"ngIf"],["optionLabel","nombre","formControlName","tipo_operacion_id",3,"options"],["type","text","pInputText","","formControlName","prefijo",1,"w-full","mb-3","border-round-3xl"],["formControlName","fecha_inicio",1,"w-full","mb-3","border-round-3xl",3,"showIcon","maxDate"],["formControlName","fecha_final",1,"w-full","mb-3","border-round-3xl",3,"showIcon","minDate"],["severity","error","class","padding","text","La fecha final debe ser mayor a la inicial",4,"ngIf"],["type","number","min","0","pInputText","","formControlName","secuencia_incial",1,"w-full","mb-3","border-round-3xl"],["severity","error","class","padding","text","El Recibo inicial no puede ser mayor al Recibo actual ",4,"ngIf"],["type","number","min","0","pInputText","","formControlName","secuencia_actual",1,"w-full","mb-3","border-round-3xl"],["severity","error","class","padding","text","El Recibo actual no puede ser mayor al recibo final",4,"ngIf"],["type","number","min","0","pInputText","","formControlName","secuencia_final",1,"w-full","mb-3","border-round-3xl"],[1,"field","col-12","md:col-12"],["pButton","","pRipple","","label","Crear Recibo Externo","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["header","Editar Recibo Externo",3,"visible","modal","draggable","resizable","visibleChange"],["formControlName","fecha_inicio","dateFormat","yy/mm/dd",1,"w-full","mb-3","border-round-3xl",3,"showIcon"],["formControlName","fecha_final","dateFormat","yy/mm/dd",1,"w-full","mb-3","border-round-3xl",3,"showIcon"],["severity","error","class","padding","text","La fecha inicial y final no pueden ser iguales",4,"ngIf"],["severity","error","class","padding","text","El Recibo inicial no puede ser mayor al Recibo actual",4,"ngIf"],["pButton","","pRipple","","label","Editar Recibo Externo","icon","","type","submit",1,"w-full","bg-admin","boder-admin","mb-5","border-round-3xl",3,"disabled"],["pButton","","pRipple","","label","Crear","icon","",1,"p-button-outlined","mr-2",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-pencil","severity","info",3,"click",4,"ngIf"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-pencil","severity","info",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"],[2,"color","red"],["severity","error","text","La fecha final debe ser mayor a la inicial",1,"padding"],["severity","error","text","El Recibo inicial no puede ser mayor al Recibo actual ",1,"padding"],["severity","error","text","El Recibo actual no puede ser mayor al recibo final",1,"padding"],["severity","error","text","La fecha inicial y final no pueden ser iguales",1,"padding"],["severity","error","text","El Recibo inicial no puede ser mayor al Recibo actual",1,"padding"]],template:function(r,t){1&r&&(e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),e._uU(5,"Recibos externos"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"div",5),e.qZA()(),e.TgZ(8,"div",6),e.YNc(9,_,1,0,"button",7),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"p-table",11),e.NdJ("onPage",function(m){return t.onPage(m)}),e.YNc(14,p,7,1,"ng-template",12),e.YNc(15,J,19,0,"ng-template",13),e.YNc(16,P,23,16,"ng-template",14),e.YNc(17,D,3,0,"ng-template",15),e.qZA(),e._UZ(18,"br"),e.TgZ(19,"div",16)(20,"span",17)(21,"button",18),e.NdJ("click",function(){return t.leftTable()}),e.qZA(),e._UZ(22,"button",19),e.TgZ(23,"button",20),e.NdJ("click",function(){return t.rightTable()}),e.qZA()()()()()(),e.TgZ(24,"p-dialog",21),e.NdJ("visibleChange",function(m){return t.visibleModalExternalSequence=m}),e.TgZ(25,"div",9)(26,"form",22),e.NdJ("ngSubmit",function(){return t.submitCreate()}),e.TgZ(27,"div",23)(28,"div",24)(29,"label"),e._uU(30,"Hotel"),e.qZA(),e._UZ(31,"p-dropdown",25),e.YNc(32,F,2,0,"div",26),e.qZA(),e.TgZ(33,"div",24)(34,"label"),e._uU(35,"Tipo operaci\xf3n"),e.qZA(),e._UZ(36,"p-dropdown",27),e.YNc(37,Y,2,0,"div",26),e.qZA(),e.TgZ(38,"div",24)(39,"label"),e._uU(40,"Prefijo"),e.qZA(),e._UZ(41,"input",28),e.YNc(42,O,2,0,"div",26),e.qZA(),e.TgZ(43,"div",24)(44,"label"),e._uU(45,"Fecha inicio"),e.qZA(),e._UZ(46,"p-calendar",29),e.YNc(47,L,2,0,"div",26),e.qZA(),e.TgZ(48,"div",24)(49,"label"),e._uU(50,"Fecha final"),e.qZA(),e._UZ(51,"p-calendar",30),e.YNc(52,j,2,0,"div",26),e.YNc(53,B,1,0,"p-message",31),e.qZA(),e.TgZ(54,"div",24)(55,"label"),e._uU(56,"Recibo inicial"),e.qZA(),e._UZ(57,"input",32),e.YNc(58,k,2,0,"div",26),e.YNc(59,z,1,0,"p-message",33),e.qZA(),e.TgZ(60,"div",24)(61,"label"),e._uU(62,"Recibo actual"),e.qZA(),e._UZ(63,"input",34),e.YNc(64,H,2,0,"div",26),e.YNc(65,$,1,0,"p-message",35),e.qZA(),e.TgZ(66,"div",24)(67,"label"),e._uU(68,"Recibo final"),e.qZA(),e._UZ(69,"input",36),e.YNc(70,G,2,0,"div",26),e.qZA(),e.TgZ(71,"div",37),e._UZ(72,"button",38),e.qZA()(),e._UZ(73,"br"),e.qZA()()(),e.TgZ(74,"p-dialog",39),e.NdJ("visibleChange",function(m){return t.visibleModalExternalSequenceEditar=m}),e.TgZ(75,"div",9)(76,"form",22),e.NdJ("ngSubmit",function(){return t.submitUpdate()}),e.TgZ(77,"div",23)(78,"div",24)(79,"label"),e._uU(80,"Hotel"),e.qZA(),e._UZ(81,"p-dropdown",25),e.YNc(82,K,2,0,"div",26),e.qZA(),e.TgZ(83,"div",24)(84,"label"),e._uU(85,"Tipo operaci\xf3n"),e.qZA(),e._UZ(86,"p-dropdown",27),e.YNc(87,W,2,0,"div",26),e.qZA(),e.TgZ(88,"div",24)(89,"label"),e._uU(90,"Prefijo"),e.qZA(),e._UZ(91,"input",28),e.YNc(92,V,2,0,"div",26),e.qZA(),e.TgZ(93,"div",24)(94,"label"),e._uU(95,"Fecha inicio"),e.qZA(),e._UZ(96,"p-calendar",40),e.YNc(97,X,2,0,"div",26),e.qZA(),e.TgZ(98,"div",24)(99,"label"),e._uU(100,"Fecha final"),e.qZA(),e._UZ(101,"p-calendar",41),e.YNc(102,ee,2,0,"div",26),e.YNc(103,te,1,0,"p-message",42),e.qZA(),e.TgZ(104,"div",24)(105,"label"),e._uU(106,"Recibo inicial"),e.qZA(),e._UZ(107,"input",32),e.YNc(108,ie,2,0,"div",26),e.YNc(109,ne,1,0,"p-message",43),e.qZA(),e.TgZ(110,"div",24)(111,"label"),e._uU(112,"Recibo actual"),e.qZA(),e._UZ(113,"input",34),e.YNc(114,ae,2,0,"div",26),e.YNc(115,re,1,0,"p-message",35),e.qZA(),e.TgZ(116,"div",24)(117,"label"),e._uU(118,"Recibo final"),e.qZA(),e._UZ(119,"input",36),e.YNc(120,oe,2,0,"div",26),e.qZA(),e.TgZ(121,"div",37),e._UZ(122,"button",44),e.qZA()(),e._UZ(123,"br"),e.qZA()()()),2&r&&(e.xp6(9),e.Q6J("ngIf",t.permisoCrear),e.xp6(4),e.Q6J("value",t.externalSequenceData)("tableStyle",e.DdM(58,le))("loading",t.loadingTable)("rows",8)("globalFilterFields",e.DdM(59,ce))("rowHover",!0),e.xp6(8),e.Q6J("disabled",!t.disablePageLeft),e.xp6(1),e.Q6J("label",t.pageActual),e.xp6(1),e.Q6J("disabled",!t.disablePageRight),e.xp6(1),e.Akn(e.DdM(60,N)),e.Q6J("visible",t.visibleModalExternalSequence)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",t.formCreateExternalSequence),e.xp6(5),e.Q6J("options",t.hotel),e.xp6(1),e.Q6J("ngIf",t.formCreateExternalSequence.get("hotel_id").hasError("required")&&t.formCreateExternalSequence.get("hotel_id").touched),e.xp6(4),e.Q6J("options",t.tipoOperacion),e.xp6(1),e.Q6J("ngIf",t.formCreateExternalSequence.get("tipo_operacion_id").hasError("required")&&t.formCreateExternalSequence.get("tipo_operacion_id").touched),e.xp6(5),e.Q6J("ngIf",t.formCreateExternalSequence.get("prefijo").hasError("required")),e.xp6(4),e.Q6J("showIcon",!0)("maxDate",t.formCreateExternalSequence.get("fecha_final").value),e.xp6(1),e.Q6J("ngIf",t.formCreateExternalSequence.get("fecha_inicio").hasError("required")),e.xp6(4),e.Q6J("showIcon",!0)("minDate",t.formCreateExternalSequence.get("fecha_inicio").value),e.xp6(1),e.Q6J("ngIf",t.formCreateExternalSequence.get("fecha_final").hasError("required")),e.xp6(1),e.Q6J("ngIf",!(t.formCreateExternalSequence.get("fecha_final").value>t.formCreateExternalSequence.get("fecha_inicio").value)&&null!=t.formCreateExternalSequence.get("fecha_final").value),e.xp6(5),e.Q6J("ngIf",t.formCreateExternalSequence.get("secuencia_incial").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formCreateExternalSequence.get("secuencia_incial").value,t.formCreateExternalSequence.get("secuencia_actual").value)),e.xp6(5),e.Q6J("ngIf",t.formCreateExternalSequence.get("secuencia_actual").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formCreateExternalSequence.get("secuencia_actual").value,t.formCreateExternalSequence.get("secuencia_final").value)),e.xp6(5),e.Q6J("ngIf",t.formCreateExternalSequence.get("secuencia_final").hasError("required")),e.xp6(2),e.Q6J("disabled",t.esMayor(t.formCreateExternalSequence.get("secuencia_incial").value,t.formCreateExternalSequence.get("secuencia_actual").value)||t.esMayor(t.formCreateExternalSequence.get("secuencia_actual").value,t.formCreateExternalSequence.get("secuencia_final").value)||!t.formCreateExternalSequence.valid||!(t.formCreateExternalSequence.get("fecha_final").value>t.formCreateExternalSequence.get("fecha_inicio").value)),e.xp6(2),e.Akn(e.DdM(61,N)),e.Q6J("visible",t.visibleModalExternalSequenceEditar)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(2),e.Q6J("formGroup",t.formEditExternalSequence),e.xp6(5),e.Q6J("options",t.hotel),e.xp6(1),e.Q6J("ngIf",t.formEditExternalSequence.get("hotel_id").hasError("required")),e.xp6(4),e.Q6J("options",t.tipoOperacion),e.xp6(1),e.Q6J("ngIf",t.formCreateExternalSequence.get("tipo_operacion_id").hasError("required")&&t.formCreateExternalSequence.get("tipo_operacion_id").touched),e.xp6(5),e.Q6J("ngIf",t.formEditExternalSequence.get("prefijo").hasError("required")),e.xp6(4),e.Q6J("showIcon",!0),e.xp6(1),e.Q6J("ngIf",t.formEditExternalSequence.get("fecha_inicio").hasError("required")),e.xp6(4),e.Q6J("showIcon",!0),e.xp6(1),e.Q6J("ngIf",t.formEditExternalSequence.get("fecha_final").hasError("required")),e.xp6(1),e.Q6J("ngIf",!(t.formEditExternalSequence.get("fecha_final").value>t.formEditExternalSequence.get("fecha_inicio").value)&&null!=t.formEditExternalSequence.get("fecha_final").value),e.xp6(5),e.Q6J("ngIf",t.formEditExternalSequence.get("secuencia_incial").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formEditExternalSequence.get("secuencia_incial").value,t.formEditExternalSequence.get("secuencia_actual").value)),e.xp6(5),e.Q6J("ngIf",t.formEditExternalSequence.get("secuencia_actual").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.esMayor(t.formEditExternalSequence.get("secuencia_actual").value,t.formEditExternalSequence.get("secuencia_final").value)),e.xp6(5),e.Q6J("ngIf",t.formEditExternalSequence.get("secuencia_final").hasError("required")),e.xp6(2),e.Q6J("disabled",t.esMayor(t.formEditExternalSequence.get("secuencia_incial").value,t.formEditExternalSequence.get("secuencia_actual").value)||t.esMayor(t.formEditExternalSequence.get("secuencia_actual").value,t.formEditExternalSequence.get("secuencia_final").value)||!t.formEditExternalSequence.valid||!(t.formEditExternalSequence.get("fecha_final").value>t.formEditExternalSequence.get("fecha_inicio").value)))},dependencies:[g.O5,T.iA,M.jx,v.Hq,v.zx,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.qQ,I.H,A.f,y.o,l.Lt,f.V,c.sg,c.u,E.Ro,d.q,g.uU],styles:["svg[_ngcontent-%COMP%]{width:45%}"]})}return n})();var ue=o(2506);let pe=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:se,canActivate:[ue.a],data:{permissions:["administracion.secuenciaExterna"]}}]),a.Bz]})}return n})();var de=o(5722),fe=o(6068),me=o(354),ge=o(6218),he=o(1712),_e=o(1865),xe=o(6022),Ee=o(4104),qe=o(6340),ve=o(8712);let be=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({providers:[{provide:q.TP,useClass:ve.n,multi:!0},C,g.uU],imports:[g.ez,pe,T.U$,fe.O,c.u5,v.hJ,I.T,Ee.EV,A._8,qe.V,xe.Xt,y.j,ge.A,l.kW,_e.cc,me.L$,f.S,de.ii.forRoot(),c.UX,E.ef,he.U,d.O]})}return n})()},7161:(Q,Z,o)=>{o.d(Z,{O:()=>y,q:()=>A});var g=o(6814),a=o(4946),c=o(2591),S=o(2736),h=o(3823),x=o(8468);function e(l,f){1&l&&a._UZ(0,"CheckIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function E(l,f){1&l&&a._UZ(0,"InfoCircleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function U(l,f){1&l&&a._UZ(0,"TimesCircleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function q(l,f){1&l&&a._UZ(0,"ExclamationTriangleIcon",4),2&l&&a.Q6J("styleClass","p-inline-message-icon")}function C(l,f){if(1&l&&a._UZ(0,"span",6),2&l){const d=a.oxw(2);a.Q6J("innerHTML",d.text,a.oJD)}}function T(l,f){if(1&l&&(a.TgZ(0,"div"),a.YNc(1,C,1,1,"span",5),a.qZA()),2&l){const d=a.oxw();a.xp6(1),a.Q6J("ngIf",!d.escape)}}function M(l,f){if(1&l&&(a.TgZ(0,"span",8),a._uU(1),a.qZA()),2&l){const d=a.oxw(2);a.xp6(1),a.Oqu(d.text)}}function v(l,f){if(1&l&&a.YNc(0,M,2,1,"span",7),2&l){const d=a.oxw();a.Q6J("ngIf",d.escape)}}const I=function(l,f,d,_,p){return{"p-inline-message-info":l,"p-inline-message-warn":f,"p-inline-message-error":d,"p-inline-message-success":_,"p-inline-message-icon-only":p}};let A=(()=>{class l{severity;text;escape=!0;style;styleClass;get icon(){return this.severity&&this.severity.trim()?this.severity:"info"}static \u0275fac=function(_){return new(_||l)};static \u0275cmp=a.Xpm({type:l,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:8,vars:16,consts:[["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngIf","ngIfElse"],["escapeOut",""],[3,"styleClass"],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(_,p){if(1&_&&(a.TgZ(0,"div",0),a.YNc(1,e,1,1,"CheckIcon",1),a.YNc(2,E,1,1,"InfoCircleIcon",1),a.YNc(3,U,1,1,"TimesCircleIcon",1),a.YNc(4,q,1,1,"ExclamationTriangleIcon",1),a.YNc(5,T,2,1,"div",2),a.YNc(6,v,1,1,"ng-template",null,3,a.W1O),a.qZA()),2&_){const J=a.MAs(7);a.Tol(p.styleClass),a.Q6J("ngStyle",p.style)("ngClass",a.qbA(10,I,"info"===p.severity,"warn"===p.severity,"error"===p.severity,"success"===p.severity,null==p.text)),a.xp6(1),a.Q6J("ngIf","success"===p.icon),a.xp6(1),a.Q6J("ngIf","info"===p.icon),a.xp6(1),a.Q6J("ngIf","error"===p.icon),a.xp6(1),a.Q6J("ngIf","warn"===p.icon),a.xp6(1),a.Q6J("ngIf",!p.escape)("ngIfElse",J)}},dependencies:function(){return[g.mk,g.O5,g.PC,c.n,h.u,x.x,S.L]},styles:[".p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}\n"],encapsulation:2,changeDetection:0})}return l})(),y=(()=>{class l{static \u0275fac=function(_){return new(_||l)};static \u0275mod=a.oAB({type:l});static \u0275inj=a.cJS({imports:[g.ez,c.n,h.u,x.x,S.L]})}return l})()}}]);