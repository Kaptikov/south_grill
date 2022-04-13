import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

//Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Scrollbar],
  // Optional parameters
  //loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ("каталог товаров") + '</span>';
    },

    //type: 'fraction',
  },
  
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  //initialSlide: -1,
});


const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const input = document?.querySelector('[data-input]');
const menuItems = menu?.querySelectorAll('a');
const body = document.body;
// const header = document?.querySelector('.header__menu');
// const headerHeight = header.offsetHeight;
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

input?.addEventListener('click', () => {
  input?.classList.toggle('header__form_input--visible');
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
