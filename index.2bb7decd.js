var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("gUcIm");const r=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),d=document.querySelector(".breed-name"),i=document.querySelector(".description"),y=document.querySelector(".temperament"),c=document.querySelector(".loader"),a=document.querySelector(".error"),p=s.querySelector("img");r.style.display="none",s.style.display="none",a.style.display="none",c.style.display="block",(0,l.fetchBreeds)().then((e=>{r.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join(""),r.style.display="block",c.style.display="none"})).catch((e=>{a.style.display="block",console.error(e),c.style.display="none"})),r.addEventListener("change",(()=>{const e=r.value;r.style.display="none",s.style.display="none",a.style.display="none",c.style.display="block",(0,l.fetchCatByBreed)(e).then((e=>{const t=e[0];d.textContent=t.breeds[0].name,i.textContent=t.breeds[0].description,y.textContent=t.breeds[0].temperament,p.src=t.url,p.style.maxWidth="300px",p.style.height="auto",c.style.display="none",s.style.display="block",r.style.display="block"})).catch((e=>{a.style.display="block",console.error(e),c.style.display="none"}))}));
//# sourceMappingURL=index.2bb7decd.js.map
