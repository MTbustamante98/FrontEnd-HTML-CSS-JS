(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var r=function(t){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}function r(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t(n.key),n)}}new(function(){return e=function e(t,r,o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dropDownMenu=document.querySelector(t),this.headerNav=document.querySelector(r),this.imgBurguer=document.querySelector(o),this.events=void 0===n?["touchstart","click"]:n,this.activeClass="active",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)},(t=[{key:"activeDropDownMenu",value:function(e){var t=this.headerNav.classList.toggle(this.activeClass);if(this.imgBurguer){var r=t?"./assets/images/icon-menu-close.svg":"./assets/images/icon-menu.svg";this.imgBurguer.setAttribute("src",r),this.imgBurguer.classList.toggle(this.activeClass)}}},{key:"addDropDownMenuEvent",value:function(){var e=this;try{this.dropDownMenu&&(this.events.forEach((function(t){e.dropDownMenu.addEventListener(t,e.activeDropDownMenu)})),console.log("Eventos Adicionados com sucesso"))}catch(e){console.error("Erro ao adicionar eventos:",error)}}},{key:"init",value:function(){return this.dropDownMenu&&this.headerNav&&this.imgBurguer&&this.addDropDownMenuEvent(),this}}])&&r(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}())('[data-menu="button"]',".header nav","#burguerImg").init()})();