(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function n(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,e(i.key),i)}}new(function(){return t=function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dropDownMenu=document.querySelector(e),this.headerNav=document.querySelector(n),this.imgBurguer=document.querySelector(r),this.events=void 0===i?["touchstart","click"]:i,this.activeClass="active",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)},(e=[{key:"activeDropDownMenu",value:function(t){t.preventDefault();var e=this.headerNav.classList.toggle(this.activeClass);if(this.imgBurguer){var n=e?"assets/images/icon-menu-close.svg":"assets/images/icon-menu.svg";this.imgBurguer.setAttribute("src",n),this.imgBurguer.classList.toggle(this.activeClass)}}},{key:"addDropDownMenuEvent",value:function(){var t=this;this.dropDownMenu&&this.events.forEach((function(e){t.dropDownMenu.addEventListener(e,t.activeDropDownMenu)}))}},{key:"init",value:function(){return this.dropDownMenu&&this.headerNav&&this.imgBurguer&&this.addDropDownMenuEvent(),this}}])&&n(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}())('[data-menu="button"]',".header nav","#burguerImg").init()})();