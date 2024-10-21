"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[76],{3192:(p,u,s)=>{s.d(u,{p:()=>_});var d=s(4412),c=s(6354),n=s(9437),o=s(306),h=s(540),a=s(1626);let _=(()=>{class r{constructor(t){this.httpClient=t,this.dataSubject=new d.t([]),this.baseUrl=o.T.url,this.endpointCountry="/paisListar",this.endpointState="/departamentoPaisListar",this.endpointCity="/ciudadDepartamentoListar",this.endpointHotelsListar="/hotelListar",this.endpointHotelMostrar="/hotelMostrar/",this.endpointHotelCrear="/hotelCrear",this.endpointHotelActualizar="/hotelActualizar",this.endpointHotelEliminar="/hotelEliminar/",this.data=this.dataSubject.asObservable()}getAll(t,e="",l=1){return this.httpClient.post(`${this.baseUrl+this.endpointHotelsListar}?per_page=${t}&page=${l}&search=${e}`,{})}getHotel(t){return this.httpClient.get(`${this.baseUrl+this.endpointHotelMostrar+t}`)}refreshHotelsData(){this.getAll(30).subscribe(t=>{this.dataSubject.next(t.data)},t=>{console.log("Error: ",t)})}createHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelCrear}`,t)}deleteHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelEliminar}`,{id:t})}updateHotel(t){return this.httpClient.post(`${this.baseUrl+this.endpointHotelActualizar}`,t)}getCountries(){return this.httpClient.post(`${this.baseUrl+this.endpointCountry}`,{id:""}).pipe((0,c.T)(e=>e&&e.data&&Array.isArray(e.data)?e.data:[]),(0,n.W)(e=>(console.log("Error:",e),[])))}getStates(t){return this.httpClient.post(`${this.baseUrl+this.endpointState}`,{id:t})}getCities(t){return this.httpClient.post(`${this.baseUrl+this.endpointCity}`,{id:t})}static{this.\u0275fac=function(e){return new(e||r)(h.KVO(a.Qq))}}static{this.\u0275prov=h.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})()},1550:(p,u,s)=>{s.d(u,{b:()=>h});var d=s(4412),c=s(1413),n=s(3091),o=s(540);let h=(()=>{class a{constructor(r){this.router=r,this.breadcrumbs=new d.t([]),this.currentBreadcrumbs=this.breadcrumbs.asObservable(),this.removeSubject=new c.B,this.removeItem=this.removeSubject.asObservable(),this.router.events.subscribe(i=>{i instanceof n.wF&&this.updateBreadcrumbs(i.urlAfterRedirects)})}updateBreadcrumbs(r){const t=r.split("/").map((e,l)=>0===l?"Home":e);this.breadcrumbs.next(t)}addItem(r){this.breadcrumbs.getValue().push(r),this.breadcrumbs.next(this.breadcrumbs.getValue())}quitItem(r){this.removeSubject.next(r)}static{this.\u0275fac=function(i){return new(i||a)(o.KVO(n.Ix))}}static{this.\u0275prov=o.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()}}]);