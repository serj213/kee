// burger

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const lock = document.querySelector('body');

if (burger) {
   burger.addEventListener('click', function (e) {

      menu.classList.add('main-menu--active');
      lock.classList.add('lock');

   })
}

if (close) {
   close.addEventListener('click', function (e) {
      menu.classList.remove('main-menu--active');
      lock.classList.remove('lock');
   })
}
// =============POPUPS============================================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeoute = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);

         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();

      });
   }
}


function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('popup.popup--active');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
   }
   curentPopup.classList.add('popup--active');
   curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
         popupClose(e.target.closest('.popup'));
      }
   })
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('popup--active');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}



function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeoute);
}


function bodyUnLock() {

   setTimeout(function () {
      for (let index = 0; index < lockPadding.lenght; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeoute);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeoute)

}



// =========choose swiper-slider=============================


const swiper = new Swiper('.choose-slider-container', {

   slidesPerView: 1,
   spaceBetween: 30,
   grabCursor: true,
   slidesPerGroup: 1,

   pagination: {
      el: '.choose-pagination',
      type: 'fraction',
      renderFraction: function (CurrentClass, totalClass) {
         return '<span class="' + CurrentClass + '"></span>' + '-' + '<span class="' + totalClass + '"></span>';
      }
   },

   scrollbar: {
      el: '.choose-scrollbar',
      // Возможность перетаскивать скролл
      draggable: true,
   },

   breakpoints: {
      // when window width is >= 320px
      1000: {
         slidesPerView: 3,
         spaceBetween: 60,
         slidesPerGroup: 3,
         centeredSlides: false,
      },

      672: {
         slidesPerView: 2,
         spaceBetween: 30,
         slidesPerGroup: 2,
         centeredSlides: false,
      },

   }

});


// ====tabs=========================


const navTab = document.querySelectorAll('.type-service__link');
const contentTab = document.querySelectorAll('.type-top__content');

navTab.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-id");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('type-service__link--active')) {
         navTab.forEach(function (item) {
            item.classList.remove('type-service__link--active');
         });

         contentTab.forEach(function (item) {
            item.classList.remove('type-content-active');
         });




         currentBtn.classList.add('type-service__link--active');
         currentTab.classList.add('type-content-active');
      }



   });
});


// ================swiper-sample===============================


const swiperTwo = new Swiper('.sample-swiper-container', {
   loop: true,
   slidesPerView: 1,

   zoom: true,
   observer: true,
   observeParents: true,
   grabCursor: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//===============tabs-global====================================================


const navTabItem = document.querySelectorAll('.sample-tabs__tab');
const contentTabItem = document.querySelectorAll('.sample-content');


navTabItem.forEach(function (item) {
   item.addEventListener('click', function () {
      let navclick = item;
      let currentId = navclick.getAttribute('data-id');
      let currentTabCont = document.querySelector(currentId);

      navTabItem.forEach(function (item) {
         item.classList.remove('sample-tabs__tab--active');
      });

      contentTabItem.forEach(function (item) {
         item.classList.remove('sample-content-active');
      });


      navclick.classList.add('sample-tabs__tab--active');
      currentTabCont.classList.add('sample-content-active');

   });
});

// =====tab cost====================


const costNavTab = document.querySelectorAll('.cost-tabs__tab');
const costContentTab = document.querySelectorAll('.cost-content');


costNavTab.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentTabCost = item;
      let currentAtrib = currentTabCost.getAttribute('data-id');
      let currentCostCont = document.querySelector(currentAtrib);



      costNavTab.forEach(function (item) {
         item.classList.remove('cost-tabs__tab--active');
      });

      costContentTab.forEach(function (item) {
         item.classList.remove('cost-content-active');
      });




      currentCostCont.classList.add('cost-content-active');
      currentTabCost.classList.add('cost-tabs__tab--active');

   });


})

//====================== to do list =========================================


const acc = document.querySelectorAll('.advantages-content__accordion');

for (item of acc) {
   item.addEventListener('click', function () {

      if (this.classList.contains('advantages-content__accordion--active')) {
         this.classList.remove('advantages-content__accordion--active');
      } else {
         for (el of acc) {
            el.classList.remove('advantages-content__accordion--active');
         }
         this.classList.add('advantages-content__accordion--active');
      }
   })
}



//====================== to do list "quentions" =========================================




const acord = document.querySelectorAll('.quetions-accordion');

for (item of acord) {
   item.addEventListener('click', function () {

      if (this.classList.contains('quetions-accordion--active')) {
         this.classList.remove('quetions-accordion--active');
      } else {
         for (el of acord) {
            el.classList.remove('quetions-accordion--active');
         }
         this.classList.add('quetions-accordion--active');
      }
   })
}











// =============================================================================
"use strict";

function DynamicAdapt(type) {
   this.type = type;
}

DynamicAdapt.prototype.init = function () {
   const _this = this;
   // массив объектов
   this.оbjects = [];
   this.daClassname = "_dynamic_adapt_";
   // массив DOM-элементов
   this.nodes = document.querySelectorAll("[data-da]");

   // наполнение оbjects объктами
   for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
   }

   this.arraySort(this.оbjects);

   // массив уникальных медиа-запросов
   this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
   }, this);
   this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
   });

   // навешивание слушателя на медиа-запрос
   // и вызов обработчика при первом запуске
   for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
         return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
         _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
   }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
   if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
   } else {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         if (оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(оbject.parent, оbject.element, оbject.index);
         }
      }
   }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
   element.classList.add(this.daClassname);
   if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
   }
   if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
   }
   destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
   element.classList.remove(this.daClassname);
   if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
   } else {
      parent.insertAdjacentElement('beforeend', element);
   }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
   const array = Array.prototype.slice.call(parent.children);
   return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
   if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return -1;
            }

            if (a.place === "last" || b.place === "first") {
               return 1;
            }

            return a.place - b.place;
         }

         return a.breakpoint - b.breakpoint;
      });
   } else {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return 1;
            }

            if (a.place === "last" || b.place === "first") {
               return -1;
            }

            return b.place - a.place;
         }

         return b.breakpoint - a.breakpoint;
      });
      return;
   }
};

const da = new DynamicAdapt("max");
da.init();