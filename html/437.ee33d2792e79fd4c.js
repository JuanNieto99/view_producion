"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[437],{8057:(z,k,p)=>{p.d(k,{XZ:()=>E,nD:()=>H});var d=p(6814),n=p(4946),e=p(95),b=p(2332),C=p(5219),g=p(2591);const w=["cb"];function f(o,m){if(1&o&&n._UZ(0,"span",10),2&o){const l=n.oxw(3);n.Q6J("ngClass",l.checkboxIcon)}}function x(o,m){1&o&&n._UZ(0,"CheckIcon",11),2&o&&n.Q6J("styleClass","p-checkbox-icon")}function I(o,m){if(1&o&&(n.ynx(0),n.YNc(1,f,1,1,"span",8),n.YNc(2,x,1,1,"CheckIcon",9),n.BQk()),2&o){const l=n.oxw(2);n.xp6(1),n.Q6J("ngIf",l.checkboxIcon),n.xp6(1),n.Q6J("ngIf",!l.checkboxIcon)}}function L(o,m){}function P(o,m){1&o&&n.YNc(0,L,0,0,"ng-template")}function M(o,m){if(1&o&&(n.TgZ(0,"span",12),n.YNc(1,P,1,0,null,13),n.qZA()),2&o){const l=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",l.checkboxIconTemplate)}}function D(o,m){if(1&o&&(n.ynx(0),n.YNc(1,I,3,2,"ng-container",5),n.YNc(2,M,2,1,"span",7),n.BQk()),2&o){const l=n.oxw();n.xp6(1),n.Q6J("ngIf",!l.checkboxIconTemplate),n.xp6(1),n.Q6J("ngIf",l.checkboxIconTemplate)}}const O=function(o,m,l){return{"p-checkbox-label":!0,"p-checkbox-label-active":o,"p-disabled":m,"p-checkbox-label-focus":l}};function S(o,m){if(1&o){const l=n.EpF();n.TgZ(0,"label",14),n.NdJ("click",function(r){n.CHM(l);const v=n.oxw(),y=n.MAs(3);return n.KtG(v.onClick(r,y,!0))}),n._uU(1),n.qZA()}if(2&o){const l=n.oxw();n.Tol(l.labelStyleClass),n.Q6J("ngClass",n.kEZ(5,O,l.checked(),l.disabled,l.focused)),n.uIk("for",l.inputId),n.xp6(1),n.Oqu(l.label)}}const A=function(o,m,l){return{"p-checkbox p-component":!0,"p-checkbox-checked":o,"p-checkbox-disabled":m,"p-checkbox-focused":l}},Z=function(o,m,l){return{"p-highlight":o,"p-disabled":m,"p-focus":l}},B={provide:e.JU,useExisting:(0,n.Gpc)(()=>E),multi:!0};let E=(()=>{class o{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new n.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(l){this.cd=l}ngAfterContentInit(){this.templates.forEach(l=>{"icon"===l.getType()&&(this.checkboxIconTemplate=l.template)})}onClick(l,c,r){l.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(l),r&&c.focus())}updateModel(l){let c;this.binary?(c=this.checked()?this.falseValue:this.trueValue,this.model=c,this.onModelChange(c)):(c=this.checked()?this.model.filter(r=>!b.gb.equals(r,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(c),this.model=c,this.formControl&&this.formControl.setValue(c)),this.onChange.emit({checked:c,originalEvent:l})}handleChange(l){this.readonly||this.updateModel(l)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(l){this.model=l,this.cd.markForCheck()}registerOnChange(l){this.onModelChange=l}registerOnTouched(l){this.onModelTouched=l}setDisabledState(l){this.disabled=l,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:b.gb.contains(this.value,this.model)}static \u0275fac=function(c){return new(c||o)(n.Y36(n.sBO))};static \u0275cmp=n.Xpm({type:o,selectors:[["p-checkbox"]],contentQueries:function(c,r,v){if(1&c&&n.Suo(v,C.jx,4),2&c){let y;n.iGM(y=n.CRH())&&(r.templates=y)}},viewQuery:function(c,r){if(1&c&&n.Gf(w,5),2&c){let v;n.iGM(v=n.CRH())&&(r.inputViewChild=v.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[n._Bn([B])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(c,r){if(1&c){const v=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),n.NdJ("focus",function(){return r.onFocus()})("blur",function(){return r.onBlur()})("change",function(T){return r.handleChange(T)}),n.qZA()(),n.TgZ(4,"div",4),n.NdJ("click",function(T){n.CHM(v);const R=n.MAs(3);return n.KtG(r.onClick(T,R,!0))}),n.YNc(5,D,3,2,"ng-container",5),n.qZA()(),n.YNc(6,S,2,9,"label",6)}2&c&&(n.Tol(r.styleClass),n.Q6J("ngStyle",r.style)("ngClass",n.kEZ(18,A,r.checked(),r.disabled,r.focused)),n.xp6(2),n.Q6J("readonly",r.readonly)("value",r.value)("checked",r.checked())("disabled",r.disabled),n.uIk("id",r.inputId)("name",r.name)("tabindex",r.tabindex)("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("aria-checked",r.checked())("required",r.required),n.xp6(2),n.Q6J("ngClass",n.kEZ(22,Z,r.checked(),r.disabled,r.focused)),n.xp6(1),n.Q6J("ngIf",r.checked()),n.xp6(1),n.Q6J("ngIf",r.label))},dependencies:function(){return[d.mk,d.O5,d.tP,d.PC,g.n]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})}return o})(),H=(()=>{class o{static \u0275fac=function(c){return new(c||o)};static \u0275mod=n.oAB({type:o});static \u0275inj=n.cJS({imports:[d.ez,g.n,C.m8]})}return o})()},2591:(z,k,p)=>{p.d(k,{n:()=>e});var d=p(4946),n=p(4713);let e=(()=>{class b extends n.s{static \u0275fac=function(){let g;return function(f){return(g||(g=d.n5z(b)))(f||b)}}();static \u0275cmp=d.Xpm({type:b,selectors:[["CheckIcon"]],standalone:!0,features:[d.qOj,d.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(w,f){1&w&&(d.O4$(),d.TgZ(0,"svg",0),d._UZ(1,"path",1),d.qZA()),2&w&&(d.Tol(f.getClassNames()),d.uIk("aria-label",f.ariaLabel)("aria-hidden",f.ariaHidden)("role",f.role))},encapsulation:2})}return b})()},1423:(z,k,p)=>{p.d(k,{gz:()=>W});var d=p(6825),n=p(6814),e=p(4946),b=p(95),C=p(5219),g=p(2076),w=p(3714),f=p(2332),x=p(7778),I=p(4713);let L=(()=>{class s extends I.s{pathId;ngOnInit(){this.pathId="url(#"+(0,f.Th)()+")"}static \u0275fac=function(){let t;return function(i){return(t||(t=e.n5z(s)))(i||s)}}();static \u0275cmp=e.Xpm({type:s,selectors:[["EyeSlashIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,i){1&a&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&a&&(e.Tol(i.getClassNames()),e.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),e.xp6(1),e.uIk("clip-path",i.pathId),e.xp6(3),e.Q6J("id",i.pathId))},encapsulation:2})}return s})(),P=(()=>{class s extends I.s{static \u0275fac=function(){let t;return function(i){return(t||(t=e.n5z(s)))(i||s)}}();static \u0275cmp=e.Xpm({type:s,selectors:[["EyeIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(a,i){1&a&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&a&&(e.Tol(i.getClassNames()),e.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return s})();const M=["input"];function D(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"TimesIcon",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clear())}),e.qZA()}2&s&&e.Q6J("styleClass","p-password-clear-icon")}function O(s,h){}function S(s,h){1&s&&e.YNc(0,O,0,0,"ng-template")}function A(s,h){if(1&s){const t=e.EpF();e.ynx(0),e.YNc(1,D,1,1,"TimesIcon",5),e.TgZ(2,"span",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clear())}),e.YNc(3,S,1,0,null,7),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.clearIconTemplate),e.xp6(2),e.Q6J("ngTemplateOutlet",t.clearIconTemplate)}}function Z(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"EyeSlashIcon",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.onMaskToggle())}),e.qZA()}}function B(s,h){}function E(s,h){1&s&&e.YNc(0,B,0,0,"ng-template")}function H(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.onMaskToggle())}),e.YNc(1,E,1,0,null,7),e.qZA()}if(2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.hideIconTemplate)}}function o(s,h){if(1&s&&(e.ynx(0),e.YNc(1,Z,1,0,"EyeSlashIcon",9),e.YNc(2,H,2,1,"span",9),e.BQk()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.hideIconTemplate),e.xp6(1),e.Q6J("ngIf",t.hideIconTemplate)}}function m(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"EyeIcon",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.onMaskToggle())}),e.qZA()}}function l(s,h){}function c(s,h){1&s&&e.YNc(0,l,0,0,"ng-template")}function r(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.onMaskToggle())}),e.YNc(1,c,1,0,null,7),e.qZA()}if(2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.showIconTemplate)}}function v(s,h){if(1&s&&(e.ynx(0),e.YNc(1,m,1,0,"EyeIcon",9),e.YNc(2,r,2,1,"span",9),e.BQk()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.showIconTemplate),e.xp6(1),e.Q6J("ngIf",t.showIconTemplate)}}function y(s,h){if(1&s&&(e.ynx(0),e.YNc(1,o,3,2,"ng-container",3),e.YNc(2,v,3,2,"ng-container",3),e.BQk()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.unmasked),e.xp6(1),e.Q6J("ngIf",!t.unmasked)}}function T(s,h){1&s&&e.GkF(0)}function R(s,h){1&s&&e.GkF(0)}function Q(s,h){if(1&s&&(e.ynx(0),e.YNc(1,R,1,0,"ng-container",7),e.BQk()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const J=function(s){return{width:s}};function N(s,h){if(1&s&&(e.TgZ(0,"div",15),e._UZ(1,"div",0),e.ALo(2,"mapper"),e.qZA(),e.TgZ(3,"div",16),e._uU(4),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.xi3(2,3,t.meter,t.strengthClass))("ngStyle",e.VKq(6,J,t.meter?t.meter.width:"")),e.xp6(3),e.Oqu(t.infoText)}}function F(s,h){1&s&&e.GkF(0)}const Y=function(s,h){return{showTransitionParams:s,hideTransitionParams:h}},V=function(s){return{value:"visible",params:s}};function K(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"div",11,12),e.NdJ("click",function(i){e.CHM(t);const u=e.oxw();return e.KtG(u.onOverlayClick(i))})("@overlayAnimation.start",function(i){e.CHM(t);const u=e.oxw();return e.KtG(u.onAnimationStart(i))})("@overlayAnimation.done",function(i){e.CHM(t);const u=e.oxw();return e.KtG(u.onAnimationEnd(i))}),e.YNc(2,T,1,0,"ng-container",7),e.YNc(3,Q,2,1,"ng-container",13),e.YNc(4,N,5,8,"ng-template",null,14,e.W1O),e.YNc(6,F,1,0,"ng-container",7),e.qZA()}if(2&s){const t=e.MAs(5),a=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,V,e.WLB(6,Y,a.showTransitionOptions,a.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",a.headerTemplate),e.xp6(1),e.Q6J("ngIf",a.contentTemplate)("ngIfElse",t),e.xp6(3),e.Q6J("ngTemplateOutlet",a.footerTemplate)}}let U=(()=>{class s{transform(t,a,...i){return a(t,...i)}static \u0275fac=function(a){return new(a||s)};static \u0275pipe=e.Yjl({name:"mapper",type:s,pure:!0})}return s})();const G={provide:b.JU,useExisting:(0,e.Gpc)(()=>j),multi:!0};let j=(()=>{class s{document;platformId;renderer;cd;config;el;overlayService;ariaLabel;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";placeholder;showClear=!1;onFocus=new e.vpe;onBlur=new e.vpe;onClear=new e.vpe;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;constructor(t,a,i,u,_,q,$){this.document=t,this.platformId=a,this.renderer=i,this.cd=u,this.config=_,this.el=q,this.overlayService=$}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"clearicon":this.clearIconTemplate=t.template;break;case"hideicon":this.hideIconTemplate=t.template;break;case"showicon":this.showIconTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,f.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&f.P9.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=g.p.getOuterWidth(this.input.nativeElement)+"px",g.p.absolutePosition(this.overlay,this.input.nativeElement)):g.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value)}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let a=null,i=null;switch(this.testStrength(t)){case 1:a=this.weakText(),i={strength:"weak",width:"33.33%"};break;case 2:a=this.mediumText(),i={strength:"medium",width:"66.66%"};break;case 3:a=this.strongText(),i={strength:"strong",width:"100%"};break;default:a=this.promptText(),i=null}this.meter=i,this.infoText=a}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let a=0;return this.strongCheckRegExp.test(t)?a=3:this.mediumCheckRegExp.test(t)?a=2:t.length&&(a=1),a}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}bindScrollListener(){(0,n.NF)(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new g.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){(0,n.NF)(this.platformId)&&!this.resizeListener&&(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",()=>{this.overlayVisible&&!g.p.isTouchDevice()&&(this.overlayVisible=!1)}))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}strengthClass(t){return`p-password-strength ${t?t.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(C.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(C.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(C.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(C.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(f.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}static \u0275fac=function(a){return new(a||s)(e.Y36(n.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(C.b4),e.Y36(e.SBq),e.Y36(C.F0))};static \u0275cmp=e.Xpm({type:s,selectors:[["p-password"]],contentQueries:function(a,i,u){if(1&a&&e.Suo(u,C.jx,4),2&a){let _;e.iGM(_=e.CRH())&&(i.templates=_)}},viewQuery:function(a,i){if(1&a&&e.Gf(M,5),2&a){let u;e.iGM(u=e.CRH())&&(i.input=u.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(a,i){2&a&&e.ekj("p-inputwrapper-filled",i.filled())("p-inputwrapper-focus",i.focused)("p-password-clearable",i.showClear)("p-password-mask",i.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:"maxLength",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e._Bn([G])],decls:9,vars:28,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],[4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[3,"styleClass","click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[3,"styleClass","click"],[3,"click",4,"ngIf"],[3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0),e.ALo(1,"mapper"),e.TgZ(2,"input",1,2),e.NdJ("input",function(_){return i.onInput(_)})("focus",function(_){return i.onInputFocus(_)})("blur",function(_){return i.onInputBlur(_)})("keyup",function(_){return i.onKeyUp(_)})("keydown",function(_){return i.onKeyDown(_)}),e.ALo(4,"mapper"),e.ALo(5,"mapper"),e.qZA(),e.YNc(6,A,4,2,"ng-container",3),e.YNc(7,y,3,2,"ng-container",3),e.YNc(8,K,7,11,"div",4),e.qZA()),2&a&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.xi3(1,19,i.toggleMask,i.containerClass))("ngStyle",i.style),e.xp6(2),e.Tol(i.inputStyleClass),e.Q6J("ngClass",e.xi3(4,22,i.disabled,i.inputFieldClass))("ngStyle",i.inputStyle)("value",i.value),e.uIk("label",i.label)("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.inputId)("type",e.xi3(5,25,i.unmasked,i.inputType))("placeholder",i.placeholder)("maxlength",i.maxLength),e.xp6(4),e.Q6J("ngIf",i.showClear&&null!=i.value),e.xp6(1),e.Q6J("ngIf",i.toggleMask),e.xp6(1),e.Q6J("ngIf",i.overlayVisible))},dependencies:function(){return[n.mk,n.O5,n.tP,n.PC,w.o,x.q,L,P,U]},styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,d.X$)("overlayAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)(":leave",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({opacity:0}))])])]},changeDetection:0})}return s})(),W=(()=>{class s{static \u0275fac=function(a){return new(a||s)};static \u0275mod=e.oAB({type:s});static \u0275inj=e.cJS({imports:[n.ez,w.j,x.q,L,P,C.m8]})}return s})()}}]);