'use strict';

//btns smart
$('.btns').click(function() {
	$('#content .container-fluid').hide();
    let target = '#' + $(this).data('target');
    $(target).show();
});

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

//slick carousel enjoy
$(document).ready(function() {
  $('.prateleira ul').slick({
    dots: true,
    infinite: false
  });
});

//accordion button arrow
function accFunc(x) {
  x.classList.toggle("arrow-down");
};