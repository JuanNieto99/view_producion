(()=>{"use strict";var e,g={},v={};function a(e){var f=v[e];if(void 0!==f)return f.exports;var t=v[e]={exports:{}};return g[e].call(t.exports,t,t.exports,a),t.exports}a.m=g,e=[],a.O=(f,t,n,o)=>{if(!t){var r=1/0;for(d=0;d<e.length;d++){for(var[t,n,o]=e[d],s=!0,c=0;c<t.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every(p=>a.O[p](t[c]))?t.splice(c--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var i=n();void 0!==i&&(f=i)}}return f}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,n,o]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;a.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var o=Object.create(null);a.r(o);var d={};f=f||[null,e({}),e([]),e(e)];for(var r=2&n&&t;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,a.d(o,d),o}})(),a.d=(e,f)=>{for(var t in f)a.o(f,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,t)=>(a.f[t](e,f),f),[])),a.u=e=>(592===e?"common":e)+"."+{14:"71d5480bbe3ab7e8",21:"53e6764897f99645",37:"e7c4e93ea7362c3d",55:"f1a35552089ba75b",57:"46ae1535f619472f",63:"45484e1fef1a199f",68:"868733190b3f69f2",91:"a8f8c4c97b30e30d",94:"9b129d162613fcc6",104:"d767e1d536182bfd",118:"013b1bd57296c6fb",122:"d8576a56e9bcd629",155:"c379b671c3046634",230:"244ba9bb007e661e",241:"218c502e067f712e",252:"153ac67930837693",271:"730dbe6d894731c8",315:"d8b7e92d323f0682",437:"ee33d2792e79fd4c",475:"f35e1967f837b34b",479:"f0c54be8c793263f",514:"3f2815ec44b7b0b1",592:"3bbdf8107bd96078",595:"ab14eaa8f9a4877b",610:"7d45e338ce9a95f0",614:"880b7526914c656e",617:"5e5b9b2560748b19",664:"2d6a33139eb652b7",669:"6ea2a9d782458c94",715:"fd4b5e389d5ec5fc",731:"7d5b4dc0c0203516",737:"b15e8f8016bf28ea",763:"ae838c85107915fb",783:"1e6acdf0b9295ad2",844:"fb0f9cee2fd13ebf",857:"8d648efae9e162e5",945:"2165f80c529f9a12",970:"93c4630442ee11de",977:"fec91d165066d7c1"}[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="sakai-ng:";a.l=(t,n,o,d)=>{if(e[t])e[t].push(n);else{var r,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var b=c[i];if(b.getAttribute("src")==t||b.getAttribute("data-webpack")==f+o){r=b;break}}r||(s=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",f+o),r.src=a.tu(t)),e[t]=[n];var u=(_,p)=>{r.onerror=r.onload=null,clearTimeout(l);var m=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),m&&m.forEach(y=>y(p)),_)return _(p)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={666:0};a.f.j=(n,o)=>{var d=a.o(e,n)?e[n]:void 0;if(0!==d)if(d)o.push(d[2]);else if(666!=n){var r=new Promise((b,u)=>d=e[n]=[b,u]);o.push(d[2]=r);var s=a.p+a.u(n),c=new Error;a.l(s,b=>{if(a.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var u=b&&("load"===b.type?"missing":b.type),l=b&&b.target&&b.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+l+")",c.name="ChunkLoadError",c.type=u,c.request=l,d[1](c)}},"chunk-"+n,n)}else e[n]=0},a.O.j=n=>0===e[n];var f=(n,o)=>{var c,i,[d,r,s]=o,b=0;if(d.some(l=>0!==e[l])){for(c in r)a.o(r,c)&&(a.m[c]=r[c]);if(s)var u=s(a)}for(n&&n(o);b<d.length;b++)a.o(e,i=d[b])&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},t=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();