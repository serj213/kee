!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.querySelector("#burger"),i=document.querySelector("#menu"),o=document.querySelector("#close"),c=document.querySelector("body");a&&a.addEventListener("click",(function(e){i.classList.add("main-menu--active"),c.classList.add("lock")})),o&&o.addEventListener("click",(function(e){i.classList.remove("main-menu--active"),c.classList.remove("lock")}));var s=document.querySelectorAll(".popup-link"),l=document.querySelector("body"),u=document.querySelectorAll(".lock-padding"),d=!0;if(s.length>0)for(var p=function(e){var t=s[e];t.addEventListener("click",(function(e){var n=t.getAttribute("href").replace("#","");!function(e){if(e&&d){var t=document.querySelector("popup.popup--active");t?h(t,!1):function(){for(var e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px",t=0;t<u.length;t++){u[t].style.paddingRight=e}l.style.paddingRight=e,l.classList.add("lock"),d=!1,setTimeout((function(){d=!0}),500)}()}e.classList.add("popup--active"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||h(e.target.closest(".popup"))}))}(document.getElementById(n)),e.preventDefault()}))},f=0;f<s.length;f++)p(f);var v=document.querySelectorAll(".close-popup");if(v.length>0)for(var m=function(e){var t=v[e];t.addEventListener("click",(function(e){h(t.closest(".popup")),e.preventDefault()}))},y=0;y<v.length;y++)m(y);function h(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];d&&(e.classList.remove("popup--active"),t&&b())}function b(){setTimeout((function(){for(var e=0;e<u.lenght;e++){u[e].style.paddingRight="0px"}l.style.paddingRight="0px",l.classList.remove("lock")}),500),d=!1,setTimeout((function(){d=!0}),500)}new Swiper(".choose-slider-container",{slidesPerView:1,spaceBetween:30,grabCursor:!0,slidesPerGroup:1,pagination:{el:".choose-pagination",type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span>-<span class="'+t+'"></span>'}},scrollbar:{el:".choose-scrollbar",draggable:!0},breakpoints:{1e3:{slidesPerView:3,spaceBetween:60,slidesPerGroup:3,centeredSlides:!1},672:{slidesPerView:2,spaceBetween:30,slidesPerGroup:2,centeredSlides:!1}}});var g=document.querySelectorAll(".type-service__link"),L=document.querySelectorAll(".type-top__content");g.forEach((function(e){e.addEventListener("click",(function(){var t=e,n=t.getAttribute("data-id"),r=document.querySelector(n);t.classList.contains("type-service__link--active")||(g.forEach((function(e){e.classList.remove("type-service__link--active")})),L.forEach((function(e){e.classList.remove("type-content-active")})),t.classList.add("type-service__link--active"),r.classList.add("type-content-active"))}))}));new Swiper(".sample-swiper-container",{loop:!0,slidesPerView:1,zoom:!0,observer:!0,observeParents:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var _=document.querySelectorAll(".sample-tabs__tab"),S=document.querySelectorAll(".sample-content");_.forEach((function(e){e.addEventListener("click",(function(){var t=e,n=t.getAttribute("data-id"),r=document.querySelector(n);_.forEach((function(e){e.classList.remove("sample-tabs__tab--active")})),S.forEach((function(e){e.classList.remove("sample-content-active")})),t.classList.add("sample-tabs__tab--active"),r.classList.add("sample-content-active")}))}));var k=document.querySelectorAll(".cost-tabs__tab"),A=document.querySelectorAll(".cost-content");k.forEach((function(e){e.addEventListener("click",(function(){var t=e,n=t.getAttribute("data-id"),r=document.querySelector(n);k.forEach((function(e){e.classList.remove("cost-tabs__tab--active")})),A.forEach((function(e){e.classList.remove("cost-content-active")})),r.classList.add("cost-content-active"),t.classList.add("cost-tabs__tab--active")}))}));var q,E=document.querySelectorAll(".advantages-content__accordion"),w=n(E);try{for(w.s();!(q=w.n()).done;)item=q.value,item.addEventListener("click",(function(){if(this.classList.contains("advantages-content__accordion--active"))this.classList.remove("advantages-content__accordion--active");else{var e,t=n(E);try{for(t.s();!(e=t.n()).done;)el=e.value,el.classList.remove("advantages-content__accordion--active")}catch(e){t.e(e)}finally{t.f()}this.classList.add("advantages-content__accordion--active")}}))}catch(e){w.e(e)}finally{w.f()}var x,j=document.querySelectorAll(".quetions-accordion"),P=n(j);try{for(P.s();!(x=P.n()).done;)item=x.value,item.addEventListener("click",(function(){if(this.classList.contains("quetions-accordion--active"))this.classList.remove("quetions-accordion--active");else{var e,t=n(j);try{for(t.s();!(e=t.n()).done;)el=e.value,el.classList.remove("quetions-accordion--active")}catch(e){t.e(e)}finally{t.f()}this.classList.add("quetions-accordion--active")}}))}catch(e){P.e(e)}finally{P.f()}function O(e){this.type=e}O.prototype.init=function(){var e=this,t=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(var n=0;n<this.nodes.length;n++){var r=this.nodes[n],a=r.dataset.da.trim().split(","),i={};i.element=r,i.parent=r.parentNode,i.destination=document.querySelector(a[0].trim()),i.breakpoint=a[1]?a[1].trim():"767",i.place=a[2]?a[2].trim():"last",i.index=this.indexInParent(i.parent,i.element),this.оbjects.push(i)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(var o=function(n){var r=e.mediaQueries[n],a=String.prototype.split.call(r,","),i=window.matchMedia(a[0]),o=a[1],c=Array.prototype.filter.call(e.оbjects,(function(e){return e.breakpoint===o}));i.addListener((function(){t.mediaHandler(i,c)})),e.mediaHandler(i,c)},c=0;c<this.mediaQueries.length;c++)o(c)},O.prototype.mediaHandler=function(e,t){if(e.matches)for(var n=0;n<t.length;n++){var r=t[n];r.index=this.indexInParent(r.parent,r.element),this.moveTo(r.place,r.element,r.destination)}else for(var a=0;a<t.length;a++){var i=t[a];i.element.classList.contains(this.daClassname)&&this.moveBack(i.parent,i.element,i.index)}},O.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},O.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},O.prototype.indexInParent=function(e,t){var n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},O.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new O("max").init()}]);