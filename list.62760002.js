parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Zy0T":[function(require,module,exports) {
var e=document.querySelector(".women"),l=document.querySelector(".men"),t=document.querySelectorAll(".menu__list-name"),o=document.querySelector(".mobile__menu ");console.log(o);var n=document.querySelector(".menu__list-links");console.log(l);var c=document.querySelector(".cross__menu-btn");e.addEventListener("click",function(t){t.preventDefault(),e.style.color="#0F303F",l.style.color="#B7C1C5",e.classList.add("line-color"),l.classList.remove("line-color"),o.style.display="block",n.style.display="flex"}),l.addEventListener("click",function(t){t.preventDefault(),e.style.color="#B7C1C5",l.style.color="#0F303F",l.classList.add("line-color"),e.classList.remove("line-color"),o.style.display="block",n.style.display="flex"}),c.addEventListener("click",function(e){e.preventDefault(),o.style.display="none",n.style.display="none"}),t.forEach(function(e){e.addEventListener("click",function(e){e.target.parentElement.lastElementChild.classList.toggle("open")})});
},{}]},{},["Zy0T"], null)
//# sourceMappingURL=/Shop-project/list.62760002.js.map