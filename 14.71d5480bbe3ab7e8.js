"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[14],{9014:(K,h,n)=>{n.r(h),n.d(h,{InvoiceModule:()=>Q});var c=n(6814),d=n(9862),p=n(8672),u=n(707),f=n(9664),C=n(6068),v=n(3714),P=n(8712),x=n(4444),t=n(4946);let Z=(()=>{class i{constructor(e){this.httpClient=e,this.baseUrl=x.D.url,this.endPointAnular="/facturaAnular",this.endPointListar="/facturaListar"}getAll(e,a=1,o=""){return this.httpClient.post(`${this.baseUrl+this.endPointListar}?page=${a}&per_page=${e}&search=${o}`,{})}anular(e){return this.httpClient.post(`${this.baseUrl+this.endPointAnular}?=${e.id}`,e)}static#t=this.\u0275fac=function(a){return new(a||i)(t.LFG(d.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var U=n(3519),g=n.n(U),T=n(2791),I=n(6401),s=n(95),y=n(5219),A=n(4480);function J(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",20),t._UZ(1,"span"),t.TgZ(2,"span",21)(3,"form",22)(4,"div",23)(5,"input",24),t.NdJ("keyup.enter",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.buscarPorTecla(o))})("input",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.searchInput())}),t.qZA(),t.TgZ(6,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.search())}),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.formSearch)}}function F(i,l){1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Concepto"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Recibo interno"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Recibo externo"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Excedente"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Subtotal"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Total"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Nombre del hotel"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Cliente"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Acciones"),t.qZA()())}function _(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"p-button",29),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw();return t.KtG(r.confirmDelete(o.id))}),t.qZA()}}function N(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t._UZ(20,"t"),t.TgZ(21,"td",26),t._UZ(22,"p-confirmDialog"),t.YNc(23,_,1,0,"p-button",27),t.TgZ(24,"p-button",28),t.NdJ("click",function(){const r=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.confirmAbrirPdf(r.id))}),t.qZA()()()}if(2&i){const e=l.$implicit,a=t.oxw();t.xp6(2),t.Oqu(e.concepto),t.xp6(2),t.Oqu(e.secuencia_factura_interna),t.xp6(2),t.Oqu(e.secuencia_factura_externa||"No hay recibo externo"),t.xp6(2),t.Oqu(t.lcZ(9,9,e.excedente)),t.xp6(3),t.Oqu(t.lcZ(12,11,e.sub_total)),t.xp6(3),t.Oqu(t.lcZ(15,13,e.total)),t.xp6(3),t.Oqu(e.hotel.nombre),t.xp6(2),t.Oqu(e.cliente.nombres+" "+e.cliente.apellidos),t.xp6(4),t.Q6J("ngIf",a.permisoEliminar)}}function R(i,l){1&i&&(t.TgZ(0,"tr")(1,"td",30),t._uU(2," Cargando informaci\xf3n, por favor espere... "),t.qZA()())}const B=function(){return{"min-width":"50rem"}};let L=(()=>{class i{constructor(e,a,o,r){this.invoiceService=e,this.spinner=a,this.appComponent=o,this.FB=r,this.permisoCrear=T.e.hasPermission(["administracion.facturacion.crear"]),this.permisoEliminar=T.e.hasPermission(["administracion.facturacion.eliminar"]),this.loadingTable=!1,this.pageCount=10,this.ultimaPage=1,this.disablePageRight=!1,this.pageActual=1,this.disablePageLeft=!1}ngOnInit(){this.buildForm(),this.getIndex(),this.baseUrl=x.D.url,this.token=this.appComponent.getToken()}buildForm(){this.formSearch=this.FB.group({search:["",[]]})}getIndex(e="",a=this.pageCount,o=1){this.spinner.show(),this.loadingTable=!0,this.invoiceService.getAll(a,o,e).subscribe(r=>{this.loadingTable=!1,this.roomsData=r.data,this.countRegisters=r.total,this.ultimaPage=r.last_page,r.total>a&&(this.disablePageRight=!0),this.validatePage(),this.spinner.hide()},r=>{console.log("Error",r),this.spinner.hide()})}searchInput(){let e=this.formSearch.get("search").value;this.pageActual=1,""==e&&(console.log("ads"),this.getIndex(e))}search(){let e=this.formSearch.get("search").value;this.getIndex(e)}confirmDelete(e){g().fire({title:"Quieres anular esta factura?",text:"Ten cuidado, esta acci\xf3n no se puede revertir",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Confirmar",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed&&(this.spinner.show(),this.invoiceService.anular({id:e}).subscribe(o=>{this.spinner.hide(),"success"==o.code?(g().fire({title:"Exito",text:"Factura anulada exitosamente",icon:"success"}),this.getIndex()):g().fire({title:"Error",text:"Error al anular la factura",icon:"error"})},o=>{console.log("Error: ",o)}))})}leftTable(){this.pageActual=this.pageActual-1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}rightTable(){this.pageActual=this.pageActual+1,this.getIndex("",this.pageCount,this.pageActual),this.validatePage()}validatePage(){1==this.pageActual&&(this.disablePageLeft=!1),this.pageActual>1&&(this.disablePageLeft=!0),this.ultimaPage==this.pageActual&&(this.disablePageRight=!1),this.ultimaPage>this.pageActual&&(this.disablePageRight=!0)}confirmAbrirPdf(e){window.open(this.baseUrl+"/facturaRemisionPdf/"+e+"?token="+this.token,"_blank")}buscarPorTecla(e){"Enter"==e.code&&this.search()}onPage(e){this.pageCount=e.rows,this.getIndex("",this.pageCount)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(Z),t.Y36(p.t2),t.Y36(I.y),t.Y36(s.qu))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-invoice"]],decls:22,vars:9,consts:[["type","ball-scale-multiple"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"mt-3","lg:mt-0"],[1,"grid","mt-3"],[1,"col-12"],[1,"card","px-3","py-3"],["responsiveLayout","scroll","selectionMode","multiple","dataKey","usuario",3,"value","tableStyle","loading","rows","rowHover","onPage"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],[2,"text-align","center"],[1,"p-buttonset"],["pButton","","pRipple","","label","","icon","pi pi-arrow-left",3,"disabled","click"],["pButton","","pRipple","",3,"label"],["pButton","","pRipple","","label","","icon","pi pi-arrow-right",3,"disabled","click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[3,"formGroup"],[1,"p-inputgroup"],["formControlName","search","pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto",3,"keyup.enter","input"],["type","button","pButton","","pRipple","",1,"pi","pi-search",3,"click"],[1,"flex","gap-2"],["icon","pi pi-trash","severity","danger",3,"click",4,"ngIf"],["icon","pi pi-file-pdf","severity","danger",3,"click"],["icon","pi pi-trash","severity","danger",3,"click"],["colspan","8"]],template:function(a,o){1&a&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5,"Facturaci\xf3n"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"div",5),t.qZA()(),t._UZ(8,"div",6),t.qZA()(),t.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"p-table",10),t.NdJ("onPage",function(m){return o.onPage(m)}),t.YNc(13,J,7,1,"ng-template",11),t.YNc(14,F,19,0,"ng-template",12),t.YNc(15,N,25,15,"ng-template",13),t.YNc(16,R,3,0,"ng-template",14),t.qZA(),t.TgZ(17,"div",15)(18,"span",16)(19,"button",17),t.NdJ("click",function(){return o.leftTable()}),t.qZA(),t._UZ(20,"button",18),t.TgZ(21,"button",19),t.NdJ("click",function(){return o.rightTable()}),t.qZA()()()()()()),2&a&&(t.xp6(12),t.Q6J("value",o.roomsData)("tableStyle",t.DdM(8,B))("loading",o.loadingTable)("rows",8)("rowHover",!0),t.xp6(7),t.Q6J("disabled",!o.disablePageLeft),t.xp6(1),t.Q6J("label",o.pageActual),t.xp6(1),t.Q6J("disabled",!o.disablePageRight))},dependencies:[c.O5,f.iA,y.jx,u.Hq,u.zx,s._Y,s.Fj,s.JJ,s.JL,A.H,v.o,s.sg,s.u,p.Ro,c.JJ]})}return i})();var b=n(228),S=n(2506);let E=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[b.Bz.forChild([{path:"",component:L,canActivate:[S.a],data:{permissions:["administracion.facturacion"]}}]),b.Bz]})}return i})();var O=n(4104),Y=n(6340),$=n(6022),w=n(6218),M=n(1865),H=n(2160),q=n(354),D=n(7213),G=n(5722),j=n(1712);let Q=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({providers:[{provide:d.TP,useClass:P.n,multi:!0},Z],imports:[E,c.ez,f.U$,C.O,s.u5,u.hJ,A.T,O.EV,Y.V,$.Xt,v.j,w.A,H.kW,M.cc,q.L$,D.S,G.ii.forRoot(),s.UX,p.ef,j.U]})}return i})()}}]);