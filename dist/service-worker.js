if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),u={module:{uri:o},exports:c,require:l};s[o]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(n(...e),c)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"absensi_ui"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/assets/css/style.css",revision:"90c97736a199b0388a184135eacee0fb"},{url:"/css/app.917640d6.css",revision:null},{url:"/css/chunk-vendors.231421a7.css",revision:null},{url:"/favicon.png",revision:"cffcd51efa49ab1ac1d8ac6e36462235"},{url:"/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/img/kartu.cdc13a29.jpg",revision:null},{url:"/img/kartu.jpg",revision:"7569972002ba625eb970dd1c60b04ce6"},{url:"/img/profil.jpg",revision:"6092f981cfbe4c00908cdb31289bce65"},{url:"/img/stg.5503ef6d.jpg",revision:null},{url:"/img/stg.jpg",revision:"0a7c42692f49497ac84ba0f68b7f0489"},{url:"/index.html",revision:"c918cbf019c4d5d15a6a3bac3528bf3b"},{url:"/js/668.0915d776.js",revision:null},{url:"/js/838.9b1643b1.js",revision:null},{url:"/js/app.f2c2e1d9.js",revision:null},{url:"/js/chunk-vendors.6624ec79.js",revision:null},{url:"/manifest.json",revision:"bc5298cfc8898648b6d12c464ee47774"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
