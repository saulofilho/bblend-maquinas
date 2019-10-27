'use strict';

//swiper carousel desktop
let swiper = new Swiper('.swi-con-vendas', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//swiper carousel smart mob
let contentMenu = new Swiper('.content-menu-mob', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
let contentSmart = new Swiper('.content-smart-mob', {
  spaceBetween: 10,
  thumbs: {
    swiper: contentMenu
  }
});

//img btn seta mob
$(document).ready(function() {
  $(".btn-seta-gin-mob").click(function() {
    $(".img-seta-gin-mob").toggle();
  });
  $(".btn-seta-orange-mob").click(function() {
    $(".img-seta-orange-mob").toggle();
  });
  $(".btn-seta-skol-mob").click(function() {
    $(".img-seta-skol-mob").toggle();
  });
});

//accordion button arrow
function accFunc(x) {
  x.classList.toggle("arrow-down");
}