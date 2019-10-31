'use strict';

//btn sandwich header
function btnSandwich(x) {
  x.classList.toggle("change");
};

//btns smart container
$('.btns').click(function() {
	$('#content .container-fluid').hide();
    let target = '#' + $(this).data('target');
    $(target).show();
});

//btns produtos container
$('.btns-prod').click(function() {
	$('#content-produtos .swiper-container').hide();
    let target = '#' + $(this).data('target');
    $(target).show();
});

//swiper carousel produtos
let swiperSuco = new Swiper('.suco-fruta-desk', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});

let swiperSucoFun = new Swiper('.suco-funcional-desk', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});

$('.helperComplement').remove();

//slick carousel enjoy
$(document).ready(function() {
  $('.shelf-bblend-maquinas ul').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
  });  
});

//accordion button arrow
function accFunc(x) {
  x.classList.toggle("arrow-down");
};