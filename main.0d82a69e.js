parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=0,i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],s=document.querySelector("button"),u=document.querySelectorAll(".field-row"),f=document.querySelectorAll(".field-cell"),l=document.querySelector(".game-score"),d=document.querySelector(".message-start"),v=document.querySelector(".message-lose"),h=document.querySelector(".message-win");function m(){for(var e=0;e<4;e++)for(var r=0;r<4;r++)i[e][r]&&(u[e].children[r].textContent=i[e][r],u[e].children[r].classList="field-cell field-cell--".concat(i[e][r]))}function y(){e(f).forEach(function(e){e.textContent="",e.classList="field-cell"})}function g(){var e=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());i[e][r]?g():i[e][r]=Math.random()>.9?4:2}function p(e){switch(y(),e.key){case"ArrowLeft":L(!1);break;case"ArrowRight":L(!0);break;case"ArrowUp":A(!1);break;case"ArrowDown":A(!0)}m(),k()&&k(),b()||w()||(v.classList.remove("hidden"),document.removeEventListener("keydown",p)),l.textContent=c}function b(){for(var e=[],r=0,t=0;t<4;t++)for(var n=1;n<4;n++)i[t][n]===i[t][n-1]?e.push(1):e.push(0);for(var o=0;o<4;o++)for(var a=0;a<4;a++)0===i[o][a]&&r++;return!(!r&&!e.some(function(e){return 1===e}))}function w(){for(var e=[],r=0,t=0;t<4;t++)for(var n=1;n<4;n++)i[n][t]===i[n-1][t]?e.push(1):e.push(0);for(var o=0;o<4;o++)for(var a=0;a<4;a++)0===i[o][a]&&r++;return!(!r&&!e.some(function(e){return 1===e}))}function L(e){if(b()){for(var r=0;r<4;r++){var t=S(i[r]);if(e&&t.reverse(),t.length>1){for(var n=1;n<t.length;n++)t[n-1]===t[n]&&(t[n-1]*=2,t[n]=0,c+=t[n-1],S(t));t=S(t)}for(;4!==t.length;)t.push(0);e&&t.reverse(),i[r]=t}g()}}function A(e){if(w()){for(var r=0;r<4;r++){for(var t=[],n=0;n<4;n++)t.push(i[n][r]);var o=S(t);if(e&&o.reverse(),o.length>1){for(var a=1;a<o.length;a++)o[a-1]===o[a]&&(o[a-1]*=2,o[a]=0,c+=o[a-1]);o=S(o)}for(;4!==o.length;)o.push(0);e&&o.reverse();for(var s=0;s<4;s++)i[s][r]=o[s];o=[],t=[]}g()}}function S(e){return e.filter(function(e){return 0!==e})}function k(){return i.forEach(function(e){return e.forEach(function(e){if(2048===e)return h.classList.remove("hidden"),document.removeEventListener("keydown",p),!0})}),!1}s.addEventListener("click",function(e){"Restart"===e.target.textContent&&(y(),i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=0,l.textContent=0),s.classList.remove("start"),s.classList.add("restart"),s.textContent="Restart",d.classList.add("hidden"),h.classList.add("hidden"),v.classList.add("hidden"),g(),g(),m(),document.addEventListener("keydown",p)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0d82a69e.js.map