(()=>{"use strict";var e,g={},v={};function a(e){var f=v[e];if(void 0!==f)return f.exports;var t=v[e]={exports:{}};return g[e].call(t.exports,t,t.exports,a),t.exports}a.m=g,e=[],a.O=(f,t,n,d)=>{if(!t){var r=1/0;for(c=0;c<e.length;c++){for(var[t,n,d]=e[c],s=!0,o=0;o<t.length;o++)(!1&d||r>=d)&&Object.keys(a.O).every(p=>a.O[p](t[o]))?t.splice(o--,1):(s=!1,d<r&&(r=d));if(s){e.splice(c--,1);var b=n();void 0!==b&&(f=b)}}return f}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[t,n,d]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;a.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var d=Object.create(null);a.r(d);var c={};f=f||[null,e({}),e([]),e(e)];for(var r=2&n&&t;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>c[s]=()=>t[s]);return c.default=()=>t,a.d(d,c),d}})(),a.d=(e,f)=>{for(var t in f)a.o(f,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,t)=>(a.f[t](e,f),f),[])),a.u=e=>(76===e?"common":e)+"."+{11:"55386fe2d98670cd",29:"2e6e3c24add6c8f0",34:"5ca1fcd146a78061",51:"914dd17c8bd2729e",53:"e1ec8ea2a0995f1f",76:"f465e9edeef05182",89:"0545788cdf5f6ee8",99:"db376aff43f55cca",113:"d6d91f35543a2d8d",144:"895819bf34d7d539",159:"09181216614db008",168:"9f9011c7f584e836",228:"1349174221c528e8",256:"15800008b96e4a9c",296:"5e850d3b281d99ea",297:"c7c70a6dfe29e4b5",298:"0bdfe7c46e0306f1",365:"445758590c00dbbe",386:"85cb8e6d8712d37e",413:"0285677a440a4cb6",423:"6467d78b5ca1eea1",431:"8a07fcf879c4929b",467:"5badd62def9477f0",473:"2d0352df400ea894",493:"d11bf782a1c8b28b",529:"23310cfec4245394",582:"336dc621238f1a38",589:"97633babb4ec206a",593:"432c4c38617df5f8",598:"1386f4bf61dd5086",623:"31a8370e4ef43f45",640:"37bc582024f85eda",676:"afd4b69471fe35be",715:"019be0f6612d54e4",771:"f0548c9cdbf136db",788:"18b7826270fb65f0",831:"e5ed34a391d8113c",852:"91fa616616ccd7e2",924:"cf6ca4d53eb55835",945:"858b7c5a2a2375e4",959:"5cb643b281121f5e"}[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="sakai-ng:";a.l=(t,n,d,c)=>{if(e[t])e[t].push(n);else{var r,s;if(void 0!==d)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var i=o[b];if(i.getAttribute("src")==t||i.getAttribute("data-webpack")==f+d){r=i;break}}r||(s=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",f+d),r.src=a.tu(t)),e[t]=[n];var u=(_,p)=>{r.onerror=r.onload=null,clearTimeout(l);var m=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),m&&m.forEach(y=>y(p)),_)return _(p)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={121:0};a.f.j=(n,d)=>{var c=a.o(e,n)?e[n]:void 0;if(0!==c)if(c)d.push(c[2]);else if(121!=n){var r=new Promise((i,u)=>c=e[n]=[i,u]);d.push(c[2]=r);var s=a.p+a.u(n),o=new Error;a.l(s,i=>{if(a.o(e,n)&&(0!==(c=e[n])&&(e[n]=void 0),c)){var u=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;o.message="Loading chunk "+n+" failed.\n("+u+": "+l+")",o.name="ChunkLoadError",o.type=u,o.request=l,c[1](o)}},"chunk-"+n,n)}else e[n]=0},a.O.j=n=>0===e[n];var f=(n,d)=>{var o,b,[c,r,s]=d,i=0;if(c.some(l=>0!==e[l])){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(s)var u=s(a)}for(n&&n(d);i<c.length;i++)a.o(e,b=c[i])&&e[b]&&e[b][0](),e[b]=0;return a.O(u)},t=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();