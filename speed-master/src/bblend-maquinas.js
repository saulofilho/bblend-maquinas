'use strict';

//swiper carousel desktop
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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