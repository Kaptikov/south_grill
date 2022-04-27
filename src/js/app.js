import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

//Swiper.use([Navigation, Pagination]);

const swiper1 = new Swiper('.main__swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Scrollbar],
  // Optional parameters
  //loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ("Каталог товаров") + '</span>';
    },

    //type: 'fraction',
  },
  
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  watchOverflow: true,

  // Navigation arrows
  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  
  //initialSlide: -1,
});

const swiper2 = new Swiper('.popular-products__swiper', {
  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  watchOverflow: true,

  slidesPerView: 3,

  slidesPerGroup: 1,

  spaceBetween: 42,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 42
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    624: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1130: {
      slidesPerView: 3,
      spaceBetween: 42
    }
  },
  loop: true,
})

const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const input = document?.querySelector('[data-input]');
const search = document?.querySelector('[data-search]');
const menuItems = menu?.querySelectorAll('a');
const body = document.body;
// const header = document?.querySelector('.header__menu');
// const headerHeight = header.offsetHeight;
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

search?.addEventListener('click', () => {
  search?.classList.toggle('header__form-btn--active');
  input?.classList.toggle('header__form-input--visible');
});

burger?.addEventListener('click', () => {
  body.classList.toggle('stop--scroll');
  burger?.classList.toggle('burger--active');
  menu?.classList.toggle('header__menu--visible');
});

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop--scroll');
    burger?.classList.remove('burger--active');
    menu?.classList.remove('header__menu--visible');
  })
});
