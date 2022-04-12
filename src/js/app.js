import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const menuItems = menu?.querySelectorAll('a')
const body = document.body;
// const header = document?.querySelector('.header__menu');
// const headerHeight = header.offsetHeight;
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

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

// import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';





// const swiper = new Swiper(".Swiper", {
//         scrollbar: {
//           el: ".swiper-scrollbar",
//           hide: true,
//         },
//       });
