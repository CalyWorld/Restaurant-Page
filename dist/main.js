(()=>{"use strict";var e,t,n,o,c,d,r={559:(e,t,n)=>{e.exports=n.p+"f9413a4fa93cb839c9f8.jpg"},556:(e,t,n)=>{e.exports=n.p+"3db5869bf9acbbda2364.png"},764:(e,t,n)=>{e.exports=n.p+"496eb3fe4d69e349dbe8.jpg"},63:(e,t,n)=>{e.exports=n.p+"3d2794dc83c9f6633434.jpg"},138:(e,t,n)=>{e.exports=n.p+"6ef6db913df93a631506.jpg"},840:(e,t,n)=>{e.exports=n.p+"c82c1df46cc68b58c12f.jpg"}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(764),t=i(556),n=i(559),o=i(63),c=i(138),d=i(840),document.body.append((()=>{const e=document.createElement("header"),n=document.createElement("div"),o=document.createElement("ul"),c=document.createElement("li"),d=document.createElement("button"),r=document.createElement("button"),a=document.createElement("button");n.classList.add("icon"),o.classList.add("select"),c.classList.add("list"),d.setAttribute("id","homebtn"),r.setAttribute("id","orderbtn"),a.setAttribute("id","contactbtn"),e.append(n),e.append(o),c.append(d),c.append(r),c.append(a),o.append(c);const i=new Image;return i.src=t,i.setAttribute("id","icon"),n.append(i),d.textContent="Home",r.textContent="Order",a.textContent="Contact",e})()),document.body.append((()=>{const t=document.getElementById("content"),n=document.createElement("div"),o=document.createElement("h1"),c=document.createElement("div"),d=new Image;return d.src=e,d.setAttribute("id","front-pageImage"),c.setAttribute("id","image-container"),o.textContent="Welcome to MI CASA",n.setAttribute("id","homecontainer"),o.classList.add("hometitle"),c.append(d),n.append(o),n.append(c),t.append(n),t})()),document.body.append((()=>{const e=document.createElement("footer");return e.textContent="Made by Callistus Anizoba",e})()),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","ordercontainer");const r=document.createElement("div");r.setAttribute("id","orderimage-container");const a=document.createElement("h1");a.setAttribute("id","ordertitle"),a.textContent="What do you want to order?";const i=new Image,p=new Image,s=new Image,m=new Image;i.src=n,i.setAttribute("id","brookeImage"),p.src=o,p.setAttribute("id","jayImage"),s.src=c,s.setAttribute("id","lilyImage"),m.src=d,m.setAttribute("id","olayinkaImage"),r.append(i),r.append(p),r.append(s),r.append(m),t.append(a),t.append(r),e.append(t)})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","contactcontainer");const n=document.createElement("h1");n.textContent="Make a Contact",n.setAttribute("id","contact-title"),t.append(n),e.append(t)})(),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(e=>{"homebtn"===e.target.id?(document.getElementById("homecontainer").style.display="block",document.getElementById("ordercontainer").style.display="none",document.getElementById("contactcontainer").style.display="none"):"orderbtn"===e.target.id?(document.getElementById("ordercontainer").style.display="block",document.getElementById("homecontainer").style.display="none",document.getElementById("contactcontainer").style.display="none"):"contactbtn"===e.target.id&&(document.getElementById("contactcontainer").style.display="block",document.getElementById("homecontainer").style.display="none",document.getElementById("ordercontainer").style.display="none")}))}))})();