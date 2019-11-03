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

//slick carousel enjoy
$('.helperComplement').remove();

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







//swiper carousel produtos
let swiperSucoFru = new Swiper('.suco-fruta-cont', {
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
let swiperSucoFun = new Swiper('.suco-funcional-cont', {
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
let swiperNec = new Swiper('.nectares-cont', {
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
let swiperChaHot = new Swiper('.chas-quentes-cont', {
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
let swiperCafes = new Swiper('.cafes-cont', {
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
let swiperChoco = new Swiper('.chocolates-cont', {
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
let swiperRefri = new Swiper('.refri-cont', {
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
let swiperFrapes = new Swiper('.frapes-cont', {
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
let swiperChasGel = new Swiper('.chas-gelados-cont', {
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
let swiperDrinks = new Swiper('.drinks-cont', {
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
let swiperEnergy = new Swiper('.energy-cont', {
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